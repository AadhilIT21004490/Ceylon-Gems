import { formatPrice, TOrderItem } from '@/data'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

interface GemLineItemProps {
  item: TOrderItem
  compact?: boolean
  children?: React.ReactNode
}

export default function GemLineItem({ item, compact = false, children }: GemLineItemProps) {
  return (
    <div className="flex gap-4 sm:gap-6">
      <div className={clsx('relative aspect-square flex-none self-start', compact ? 'w-20' : 'w-24 sm:w-36')}>
        <Image
          src={item.imageSrc}
          alt={item.imageAlt}
          fill
          sizes={compact ? '5rem' : '(min-width: 640px) 9rem, 6rem'}
          className="rounded-lg object-cover"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-sm font-medium text-zinc-900 uppercase">
            <Link href={`/products/${item.handle}`}>{item.name}</Link>
          </h3>
          <p className="flex-none text-sm font-medium text-zinc-900">{formatPrice(item.price)}</p>
        </div>

        {compact ? (
          <p className="mt-1.5 text-xs/5 text-zinc-500 uppercase">
            {item.specs.map((spec) => spec.value).join(' · ')}
          </p>
        ) : (
          <dl className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
            {item.specs.map((spec) => (
              <div key={spec.label}>
                <dt className="text-xs text-zinc-500 uppercase">{spec.label}</dt>
                <dd className="mt-0.5 text-sm text-zinc-900 uppercase">{spec.value}</dd>
              </div>
            ))}
          </dl>
        )}

        {children}
      </div>
    </div>
  )
}
