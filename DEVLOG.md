# RoadmapAI 개발일지

## 2026-06-10 — Supabase 인증 & 카카오 로그인 & 게시판 구현

### 오늘 한 것

#### 1. 사이트 콘텐츠 전면 교체
- 기존 AI Canvas 사이트 → RoadmapAI (AI 창업 로드맵 코칭) 사이트로 전환
- 동영상 관련 페이지 전부 제거
- 서비스 4개 탭 구성: AI 창업 로드맵 / 지원사업 매칭 / 사업계획서 완성 / AI 초안 생성
- 회사소개 2탭(회사 소개 / 팀 소개), 커뮤니티(공지사항 / 자유게시판 / FAQ)

#### 2. Supabase 연동
- `@supabase/supabase-js` 설치 및 클라이언트 초기화 (`src/lib/supabase.js`)
- 테이블 생성 (SQL Editor에서 직접 실행):
  - `profiles`: 사용자 프로필 (id, nickname, avatar_url, provider)
  - `posts`: 게시글 (id, user_id, title, content, created_at)
- Row Level Security(RLS) 정책 설정
- `handle_new_user` 트리거: 회원가입 시 profiles 자동 생성

#### 3. 이메일/비밀번호 로그인 & 회원가입
- `AuthContext.jsx`: 전역 인증 상태 관리 (user, profile, signUp, signIn, signOut)
- `Login.jsx`: 이메일 로그인 폼
- `Signup.jsx`: 닉네임 + 이메일 + 비밀번호 가입, 이메일 인증 안내 화면
- Header에 로그인 상태에 따른 UserMenu (아바타 드롭다운) / 로그인·회원가입 버튼

#### 4. 카카오 로그인 — 삽질 기록

**문제 1**: Supabase OAuth 방식 → `account_email` 동의항목 강제 요청  
→ 개인 앱은 이메일 동의항목 활성화 불가 (비즈니스 심사 필요)  
→ **해결**: Supabase OAuth 포기, Kakao JavaScript SDK 직접 사용

**문제 2**: `Kakao.Auth.login is not a function`  
→ SDK v2.7.4에서 `login` 제거됨  
→ **해결**: `Kakao.Auth.authorize` (리다이렉트 방식)로 전환

**문제 3**: 토큰 교환 시 `KOE010: Bad client credentials`  
→ REST API 키로 교환 시도했으나 JS SDK는 JavaScript 키로 인증 시작  
→ **해결**: 토큰 교환 `client_id`를 JavaScript 키로 변경

**문제 4**: `Unacceptable audience in id_token`  
→ Supabase에 REST API 키로 등록했는데 id_token `aud`는 JavaScript 키  
→ **해결**: Supabase Kakao 프로바이더의 Client ID를 JavaScript 키로 교체

**최종 플로우**:
```
버튼 클릭
  → Kakao.Auth.authorize({ scope: 'openid profile_nickname profile_image' })
  → 카카오 로그인 페이지 리다이렉트
  → 로그인 완료 → ?code=xxx 로 앱 복귀
  → fetch('/oauth/token') 코드 교환 → id_token 획득
  → supabase.auth.signInWithIdToken({ provider: 'kakao', token: id_token })
  → 로그인 완료
```

#### 5. 자유게시판 구현
- `Board.jsx`: 글 목록 (번호 / 제목 / 작성자 / 날짜), 로그인 시 글쓰기 버튼
- `BoardWrite.jsx`: 제목 + 내용 폼, 비로그인 시 로그인 페이지로 리다이렉트
- `BoardDetail.jsx`: 글 상세, 본인 글만 삭제 버튼 노출

#### 6. GitHub Actions 배포 파이프라인
- Supabase / Kakao 환경변수를 GitHub Secrets로 관리
- `deploy.yml`에 `env:` 블록 추가해 빌드 시 주입
- `https://chikery.github.io/rest04/` 에 자동 배포

### 현재 환경변수 목록 (GitHub Secrets 등록 필요)

| Secret 이름 | 설명 |
|---|---|
| `VITE_SUPABASE_URL` | Supabase 프로젝트 URL |
| `VITE_SUPABASE_ANON_KEY` | Supabase anon 키 |
| `VITE_KAKAO_REST_API_KEY` | 카카오 REST API 키 |
| `VITE_KAKAO_JS_KEY` | 카카오 JavaScript 키 (Supabase Client ID와 동일) |

### 카카오 앱 설정 요약

| 항목 | 값 |
|---|---|
| 카카오 로그인 활성화 | ON |
| OpenID Connect | ON |
| 동의항목 | 프로필 정보(닉네임/사진) 필수 동의 |
| Redirect URI | `http://localhost:5173/rest04/`, `https://chikery.github.io/rest04/` |
| Supabase Client ID | JavaScript 키 (REST API 키 아님!) |

### 다음에 할 것

- [ ] 이메일 인증 후 자동 로그인 처리 개선
- [ ] 게시글 수정 기능
- [ ] 댓글 기능
- [ ] FAQ / 공지사항 실제 데이터 연동
- [ ] 카카오 로그인 사용자 닉네임 자동 설정 (profile_nickname → profiles.nickname)

---

## 2026-06-10 (추가) — 배포 환경변수 이슈 수정 & 메뉴 개편

### 수정 사항

#### 1. GitHub Pages 흰 화면 이슈 해결
- **원인**: GitHub Actions 빌드 시 `VITE_SUPABASE_URL` 등 환경변수가 주입되지 않아 Supabase 클라이언트 초기화 crash → 흰 화면
- **해결**: `src/lib/supabase.js`에 환경변수 누락 시 fallback 처리 추가, 앱 crash 방지
- GitHub Secrets 4개 정상 등록 확인 후 재배포로 최종 해결

#### 2. 상단 네비게이션 메뉴 이름 변경
- `커뮤니티` → `게시판` 으로 변경 (`src/data/site.js`)
- 드롭다운 3개 항목 유지: 공지사항(`/community/notices`) / 자유게시판(`/board`) / 자주 묻는 질문(`/community/faq`)
