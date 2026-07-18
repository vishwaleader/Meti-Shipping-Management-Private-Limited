'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, CheckCircle2 } from 'lucide-react'
import { COMPANY } from '@/lib/constants'
import { SectionHeading } from '@/components/shared/section-heading'
import { cn } from '@/lib/utils'

const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  subject: z.string().min(3, 'Please enter a subject'),
  message: z.string().min(10, 'Please provide a few details (min 10 characters)'),
})

type ContactForm = z.infer<typeof contactSchema>

const inputClass =
  'w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({ resolver: zodResolver(contactSchema) })

  const onSubmit = async (_data: ContactForm) => {
    await new Promise((r) => setTimeout(r, 600))
    setSubmitted(true)
    reset()
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <SectionHeading
              eyebrow="Contact Us"
              title="Let's Chart Your Course"
              align="left"
            />
            <p className="mt-6 leading-relaxed text-muted-foreground text-pretty">
              Whether you need bulk shipping, custom customs clearance, or a long-term
              warehousing partner, our team responds within one business day.
            </p>
            <ul className="mt-10 space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Head Office</p>
                  <p className="text-sm text-muted-foreground">{COMPANY.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Phone</p>
                  <p className="text-sm text-muted-foreground">{COMPANY.phone}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">{COMPANY.email}</p>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-lg border border-border bg-background p-8 lg:p-10"
              noValidate
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className={cn(inputClass, errors.name && 'border-destructive')}
                    aria-invalid={!!errors.name}
                    {...register('name')}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-destructive">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    className={cn(inputClass, errors.email && 'border-destructive')}
                    aria-invalid={!!errors.email}
                    {...register('email')}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-destructive">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+91 ..."
                    className={cn(inputClass, errors.phone && 'border-destructive')}
                    aria-invalid={!!errors.phone}
                    {...register('phone')}
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-destructive">{errors.phone.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="e.g. Vessel chartering inquiry"
                    className={cn(inputClass, errors.subject && 'border-destructive')}
                    aria-invalid={!!errors.subject}
                    {...register('subject')}
                  />
                  {errors.subject && (
                    <p className="mt-1.5 text-xs text-destructive">{errors.subject.message}</p>
                  )}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your requirements..."
                    className={cn(inputClass, 'resize-none', errors.message && 'border-destructive')}
                    aria-invalid={!!errors.message}
                    {...register('message')}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-destructive">{errors.message.message}</p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-8 w-full rounded-full bg-primary py-4 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto sm:px-12"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitted && (
                <p
                  role="status"
                  className="mt-4 flex items-center gap-2 text-sm font-medium text-primary"
                >
                  <CheckCircle2 className="size-4" aria-hidden="true" />
                  Thank you — your message has been received. We&apos;ll be in touch shortly.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
