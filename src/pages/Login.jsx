import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const { signIn, signInWithKakao } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from || '/'

  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    const { error } = await signIn(form)
    setLoading(false)
    if (error) return setError(error.message)
    navigate(from, { replace: true })
  }

  async function handleKakao() {
    setError('')
    const { error } = await signInWithKakao()
    if (error) setError(error.message)
  }

  return (
    <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link to="/" className="inline-flex items-center gap-1.5">
            <span className="text-2xl font-extrabold text-midnight dark:text-white">Roadmap</span>
            <span className="text-2xl font-extrabold text-royal dark:text-azure">AI</span>
          </Link>
          <h1 className="mt-6 text-2xl font-extrabold text-midnight dark:text-white">로그인</h1>
          <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
            계정이 없으신가요?{' '}
            <Link to="/signup" className="font-semibold text-royal dark:text-azure hover:underline">
              회원가입
            </Link>
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm dark:border-navy dark:bg-navy/30">
          {/* 카카오 로그인 */}
          <button
            type="button"
            onClick={handleKakao}
            className="mb-6 flex w-full items-center justify-center gap-3 rounded-xl bg-[#FEE500] py-3.5 font-bold text-[#191919] transition hover:brightness-95 active:scale-95"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3C6.477 3 2 6.477 2 10.882c0 2.718 1.608 5.117 4.048 6.623l-1.03 3.832a.25.25 0 0 0 .364.284l4.312-2.87A11.74 11.74 0 0 0 12 18.763c5.523 0 10-3.477 10-7.881C22 6.477 17.523 3 12 3z"/>
            </svg>
            카카오로 로그인
          </button>

          <div className="mb-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-neutral-200 dark:bg-navy" />
            <span className="text-xs text-neutral-400">또는 이메일로 로그인</span>
            <div className="h-px flex-1 bg-neutral-200 dark:bg-navy" />
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                이메일
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="example@email.com"
                className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-royal focus:ring-2 focus:ring-royal/20 dark:border-navy dark:bg-midnight dark:text-white dark:focus:border-azure"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                비밀번호
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                placeholder="비밀번호 입력"
                className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-royal focus:ring-2 focus:ring-royal/20 dark:border-navy dark:bg-midnight dark:text-white dark:focus:border-azure"
              />
            </div>

            {error && (
              <p className="rounded-lg bg-red-50 px-4 py-2.5 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-2 rounded-xl bg-royal py-3.5 font-bold text-white transition hover:brightness-110 disabled:opacity-50 active:scale-95"
            >
              {loading ? '로그인 중...' : '로그인'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
