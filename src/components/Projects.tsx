import { site } from '../data/site'
import Section from './Section'

export default function Projects() {
  return (
    <Section id="projects">
      <ul className="divide-y divide-line border-y border-line">
        {site.projects.map((project) => (
          <li key={project.title}>
            <a href={project.href} className="group block py-6">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-medium">{project.title}</h3>
                <span
                  aria-hidden="true"
                  className="text-faint transition-transform group-hover:translate-x-1 group-hover:text-ink motion-reduce:transition-none"
                >
                  →
                </span>
              </div>
              <p className="mt-2 leading-relaxed text-muted">{project.description}</p>
              <p className="mt-3 font-mono text-xs text-faint">{project.tags.join(' · ')}</p>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
