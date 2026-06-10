import { useParams, Navigate } from 'react-router-dom'
import SubPageLayout from '../components/SubPageLayout'

const tabs = [
  { label: '회사 소개', to: '/about/intro' },
  { label: '팀 소개', to: '/about/team' },
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

function Team() {
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
  if (!['intro', 'team'].includes(tab)) return <Navigate to="/about/intro" replace />

  return (
    <SubPageLayout sectionTitle="회사 소개" tabs={tabs}>
      {tab === 'intro' && <Intro />}
      {tab === 'team' && <Team />}
    </SubPageLayout>
  )
}
