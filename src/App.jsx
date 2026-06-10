import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ScrollToTopButton from './components/ScrollToTopButton'

import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Community from './pages/Community'
import Board from './pages/Board'
import BoardWrite from './pages/BoardWrite'
import BoardDetail from './pages/BoardDetail'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Callback from './pages/auth/Callback'
import SimplePage from './pages/SimplePage'

export default function App() {
  return (
    <div className="min-w-[320px] bg-white text-neutral-900 dark:bg-slate-950 dark:text-neutral-100">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* 서비스 */}
          <Route path="/services" element={<Navigate to="/services/coaching" replace />} />
          <Route path="/services/:tab" element={<Services />} />

          {/* 회사 소개 */}
          <Route path="/about" element={<Navigate to="/about/intro" replace />} />
          <Route path="/about/:tab" element={<About />} />

          {/* 커뮤니티 */}
          <Route path="/community" element={<Navigate to="/community/notices" replace />} />
          <Route path="/community/:tab" element={<Community />} />

          {/* 게시판 */}
          <Route path="/board" element={<Board />} />
          <Route path="/board/write" element={<BoardWrite />} />
          <Route path="/board/:id" element={<BoardDetail />} />

          {/* 인증 */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/auth/callback" element={<Callback />} />

          {/* 정책 */}
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
