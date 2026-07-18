'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { WHY_US } from '@/lib/constants'
import { SectionHeading } from '@/components/shared/section-heading'

export function WhyUs() {
  return (
    <section id="why-us" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20 lg:px-8 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Why Meti Shipping"
            title="The Standard Others Measure Against"
            align="left"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {WHY_US.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-lg border border-border bg-card p-6"
              >
                <item.icon className="mb-4 size-6 text-primary" aria-hidden="true" />
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[3/4] overflow-hidden rounded-lg lg:aspect-auto lg:h-full lg:min-h-[560px]"
        >
          <Image
            src="/images/vessel-deck.png"
            alt="Container vessel deck at sea"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <blockquote className="absolute bottom-0 p-8">
            <p className="font-serif text-2xl font-bold leading-snug text-foreground text-balance">
              &ldquo;Precision at sea. Reliability on shore.&rdquo;
            </p>
            <cite className="mt-2 block text-sm not-italic text-primary">
              — Our Operating Philosophy
            </cite>
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
