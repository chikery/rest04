// ============================================================
// 사이트 전체 데이터 설정
// 회사 정보, 네비게이션, 영상 카테고리, 영상 목록을 여기서 관리합니다.
// ============================================================

export const company = {
  name: 'AI CANVAS',
  nameKo: 'AI 캔버스',
  tagline: 'AI 시대를 그리는 교육 플랫폼',
  description: 'AI CANVAS는 누구나 AI를 이해하고 활용할 수 있도록 돕는 온라인 동영상 교육 플랫폼입니다.',
  intro: [
    'AI CANVAS는 인공지능 기초부터 AI 리터러시까지, 누구나 쉽게 접근할 수 있는 양질의 교육 영상 콘텐츠를 제공합니다.',
    '급변하는 AI 시대에 뒤처지지 않도록, 실무 중심의 커리큘럼과 현장 전문가의 강의로 여러분의 AI 역량을 키워드립니다.',
  ],
  email: 'contact@aicanvas.kr',
  tel: '02-0000-0000',
  address: '서울특별시 강남구 테헤란로 000, AI캔버스빌딩',
  copyright: `© ${new Date().getFullYear()} AI CANVAS. All rights reserved.`,
  footerLinks: [
    { label: '개인정보처리방침', to: '/privacy', strong: true },
    { label: '이용약관', to: '/terms' },
    { label: '이메일 무단수집 거부', to: '/legal' },
  ],
  socialLinks: [
    { label: 'YouTube', url: 'https://youtube.com/@aicanvas', icon: 'youtube' },
    { label: 'Instagram', url: 'https://instagram.com/aicanvas', icon: 'instagram' },
  ],
}

// ============================================================
// 메인 네비게이션
// ============================================================
export const nav = [
  {
    label: 'AI 동영상',
    to: '/videos/ai-basics',
    children: [
      { label: 'AI 기초', to: '/videos/ai-basics' },
      { label: 'AI 리터러시', to: '/videos/ai-literacy' },
      { label: 'AI 도구 활용', to: '/videos/ai-tools' },
      { label: 'AI 최신 트렌드', to: '/videos/ai-trends' },
    ],
  },
  {
    label: '교육 소개',
    to: '/about/intro',
    children: [
      { label: '기관 소개', to: '/about/intro' },
      { label: '교육 철학', to: '/about/philosophy' },
      { label: '강사 소개', to: '/about/instructors' },
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
// 동영상 카테고리
// ============================================================
export const videoCategories = [
  {
    key: 'ai-basics',
    label: 'AI 기초',
    labelEn: 'AI Basics',
    to: '/videos/ai-basics',
    desc: 'AI의 개념과 원리를 쉽고 명확하게 설명합니다.',
    color: 'royal',
  },
  {
    key: 'ai-literacy',
    label: 'AI 리터러시',
    labelEn: 'AI Literacy',
    to: '/videos/ai-literacy',
    desc: 'AI 시대를 살아가는 데 필요한 디지털 리터러시 역량을 키웁니다.',
    color: 'navy',
  },
  {
    key: 'ai-tools',
    label: 'AI 도구 활용',
    labelEn: 'AI Tools',
    to: '/videos/ai-tools',
    desc: '챗GPT, 미드저니 등 실무에서 바로 쓰는 AI 도구를 배웁니다.',
    color: 'midnight',
  },
  {
    key: 'ai-trends',
    label: 'AI 최신 트렌드',
    labelEn: 'AI Trends',
    to: '/videos/ai-trends',
    desc: '빠르게 변화하는 AI 최신 동향과 산업 변화를 분석합니다.',
    color: 'gold',
  },
]

// ============================================================
// 동영상 데이터
// videoId: 실제 유튜브 영상 ID로 교체하세요.
// 비공개 또는 링크 공개 영상 ID를 입력합니다.
// ============================================================
export const videoData = {
  'ai-basics': [
    {
      videoId: 'nWABdc4boN8',
      title: '인공지능이란 무엇인가? — AI 기초 1강',
      desc: 'AI의 정의와 역사, 머신러닝과 딥러닝의 차이를 알아봅니다.',
      duration: '18:45',
      date: '2025-03-10',
    },
    {
      videoId: 'cYI85HFgFeg',
      title: '머신러닝의 원리 이해하기 — AI 기초 2강',
      desc: '데이터로 학습하는 머신러닝의 핵심 원리를 시각적으로 설명합니다.',
      duration: '22:30',
      date: '2025-03-17',
    },
    {
      videoId: '_blFagKJhks',
      title: '딥러닝과 신경망 입문 — AI 기초 3강',
      desc: '인간의 뇌를 모방한 신경망 구조와 딥러닝의 작동 원리를 배웁니다.',
      duration: '25:15',
      date: '2025-03-24',
    },
    {
      videoId: '2e9wnwuAVv0',
      title: '자연어처리(NLP) 기초 — AI 기초 4강',
      desc: 'ChatGPT 같은 AI가 언어를 이해하는 방식, NLP의 기초를 다룹니다.',
      duration: '20:00',
      date: '2025-03-31',
    },
    {
      videoId: '9f2_8e3PtLI',
      title: '컴퓨터 비전 기초 — AI 기초 5강',
      desc: 'AI가 이미지와 영상을 인식하는 방법, 컴퓨터 비전의 기초를 배웁니다.',
      duration: '19:40',
      date: '2025-04-07',
    },
    {
      videoId: 'dwWkldY32c8',
      title: 'AI 윤리와 사회적 영향 — AI 기초 6강',
      desc: 'AI 기술의 윤리적 문제와 사회적 책임에 대해 생각해봅니다.',
      duration: '17:20',
      date: '2025-04-14',
    },
    {
      videoId: 'cvctS4xWSaU',
      title: '강화학습 이해하기 — AI 기초 7강',
      desc: '게임 AI부터 자율주행까지, 강화학습의 원리와 응용을 알아봅니다.',
      duration: '23:55',
      date: '2025-04-21',
    },
    {
      videoId: '3dEzMRL5VMk',
      title: '생성형 AI의 이해 — AI 기초 8강',
      desc: 'GPT, 이미지 생성 AI 등 생성형 AI의 원리와 활용 방향을 배웁니다.',
      duration: '21:10',
      date: '2025-04-28',
    },
  ],
  'ai-literacy': [
    {
      videoId: 'eG3T64hkWyU',
      title: 'AI 리터러시란 무엇인가 — 리터러시 1강',
      desc: 'AI 시대에 필요한 리터러시의 개념과 핵심 역량을 소개합니다.',
      duration: '16:30',
      date: '2025-05-05',
    },
    {
      videoId: 'vPe67D4x4IE',
      title: 'AI와 비판적 사고 — 리터러시 2강',
      desc: 'AI가 생성한 정보를 어떻게 비판적으로 검토할지 배웁니다.',
      duration: '19:00',
      date: '2025-05-12',
    },
    {
      videoId: 'kFc5gUIVrtI',
      title: '데이터 리터러시 기초 — 리터러시 3강',
      desc: 'AI의 근간이 되는 데이터를 읽고 해석하는 능력을 기릅니다.',
      duration: '20:45',
      date: '2025-05-19',
    },
    {
      videoId: '1xvFW7MM1qY',
      title: 'AI 편향과 공정성 — 리터러시 4강',
      desc: 'AI 시스템에 내재된 편향 문제와 공정한 AI를 위한 노력을 알아봅니다.',
      duration: '18:20',
      date: '2025-05-26',
    },
    {
      videoId: 'OLwCy9adrNk',
      title: '프롬프트 엔지니어링 기초 — 리터러시 5강',
      desc: 'AI와 효과적으로 소통하는 방법, 프롬프트 작성법을 배웁니다.',
      duration: '22:15',
      date: '2025-06-02',
    },
    {
      videoId: 'XjB43kPF-_E',
      title: 'AI 시대의 직업 변화 — 리터러시 6강',
      desc: 'AI로 인해 변화하는 직업 세계, 어떤 역량이 필요한지 탐구합니다.',
      duration: '21:40',
      date: '2025-06-09',
    },
    {
      videoId: 'pmL9u5LgAEY',
      title: 'AI 활용 윤리 가이드 — 리터러시 7강',
      desc: '일상과 업무에서 AI를 윤리적으로 사용하는 실천 방법을 배웁니다.',
      duration: '17:50',
      date: '2025-06-16',
    },
    {
      videoId: 'VOCeRGyp-Fs',
      title: '미래 사회와 AI 리터러시 — 리터러시 8강',
      desc: '앞으로의 AI 사회를 살아가기 위한 종합적 리터러시 역량을 정리합니다.',
      duration: '24:00',
      date: '2025-06-23',
    },
  ],
  'ai-tools': [
    {
      videoId: 'EBqnrmnp_i8',
      title: 'ChatGPT 완전 정복 — 도구 활용 1강',
      desc: 'ChatGPT의 기본 사용법부터 고급 활용까지 총정리합니다.',
      duration: '30:00',
      date: '2025-07-07',
    },
    {
      videoId: 'NoTjuQ5nhnM',
      title: 'Claude AI 활용법 — 도구 활용 2강',
      desc: 'Anthropic의 Claude AI를 효과적으로 활용하는 방법을 배웁니다.',
      duration: '25:30',
      date: '2025-07-14',
    },
    {
      videoId: '97nNLczfo1M',
      title: '미드저니로 이미지 생성하기 — 도구 활용 3강',
      desc: 'AI 이미지 생성 도구 미드저니의 활용법을 실습과 함께 배웁니다.',
      duration: '28:20',
      date: '2025-07-21',
    },
    {
      videoId: 'PYt_kIZcVMQ',
      title: 'Notion AI 업무 자동화 — 도구 활용 4강',
      desc: 'Notion AI를 활용한 업무 효율화 방법을 실제 사례로 알아봅니다.',
      duration: '22:45',
      date: '2025-07-28',
    },
    {
      videoId: 'FQjvUYwxU1c',
      title: 'AI 코딩 도구 활용 — 도구 활용 5강',
      desc: 'GitHub Copilot, Cursor 등 AI 코딩 어시스턴트를 비교 분석합니다.',
      duration: '27:10',
      date: '2025-08-04',
    },
    {
      videoId: 'I905DmvFPlY',
      title: 'AI 영상 편집 도구 — 도구 활용 6강',
      desc: 'Runway, Pika 등 AI 영상 생성·편집 도구의 사용법을 배웁니다.',
      duration: '24:55',
      date: '2025-08-11',
    },
  ],
  'ai-trends': [
    {
      videoId: 'iUAkxvd93Dg',
      title: '2025 AI 트렌드 총정리',
      desc: '2025년 가장 주목받는 AI 기술과 트렌드를 한눈에 정리합니다.',
      duration: '32:00',
      date: '2025-01-06',
    },
    {
      videoId: 'dIshgACLhIo',
      title: '멀티모달 AI의 진화',
      desc: '텍스트·이미지·음성을 통합하는 멀티모달 AI의 최신 동향을 분석합니다.',
      duration: '26:15',
      date: '2025-02-03',
    },
    {
      videoId: '2LE82uZ6rf0',
      title: 'AI 에이전트 시대의 도래',
      desc: '스스로 판단하고 행동하는 AI 에이전트 기술의 현재와 미래를 봅니다.',
      duration: '29:40',
      date: '2025-03-03',
    },
    {
      videoId: 'XxPp_ngeHmQ',
      title: 'AI와 의료 혁신',
      desc: '의료 진단·신약 개발에서 AI가 만들어가는 혁신 사례를 분석합니다.',
      duration: '23:30',
      date: '2025-04-07',
    },
    {
      videoId: '1FaSjCkvCW4',
      title: 'AI와 교육의 미래',
      desc: 'AI가 바꿔놓을 교육 환경과 개인화 학습의 가능성을 탐구합니다.',
      duration: '21:20',
      date: '2025-05-05',
    },
    {
      videoId: 'i6TuyAxoE24',
      title: '소형 언어모델(sLLM)의 부상',
      desc: '대형 모델에 이어 주목받는 소형 언어모델의 활용 가능성을 분석합니다.',
      duration: '25:00',
      date: '2025-06-02',
    },
  ],
}

// 홈 화면에 노출할 추천 영상 (각 카테고리에서 선별)
export const featuredVideos = [
  videoData['ai-basics'][0],
  videoData['ai-literacy'][0],
  videoData['ai-tools'][0],
  videoData['ai-trends'][0],
]

// 공지사항 데이터
export const notices = [
  { id: 1, title: 'AI CANVAS 베타 서비스 오픈 안내', date: '2026.06.09', category: '공지' },
  { id: 2, title: '6월 신규 강의 업로드 일정 안내', date: '2026.06.05', category: '강의' },
  { id: 3, title: 'AI 리터러시 시리즈 완강 이벤트 진행', date: '2026.05.28', category: '이벤트' },
  { id: 4, title: '서비스 이용약관 개정 안내', date: '2026.05.20', category: '공지' },
]
