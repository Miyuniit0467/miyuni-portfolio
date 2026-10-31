import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
export const Icon = ({ name, ...p }) => { const C = Icons[name] || Icons.Circle; return <C aria-hidden="true" {...p} /> }
export const Section = ({ id, title, intro, children }) => (
  <section id={id} aria-labelledby={`${id}-h`} className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: .5 }}>
      <h2 id={`${id}-h`} className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{title}</h2>
      {intro && <p className="mt-3 max-w-2xl text-slate-400">{intro}</p>}
      <div className="mt-10">{children}</div>
    </motion.div>
  </section>)
export const Ext = ({ href, children, className = 'btn-ghost' }) => href ? <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a> : null
