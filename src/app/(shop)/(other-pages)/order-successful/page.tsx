import { Divider } from '@/components/divider'
import GemLineItem from '@/components/gem-line-item'
import { Heading } from '@/components/heading'
import OrderTotals from '@/components/order-totals'
import PaymentCardSummary from '@/components/payment-card-summary'
import { Text } from '@/components/text'
import { getOrder } from '@/data'
import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Order Confirmed',
  description: 'Your gemstone order has been placed.',
}

const nextSteps = [
  { title: 'Confirmation', description: 'We’ll email your order details shortly.' },
  { title: 'Careful packing', description: 'Your stones are checked and securely packed.' },
  { title: 'Delivery', description: 'We’ll share tracking details once your order ships.' },
]

export default async function Page() {
  // Sample order: replace with the order the customer has just placed.
  const order = await getOrder('4657')
  if (!order) {
    return notFound()
  }

  return (
    <main className="container">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-3xl">
        <div className="flex w-fit items-center justify-center rounded-full border border-zinc-900 px-6 py-2.5 text-sm font-medium">
          <span className="text-xs uppercase">Order #{order.number}</span>
        </div>
        <Heading bigger level={1} className="mt-4">
          Thank you for <span data-slot="italic">your order</span>
        </Heading>

        <Text className="mt-2.5 text-sm text-zinc-500">
          Your gemstones are reserved for you. We’ll send a confirmation to {order.email} shortly.
        </Text>

        <ol className="mt-12 grid gap-6 sm:grid-cols-3">
          {nextSteps.map((step, index) => (
            <li key={step.title} className="rounded-lg border border-zinc-200 p-5">
              <p className="text-xs text-zinc-500">({index + 1})</p>
              <Text className="mt-3 font-medium">{step.title}</Text>
              <Text className="mt-1 text-xs text-zinc-500">{step.description}</Text>
            </li>
          ))}
        </ol>

        <h2 className="sr-only">Stones in your order</h2>
        <ul role="list" className="mt-12 divide-y divide-zinc-200 border-t border-zinc-200">
          {order.items.map((item) => (
            <li key={item.id} className="py-6">
              <GemLineItem item={item} />
            </li>
          ))}
        </ul>

        <OrderTotals className="border-t border-zinc-200 pt-6" totals={order.totals} />

        <dl className="mt-16 grid gap-8 text-sm text-zinc-600 sm:grid-cols-2 sm:gap-x-4">
          <div>
            <dt className="font-medium text-zinc-900 uppercase">Shipping address</dt>
            <dd className="mt-2">
              <address className="uppercase not-italic">
                {order.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </dd>
          </div>
          <div>
            <dt className="font-medium text-zinc-900 uppercase">Payment information</dt>
            <dd className="mt-2">
              <PaymentCardSummary {...order.payment} />
            </dd>
          </div>
        </dl>

        <div className="mt-16 flex flex-wrap justify-between gap-4 border-t border-zinc-200 py-6">
          <Link href={`/orders/${order.number}`} className="text-sm font-medium text-zinc-950 uppercase">
            View order
            <span aria-hidden="true"> &rarr;</span>
          </Link>
          <Link href="/collections/page-style-2/all" className="text-sm font-medium text-zinc-950 uppercase">
            Continue Shopping
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </div>

      <Divider />
    </main>
  )
}
