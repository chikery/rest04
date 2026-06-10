// ============================================================
// 사이트 전체 데이터 설정
// 회사 정보, 네비게이션, 콘텐츠 카테고리, 콘텐츠 목록을 여기서 관리합니다.
// ============================================================

export const company = {
  name: 'RoadmapAI',
  nameKo: '로드맵AI',
  tagline: '아이디어에서 사업계획서까지, AI가 함께',
  description: 'RoadmapAI는 예비창업자와 초기 창업자가 검증된 7단계 창업 로드맵으로 사업계획서를 완성할 수 있도록 돕는 AI 코칭 스타트업입니다.',
  intro: [
    'RoadmapAI는 린스타트업 방법론과 GPT-4o 기반 AI 기술을 결합하여, 누구나 전문 창업 코치 없이도 사업계획서를 완성할 수 있는 환경을 만들고 있습니다.',
    '문제 발견부터 피치덱 완성까지 7단계 로드맵을 AI가 단계별로 안내하며, 정부 지원사업 자동 매칭과 AI 초안 생성까지 창업의 모든 과정을 함께합니다.',
  ],
  email: 'contact@roadmapai.kr',
  tel: '02-0000-0000',
  address: '서울특별시 강남구 테헤란로 000, RoadmapAI',
  copyright: `© ${new Date().getFullYear()} RoadmapAI. All rights reserved.`,
  footerLinks: [
    { label: '개인정보처리방침', to: '/privacy', strong: true },
    { label: '이용약관', to: '/terms' },
    { label: '이메일 무단수집 거부', to: '/legal' },
  ],
  socialLinks: [
    { label: 'YouTube', url: 'https://youtube.com/@roadmapai', icon: 'youtube' },
    { label: 'Instagram', url: 'https://instagram.com/roadmapai', icon: 'instagram' },
  ],
}

// ============================================================
// 메인 네비게이션
// ============================================================
export const nav = [
  {
    label: '서비스 콘텐츠',
    to: '/videos/coaching',
    children: [
      { label: 'AI 창업 코칭', to: '/videos/coaching' },
      { label: '7단계 로드맵', to: '/videos/roadmap' },
      { label: '지원사업 매칭', to: '/videos/programs' },
      { label: '창업 트렌드', to: '/videos/trends' },
    ],
  },
  {
    label: '회사 소개',
    to: '/about/intro',
    children: [
      { label: '회사 소개', to: '/about/intro' },
      { label: '서비스 소개', to: '/about/philosophy' },
      { label: '팀 소개', to: '/about/instructors' },
    ],
  },
  {
    label: '커뮤니티',
    to: '/community/notices',
    children: [
      { label: '공지사항', to: '/community/notices' },
      { label: '자주 묻는 질문', to: '/community/faq' },
    ],
  },
]

// ============================================================
// 콘텐츠 카테고리
// ============================================================
export const videoCategories = [
  {
    key: 'coaching',
    label: 'AI 창업 코칭',
    labelEn: 'AI Coaching',
    to: '/videos/coaching',
    desc: 'GPT-4o 기반 AI 코치와 함께하는 창업 코칭 콘텐츠를 제공합니다.',
    color: 'royal',
  },
  {
    key: 'roadmap',
    label: '7단계 로드맵',
    labelEn: '7-Step Roadmap',
    to: '/videos/roadmap',
    desc: '문제 발견부터 피치덱 완성까지 7단계 창업 로드맵을 단계별로 안내합니다.',
    color: 'navy',
  },
  {
    key: 'programs',
    label: '지원사업 매칭',
    labelEn: 'Grant Programs',
    to: '/videos/programs',
    desc: 'RAG 기반 실시간 지원사업 자동 매칭 서비스 활용법을 알아봅니다.',
    color: 'midnight',
  },
  {
    key: 'trends',
    label: '창업 트렌드',
    labelEn: 'Startup Trends',
    to: '/videos/trends',
    desc: '최신 창업 트렌드와 성공 사례, AI 창업 방법론을 분석합니다.',
    color: 'gold',
  },
]

// ============================================================
// 콘텐츠 데이터
// videoId: 실제 유튜브 영상 ID로 교체하세요.
// ============================================================
export const videoData = {
  'coaching': [
    {
      videoId: 'REPLACE_VIDEO_ID_01',
      title: 'RoadmapAI 서비스 소개 — AI 창업 코칭이란?',
      desc: '7단계 창업 로드맵을 AI가 안내하는 RoadmapAI 서비스를 소개합니다.',
      duration: '10:30',
      date: '2026-06-02',
    },
    {
      videoId: 'REPLACE_VIDEO_ID_02',
      title: 'AI 코치와 함께하는 창업 준비 — 시작하기',
      desc: '창업 경험이 없어도 AI 코치가 처음부터 끝까지 안내합니다.',
      duration: '15:20',
      date: '2026-06-05',
    },
    {
      videoId: 'REPLACE_VIDEO_ID_03',
      title: 'TPCS 프레임워크로 문제 정의하기',
      desc: '목표 고객·문제·원인·솔루션을 체계적으로 정의하는 TPCS 프레임워크를 실습합니다.',
      duration: '22:10',
      date: '2026-06-09',
    },
    {
      videoId: 'REPLACE_VIDEO_ID_04',
      title: '고객 가설 수립과 인터뷰 질문지 자동 생성',
      desc: 'AI가 9개 고객 가설을 분석하고 심층 인터뷰 질문지를 즉시 생성합니다.',
      duration: '18:45',
      date: '2026-06-12',
    },
    {
      videoId: 'REPLACE_VIDEO_ID_05',
      title: 'MVP 테스트 설계 — 가설 검증 전략',
      desc: '핵심 가설을 최소 비용으로 검증하는 MVP 설계 방법을 알아봅니다.',
      duration: '20:00',
      date: '2026-06-16',
    },
    {
      videoId: 'REPLACE_VIDEO_ID_06',
      title: '비즈니스 모델 캔버스 AI 자동 완성',
      desc: 'AI 피드백과 함께 BMC 9개 블록을 완성하는 실습 과정입니다.',
      duration: '25:30',
      date: '2026-06-19',
    },
  ],
  'roadmap': [
    {
      videoId: 'REPLACE_VIDEO_ID_07',
      title: 'STEP 1 — 문제 발견과 솔루션 정의',
      desc: '창업의 첫 단계, 해결할 문제와 솔루션을 명확하게 정의하는 방법을 안내합니다.',
      duration: '17:00',
      date: '2026-06-02',
    },
    {
      videoId: 'REPLACE_VIDEO_ID_08',
      title: 'STEP 2 — 고객과 시장 리서치',
      desc: '잠재고객 프로파일 작성과 시장 조사 방향 설계 방법을 실습합니다.',
      duration: '19:20',
      date: '2026-06-05',
    },
    {
      videoId: 'REPLACE_VIDEO_ID_09',
      title: 'STEP 3 — 고객 인터뷰 설계',
      desc: '9개 가설 수립과 AI 자동 생성 인터뷰 질문지 활용법을 알아봅니다.',
      duration: '21:15',
      date: '2026-06-09',
    },
    {
      videoId: 'REPLACE_VIDEO_ID_10',
      title: 'STEP 4 — MVP 테스트 설계',
      desc: '핵심 가설 검증을 위한 MVP 도구와 테스트 계획 수립 방법입니다.',
      duration: '18:40',
      date: '2026-06-12',
    },
    {
      videoId: 'REPLACE_VIDEO_ID_11',
      title: 'STEP 5 — 시장 및 경쟁사 분석',
      desc: 'TAM·SAM·SOM 산정과 SWOT 분석으로 시장 포지셔닝을 완성합니다.',
      duration: '23:00',
      date: '2026-06-16',
    },
    {
      videoId: 'REPLACE_VIDEO_ID_12',
      title: 'STEP 6 & 7 — 비즈니스 모델부터 피치덱 완성까지',
      desc: 'BMC 9블록 완성 후 10섹션 피치덱과 예상 Q&A 8문항을 자동 생성합니다.',
      duration: '30:15',
      date: '2026-06-19',
    },
  ],
  'programs': [
    {
      videoId: 'REPLACE_VIDEO_ID_13',
      title: '창업지원사업 자동 매칭 서비스 소개',
      desc: 'RAG 엔진 기반 실시간 지원사업 추천 기능을 소개합니다.',
      duration: '12:30',
      date: '2026-06-02',
    },
    {
      videoId: 'REPLACE_VIDEO_ID_14',
      title: '예비창업패키지 — 신청 전략과 서류 준비',
      desc: '최대 1억원 지원 예비창업패키지의 신청 요건과 준비 방법을 안내합니다.',
      duration: '20:00',
      date: '2026-06-05',
    },
    {
      videoId: 'REPLACE_VIDEO_ID_15',
      title: '초기창업패키지 — 3년 이내 창업자를 위한 지원',
      desc: '창업 후 3년 이내 기업을 위한 초기창업패키지 활용 가이드입니다.',
      duration: '18:15',
      date: '2026-06-09',
    },
    {
      videoId: 'REPLACE_VIDEO_ID_16',
      title: '문화예술·콘텐츠 창업 지원사업 총정리',
      desc: '문화예술, 콘텐츠, 디지털 크리에이터를 위한 특화 지원사업을 정리합니다.',
      duration: '22:40',
      date: '2026-06-12',
    },
    {
      videoId: 'REPLACE_VIDEO_ID_17',
      title: '소셜벤처·사회적기업 지원 프로그램 가이드',
      desc: '사회적 가치를 창출하는 소셜벤처를 위한 지원사업 신청 방법입니다.',
      duration: '16:50',
      date: '2026-06-16',
    },
    {
      videoId: 'REPLACE_VIDEO_ID_18',
      title: 'AI로 지원사업 사업계획서 작성하기',
      desc: 'RoadmapAI의 AI 초안 생성 기능으로 지원사업 사업계획서를 빠르게 완성합니다.',
      duration: '25:20',
      date: '2026-06-19',
    },
  ],
  'trends': [
    {
      videoId: 'REPLACE_VIDEO_ID_19',
      title: '2026 AI 창업 트렌드 — 지금 뜨는 아이템',
      desc: '2026년 AI 기반 스타트업 트렌드와 투자자들이 주목하는 분야를 분석합니다.',
      duration: '28:00',
      date: '2026-06-02',
    },
    {
      videoId: 'REPLACE_VIDEO_ID_20',
      title: '린스타트업 vs 전통 창업 — 무엇이 다른가',
      desc: '린스타트업 방법론의 핵심과 전통 창업 방식과의 차이점을 비교합니다.',
      duration: '22:15',
      date: '2026-06-05',
    },
    {
      videoId: 'REPLACE_VIDEO_ID_21',
      title: '예비창업자가 가장 많이 하는 실수 5가지',
      desc: '창업 초기에 흔히 하는 실수와 AI 코칭으로 이를 예방하는 방법을 알아봅니다.',
      duration: '19:30',
      date: '2026-06-09',
    },
    {
      videoId: 'REPLACE_VIDEO_ID_22',
      title: '피치덱 잘 만드는 법 — 투자자가 원하는 것',
      desc: '투자자를 설득하는 10섹션 피치덱의 구성과 핵심 포인트를 분석합니다.',
      duration: '24:45',
      date: '2026-06-12',
    },
    {
      videoId: 'REPLACE_VIDEO_ID_23',
      title: 'GPT-4o로 사업계획서 작성하기 — 실전 가이드',
      desc: 'GPT-4o를 활용한 사업계획서 작성 노하우를 실전 예시와 함께 알아봅니다.',
      duration: '31:00',
      date: '2026-06-16',
    },
    {
      videoId: 'REPLACE_VIDEO_ID_24',
      title: '창업 생태계 리포트 — 2026년 상반기 결산',
      desc: '2026년 상반기 국내 창업 생태계 현황과 유망 분야를 정리합니다.',
      duration: '26:20',
      date: '2026-06-19',
    },
  ],
}

// 홈 화면에 노출할 추천 콘텐츠 (각 카테고리에서 선별)
export const featuredVideos = [
  videoData['coaching'][0],
  videoData['roadmap'][0],
  videoData['programs'][0],
  videoData['trends'][0],
]

// 공지사항 데이터
export const notices = [
  { id: 1, title: 'RoadmapAI 서비스 정식 오픈 안내', date: '2026.06.02', category: '공지' },
  { id: 2, title: '예비창업패키지 2026년 2차 모집 지원사업 매칭 업데이트', date: '2026.06.05', category: '서비스' },
  { id: 3, title: '7단계 로드맵 콘텐츠 전면 업데이트 완료', date: '2026.06.09', category: '업데이트' },
  { id: 4, title: '서비스 이용약관 개정 안내', date: '2026.06.01', category: '공지' },
]
