'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Anchor, Menu, X } from 'lucide-react'
import { NAV_LINKS, COMPANY } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-background/80 backdrop-blur-xl'
          : 'bg-transparent'
      )}
    >
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link href="#" className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Anchor className="size-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-lg font-bold tracking-wide text-foreground">
              {COMPANY.name}
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-primary">
              Private Limited
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link
            href="#contact"
            className="inline-flex items-center rounded-full border border-primary bg-transparent px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Get a Quote
          </Link>
        </div>

        <button
          type="button"
          className="text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-b border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-full border border-primary px-6 py-3 text-center text-sm font-semibold text-primary"
              >
                Get a Quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
