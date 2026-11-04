import { Button } from '@/components/button'
import { Divider } from '@/components/divider'
import GemLineItem from '@/components/gem-line-item'
import { Heading } from '@/components/heading'
import { Text, TextLink } from '@/components/text'
import { formatPrice, getOrders } from '@/data'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Your Orders',
  description: 'Check the status of your gemstone orders.',
}

export default async function Page() {
  const orders = await getOrders()

  return (
    <div className="container">
      <div className="mx-auto max-w-3xl py-16 sm:py-24">
        <div className="max-w-xl">
          <Heading level={1} id="your-orders-heading" bigger>
            Your <span data-slot="italic">Orders</span>
          </Heading>
          <Text className="mt-2 text-zinc-500">Follow your deliveries and revisit the stones in your collection.</Text>
        </div>

        <div className="mt-12 space-y-16 sm:mt-16">
          {orders.map((order) => (
            <section
              key={order.number}
              aria-labelledby={`${order.number}-heading`}
              className="rounded-lg border border-zinc-200"
            >
              <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-b border-zinc-200 bg-zinc-50 px-4 py-4 sm:px-6">
                <div>
                  <h2 id={`${order.number}-heading`} className="text-base font-medium text-zinc-900">
                    Order #{order.number}
                  </h2>
                  <Text className="mt-0.5 text-xs text-zinc-500">
                    Placed <time dateTime={order.placedDatetime}>{order.placedOn}</time>
                  </Text>
                </div>
                <div className="rounded-full border border-zinc-900 px-3.5 py-1.5 text-xs leading-none text-zinc-900 uppercase">
                  {order.statusLabel}
                </div>
              </div>

              <ul role="list" className="divide-y divide-zinc-200 px-4 sm:px-6">
                {order.items.map((item) => (
                  <li key={item.id} className="py-6">
                    <GemLineItem item={item} />
                    <div className="mt-5 flex flex-wrap gap-2 sm:justify-end">
                      <Button outline href={`/products/${item.handle}`}>
                        View stone
                      </Button>
                      <Button outline href={`/collections/page-style-2/all?type=${item.type}`}>
                        Shop similar
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-zinc-200 px-4 py-4 sm:px-6">
                <Text className="font-medium">Total {formatPrice(order.totals.total)}</Text>
                <TextLink href={'/orders/' + order.number} className="font-medium text-zinc-950 underline">
                  Order details
                  <span aria-hidden="true" className="font-light">
                    {' '}
                    &rarr;
                  </span>
                </TextLink>
              </div>
            </section>
          ))}
        </div>
      </div>
      <Divider />
    </div>
  )
}
