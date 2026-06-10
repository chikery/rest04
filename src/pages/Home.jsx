import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { serviceCategories, notices } from '../data/site'

const heroSlides = [
  {
    headline: '아이디어에서\n사업계획서까지,\nAI가 함께합니다.',
    sub: '창업 경험이 없어도, AI 코치가 7단계 로드맵으로 안내합니다',
    cta: { label: '무료 상담 신청', to: '/community/notices' },
    gradient: 'from-midnight via-navy to-royal',
  },
  {
    headline: '7단계로\n완성하는\n사업계획서.',
    sub: '문제 발견부터 피치덱 완성까지 — AI가 초안을 자동 생성합니다',
    cta: { label: '7단계 로드맵 보기', to: '/services/coaching' },
    gradient: 'from-midnight via-[#0f2a5f] to-[#1a56db]',
  },
]

const roadmapSteps = [
  { step: 1, title: '문제 발견과 솔루션', desc: 'TPCS 프레임워크' },
  { step: 2, title: '고객과 시장 리서치', desc: '잠재고객 프로파일' },
  { step: 3, title: '고객 인터뷰 설계', desc: '가설 9개 + 질문지' },
  { step: 4, title: 'MVP 테스트 설계', desc: '가설 검증 도구' },
  { step: 5, title: '시장·경쟁사 분석', desc: 'TAM·SAM·SOM + SWOT' },
  { step: 6, title: '비즈니스 모델 설계', desc: 'BMC 9블록 + AI 피드백' },
  { step: 7, title: '피치덱 완성', desc: '10섹션 + Q&A 8문항' },
]

function Hero() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % heroSlides.length), 6000)
    return () => clearInterval(t)
  }, [])

  const go = (dir) => setIdx((i) => (i + dir + heroSlides.length) % heroSlides.length)

  return (
    <section className="relative min-h-[calc(100vh-5rem)] w-full overflow-hidden">
      {heroSlides.map((s, i) => (
        <div
          key={i}
          className={[
            'absolute inset-0 flex flex-col justify-center bg-gradient-to-br transition-opacity duration-1000',
            s.gradient,
            i === idx ? 'opacity-100' : 'pointer-events-none opacity-0',
          ].join(' ')}
        >
          <div className="absolute right-0 top-0 h-full w-1/2 opacity-10">
            <div className="absolute right-[-10%] top-[10%] h-96 w-96 rounded-full bg-azure blur-3xl" />
            <div className="absolute right-[20%] bottom-[20%] h-64 w-64 rounded-full bg-royal blur-2xl" />
          </div>
          <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-gold/10 blur-2xl" />

          <div className="relative mx-auto w-full max-w-container px-4 md:px-10 lg:px-20">
            <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-azure/80 md:text-base">
              RoadmapAI · AI 창업 코칭
            </p>
            <h1 className="mb-6 whitespace-pre-line text-5xl font-extrabold leading-tight text-white drop-shadow md:text-7xl lg:text-8xl">
              {s.headline}
            </h1>
            <p className="mb-10 text-lg font-medium text-white/70 md:text-xl">{s.sub}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                to={s.cta.to}
                className="inline-flex items-center gap-3 rounded-full bg-royal px-7 py-4 font-bold text-white shadow-lg shadow-royal/30 transition hover:brightness-110 active:scale-95"
              >
                {s.cta.label} <span>→</span>
              </Link>
              <Link
                to="/about/intro"
                className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                서비스 소개
              </Link>
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        aria-label="이전"
        onClick={() => go(-1)}
        className="absolute bottom-10 left-[4%] z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-xl text-white transition hover:bg-white/20"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="다음"
        onClick={() => go(1)}
        className="absolute bottom-10 left-[calc(4%+52px)] z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-xl text-white transition hover:bg-white/20"
      >
        ›
      </button>

      <div className="absolute bottom-12 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`슬라이드 ${i + 1}`}
            onClick={() => setIdx(i)}
            className={[
              'h-1.5 rounded-full transition-all duration-300',
              i === idx ? 'w-10 bg-azure' : 'w-3 bg-white/40',
            ].join(' ')}
          />
        ))}
      </div>

      <div className="absolute bottom-10 right-[4%] z-10 hidden flex-col items-center gap-2 md:flex">
        <span className="text-xs font-medium tracking-widest text-white/50">SCROLL</span>
        <div className="h-10 w-px animate-bounce bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  )
}

function Services() {
  const colorMap = {
    royal: 'from-royal to-navy',
    navy: 'from-navy to-midnight',
    midnight: 'from-midnight to-[#0a1225]',
    gold: 'from-gold to-[#d97706]',
  }

  return (
    <section className="bg-white py-24 dark:bg-slate-950 md:py-32">
      <div className="mx-auto max-w-container px-4 md:px-10 lg:px-20">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-semibold tracking-widest text-royal dark:text-azure">
              SERVICES
            </p>
            <h2 className="text-4xl font-extrabold leading-tight text-midnight dark:text-white md:text-5xl">
              창업의 모든 단계를 AI와 함께
            </h2>
          </div>
          <Link
            to="/services/coaching"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-600 transition hover:border-royal hover:text-royal dark:border-navy dark:text-neutral-400 dark:hover:border-azure dark:hover:text-azure"
          >
            전체 서비스 보기 →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCategories.map((cat) => (
            <Link
              key={cat.key}
              to={cat.to}
              className={[
                'group relative overflow-hidden rounded-2xl bg-gradient-to-br p-6 transition-transform hover:-translate-y-1 hover:shadow-xl',
                colorMap[cat.color] || 'from-royal to-navy',
              ].join(' ')}
            >
              <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-white/10 transition-transform duration-500 group-hover:scale-150" />
              <p className="mb-3 text-xs font-semibold tracking-widest text-white/60">
                {cat.labelEn.toUpperCase()}
              </p>
              <h3 className="mb-2 text-xl font-bold text-white">{cat.label}</h3>
              <p className="text-sm leading-relaxed text-white/70">{cat.desc}</p>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-white/80 transition group-hover:gap-3">
                자세히 보기 <span>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function Roadmap() {
  return (
    <section className="bg-slate-50 py-24 dark:bg-navy/20 md:py-32">
      <div className="mx-auto max-w-container px-4 md:px-10 lg:px-20">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-semibold tracking-widest text-royal dark:text-azure">
              HOW IT WORKS
            </p>
            <h2 className="text-4xl font-extrabold text-midnight dark:text-white md:text-5xl">
              7단계 창업 로드맵
            </h2>
          </div>
          <Link
            to="/services/coaching"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-600 transition hover:border-royal hover:text-royal dark:border-navy dark:text-neutral-400 dark:hover:border-azure dark:hover:text-azure"
          >
            상세 보기 →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
          {roadmapSteps.map((s, i) => (
            <div
              key={s.step}
              className={[
                'relative rounded-2xl p-5 transition',
                i === 6
                  ? 'border-2 border-royal bg-royal/5 dark:bg-royal/10'
                  : 'border border-neutral-100 bg-white hover:shadow-sm dark:border-navy dark:bg-navy/30',
              ].join(' ')}
            >
              <span
                className={[
                  'mb-3 flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold',
                  i === 6 ? 'bg-royal text-white' : 'bg-royal/10 text-royal dark:bg-azure/10 dark:text-azure',
                ].join(' ')}
              >
                {s.step}
              </span>
              <p className="mb-1 text-sm font-bold leading-tight text-midnight dark:text-white">{s.title}</p>
              <p className="text-xs text-neutral-400 dark:text-neutral-500">{s.desc}</p>
              {i === 6 && (
                <span className="mt-2 inline-block rounded-full bg-royal/15 px-2 py-0.5 text-xs font-semibold text-royal dark:text-azure">
                  최종 완성
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutBand() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-midnight via-navy to-royal py-24 md:py-32">
      <div className="absolute inset-0">
        <div className="absolute right-[-5%] top-[-20%] h-[500px] w-[500px] rounded-full bg-azure/10 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-5%] h-[400px] w-[400px] rounded-full bg-gold/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-container px-4 md:px-10 lg:px-20">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold tracking-widest text-azure/80">ABOUT US</p>
          <h2 className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-6xl">
            창업의 첫 걸음,
            <br />
            올바른 방향으로
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-white/70">
            RoadmapAI는 검증된 린스타트업 방법론과 GPT-4o AI 기술을 결합하여, 예비창업자와 초기 창업자가
            전문 코치 없이도 아이디어에서 사업계획서까지 완성할 수 있도록 돕습니다.
          </p>
          <Link
            to="/about/intro"
            className="inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 font-bold text-white shadow-lg shadow-gold/30 transition hover:brightness-110"
          >
            회사 소개 보기 →
          </Link>
        </div>
      </div>
    </section>
  )
}

function Notices() {
  return (
    <section className="bg-white py-24 dark:bg-slate-950 md:py-32">
      <div className="mx-auto max-w-container px-4 md:px-10 lg:px-20">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold tracking-widest text-royal dark:text-azure">
              NOTICE
            </p>
            <h2 className="text-4xl font-extrabold text-midnight dark:text-white">공지사항</h2>
          </div>
          <Link
            to="/community/notices"
            className="hidden items-center gap-2 text-sm font-semibold text-neutral-500 transition hover:text-royal dark:text-neutral-400 dark:hover:text-azure md:flex"
          >
            전체 보기 →
          </Link>
        </div>

        <ul className="divide-y divide-neutral-100 dark:divide-navy/50">
          {notices.map((n) => (
            <li key={n.id}>
              <Link
                to="/community/notices"
                className="flex flex-col justify-between gap-2 py-5 transition hover:pl-2 md:flex-row md:items-center"
              >
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-royal/10 px-2.5 py-1 text-xs font-bold text-royal dark:bg-azure/10 dark:text-azure">
                    {n.category}
                  </span>
                  <span className="font-semibold text-neutral-800 transition hover:text-royal dark:text-neutral-200 dark:hover:text-azure">
                    {n.title}
                  </span>
                </div>
                <span className="text-sm text-neutral-400">{n.date}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-6 md:hidden">
          <Link
            to="/community/notices"
            className="flex items-center justify-center gap-2 rounded-xl border border-neutral-200 py-3 text-sm font-semibold text-neutral-600 dark:border-navy dark:text-neutral-400"
          >
            전체 공지 보기 →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Roadmap />
      <AboutBand />
      <Notices />
    </>
  )
}
