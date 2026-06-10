import { useParams, Navigate, Link } from 'react-router-dom'
import SubPageLayout from '../components/SubPageLayout'
import { serviceCategories } from '../data/site'

const tabs = serviceCategories.map((s) => ({ label: s.label, to: s.to }))

const roadmapSteps = [
  { step: 1, title: '문제 발견과 솔루션', desc: 'TPCS 프레임워크로 목표 고객·문제·원인·솔루션을 정의합니다.' },
  { step: 2, title: '고객과 시장 리서치', desc: '잠재고객 프로파일을 작성하고 시장 조사 방향을 설계합니다.' },
  { step: 3, title: '고객 인터뷰 설계', desc: '9개 가설을 수립하고 심층 인터뷰 질문지를 자동 생성합니다.' },
  { step: 4, title: 'MVP 테스트 설계', desc: '핵심 가설 검증을 위한 MVP 도구와 테스트 계획을 수립합니다.' },
  { step: 5, title: '시장 및 경쟁사 분석', desc: 'TAM·SAM·SOM 산정과 SWOT 분석으로 시장 포지셔닝을 완성합니다.' },
  { step: 6, title: '비즈니스 모델 설계', desc: '비즈니스 모델 캔버스 9개 블록을 AI 피드백과 함께 완성합니다.' },
  { step: 7, title: '피치덱 완성', desc: '10개 섹션 피치덱 초안과 예상 Q&A 8문항을 자동으로 통합 생성합니다.' },
]

const grantPrograms = [
  { name: '예비창업패키지', org: '중소벤처기업부', amount: '최대 1억원', target: '만 39세 이하 예비창업자', badge: '인기' },
  { name: '초기창업패키지', org: '중소벤처기업부', amount: '최대 1억원', target: '창업 3년 이내 기업', badge: null },
  { name: '문화예술 창업지원', org: '문화체육관광부', amount: '최대 3,000만원', target: '문화예술 분야 창업자', badge: null },
  { name: '콘텐츠 스타트업 지원', org: '한국콘텐츠진흥원', amount: '최대 5,000만원', target: '콘텐츠 분야 창업자', badge: null },
  { name: '소셜벤처 지원사업', org: '한국사회적기업진흥원', amount: '최대 1억원', target: '사회적 가치 창출 스타트업', badge: null },
  { name: '디지털 크리에이터 지원', org: '한국방송통신전파진흥원', amount: '최대 2,000만원', target: '디지털 콘텐츠 창작자', badge: null },
  { name: '공예창업 지원', org: '한국공예디자인문화진흥원', amount: '작업공간·장비 지원', target: '공예 분야 창업자', badge: null },
  { name: '서울 청년 창업사관학교', org: '서울시', amount: '최대 5,000만원 + 사무공간', target: '서울 거주 39세 이하 청년', badge: null },
]

const draftOutputs = [
  { icon: '🎯', title: 'TPCS 프레임 초안', desc: '목표 고객(T)·문제(P)·원인(C)·솔루션(S) 4요소를 키워드 기반으로 자동 작성합니다.' },
  { icon: '👤', title: '고객 가설 9개', desc: '잠재 고객의 행동·니즈·페인포인트에 대한 검증 가능한 가설을 자동 생성합니다.' },
  { icon: '💬', title: '인터뷰 질문지', desc: '고객 가설 검증을 위한 심층 인터뷰 질문 세트를 즉시 완성합니다.' },
  { icon: '📊', title: 'BMC 초안', desc: '비즈니스 모델 캔버스 9개 블록의 초안을 AI가 채워줍니다.' },
]

function Coaching() {
  return (
    <div className="mx-auto max-w-container px-4 md:px-10 lg:px-20">
      <p className="mb-6 text-sm font-semibold tracking-widest text-royal dark:text-azure">CORE SERVICE</p>
      <h2 className="mb-4 text-4xl font-extrabold text-midnight dark:text-white md:text-5xl">
        AI 창업 로드맵 코칭
      </h2>
      <p className="mb-12 max-w-2xl text-lg leading-relaxed text-neutral-500 dark:text-neutral-400">
        창업 경험이 없어도 괜찮습니다. GPT-4o 기반 AI 코치가 문제 발견부터 피치덱 완성까지
        7단계 로드맵으로 단계별 안내하고 초안을 자동 생성합니다.
      </p>

      <div className="mb-6">
        <p className="mb-6 text-sm font-semibold tracking-widest text-royal dark:text-azure">HOW IT WORKS</p>
        <h3 className="mb-8 text-2xl font-extrabold text-midnight dark:text-white">7단계 창업 로드맵</h3>
      </div>
      <div className="mb-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {roadmapSteps.map((s, i) => (
          <div
            key={s.step}
            className={[
              'rounded-2xl border-2 p-6 transition-all',
              i === 6
                ? 'border-royal bg-royal/5 dark:bg-royal/10 md:col-span-2 lg:col-span-1'
                : 'border-neutral-100 bg-white hover:border-royal/30 hover:shadow-sm dark:border-navy dark:bg-navy/30',
            ].join(' ')}
          >
            <div className="mb-3 flex items-center gap-3">
              <span
                className={[
                  'flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-sm font-bold',
                  i === 6 ? 'bg-royal text-white' : 'bg-royal/10 text-royal dark:bg-azure/10 dark:text-azure',
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

      <Link
        to="/community/notices"
        className="inline-flex items-center gap-3 rounded-full bg-royal px-8 py-4 font-bold text-white shadow-lg shadow-royal/30 transition hover:brightness-110"
      >
        무료 상담 신청 →
      </Link>
    </div>
  )
}

function Programs() {
  return (
    <div className="mx-auto max-w-container px-4 md:px-10 lg:px-20">
      <p className="mb-6 text-sm font-semibold tracking-widest text-royal dark:text-azure">GRANT MATCHING</p>
      <h2 className="mb-4 text-4xl font-extrabold text-midnight dark:text-white md:text-5xl">
        지원사업 자동 매칭
      </h2>
      <p className="mb-12 max-w-2xl text-lg leading-relaxed text-neutral-500 dark:text-neutral-400">
        아이템·단계·지역 정보를 입력하면 RAG 엔진이 가장 적합한 정부·기관 지원사업을
        실시간으로 추천합니다. 신청 자격부터 지원 규모까지 한눈에 확인하세요.
      </p>

      <div className="mb-6">
        <p className="mb-6 text-sm font-semibold tracking-widest text-royal dark:text-azure">PROGRAMS</p>
        <h3 className="mb-8 text-2xl font-extrabold text-midnight dark:text-white">매칭 대상 지원사업</h3>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {grantPrograms.map((p) => (
          <div
            key={p.name}
            className="rounded-2xl border border-neutral-100 bg-white p-6 transition hover:shadow-md dark:border-navy dark:bg-navy/30"
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <h4 className="font-bold text-midnight dark:text-white">{p.name}</h4>
              {p.badge && (
                <span className="flex-shrink-0 rounded-full bg-gold/15 px-2.5 py-0.5 text-xs font-bold text-gold">
                  {p.badge}
                </span>
              )}
            </div>
            <p className="mb-1 text-sm text-neutral-400 dark:text-neutral-500">{p.org}</p>
            <p className="mb-2 text-sm font-semibold text-royal dark:text-azure">{p.amount}</p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">{p.target}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function Business() {
  const steps = [
    { num: '01', title: '7단계 로드맵 완료', desc: '창업 로드맵의 STEP 1~6을 순서대로 진행하고 모든 내용을 채웁니다.' },
    { num: '02', title: '피치덱 자동 통합', desc: '각 단계에서 작성한 내용이 10개 섹션 피치덱 초안으로 자동 통합됩니다.' },
    { num: '03', title: '예상 Q&A 생성', desc: '투자자가 물어볼 법한 예상 질문 8문항과 답변 초안을 자동 생성합니다.' },
    { num: '04', title: '편집 및 완성', desc: '자동 생성된 초안을 편집기에서 다듬어 최종 사업계획서를 완성합니다.' },
  ]

  const sections = [
    '문제 정의 및 솔루션', '시장 기회 및 규모', '고객 세그먼트', '제품·서비스 소개',
    '비즈니스 모델', '경쟁 우위', '팀 소개', '재무 계획', '실행 로드맵', '투자 유치 계획',
  ]

  return (
    <div className="mx-auto max-w-container px-4 md:px-10 lg:px-20">
      <p className="mb-6 text-sm font-semibold tracking-widest text-royal dark:text-azure">AUTO COMPLETION</p>
      <h2 className="mb-4 text-4xl font-extrabold text-midnight dark:text-white md:text-5xl">
        사업계획서 자동 완성
      </h2>
      <p className="mb-12 max-w-2xl text-lg leading-relaxed text-neutral-500 dark:text-neutral-400">
        7단계 로드맵을 완료하면 모든 단계의 내용이 자동으로 통합되어 완성도 높은
        피치덱 초안과 예상 Q&A가 생성됩니다.
      </p>

      <div className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-2">
        {steps.map((s) => (
          <div
            key={s.num}
            className="flex gap-5 rounded-2xl border border-neutral-100 bg-white p-7 dark:border-navy dark:bg-navy/30"
          >
            <span className="flex-shrink-0 text-3xl font-extrabold text-royal/20 dark:text-azure/20">{s.num}</span>
            <div>
              <h4 className="mb-2 font-bold text-midnight dark:text-white">{s.title}</h4>
              <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-midnight to-navy p-8 text-white">
        <p className="mb-4 text-sm font-semibold tracking-widest text-azure/80">PITCH DECK</p>
        <h3 className="mb-6 text-xl font-bold">자동 생성되는 피치덱 10개 섹션</h3>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
          {sections.map((sec, i) => (
            <div
              key={sec}
              className="rounded-xl bg-white/10 px-3 py-2.5 text-center text-sm font-medium"
            >
              <span className="mr-1.5 text-xs text-azure/60">{String(i + 1).padStart(2, '0')}</span>
              {sec}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Draft() {
  return (
    <div className="mx-auto max-w-container px-4 md:px-10 lg:px-20">
      <p className="mb-6 text-sm font-semibold tracking-widest text-royal dark:text-azure">AI GENERATION</p>
      <h2 className="mb-4 text-4xl font-extrabold text-midnight dark:text-white md:text-5xl">
        AI 초안 즉시 생성
      </h2>
      <p className="mb-12 max-w-2xl text-lg leading-relaxed text-neutral-500 dark:text-neutral-400">
        아이템 키워드 하나만 입력하면 GPT-4o가 TPCS 프레임, 고객 가설, 인터뷰 질문지 등
        창업에 필요한 핵심 문서를 즉시 생성합니다.
      </p>

      <div className="mb-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {draftOutputs.map((d) => (
          <div
            key={d.title}
            className="rounded-2xl border border-neutral-100 bg-white p-8 shadow-sm transition hover:shadow-md dark:border-navy dark:bg-navy/30"
          >
            <span className="mb-4 block text-4xl">{d.icon}</span>
            <h4 className="mb-3 text-lg font-bold text-midnight dark:text-white">{d.title}</h4>
            <p className="text-sm leading-7 text-neutral-500 dark:text-neutral-400">{d.desc}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-gradient-to-r from-royal/10 to-azure/10 p-8 dark:from-royal/20 dark:to-azure/20">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="mb-2 text-xl font-bold text-midnight dark:text-white">지금 바로 시작해보세요</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              키워드 하나로 5분 안에 첫 번째 창업 문서를 완성합니다.
            </p>
          </div>
          <Link
            to="/community/notices"
            className="inline-flex flex-shrink-0 items-center gap-3 rounded-full bg-royal px-7 py-3.5 font-bold text-white shadow-lg shadow-royal/30 transition hover:brightness-110"
          >
            무료 체험 신청 →
          </Link>
        </div>
      </div>
    </div>
  )
}

const validTabs = ['coaching', 'programs', 'business', 'draft']

export default function Services() {
  const { tab } = useParams()
  if (!validTabs.includes(tab)) return <Navigate to="/services/coaching" replace />

  return (
    <SubPageLayout sectionTitle="서비스" tabs={tabs}>
      {tab === 'coaching' && <Coaching />}
      {tab === 'programs' && <Programs />}
      {tab === 'business' && <Business />}
      {tab === 'draft' && <Draft />}
    </SubPageLayout>
  )
}
