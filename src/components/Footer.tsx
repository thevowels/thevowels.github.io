import { site } from '../data/site'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-4 py-8 font-mono text-xs text-faint sm:px-6">
        <p>
          © {year} {site.name}
        </p>
        <a href="#top" className="transition-colors hover:text-ink">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
