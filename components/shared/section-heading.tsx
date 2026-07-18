import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center')}>
      <p
        className={cn(
          'mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-primary',
          align === 'center' && 'justify-center'
        )}
      >
        <span className="h-px w-8 bg-primary" aria-hidden="true" />
        {eyebrow}
        {align === 'center' && <span className="h-px w-8 bg-primary" aria-hidden="true" />}
      </p>
      <h2 className="font-serif text-3xl font-bold leading-tight text-foreground text-balance md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 leading-relaxed text-muted-foreground text-pretty">{description}</p>
      )}
    </div>
  )
}
