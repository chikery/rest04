import { useParams, Navigate } from 'react-router-dom'
import SubPageLayout from '../components/SubPageLayout'
import { notices } from '../data/site'

const tabs = [
  { label: '공지사항', to: '/community/notices' },
  { label: '자주 묻는 질문', to: '/community/faq' },
]

const faqData = [
  {
    q: '강의 영상은 무료로 볼 수 있나요?',
    a: '네, 모든 강의 영상은 유튜브를 통해 무료로 제공됩니다. 회원가입 없이 바로 시청하실 수 있습니다.',
  },
  {
    q: '영상은 어떤 순서로 보면 좋을까요?',
    a: 'AI를 처음 접하신다면 "AI 기초" 카테고리부터 시작하시길 권장합니다. 이후 "AI 리터러시"와 "AI 도구 활용" 순서로 진행하시면 체계적으로 학습할 수 있습니다.',
  },
  {
    q: 'AI에 대한 배경 지식이 없어도 수강이 가능한가요?',
    a: '물론입니다! AI CANVAS의 모든 강의는 비전공자, 입문자를 위해 설계되었습니다. 수학이나 코딩 지식 없이도 충분히 이해하실 수 있습니다.',
  },
  {
    q: '강의 수료증이나 자격증이 발급되나요?',
    a: '현재는 별도의 수료증 발급 서비스를 제공하지 않습니다. 향후 서비스 확장 시 안내 드리겠습니다.',
  },
  {
    q: '강의 관련 질문은 어디에 남기면 되나요?',
    a: '유튜브 각 영상의 댓글 섹션에 질문을 남겨주시면 강사진이 확인 후 답변해 드립니다. 혹은 이메일(contact@aicanvas.kr)로 문의해 주세요.',
  },
  {
    q: '신규 강의는 얼마나 자주 업로드되나요?',
    a: '매주 1-2편의 새로운 강의를 업로드하는 것을 목표로 합니다. 공지사항과 소셜 미디어를 통해 업로드 일정을 확인하실 수 있습니다.',
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
