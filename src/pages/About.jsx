import { useParams, Navigate } from 'react-router-dom'
import SubPageLayout from '../components/SubPageLayout'

const tabs = [
  { label: '회사 소개', to: '/about/intro' },
  { label: '서비스 소개', to: '/about/philosophy' },
  { label: '팀 소개', to: '/about/instructors' },
]

const services = [
  {
    title: 'AI 창업 로드맵 코칭',
    desc: '문제 발견·시장 리서치·MVP·비즈니스 모델·피치덱까지 7단계 로드맵을 AI가 단계별로 안내합니다.',
    badge: '핵심 서비스',
    icon: '🗺️',
  },
  {
    title: '창업지원사업 자동 매칭',
    desc: '아이템·단계·지역 기반으로 적합한 정부·기관 지원사업을 RAG 엔진이 실시간으로 추천합니다.',
    badge: '자동 추천',
    icon: '🔍',
  },
  {
    title: '사업계획서 자동 완성',
    desc: 'STEP 7 완료 시 전 단계 내용이 피치덱 초안으로 자동 통합됩니다. 예상 Q&A 생성까지 한 번에.',
    badge: 'AI 자동화',
    icon: '📄',
  },
  {
    title: 'AI 초안 즉시 생성',
    desc: '아이템 키워드 하나로 TPCS 프레임, 고객 가설, 인터뷰 질문지 등 핵심 문서를 즉시 생성합니다.',
    badge: 'GPT-4o',
    icon: '⚡',
  },
]

const roadmapSteps = [
  { step: 1, title: '문제 발견과 솔루션', desc: 'TPCS 프레임워크로 목표 고객·문제·원인·솔루션을 정의합니다.' },
  { step: 2, title: '고객과 시장 리서치', desc: '잠재고객 프로파일을 작성하고 시장 조사 방향을 설계합니다.' },
  { step: 3, title: '고객 인터뷰 설계', desc: '9개 가설을 수립하고 심층 인터뷰 질문지를 자동 생성합니다.' },
  { step: 4, title: 'MVP 테스트 설계', desc: '핵심 가설 검증을 위한 MVP 도구와 테스트 계획을 수립합니다.' },
  { step: 5, title: '시장 및 경쟁사 분석', desc: 'TAM·SAM·SOM 산정과 SWOT 분석으로 시장 포지셔닝을 완성합니다.' },
  { step: 6, title: '비즈니스 모델 설계', desc: '비즈니스 모델 캔버스 9개 블록을 AI 피드백과 함께 완성합니다.' },
  { step: 7, title: '피치덱 완성', desc: '10개 섹션 피치덱 초안과 예상 Q&A 8문항을 자동으로 통합 생성합니다.' },
]

const team = [
  {
    name: '대표',
    role: '창업 전략 · AI 코칭 설계',
    bio: '린스타트업 방법론과 AI 기술을 결합한 창업 코칭 플랫폼을 기획하고 이끌고 있습니다.',
  },
  {
    name: 'AI 엔지니어',
    role: 'GPT-4o · RAG 파이프라인',
    bio: 'GPT-4o 기반 AI 초안 생성과 FAISS RAG 엔진을 개발하여 실시간 지원사업 매칭을 구현합니다.',
  },
  {
    name: '프로덕트 디자이너',
    role: 'UX · 서비스 설계',
    bio: '예비창업자가 쉽고 직관적으로 사용할 수 있는 7단계 코칭 인터페이스를 설계합니다.',
  },
]

function Intro() {
  return (
    <div className="mx-auto max-w-container px-4 md:px-10 lg:px-20">
      <p className="mb-6 text-sm font-semibold tracking-widest text-royal dark:text-azure">ABOUT</p>
      <h2 className="mb-8 text-4xl font-extrabold leading-tight text-midnight dark:text-white md:text-5xl">
        창업의 첫 걸음,<br />올바른 방향으로
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-5 text-base leading-8 text-neutral-600 dark:text-neutral-400">
          <p>
            RoadmapAI는 창업 아이디어를 가진 예술인·초기 창업자·사이드 프로젝트 도전자들이
            혼자서도 체계적으로 창업을 준비할 수 있도록 돕는 AI 기반 코칭 스타트업입니다.
          </p>
          <p>
            검증된 린스타트업 방법론과 최신 GPT-4o AI 기술을 결합하여, 누구나 전문 창업 코치의
            도움 없이도 사업계획서를 완성할 수 있는 환경을 만들고 있습니다.
          </p>
          <p>
            문제 발견부터 피치덱 완성까지 7단계 로드맵을 AI가 단계별로 안내하며,
            정부 지원사업 자동 매칭과 AI 초안 즉시 생성으로 창업 준비 시간을 대폭 줄입니다.
          </p>
        </div>
        <div className="space-y-4">
          <div className="rounded-2xl bg-gradient-to-br from-midnight to-navy p-8 text-white">
            <p className="mb-2 text-sm text-white/50">회사 정보</p>
            <p className="mb-1 text-2xl font-bold">RoadmapAI</p>
            <p className="mb-6 text-sm text-azure">AI 사업 로드맵 코칭 스타트업</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              {[
                { label: '설립일', value: '2026년 6월 2일' },
                { label: '서비스', value: 'AI 창업 코칭' },
                { label: '대상', value: '예비·초기 창업자' },
                { label: '기술', value: 'GPT-4o + RAG' },
              ].map((item) => (
                <div key={item.label}>
                  <p className="mb-1 text-white/40">{item.label}</p>
                  <p className="font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border-2 border-royal/20 bg-royal/5 p-6 dark:border-azure/20 dark:bg-navy/40">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-royal dark:text-azure">
              Mission
            </p>
            <p className="font-semibold leading-relaxed text-neutral-800 dark:text-neutral-200">
              "모든 창업자가 아이디어에서 사업계획서까지, 혼자서도 해낼 수 있도록"
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Philosophy() {
  return (
    <div className="mx-auto max-w-container px-4 md:px-10 lg:px-20">
      <p className="mb-6 text-sm font-semibold tracking-widest text-royal dark:text-azure">SERVICES</p>
      <h2 className="mb-4 text-4xl font-extrabold text-midnight dark:text-white md:text-5xl">
        서비스 소개
      </h2>
      <p className="mb-12 text-lg text-neutral-500 dark:text-neutral-400">
        복잡한 창업 과정을 단순하게. 검증된 프레임워크와 AI가 만나 실질적인 결과를 만듭니다.
      </p>

      <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2">
        {services.map((s) => (
          <div
            key={s.title}
            className="rounded-2xl border border-neutral-100 bg-white p-8 shadow-sm transition hover:shadow-md dark:border-navy dark:bg-navy/30"
          >
            <div className="mb-5 flex items-start justify-between">
              <span className="text-4xl">{s.icon}</span>
              <span className="rounded-full bg-royal/10 px-3 py-1 text-xs font-bold text-royal dark:bg-azure/10 dark:text-azure">
                {s.badge}
              </span>
            </div>
            <h3 className="mb-3 text-xl font-bold text-midnight dark:text-white">{s.title}</h3>
            <p className="text-base leading-7 text-neutral-600 dark:text-neutral-400">{s.desc}</p>
          </div>
        ))}
      </div>

      <p className="mb-6 text-sm font-semibold tracking-widest text-royal dark:text-azure">HOW IT WORKS</p>
      <h3 className="mb-10 text-3xl font-extrabold text-midnight dark:text-white">
        7단계 창업 로드맵
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {roadmapSteps.map((s, i) => (
          <div
            key={s.step}
            className={[
              'rounded-2xl border-2 p-6 transition-all',
              i === 6
                ? 'border-royal bg-royal/5 dark:bg-royal/10 md:col-span-2 lg:col-span-1'
                : 'border-neutral-100 bg-white hover:border-neutral-200 hover:shadow-sm dark:border-navy dark:bg-navy/30',
            ].join(' ')}
          >
            <div className="mb-3 flex items-center gap-3">
              <span
                className={[
                  'flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-sm font-bold',
                  i === 6
                    ? 'bg-royal text-white'
                    : 'bg-royal/10 text-royal dark:bg-azure/10 dark:text-azure',
                ].join(' ')}
              >
                {s.step}
              </span>
              {i === 6 && (
                <span className="rounded-full bg-royal/15 px-2 py-0.5 text-xs font-semibold text-royal dark:text-azure">
                  최종 완성
                </span>
              )}
            </div>
            <h4 className="mb-2 font-bold text-midnight dark:text-white">{s.title}</h4>
            <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function Instructors() {
  return (
    <div className="mx-auto max-w-container px-4 md:px-10 lg:px-20">
      <p className="mb-6 text-sm font-semibold tracking-widest text-royal dark:text-azure">TEAM</p>
      <h2 className="mb-12 text-4xl font-extrabold text-midnight dark:text-white md:text-5xl">
        팀 소개
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {team.map((member, i) => (
          <div
            key={i}
            className="flex flex-col items-center rounded-2xl border border-neutral-100 bg-white p-8 text-center shadow-sm dark:border-navy dark:bg-navy/30"
          >
            <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-royal to-navy text-3xl font-extrabold text-white">
              {member.name.charAt(0)}
            </div>
            <h3 className="mb-1 text-lg font-bold text-midnight dark:text-white">{member.name}</h3>
            <p className="mb-4 text-sm font-semibold text-royal dark:text-azure">{member.role}</p>
            <p className="text-sm leading-6 text-neutral-500 dark:text-neutral-400">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function About() {
  const { tab } = useParams()
  if (!['intro', 'philosophy', 'instructors'].includes(tab)) {
    return <Navigate to="/about/intro" replace />
  }

  return (
    <SubPageLayout sectionTitle="회사 소개" tabs={tabs}>
      {tab === 'intro' && <Intro />}
      {tab === 'philosophy' && <Philosophy />}
      {tab === 'instructors' && <Instructors />}
    </SubPageLayout>
  )
}
