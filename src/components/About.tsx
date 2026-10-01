import { site } from '../data/site'
import Section from './Section'

export default function About() {
  return (
    <Section id="about">
      <div className="space-y-5 leading-relaxed text-muted text-pretty">
        {site.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  )
}
