import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle() {
  const { dark, toggle } = useTheme()
  return (
    <button
      type="button"
      aria-label={dark ? '라이트모드로 전환' : '다크모드로 전환'}
      onClick={toggle}
      className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-600 transition hover:bg-royal/10 dark:text-azure dark:hover:bg-azure/10"
    >
      {dark ? (
        // Sun icon
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      ) : (
        // Moon icon
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  )
}
