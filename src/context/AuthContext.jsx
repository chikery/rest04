import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  // Kakao SDK 초기화
  useEffect(() => {
    const jsKey = import.meta.env.VITE_KAKAO_JS_KEY
    if (!jsKey) { console.warn('[Kakao] VITE_KAKAO_JS_KEY 없음'); return }
    if (!window.Kakao) { console.warn('[Kakao] SDK 미로드'); return }
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(jsKey)
      console.log('[Kakao] SDK 초기화 완료')
    }
  }, [])

  // Kakao OAuth 콜백 처리 (code → id_token → Supabase 로그인)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const code = params.get('code')
    if (!code) return

    // URL에서 code 즉시 제거
    window.history.replaceState({}, '', window.location.pathname + (window.location.hash || ''))

    const redirectUri = window.location.origin + import.meta.env.BASE_URL

    console.log('[Kakao] 코드 감지, 토큰 교환 시작. redirectUri:', redirectUri)

    fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: import.meta.env.VITE_KAKAO_JS_KEY,
        redirect_uri: redirectUri,
        code,
      }),
    })
      .then((r) => r.json())
      .then(async (data) => {
        console.log('[Kakao] 토큰 응답:', data)
        if (data.id_token) {
          const { error } = await supabase.auth.signInWithIdToken({
            provider: 'kakao',
            token: data.id_token,
          })
          if (error) console.error('[Kakao] Supabase signIn 실패', error)
          else console.log('[Kakao] 로그인 성공')
        } else {
          console.error('[Kakao] id_token 없음 — OpenID Connect 활성화 필요. 응답:', data)
        }
      })
      .catch((err) => console.error('[Kakao] 토큰 교환 실패', err))
  }, [])

  // 세션 감지
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

  function signInWithKakao() {
    const redirectUri = window.location.origin + import.meta.env.BASE_URL
    window.Kakao.Auth.authorize({
      redirectUri,
      scope: 'openid profile_nickname profile_image',
    })
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
