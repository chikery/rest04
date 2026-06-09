import { useState } from 'react'
import VideoCard from './VideoCard'

const PER_PAGE = 6 // 2열 × 3행

export default function VideoGrid({ videos = [] }) {
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(videos.length / PER_PAGE)
  const start = (page - 1) * PER_PAGE
  const pageVideos = videos.slice(start, start + PER_PAGE)

  if (videos.length === 0) {
    return (
      <div className="flex min-h-[300px] flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-neutral-200 p-12 text-center dark:border-navy">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-neutral-300 dark:text-neutral-600">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M10 8l6 4-6 4V8z" />
        </svg>
        <p className="text-neutral-500 dark:text-neutral-400">
          준비 중인 영상입니다. 곧 업로드됩니다.
        </p>
      </div>
    )
  }

  return (
    <div>
      {/* 2×3 그리드 */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {pageVideos.map((v) => (
          <VideoCard key={v.videoId} video={v} />
        ))}
      </div>

      {/* 페이지네이션 */}
      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => { setPage((p) => Math.max(1, p - 1)); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            disabled={page === 1}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-600 transition hover:border-royal hover:text-royal disabled:cursor-not-allowed disabled:opacity-40 dark:border-navy dark:text-neutral-400 dark:hover:border-azure dark:hover:text-azure"
          >
            ‹
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => { setPage(n); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className={[
                'flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition',
                n === page
                  ? 'bg-royal text-white dark:bg-azure dark:text-midnight'
                  : 'border border-neutral-300 text-neutral-600 hover:border-royal hover:text-royal dark:border-navy dark:text-neutral-400 dark:hover:border-azure dark:hover:text-azure',
              ].join(' ')}
            >
              {n}
            </button>
          ))}

          <button
            type="button"
            onClick={() => { setPage((p) => Math.min(totalPages, p + 1)); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            disabled={page === totalPages}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-600 transition hover:border-royal hover:text-royal disabled:cursor-not-allowed disabled:opacity-40 dark:border-navy dark:text-neutral-400 dark:hover:border-azure dark:hover:text-azure"
          >
            ›
          </button>
        </div>
      )}

      {/* 영상 개수 안내 */}
      <p className="mt-6 text-center text-sm text-neutral-400 dark:text-neutral-500">
        총 {videos.length}개 영상 · {page} / {totalPages} 페이지
      </p>
    </div>
  )
}
