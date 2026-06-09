import { useParams, Navigate } from 'react-router-dom'
import SubPageLayout from '../components/SubPageLayout'

const tabs = [
  { label: '기관 소개', to: '/about/intro' },
  { label: '교육 철학', to: '/about/philosophy' },
  { label: '강사 소개', to: '/about/instructors' },
]

const instructors = [
  {
    name: '강사 성함',
    role: 'AI 기초 강의 담당',
    bio: '대학원에서 머신러닝을 전공하고 현재 AI 교육 분야에서 활동 중입니다. 복잡한 개념을 쉽게 설명하는 것을 목표로 합니다.',
  },
  {
    name: '강사 성함',
    role: 'AI 리터러시 강의 담당',
    bio: 'AI 정책 연구자 출신으로 AI의 사회적 영향과 리터러시 교육을 전문으로 합니다.',
  },
  {
    name: '강사 성함',
    role: 'AI 도구 활용 강의 담당',
    bio: '스타트업 대표를 역임하며 AI 도구를 실무에 적용한 풍부한 경험을 보유하고 있습니다.',
  },
]

function Intro() {
  return (
    <div className="mx-auto max-w-container px-4 md:px-10 lg:px-20">
      <p className="mb-6 text-sm font-semibold tracking-widest text-royal dark:text-azure">ABOUT</p>
      <h2 className="mb-8 text-4xl font-extrabold leading-tight text-midnight dark:text-white md:text-5xl">
        AI를 모두의 언어로
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-5 text-base leading-8 text-neutral-600 dark:text-neutral-400">
          <p>
            AI CANVAS는 인공지능 기술이 특정 전문가의 영역이 아닌, 모두가 이해하고 활용할 수 있는
            보편적 역량이 되어야 한다는 믿음에서 시작되었습니다.
          </p>
          <p>
            우리는 AI 기초부터 AI 리터러시, 실무 도구 활용까지 체계적인 동영상 콘텐츠를 통해
            여러분이 AI 시대를 자신감 있게 살아갈 수 있도록 돕습니다.
          </p>
          <p>
            현장 전문가와 교육 전문가가 함께 만드는 AI CANVAS의 콘텐츠는 이해하기 쉽고,
            실생활과 업무에 바로 적용할 수 있도록 설계되었습니다.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { num: '30+', label: '강의 영상' },
            { num: '4개', label: '강의 카테고리' },
            { num: '100%', label: '유튜브 무료 제공' },
            { num: '∞', label: '반복 수강 가능' },
          ].map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center rounded-2xl bg-royal/5 p-6 dark:bg-navy/40"
            >
              <span className="mb-1 text-3xl font-extrabold text-royal dark:text-azure">{s.num}</span>
              <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Philosophy() {
  const values = [
    {
      title: '접근성',
      desc: '누구나, 어디서나 AI를 배울 수 있어야 합니다. 모든 콘텐츠는 무료로 제공됩니다.',
      icon: '🌐',
    },
    {
      title: '명확성',
      desc: '복잡한 AI 개념을 쉽고 정확하게 전달합니다. 전문 지식 없이도 이해할 수 있습니다.',
      icon: '💡',
    },
    {
      title: '실용성',
      desc: '이론에 머물지 않고 실생활과 업무에 바로 적용할 수 있는 내용을 담습니다.',
      icon: '⚡',
    },
    {
      title: '최신성',
      desc: '빠르게 변화하는 AI 분야의 최신 동향을 지속적으로 반영합니다.',
      icon: '🔄',
    },
  ]

  return (
    <div className="mx-auto max-w-container px-4 md:px-10 lg:px-20">
      <p className="mb-6 text-sm font-semibold tracking-widest text-royal dark:text-azure">PHILOSOPHY</p>
      <h2 className="mb-12 text-4xl font-extrabold text-midnight dark:text-white md:text-5xl">
        교육 철학
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {values.map((v) => (
          <div
            key={v.title}
            className="rounded-2xl border border-neutral-100 bg-white p-8 shadow-sm transition hover:shadow-md dark:border-navy dark:bg-navy/30"
          >
            <span className="mb-4 block text-4xl">{v.icon}</span>
            <h3 className="mb-3 text-xl font-bold text-midnight dark:text-white">{v.title}</h3>
            <p className="text-base leading-7 text-neutral-600 dark:text-neutral-400">{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function Instructors() {
  return (
    <div className="mx-auto max-w-container px-4 md:px-10 lg:px-20">
      <p className="mb-6 text-sm font-semibold tracking-widest text-royal dark:text-azure">INSTRUCTORS</p>
      <h2 className="mb-12 text-4xl font-extrabold text-midnight dark:text-white md:text-5xl">
        강사 소개
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {instructors.map((ins, i) => (
          <div
            key={i}
            className="flex flex-col items-center rounded-2xl border border-neutral-100 bg-white p-8 text-center shadow-sm dark:border-navy dark:bg-navy/30"
          >
            <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-royal to-navy text-3xl font-extrabold text-white">
              {ins.name.charAt(0)}
            </div>
            <h3 className="mb-1 text-lg font-bold text-midnight dark:text-white">{ins.name}</h3>
            <p className="mb-4 text-sm font-semibold text-royal dark:text-azure">{ins.role}</p>
            <p className="text-sm leading-6 text-neutral-500 dark:text-neutral-400">{ins.bio}</p>
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
    <SubPageLayout sectionTitle="교육 소개" tabs={tabs}>
      {tab === 'intro' && <Intro />}
      {tab === 'philosophy' && <Philosophy />}
      {tab === 'instructors' && <Instructors />}
    </SubPageLayout>
  )
}
