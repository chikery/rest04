import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { useAuth } from '../context/AuthContext'

export default function BoardWrite() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ title: '', content: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  if (!user) {
    return (
      <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center px-4 py-16 text-center">
        <div>
          <p className="mb-4 text-neutral-500 dark:text-neutral-400">로그인 후 글을 작성할 수 있습니다.</p>
          <Link
            to="/login"
            state={{ from: '/board/write' }}
            className="inline-flex items-center gap-2 rounded-full bg-royal px-6 py-3 font-bold text-white transition hover:brightness-110"
          >
            로그인하기 →
          </Link>
        </div>
      </div>
    )
  }

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  async function handleSubmit(e) {
    e.preventDefault()
    if (!form.title.trim() || !form.content.trim()) return setError('제목과 내용을 입력해주세요.')
    setError('')
    setLoading(true)
    const { data, error } = await supabase
      .from('posts')
      .insert({ title: form.title.trim(), content: form.content.trim(), user_id: user.id })
      .select('id')
      .single()
    setLoading(false)
    if (error) return setError(error.message)
    navigate(`/board/${data.id}`, { replace: true })
  }

  return (
    <div className="mx-auto max-w-container px-4 py-16 md:px-10 lg:px-20">
      <div className="mb-8">
        <Link to="/board" className="text-sm text-neutral-400 transition hover:text-royal dark:hover:text-azure">
          ← 게시판으로
        </Link>
        <h1 className="mt-4 text-3xl font-extrabold text-midnight dark:text-white">글쓰기</h1>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-neutral-700 dark:text-neutral-300">제목</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            placeholder="제목을 입력하세요"
            className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-royal focus:ring-2 focus:ring-royal/20 dark:border-navy dark:bg-navy/30 dark:text-white dark:focus:border-azure"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-neutral-700 dark:text-neutral-300">내용</label>
          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            required
            rows={12}
            placeholder="내용을 입력하세요"
            className="w-full resize-none rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-royal focus:ring-2 focus:ring-royal/20 dark:border-navy dark:bg-navy/30 dark:text-white dark:focus:border-azure"
          />
        </div>

        {error && (
          <p className="rounded-lg bg-red-50 px-4 py-2.5 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
            {error}
          </p>
        )}

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-royal px-8 py-3 font-bold text-white transition hover:brightness-110 disabled:opacity-50"
          >
            {loading ? '등록 중...' : '등록하기'}
          </button>
          <Link
            to="/board"
            className="rounded-xl border border-neutral-200 px-8 py-3 font-semibold text-neutral-600 transition hover:border-neutral-300 dark:border-navy dark:text-neutral-400"
          >
            취소
          </Link>
        </div>
      </form>
    </div>
  )
}
