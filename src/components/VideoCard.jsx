import { useState } from 'react'

function PlayIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <circle cx="28" cy="28" r="28" fill="rgba(0,0,0,0.55)" />
      <polygon points="22,18 42,28 22,38" fill="white" />
    </svg>
  )
}

export default function VideoCard({ video, featured = false }) {
  const [playing, setPlaying] = useState(false)
  const thumbUrl = `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`
  const fallbackUrl = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`

  return (
    <div
      className={[
        'group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-shadow hover:shadow-xl dark:bg-navy/60 dark:shadow-midnight',
        featured ? 'md:flex-row' : '',
      ].join(' ')}
    >
      {/* 영상 영역 */}
      <div
        className={[
          'relative overflow-hidden bg-midnight',
          featured ? 'aspect-video md:w-1/2' : 'aspect-video w-full',
        ].join(' ')}
      >
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${video.videoId}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            aria-label={`${video.title} 재생`}
            className="group/play absolute inset-0 flex w-full items-center justify-center"
            onClick={() => setPlaying(true)}
          >
            <img
              src={thumbUrl}
              alt={video.title}
              onError={(e) => { e.target.src = fallbackUrl }}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover/play:scale-105"
            />
            {/* 그라데이션 오버레이 */}
            <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-transparent to-transparent" />
            {/* 재생 버튼 */}
            <span className="relative z-10 transition-transform duration-200 group-hover/play:scale-110">
              <PlayIcon />
            </span>
            {/* 재생시간 뱃지 */}
            {video.duration && (
              <span className="absolute bottom-3 right-3 rounded bg-black/80 px-2 py-0.5 text-xs font-bold text-white">
                {video.duration}
              </span>
            )}
          </button>
        )}
      </div>

      {/* 텍스트 영역 */}
      <div className={['flex flex-col justify-between p-5', featured ? 'md:p-8' : ''].join(' ')}>
        <div>
          <h3
            className={[
              'mb-2 font-bold leading-snug text-neutral-900 transition-colors group-hover:text-royal dark:text-white dark:group-hover:text-azure',
              featured ? 'text-xl md:text-2xl' : 'text-base',
            ].join(' ')}
          >
            {video.title}
          </h3>
          <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400 line-clamp-2">
            {video.desc}
          </p>
        </div>
        <p className="mt-4 text-xs text-neutral-400 dark:text-neutral-500">{video.date}</p>
      </div>
    </div>
  )
}
