import { site } from '../data/site'
import Section from './Section'

export default function Contact() {
  return (
    <Section id="contact">
      <p className="mb-8 leading-relaxed text-muted">
        The best way to reach me is by email. I am happy to talk about work, projects, or programming in
        general.
      </p>
      <dl className="space-y-3">
        {site.links.map((link) => (
          <div key={link.label} className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-6">
            <dt className="text-sm font-medium">{link.label}</dt>
            <dd>
              <a
                href={link.href}
                className="break-all text-muted underline decoration-line underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
              >
                {link.text}
              </a>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
