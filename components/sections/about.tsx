'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/shared/section-heading'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20 lg:px-8 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[4/3] overflow-hidden rounded-lg"
        >
          <Image
            src="/images/about-port.png"
            alt="Aerial view of a modern shipping port terminal at dusk"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="absolute bottom-0 left-0 bg-primary px-8 py-6 text-primary-foreground">
            <p className="font-serif text-4xl font-bold">2008</p>
            <p className="text-xs font-semibold uppercase tracking-widest">Incorporated</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            eyebrow="About Us"
            title="A Legacy Forged on International Waters"
            align="left"
          />
          <p className="mt-6 leading-relaxed text-muted-foreground text-pretty">
            Founded in 2008, Meti Shipping Management Private Limited has grown from a
            regional cargo operations desk in Goa into a globally recognized
            maritime transport and storage company. We combine deep operational expertise
            with an unwavering commitment to safety, efficiency, and client success.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
            Today, our teams manage complex supply chain flows, customs port clearances,
            and secure bonded warehousing space worldwide — supporting commodities transit,
            bulk transport, and container logistics with precision that our partners describe
            as second to none.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              'ISO 9001 & ISM certified operations',
              'Customs clearance integration',
              'Dedicated 24/7 operations desk',
              'Secure bonded warehousing space',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
