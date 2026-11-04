import { Button } from '@/components/button'
import { Divider } from '@/components/divider'
import GemLineItem from '@/components/gem-line-item'
import { Heading } from '@/components/heading'
import OrderTotals from '@/components/order-totals'
import PaymentCardSummary from '@/components/payment-card-summary'
import { Text } from '@/components/text'
import { getOrder } from '@/data'
import clsx from 'clsx'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

const stages = ['Order placed', 'Quality check', 'Shipped', 'Delivered']

export async function generateMetadata({ params }: { params: Promise<{ number: string }> }): Promise<Metadata> {
  const { number } = await params
  const order = await getOrder(number)
  if (!order) {
    return {
      title: 'Order not found',
      description: 'The order you are looking for does not exist.',
    }
  }
  return { title: `Order #${order.number}`, description: order.status }
}

const Page = async ({ params }: { params: Promise<{ number: string }> }) => {
  const { number } = await params
  const order = await getOrder(number)
  if (!order) {
    return notFound()
  }

  const progress = order.step === stages.length - 1 ? 100 : ((order.step * 2 + 1) / 8) * 100

  return (
    <div className="container">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-5xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Text className="mb-1">
              Placed <time dateTime={order.placedDatetime}>{order.placedOn}</time>
            </Text>
            <Heading level={1} className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
              <span data-slot="italic">Order</span> #{order.number}
            </Heading>
          </div>

          <Button outline href="/contact">
            Need help?
          </Button>
        </div>

        {/* Delivery progress */}
        <section aria-labelledby="status-heading" className="mt-8 rounded-lg border border-zinc-200 p-4 sm:p-6 lg:p-8">
          <h2 id="status-heading" className="sr-only">
            Delivery status
          </h2>
          <Text className="text-sm font-medium text-zinc-900">{order.status}</Text>
          <div aria-hidden="true" className="mt-6">
            <div className="overflow-hidden rounded-full bg-zinc-200">
              <div style={{ width: `${progress}%` }} className="h-2 rounded-full bg-zinc-950 sm:h-1.5" />
            </div>
            <div className="mt-6 hidden grid-cols-4 text-sm font-medium text-zinc-500 uppercase sm:grid">
              {stages.map((stage, index) => (
                <div
                  key={stage}
                  className={clsx(
                    order.step >= index && 'text-zinc-950',
                    index === 0 && 'text-left',
                    index === 1 && 'text-center',
                    index === 2 && 'text-center',
                    index === 3 && 'text-right'
                  )}
                >
                  {stage}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stones */}
        <section aria-labelledby="stones-heading" className="mt-8 rounded-lg border border-zinc-200">
          <h2 id="stones-heading" className="sr-only">
            Stones purchased
          </h2>
          <ul role="list" className="divide-y divide-zinc-200 px-4 sm:px-6 lg:px-8">
            {order.items.map((item) => (
              <li key={item.id} className="py-6 lg:py-8">
                <GemLineItem item={item} />
              </li>
            ))}
          </ul>
        </section>

        {/* Delivery and billing */}
        <section aria-labelledby="billing-heading" className="mt-8">
          <h2 id="billing-heading" className="sr-only">
            Delivery and billing summary
          </h2>

          <div className="bg-zinc-50 px-4 py-6 sm:rounded-lg sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8">
            <dl className="grid gap-6 text-sm uppercase sm:grid-cols-2 md:gap-x-8 lg:col-span-7">
              <div>
                <dt className="font-medium text-zinc-900">Delivery address</dt>
                <dd className="mt-3 text-zinc-500">
                  {order.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-900">Delivery updates</dt>
                <dd className="mt-3 space-y-1 text-zinc-500">
                  <p>{order.email}</p>
                  <p>{order.phone}</p>
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="font-medium text-zinc-900">Payment information</dt>
                <dd className="mt-3">
                  <PaymentCardSummary {...order.payment} />
                </dd>
              </div>
            </dl>

            <OrderTotals className="mt-8 lg:col-span-5 lg:mt-0" totals={order.totals} />
          </div>
        </section>
      </div>
      <Divider />
    </div>
  )
}

export default Page
