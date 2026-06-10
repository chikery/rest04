import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { nav, company } from '../data/site'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hovered, setHovered] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav
        className="bg-white/95 backdrop-blur-md dark:bg-midnight/95"
      >
        <div className="mx-auto flex h-20 max-w-container items-center justify-between border-b border-neutral-200 px-4 dark:border-navy md:px-10 lg:px-20">
          {/* 로고 */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-extrabold tracking-tight text-midnight dark:text-white">
              Roadmap
            </span>
            <span className="text-2xl font-extrabold tracking-tight text-royal dark:text-azure">
              AI
            </span>
          </Link>

          {/* 데스크탑 메뉴 */}
          <ul className="hidden items-stretch lg:flex">
            {nav.map((item) => (
              <li
                key={item.label}
                className="relative flex items-center"
                onMouseEnter={() => setHovered(item.label)}
                onMouseLeave={() => setHovered(null)}
              >
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      'px-7 py-7 text-base font-semibold transition-colors',
                      isActive
                        ? 'text-royal dark:text-azure'
                        : 'text-neutral-700 hover:text-royal dark:text-neutral-300 dark:hover:text-azure',
                    ].join(' ')
                  }
                >
                  {item.label}
                </NavLink>

                {/* 드롭다운 */}
                {hovered === item.label && item.children && (
                  <ul className="absolute left-0 top-full z-50 min-w-[10rem] overflow-hidden rounded-xl border border-neutral-200 bg-white py-1.5 shadow-lg dark:border-navy dark:bg-midnight">
                    {item.children.map((c) => (
                      <li key={c.label + c.to}>
                        <Link
                          to={c.to}
                          className="block px-5 py-2.5 text-sm font-medium text-neutral-600 transition hover:bg-neutral-50 hover:text-royal dark:text-neutral-400 dark:hover:bg-navy/50 dark:hover:text-azure"
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            {/* 햄버거 (모바일) */}
            <button
              type="button"
              aria-label="메뉴 열기"
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
              onClick={() => setMobileOpen(true)}
            >
              <span className="h-0.5 w-6 bg-neutral-700 dark:bg-neutral-300" />
              <span className="h-0.5 w-6 bg-neutral-700 dark:bg-neutral-300" />
              <span className="h-0.5 w-6 bg-neutral-700 dark:bg-neutral-300" />
            </button>
          </div>
        </div>

      </nav>

      {/* 모바일 패널 */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm overflow-y-auto bg-white p-6 shadow-2xl dark:bg-midnight">
            <div className="mb-6 flex items-center justify-between">
              <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold text-midnight dark:text-white">Roadmap</span>
                <span className="text-xl font-extrabold text-royal dark:text-azure">AI</span>
              </Link>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <button
                  type="button"
                  aria-label="메뉴 닫기"
                  className="text-2xl text-neutral-500 dark:text-neutral-400"
                  onClick={() => setMobileOpen(false)}
                >
                  ✕
                </button>
              </div>
            </div>
            <ul className="flex flex-col gap-1">
              {nav.map((item) => (
                <li key={item.label} className="border-b border-neutral-100 dark:border-navy/60">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-3 text-base font-bold text-neutral-900 dark:text-white"
                    onClick={() =>
                      setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                    }
                  >
                    {item.label}
                    <span
                      className={[
                        'text-xs transition-transform duration-200',
                        mobileExpanded === item.label ? 'rotate-180' : '',
                      ].join(' ')}
                    >
                      ▼
                    </span>
                  </button>
                  {mobileExpanded === item.label && (
                    <ul className="mb-3 flex flex-col gap-1 pl-3">
                      {item.children.map((c) => (
                        <li key={c.label + c.to}>
                          <Link
                            to={c.to}
                            className="block py-2 text-sm text-neutral-500 transition hover:text-royal dark:text-neutral-400 dark:hover:text-azure"
                            onClick={() => setMobileOpen(false)}
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}
