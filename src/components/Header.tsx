import { nav, site } from '../data/site'

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-3 sm:px-6">
        <a href="#top" className="text-sm font-medium">
          {site.name}
        </a>
        <nav aria-label="Sections">
          <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted sm:gap-x-5">
            {nav.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="transition-colors hover:text-ink">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
