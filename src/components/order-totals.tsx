import { formatPrice, getOrderTotals } from '@/data'
import clsx from 'clsx'

interface OrderTotalsProps {
  totals: ReturnType<typeof getOrderTotals>
  className?: string
}

export default function OrderTotals({ totals, className }: OrderTotalsProps) {
  const rows = [
    { label: 'Subtotal', value: totals.subtotal },
    { label: 'Delivery', value: totals.shipping },
    { label: 'VAT (5%)', value: totals.vat },
  ]

  return (
    <dl className={clsx('space-y-5 text-sm uppercase', className)}>
      {rows.map((row) => (
        <div key={row.label} className="flex items-center justify-between">
          <dt className="text-zinc-600">{row.label}</dt>
          <dd className="font-medium text-zinc-900">{formatPrice(row.value)}</dd>
        </div>
      ))}
      <div className="flex items-center justify-between border-t border-zinc-200 pt-5 text-base font-medium text-zinc-900">
        <dt>Total</dt>
        <dd>{formatPrice(totals.total)}</dd>
      </div>
    </dl>
  )
}
