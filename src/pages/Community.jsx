import { useParams, Navigate } from 'react-router-dom'
import SubPageLayout from '../components/SubPageLayout'
import { notices } from '../data/site'

const tabs = [
  { label: '공지사항', to: '/community/notices' },
  { label: '자주 묻는 질문', to: '/community/faq' },
]

const faqData = [
  {
    q: 'RoadmapAI 서비스는 어떻게 시작하나요?',
    a: '회원가입 후 AI 코치와 함께 7단계 창업 로드맵을 시작할 수 있습니다. 별도의 창업 경험이나 사전 지식 없이도 바로 시작 가능합니다.',
  },
  {
    q: '창업 경험이 전혀 없어도 사용할 수 있나요?',
    a: '네, RoadmapAI는 창업 경험이 없는 예비창업자를 위해 설계되었습니다. AI 코치가 STEP 1부터 차근차근 안내하므로 누구나 혼자서 사업계획서를 완성할 수 있습니다.',
  },
  {
    q: '7단계 로드맵은 얼마나 걸리나요?',
    a: '각 단계별로 AI가 초안을 자동 생성하므로 집중해서 진행하면 수 일 내로 전체 과정을 완료할 수 있습니다. 각 단계를 충분히 검토하며 진행하면 1~2주가 소요됩니다.',
  },
  {
    q: '지원사업 매칭은 어떻게 작동하나요?',
    a: '창업 아이템, 단계, 지역 정보를 입력하면 RAG(검색증강생성) 엔진이 예비창업패키지, 초기창업패키지 등 8개 이상의 지원사업 중 가장 적합한 것을 실시간으로 추천합니다.',
  },
  {
    q: 'AI가 생성한 초안은 어떻게 수정할 수 있나요?',
    a: 'GPT-4o가 생성한 초안은 플랫폼 내 편집기에서 바로 수정할 수 있습니다. AI 피드백을 받으며 내용을 다듬어 완성도 높은 사업계획서를 작성할 수 있습니다.',
  },
  {
    q: '서비스 이용 요금은 어떻게 되나요?',
    a: '현재 베타 서비스 기간으로 무료 상담 신청을 통해 서비스를 체험하실 수 있습니다. 정식 요금제는 추후 공지사항을 통해 안내 드리겠습니다.',
  },
]

function Notices() {
  return (
    <div className="mx-auto max-w-container px-4 md:px-10 lg:px-20">
      <h2 className="mb-10 text-3xl font-extrabold text-midnight dark:text-white">공지사항</h2>
      <div className="overflow-hidden rounded-2xl border border-neutral-100 dark:border-navy">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 dark:bg-navy/50">
              <th className="px-6 py-4 text-left font-semibold text-neutral-500 dark:text-neutral-400">
                분류
              </th>
              <th className="px-6 py-4 text-left font-semibold text-neutral-500 dark:text-neutral-400">
                제목
              </th>
              <th className="hidden px-6 py-4 text-right font-semibold text-neutral-500 dark:text-neutral-400 md:table-cell">
                날짜
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100 dark:divide-navy/50">
            {notices.map((n) => (
              <tr
                key={n.id}
                className="cursor-pointer transition hover:bg-royal/5 dark:hover:bg-azure/5"
              >
                <td className="px-6 py-5">
                  <span className="rounded-full bg-royal/10 px-2.5 py-1 text-xs font-bold text-royal dark:bg-azure/10 dark:text-azure">
                    {n.category}
                  </span>
                </td>
                <td className="px-6 py-5 font-medium text-neutral-800 dark:text-neutral-200">
                  {n.title}
                </td>
                <td className="hidden px-6 py-5 text-right text-neutral-400 md:table-cell">
                  {n.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function FAQ() {
  return (
    <div className="mx-auto max-w-container px-4 md:px-10 lg:px-20">
      <h2 className="mb-10 text-3xl font-extrabold text-midnight dark:text-white">자주 묻는 질문</h2>
      <div className="flex flex-col gap-4">
        {faqData.map((item, i) => (
          <details
            key={i}
            className="group rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm open:shadow-md dark:border-navy dark:bg-navy/30"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-neutral-800 dark:text-white">
              <span>
                <span className="mr-3 text-royal dark:text-azure">Q.</span>
                {item.q}
              </span>
              <span className="flex-shrink-0 text-neutral-400 transition-transform duration-200 group-open:rotate-180">
                ▼
              </span>
            </summary>
            <p className="mt-4 border-t border-neutral-100 pt-4 text-sm leading-7 text-neutral-600 dark:border-navy dark:text-neutral-400">
              <span className="mr-2 font-bold text-gold">A.</span>
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </div>
  )
}

export default function Community() {
  const { tab } = useParams()
  if (!['notices', 'faq'].includes(tab)) return <Navigate to="/community/notices" replace />

  return (
    <SubPageLayout sectionTitle="커뮤니티" tabs={tabs}>
      {tab === 'notices' && <Notices />}
      {tab === 'faq' && <FAQ />}
    </SubPageLayout>
  )
}
