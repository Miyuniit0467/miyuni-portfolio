import { useEffect, useState } from 'react'
import { MotionConfig } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Journey from './components/Journey'
import Education from './components/Education'
import Contact from './components/Contact'
export default function App() {
  const [top, setTop] = useState(false)
  useEffect(() => { const f = () => setTop(window.scrollY > 600); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f) }, [])
  return (
    <MotionConfig reducedMotion="user">
      <a href="#about" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-2 focus:text-black">Skip to content</a>
      <Navbar />
      <main><Hero /><About /><Skills /><Projects /><Journey /><Education /><Contact /></main>
      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">© {new Date().getFullYear()} Miyuni Devanga</footer>
      {top && <button aria-label="Back to top" onClick={() => window.scrollTo({ top: 0 })} className="btn-primary fixed bottom-6 right-6 !rounded-full !p-3"><ArrowUp size={18} /></button>}
    </MotionConfig>)
}
