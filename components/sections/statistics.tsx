'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { STATS } from '@/lib/constants'

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const start = performance.now()
    let frame: number
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * value))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value])

  return (
    <span ref={ref} className="font-serif text-5xl font-bold text-primary md:text-6xl">
      {display}
      {suffix}
    </span>
  )
}

export function Statistics() {
  return (
    <section className="border-y border-border bg-card py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 lg:grid-cols-4 lg:px-8">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col items-center text-center"
          >
            <Counter value={stat.value} suffix={stat.suffix} />
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
