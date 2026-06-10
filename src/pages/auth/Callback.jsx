import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../lib/supabase'

export default function Callback() {
  const navigate = useNavigate()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      navigate(session ? '/' : '/login', { replace: true })
    })
  }, [navigate])

  return (
    <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center">
      <div className="text-center">
        <div className="mb-4 h-10 w-10 animate-spin rounded-full border-4 border-royal border-t-transparent mx-auto" />
        <p className="text-sm text-neutral-500 dark:text-neutral-400">로그인 처리 중...</p>
      </div>
    </div>
  )
}
