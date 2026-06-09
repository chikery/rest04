/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // 5-Color Palette
        // 1. Midnight — 가장 어두운 다크블루 (다크모드 배경, 히어로 배경)
        midnight: '#0d1b2e',
        // 2. Navy — 네이비 블루 (다크모드 카드, 섹션 배경)
        navy: '#1e3a5f',
        // 3. Royal — 로열 블루 (메인 브랜드, 버튼, 링크)
        royal: '#2563eb',
        // 4. Azure — 밝은 블루 (호버, 하이라이트, 아이콘)
        azure: '#60a5fa',
        // 5. Gold — 골드/앰버 (CTA, 포인트 요소)
        gold: '#f59e0b',
      },
      fontFamily: {
        sans: ['Pretendard', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        container: '1600px',
      },
    },
  },
  plugins: [],
}
