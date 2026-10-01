import { site } from '../data/site'

export default function Hero() {
  return (
    <section id="top" className="py-20 sm:py-32">
      <p className="mb-6 font-mono text-xs tracking-widest text-faint uppercase">{site.role}</p>
      <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-6xl">{site.name}</h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted text-pretty">{site.tagline}</p>
    </section>
  )
}
