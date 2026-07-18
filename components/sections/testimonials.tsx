'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/constants'
import { SectionHeading } from '@/components/shared/section-heading'

export function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20 lg:px-8 lg:py-28">
      <SectionHeading
        eyebrow="Testimonials"
        title="Trusted by Industry Leaders"
        description="Our partners' words carry more weight than ours ever could."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="flex flex-col rounded-lg border border-border bg-card p-8"
          >
            <Quote className="mb-5 size-8 text-primary" aria-hidden="true" />
            <blockquote className="flex-1 leading-relaxed text-foreground text-pretty">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-4 border-t border-border pt-6">
              <span
                className="flex size-11 items-center justify-center rounded-full bg-primary font-serif text-lg font-bold text-primary-foreground"
                aria-hidden="true"
              >
                {t.name.charAt(0)}
              </span>
              <span>
                <span className="block text-sm font-semibold text-foreground">{t.name}</span>
                <span className="block text-xs text-muted-foreground">{t.role}</span>
              </span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  )
}
