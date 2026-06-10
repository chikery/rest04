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

export const nav = [
  {
    label: '서비스',
    to: '/services/coaching',
    children: [
      { label: 'AI 창업 로드맵', to: '/services/coaching' },
      { label: '지원사업 매칭', to: '/services/programs' },
      { label: '사업계획서 완성', to: '/services/business' },
      { label: 'AI 초안 생성', to: '/services/draft' },
    ],
  },
  {
    label: '회사 소개',
    to: '/about/intro',
    children: [
      { label: '회사 소개', to: '/about/intro' },
      { label: '팀 소개', to: '/about/team' },
    ],
  },
  {
    label: '게시판',
    to: '/community/notices',
    children: [
      { label: '공지사항', to: '/community/notices' },
      { label: '자유게시판', to: '/board' },
      { label: '자주 묻는 질문', to: '/community/faq' },
    ],
  },
]

export const serviceCategories = [
  {
    key: 'coaching',
    label: 'AI 창업 로드맵',
    labelEn: 'AI Coaching',
    to: '/services/coaching',
    desc: '검증된 7단계 창업 로드맵을 AI 코치가 단계별로 안내합니다.',
    color: 'royal',
  },
  {
    key: 'programs',
    label: '지원사업 매칭',
    labelEn: 'Grant Programs',
    to: '/services/programs',
    desc: 'RAG 기반 실시간 지원사업 자동 매칭으로 최적 지원사업을 추천합니다.',
    color: 'navy',
  },
  {
    key: 'business',
    label: '사업계획서 완성',
    labelEn: 'Business Plan',
    to: '/services/business',
    desc: 'STEP 7 완료 시 전 단계 내용이 피치덱 초안으로 자동 통합됩니다.',
    color: 'midnight',
  },
  {
    key: 'draft',
    label: 'AI 초안 생성',
    labelEn: 'AI Draft',
    to: '/services/draft',
    desc: '아이템 키워드 하나로 핵심 창업 문서를 즉시 자동 생성합니다.',
    color: 'gold',
  },
]

export const notices = [
  { id: 1, title: 'RoadmapAI 서비스 정식 오픈 안내', date: '2026.06.02', category: '공지' },
  { id: 2, title: '예비창업패키지 2026년 2차 모집 지원사업 매칭 업데이트', date: '2026.06.05', category: '서비스' },
  { id: 3, title: '7단계 로드맵 콘텐츠 전면 업데이트 완료', date: '2026.06.09', category: '업데이트' },
  { id: 4, title: '서비스 이용약관 개정 안내', date: '2026.06.01', category: '공지' },
]
