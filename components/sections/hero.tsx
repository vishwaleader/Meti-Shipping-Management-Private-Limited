'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { COMPANY } from '@/lib/constants'

export function Hero() {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden">
      <Image
        src="/images/hero-ship.png"
        alt="Container cargo ship at sea during golden hour"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/20" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-20 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-primary"
        >
          <span className="h-px w-10 bg-primary" aria-hidden="true" />
          {COMPANY.tagline}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="max-w-3xl font-serif text-5xl font-bold leading-tight text-foreground text-balance md:text-6xl lg:text-7xl"
        >
          Global Shipping &amp; Logistics Excellence
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty"
        >
          {COMPANY.legalName} delivers world-class vessel operations, chartering,
          and integrated cargo logistics — trusted by industry leaders across three
          continents since 2008.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Link
            href="#services"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Explore Our Services
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-border bg-background/40 px-8 py-4 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-primary hover:text-primary"
          >
            Speak With Our Team
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
