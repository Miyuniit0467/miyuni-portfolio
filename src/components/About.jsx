import { Section, Icon } from './ui'
const cards = [['GraduationCap','Education','Diploma in IT, ITUM (2025 – Present)'],['Bug','QA Interest','Software testing, defect identification, API testing'],['Code2','Development Skills','Java, Python, JavaScript, SQL, React.js'],['Target','Career Goals','Become a professional QA Engineer with hands-on manual and API testing experience']]
export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-4 text-slate-300">
          <p>I am a motivated Information Technology undergraduate at the Institute of Technology, University of Moratuwa (ITUM), with a strong passion for Software Quality Assurance and Software Testing.</p>
          <p>I have developed foundational knowledge of software testing concepts, testing methodologies, SDLC, STLC, and different testing techniques. I have also gained practical exposure to REST API testing using Postman.</p>
          <p>Alongside my interest in QA, I enjoy software development and creating user-friendly interfaces. I am eager to improve my technical knowledge, contribute to real-world projects, and grow into a skilled QA professional.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">{cards.map(([i, t, d]) => <div key={t} className="glass glass-hover p-5"><Icon name={i} className="text-electric" /><h3 className="mt-3 font-semibold text-white">{t}</h3><p className="mt-1 text-sm text-slate-400">{d}</p></div>)}</div>
      </div>
    </Section>)
}
