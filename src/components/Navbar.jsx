import { useEffect, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { profile } from '../data/siteData'
const links = [['home','Home'],['about','About'],['skills','QA Skills'],['projects','Projects'],['journey','Testing Journey'],['education','Education'],['contact','Contact']]
export default function Navbar() {
  const [open, setOpen] = useState(false), [active, setActive] = useState('home')
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    links.forEach(([id]) => { const el = document.getElementById(id); el && io.observe(el) })
    return () => io.disconnect()
  }, [])
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-lg">
      <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <span className="text-xl font-bold tracking-tight text-white">
  Miyuni<span className="text-violet-400"> Devanga</span>
</span>
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map(([id, l]) => <li key={id}><a href={`#${id}`} aria-current={active === id ? 'page' : undefined}
            className={`rounded-lg px-3 py-2 text-sm transition ${active === id ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white'}`}>{l}</a></li>)}
        </ul>
        <div className="flex items-center gap-2">
          <a href={profile.cv} download className="btn-primary hidden sm:inline-flex"><Download size={16} aria-hidden />Download CV</a>
          <button className="btn-ghost lg:hidden" aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X size={18} /> : <Menu size={18} />}</button>
        </div>
      </nav>
      {open && <ul className="border-t border-white/10 bg-ink px-5 py-3 lg:hidden">
        {links.map(([id, l]) => <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} className="block py-2 text-slate-300">{l}</a></li>)}
        <li className="pt-2"><a href={profile.cv} download className="btn-primary"><Download size={16} aria-hidden />Download CV</a></li>
      </ul>}
    </header>)
}
