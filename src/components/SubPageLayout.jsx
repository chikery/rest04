import { NavLink } from 'react-router-dom'

export default function SubPageLayout({ sectionTitle, tabs, headBg, children }) {
  return (
    <div>
      {/* 페이지 헤더 배너 */}
      <div
        className={[
          'relative flex h-48 items-end overflow-hidden md:h-64',
          headBg || 'bg-gradient-to-br from-midnight via-navy to-royal',
        ].join(' ')}
      >
        {/* 장식 원형 */}
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-royal/20" />
        <div className="absolute -left-8 bottom-0 h-40 w-40 rounded-full bg-azure/10" />
        <div className="relative mx-auto w-full max-w-container px-4 pb-8 md:px-10 lg:px-20">
          <p className="mb-1 text-xs font-semibold tracking-widest text-azure/80">
            홈 · {sectionTitle}
          </p>
          <h1 className="text-4xl font-bold text-white md:text-5xl">{sectionTitle}</h1>
        </div>
      </div>

      {/* sticky 탭 네비 */}
      <div className="sticky top-20 z-30 bg-white shadow-sm dark:bg-midnight dark:shadow-navy/40">
        <div className="mx-auto max-w-container px-4 md:px-10 lg:px-20">
          <ul className="flex w-full overflow-x-auto font-semibold">
            {tabs.map((t) => (
              <li key={t.to} className="shrink-0">
                <NavLink
                  to={t.to}
                  className={({ isActive }) =>
                    [
                      'block whitespace-nowrap border-b-2 px-4 py-4 text-sm transition md:px-8 md:py-5 md:text-base',
                      isActive
                        ? 'border-royal text-royal dark:border-azure dark:text-azure'
                        : 'border-transparent text-neutral-500 hover:text-royal dark:text-neutral-400 dark:hover:text-azure',
                    ].join(' ')
                  }
                >
                  {t.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 본문 */}
      <div className="bg-white py-12 dark:bg-slate-950 md:py-20">{children}</div>
    </div>
  )
}
