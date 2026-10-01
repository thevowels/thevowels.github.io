import { site } from '../data/site'
import Section from './Section'

export default function Skills() {
  return (
    <Section id="skills">
      <dl className="space-y-6">
        {site.skills.map((group) => (
          <div key={group.label} className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-6">
            <dt className="text-sm font-medium">{group.label}</dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded border border-line px-2 py-1 font-mono text-xs text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
