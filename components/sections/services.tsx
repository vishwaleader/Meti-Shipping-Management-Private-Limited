'use client'

import { motion } from 'framer-motion'
import { SERVICES } from '@/lib/constants'
import { SectionHeading } from '@/components/shared/section-heading'

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Comprehensive Maritime Solutions"
          description="From chartering to compliance, we deliver every service your fleet and cargo demand — executed with world-class precision."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group rounded-lg border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50"
            >
              <span className="mb-6 flex size-13 items-center justify-center rounded-full border border-primary/40 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="font-serif text-xl font-bold text-foreground">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
