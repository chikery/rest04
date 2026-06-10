import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { useAuth } from '../context/AuthContext'

export default function BoardDetail() {
  const { id } = useParams()
  const { user } = useAuth()
  const navigate = useNavigate()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    fetchPost()
  }, [id])

  async function fetchPost() {
    const { data } = await supabase
      .from('posts')
      .select('*, profiles(nickname, avatar_url)')
      .eq('id', id)
      .single()
    setPost(data)
    setLoading(false)
  }

  async function handleDelete() {
    if (!confirm('게시글을 삭제하시겠습니까?')) return
    setDeleting(true)
    await supabase.from('posts').delete().eq('id', id)
    navigate('/board', { replace: true })
  }

  if (loading) {
    return (
      <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-royal border-t-transparent" />
      </div>
    )
  }

  if (!post) {
    return (
      <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center text-center px-4">
        <div>
          <p className="mb-4 text-neutral-500">게시글을 찾을 수 없습니다.</p>
          <Link to="/board" className="text-sm font-semibold text-royal dark:text-azure hover:underline">
            게시판으로 돌아가기
          </Link>
        </div>
      </div>
    )
  }

  const isOwner = user?.id === post.user_id

  return (
    <div className="mx-auto max-w-container px-4 py-16 md:px-10 lg:px-20">
      <Link to="/board" className="text-sm text-neutral-400 transition hover:text-royal dark:hover:text-azure">
        ← 게시판으로
      </Link>

      <div className="mt-6 rounded-2xl border border-neutral-100 bg-white p-8 shadow-sm dark:border-navy dark:bg-navy/30">
        {/* 헤더 */}
        <div className="mb-8 border-b border-neutral-100 pb-6 dark:border-navy/60">
          <h1 className="mb-4 text-2xl font-extrabold text-midnight dark:text-white md:text-3xl">
            {post.title}
          </h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-royal to-navy text-sm font-bold text-white">
                {(post.profiles?.nickname || '?').charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                  {post.profiles?.nickname || '익명'}
                </p>
                <p className="text-xs text-neutral-400">
                  {new Date(post.created_at).toLocaleString('ko-KR')}
                </p>
              </div>
            </div>

            {isOwner && (
              <div className="flex gap-2">
                <button
                  onClick={handleDelete}
                  disabled={deleting}
                  className="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-500 transition hover:bg-red-50 disabled:opacity-50 dark:border-red-900 dark:hover:bg-red-900/20"
                >
                  {deleting ? '삭제 중...' : '삭제'}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* 본문 */}
        <div className="min-h-40 whitespace-pre-wrap text-sm leading-8 text-neutral-700 dark:text-neutral-300">
          {post.content}
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <Link
          to="/board"
          className="rounded-xl border border-neutral-200 px-8 py-3 text-sm font-semibold text-neutral-600 transition hover:border-royal hover:text-royal dark:border-navy dark:text-neutral-400 dark:hover:border-azure dark:hover:text-azure"
        >
          목록으로
        </Link>
      </div>
    </div>
  )
}
