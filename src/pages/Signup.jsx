import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Signup() {
  const { signUp } = useAuth()
  const navigate = useNavigate()

  const [form, setForm] = useState({ email: '', password: '', confirm: '', nickname: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    if (form.password !== form.confirm) return setError('비밀번호가 일치하지 않습니다.')
    if (form.password.length < 6) return setError('비밀번호는 6자 이상이어야 합니다.')
    setLoading(true)
    const { error } = await signUp({ email: form.email, password: form.password, nickname: form.nickname })
    setLoading(false)
    if (error) return setError(error.message)
    setDone(true)
  }

  if (done) {
    return (
      <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center px-4 py-16">
        <div className="w-full max-w-md rounded-2xl border border-neutral-200 bg-white p-10 text-center shadow-sm dark:border-navy dark:bg-navy/30">
          <div className="mb-4 text-5xl">📧</div>
          <h2 className="mb-3 text-xl font-extrabold text-midnight dark:text-white">이메일을 확인해주세요</h2>
          <p className="mb-6 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
            <strong className="text-midnight dark:text-white">{form.email}</strong>로<br />
            인증 메일을 발송했습니다. 링크를 클릭하면 가입이 완료됩니다.
          </p>
          <Link
            to="/login"
            className="inline-flex items-center gap-2 rounded-xl bg-royal px-6 py-3 font-bold text-white transition hover:brightness-110"
          >
            로그인 페이지로 →
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link to="/" className="inline-flex items-center gap-1.5">
            <span className="text-2xl font-extrabold text-midnight dark:text-white">Roadmap</span>
            <span className="text-2xl font-extrabold text-royal dark:text-azure">AI</span>
          </Link>
          <h1 className="mt-6 text-2xl font-extrabold text-midnight dark:text-white">회원가입</h1>
          <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
            이미 계정이 있으신가요?{' '}
            <Link to="/login" className="font-semibold text-royal dark:text-azure hover:underline">
              로그인
            </Link>
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm dark:border-navy dark:bg-navy/30">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-neutral-700 dark:text-neutral-300">닉네임</label>
              <input
                type="text"
                name="nickname"
                value={form.nickname}
                onChange={handleChange}
                required
                placeholder="사용할 닉네임"
                className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-royal focus:ring-2 focus:ring-royal/20 dark:border-navy dark:bg-midnight dark:text-white dark:focus:border-azure"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-neutral-700 dark:text-neutral-300">이메일</label>
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
              <label className="mb-1.5 block text-sm font-semibold text-neutral-700 dark:text-neutral-300">비밀번호</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                placeholder="6자 이상"
                className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-royal focus:ring-2 focus:ring-royal/20 dark:border-navy dark:bg-midnight dark:text-white dark:focus:border-azure"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-neutral-700 dark:text-neutral-300">비밀번호 확인</label>
              <input
                type="password"
                name="confirm"
                value={form.confirm}
                onChange={handleChange}
                required
                placeholder="비밀번호 재입력"
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
              {loading ? '처리 중...' : '회원가입'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
