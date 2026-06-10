import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      if (session?.user) fetchProfile(session.user.id)
      setLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
      if (session?.user) fetchProfile(session.user.id)
      else setProfile(null)
    })

    return () => subscription.unsubscribe()
  }, [])

  async function fetchProfile(userId) {
    const { data } = await supabase.from('profiles').select('*').eq('id', userId).single()
    setProfile(data)
  }

  async function signUp({ email, password, nickname }) {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name: nickname } },
    })
    return { error }
  }

  async function signIn({ email, password }) {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    return { error }
  }

  async function signInWithKakao() {
    // HashRouter는 base URL로 리다이렉트 후 Supabase가 토큰을 자동 처리
    const redirectTo = window.location.origin + import.meta.env.BASE_URL
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'kakao',
      options: { redirectTo },
    })
    return { error }
  }

  async function signOut() {
    await supabase.auth.signOut()
  }

  return (
    <AuthContext.Provider value={{ user, profile, loading, signUp, signIn, signInWithKakao, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
