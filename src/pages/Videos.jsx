import { useParams, Navigate } from 'react-router-dom'
import SubPageLayout from '../components/SubPageLayout'
import VideoGrid from '../components/VideoGrid'
import { videoCategories, videoData } from '../data/site'

const tabs = videoCategories.map((c) => ({ label: c.label, to: c.to }))

export default function Videos() {
  const { category } = useParams()
  const cat = videoCategories.find((c) => c.key === category)
  if (!cat) return <Navigate to="/videos/coaching" replace />

  const videos = videoData[category] || []

  return (
    <SubPageLayout sectionTitle="서비스 콘텐츠" tabs={tabs}>
      <div className="mx-auto max-w-container px-4 md:px-10 lg:px-20">
        {/* 카테고리 헤더 */}
        <div className="mb-12">
          <p className="mb-2 text-sm font-semibold tracking-widest text-royal dark:text-azure">
            {cat.labelEn.toUpperCase()}
          </p>
          <h2 className="mb-3 text-4xl font-extrabold text-midnight dark:text-white md:text-5xl">
            {cat.label}
          </h2>
          <p className="text-lg text-neutral-500 dark:text-neutral-400">{cat.desc}</p>
          <div className="mt-6 h-1 w-16 rounded-full bg-royal dark:bg-azure" />
        </div>

        {/* 2×3 영상 그리드 + 페이지네이션 */}
        <VideoGrid videos={videos} />
      </div>
    </SubPageLayout>
  )
}
