import type { ReactNode } from 'react'
import { nav } from '../data/site'

interface SectionProps {
  id: string
  children: ReactNode
}

export default function Section({ id, children }: SectionProps) {
  const index = nav.findIndex((item) => item.id === id)
  const number = String(index + 1).padStart(2, '0')
  const label = nav[index]?.label ?? id

  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="border-t border-line py-16 sm:py-24">
      <h2
        id={`${id}-heading`}
        className="mb-8 font-mono text-xs tracking-widest text-faint uppercase"
      >
        <span aria-hidden="true">{number} / </span>
        {label}
      </h2>
      {children}
    </section>
  )
}
