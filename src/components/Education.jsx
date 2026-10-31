import { GraduationCap } from 'lucide-react'
import { Section } from './ui'
export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="glass flex gap-5 p-6">
        <GraduationCap className="mt-1 shrink-0 text-violet" aria-hidden />
        <div>
          <h3 className="text-lg font-bold text-white">Diploma in Information Technology</h3>
          <p className="text-slate-300">Institute of Technology, University of Moratuwa (ITUM), Sri Lanka</p>
          <p className="text-sm text-electric">2025 – Present</p>
          <p className="mt-3 max-w-2xl text-sm text-slate-400">My studies focus on software development, software quality assurance, and practical projects that build both coding and testing skills.</p>
        </div>
      </div>
    </Section>)
}
