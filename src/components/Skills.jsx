import { Section, Icon } from './ui'
import { skillGroups } from '../data/siteData'
export default function Skills() {
  return (
    <Section id="skills" title="My QA & Testing Expertise" intro="Foundational skills I am building, grouped by area. QA is my primary focus; development and design support it.">
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((g, k) => (
          <div key={g.title} className={`glass glass-hover p-6 ${k === 0 ? 'md:col-span-2 border-electric/30' : ''}`}>
            <h3 className="flex items-center gap-3 text-lg font-bold text-white"><span className="rounded-lg bg-gradient-to-br from-electric to-violet p-2"><Icon name={g.icon} size={18} className="text-white" /></span>{g.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">{g.items.map(s => <li key={s} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300 transition hover:border-violet/60 hover:text-white">{s}</li>)}</ul>
          </div>))}
      </div>
    </Section>)
}
