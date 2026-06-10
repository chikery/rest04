import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const key = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!url || !key) {
  console.error('[Supabase] 환경변수 누락 — VITE_SUPABASE_URL 또는 VITE_SUPABASE_ANON_KEY 미설정')
}

export const supabase = createClient(
  url || 'https://placeholder.supabase.co',
  key || 'placeholder-key'
)
