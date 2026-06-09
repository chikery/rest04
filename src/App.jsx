import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ScrollToTopButton from './components/ScrollToTopButton'

import Home from './pages/Home'
import Videos from './pages/Videos'
import About from './pages/About'
import Community from './pages/Community'
import SimplePage from './pages/SimplePage'

export default function App() {
  return (
    <div className="min-w-[320px] bg-white text-neutral-900 dark:bg-slate-950 dark:text-neutral-100">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* AI 동영상 */}
          <Route path="/videos" element={<Navigate to="/videos/ai-basics" replace />} />
          <Route path="/videos/:category" element={<Videos />} />

          {/* 교육 소개 */}
          <Route path="/about" element={<Navigate to="/about/intro" replace />} />
          <Route path="/about/:tab" element={<About />} />

          {/* 커뮤니티 */}
          <Route path="/community" element={<Navigate to="/community/notices" replace />} />
          <Route path="/community/:tab" element={<Community />} />

          {/* 정책 페이지 */}
          <Route path="/privacy" element={<SimplePage title="개인정보처리방침" />} />
          <Route path="/terms" element={<SimplePage title="이용약관" />} />
          <Route path="/legal" element={<SimplePage title="법적고지" />} />

          <Route path="*" element={<SimplePage title="페이지를 찾을 수 없습니다" />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}
