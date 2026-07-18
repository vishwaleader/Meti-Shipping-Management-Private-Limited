import Link from 'next/link'
import { Anchor } from 'lucide-react'
import { COMPANY, NAV_LINKS, SERVICES } from '@/lib/constants'

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  )
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64z" />
    </svg>
  )
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.09 24 18.1 24 12.07z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="#" className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Anchor className="size-5" aria-hidden="true" />
              </span>
              <span className="font-serif text-lg font-bold text-foreground">{COMPANY.name}</span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground text-pretty">
              {COMPANY.legalName}. Delivering world-class transport and shipping logistics
              services across international waters since {COMPANY.founded}.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: LinkedinIcon, label: 'LinkedIn' },
                { icon: XIcon, label: 'X' },
                { icon: FacebookIcon, label: 'Facebook' },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <social.icon className="size-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer quick links">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer services">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.title}>
                  <Link
                    href="#services"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Head Office
            </h3>
            <address className="mt-5 space-y-3 text-sm not-italic leading-relaxed text-muted-foreground">
              <p>{COMPANY.address}</p>
              <p>{COMPANY.phone}</p>
              <p>{COMPANY.email}</p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">CIN: U61100MH2010PTC000000</p>
        </div>
      </div>
    </footer>
  )
}
