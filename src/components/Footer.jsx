import { Link } from 'react-router-dom'
import { company } from '../data/site'

export default function Footer() {
  return (
    <footer className="relative">
      {/* 상단 소개 영역 */}
      <div className="bg-slate-50 px-4 py-16 dark:bg-navy/30 md:px-10 lg:px-40">
        <div className="mx-auto max-w-container flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex-shrink-0">
            <div className="flex items-center gap-1.5">
              <span className="text-3xl font-extrabold text-royal dark:text-azure">AI</span>
              <span className="text-3xl font-extrabold text-midnight dark:text-white">CANVAS</span>
            </div>
            <p className="mt-2 text-sm font-medium text-neutral-500 dark:text-neutral-400">
              {company.tagline}
            </p>
          </div>
          <div className="flex-grow text-sm leading-7 text-neutral-600 dark:text-neutral-400 md:text-base">
            {company.intro.map((p, i) => (
              <p key={i} className="mb-3 last:mb-0">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* 하단 다크 영역 */}
      <div className="bg-midnight px-4 py-10 md:px-10 lg:px-40">
        <div className="mx-auto max-w-container flex flex-col gap-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            {/* 연락처 */}
            <div className="flex flex-col gap-2 text-sm text-neutral-400">
              <p>{company.address}</p>
              <p>Tel: {company.tel} · E-mail: {company.email}</p>
            </div>

            {/* 소셜 링크 */}
            <div className="flex gap-3">
              {company.socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 text-neutral-400 transition hover:border-azure hover:text-azure"
                >
                  {s.icon === 'youtube' && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z" />
                    </svg>
                  )}
                  {s.icon === 'instagram' && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* 정책 링크 + 카피라이트 */}
          <div className="flex flex-col justify-between gap-4 border-t border-neutral-800 pt-6 text-sm md:flex-row md:items-center">
            <ul className="flex flex-wrap gap-x-1">
              {company.footerLinks.map((l, i) => (
                <li key={l.label} className="flex items-center">
                  {i > 0 && <span className="mx-3 text-neutral-700">|</span>}
                  <Link
                    to={l.to}
                    className={[
                      l.strong
                        ? 'font-bold text-white hover:text-azure'
                        : 'text-neutral-500 hover:text-neutral-300',
                    ].join(' ')}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-neutral-600">{company.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
