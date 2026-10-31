import { motion } from 'framer-motion'
import { Section, Icon } from './ui'
import { journey } from '../data/siteData'
export default function Journey() {
  return (
    <Section id="journey" title="My Journey into Software Quality Assurance" intro="Learning activities and practice, not professional work experience.">
      <ol className="relative ml-4 border-l border-white/15">
        {journey.map(([i, t], k) => (
          <motion.li key={t} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: k * .05 }} className="mb-6 ml-8">
            <span className="absolute -left-5 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-electric to-violet"><Icon name={i} size={18} className="text-white" /></span>
            <div className="glass glass-hover px-5 py-4 font-medium text-white">{t}</div>
          </motion.li>))}
      </ol>
    </Section>)
}
