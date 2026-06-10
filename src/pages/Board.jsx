import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { useAuth } from '../context/AuthContext'

export default function Board() {
  const { user } = useAuth()
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    const { data } = await supabase
      .from('posts')
      .select('id, title, created_at, profiles(nickname)')
      .order('created_at', { ascending: false })
    setPosts(data || [])
    setLoading(false)
  }

  return (
    <div className="mx-auto max-w-container px-4 py-16 md:px-10 lg:px-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="mb-2 text-sm font-semibold tracking-widest text-royal dark:text-azure">BOARD</p>
          <h1 className="text-4xl font-extrabold text-midnight dark:text-white">자유게시판</h1>
        </div>
        {user && (
          <Link
            to="/board/write"
            className="inline-flex items-center gap-2 rounded-full bg-royal px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-royal/20 transition hover:brightness-110"
          >
            ✏️ 글쓰기
          </Link>
        )}
      </div>

      {loading ? (
        <div className="py-20 text-center text-neutral-400">불러오는 중...</div>
      ) : posts.length === 0 ? (
        <div className="rounded-2xl border border-neutral-100 py-20 text-center dark:border-navy">
          <p className="mb-2 text-neutral-400">아직 게시글이 없습니다.</p>
          {user && (
            <Link to="/board/write" className="text-sm font-semibold text-royal dark:text-azure hover:underline">
              첫 번째 글을 작성해보세요 →
            </Link>
          )}
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-neutral-100 dark:border-navy">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-navy/50">
                <th className="px-6 py-4 text-left font-semibold text-neutral-500 dark:text-neutral-400 w-16">번호</th>
                <th className="px-6 py-4 text-left font-semibold text-neutral-500 dark:text-neutral-400">제목</th>
                <th className="hidden px-6 py-4 text-center font-semibold text-neutral-500 dark:text-neutral-400 md:table-cell w-28">작성자</th>
                <th className="hidden px-6 py-4 text-right font-semibold text-neutral-500 dark:text-neutral-400 md:table-cell w-32">날짜</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100 dark:divide-navy/50">
              {posts.map((post, i) => (
                <tr key={post.id} className="transition hover:bg-royal/5 dark:hover:bg-azure/5">
                  <td className="px-6 py-4 text-neutral-400">{posts.length - i}</td>
                  <td className="px-6 py-4">
                    <Link
                      to={`/board/${post.id}`}
                      className="font-medium text-neutral-800 transition hover:text-royal dark:text-neutral-200 dark:hover:text-azure"
                    >
                      {post.title}
                    </Link>
                  </td>
                  <td className="hidden px-6 py-4 text-center text-neutral-500 dark:text-neutral-400 md:table-cell">
                    {post.profiles?.nickname || '익명'}
                  </td>
                  <td className="hidden px-6 py-4 text-right text-neutral-400 md:table-cell">
                    {new Date(post.created_at).toLocaleDateString('ko-KR')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
