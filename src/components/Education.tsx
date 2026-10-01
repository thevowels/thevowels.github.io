import { site } from '../data/site'
import Section from './Section'

export default function Education() {
  const { program, detail, school, years } = site.education

  return (
    <Section id="education">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h3 className="font-medium">{program}</h3>
        <p className="font-mono text-xs text-faint">{years}</p>
      </div>
      <p className="mt-1 text-muted">{school}</p>
      <p className="mt-3 leading-relaxed text-muted">{detail}</p>
    </Section>
  )
}
