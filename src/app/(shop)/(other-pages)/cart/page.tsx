import { Button } from '@/components/button'
import GemLineItem from '@/components/gem-line-item'
import { Heading } from '@/components/heading'
import { Link } from '@/components/link'
import OrderTotals from '@/components/order-totals'
import { Text } from '@/components/text'
import { deliveryMethods, getCartProducts, getOrderTotals } from '@/data'
import { CheckIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Your Cart',
  description: 'Review the gemstones you have selected before checkout.',
}

export default async function Page() {
  const products = await getCartProducts()
  const totals = getOrderTotals(products, deliveryMethods[0].price)

  return (
    <div className="container">
      <div className="mx-auto max-w-7xl pt-16 pb-24">
        <Heading level={1}>
          Your <span data-slot="italic">Cart</span>
        </Heading>
        <Text className="mt-3 text-zinc-500">
          {products.length} {products.length === 1 ? 'stone' : 'stones'} selected
        </Text>

        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-14">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Stones in your cart
            </h2>

            <ul role="list" className="divide-y divide-zinc-900/10 border-t border-b border-zinc-900/10">
              {products.map((product) => (
                <li key={product.id} className="py-6 sm:py-10">
                  <GemLineItem item={product}>
                    <div className="mt-5 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-x-2 text-zinc-700">
                        <CheckIcon aria-hidden="true" className="size-5 shrink-0 text-green-500" />
                        <Text className="text-xs">One of a kind</Text>
                      </div>
                      <button
                        type="button"
                        className="-m-2 inline-flex items-center gap-x-1 p-2 text-zinc-500 hover:text-zinc-900"
                      >
                        <XMarkIcon aria-hidden="true" className="size-4" />
                        <span className="text-xs uppercase">
                          Remove<span className="sr-only"> {product.name}</span>
                        </span>
                      </button>
                    </div>
                  </GemLineItem>
                </li>
              ))}
            </ul>
          </section>

          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-lg border border-zinc-900/10 px-4 py-6 sm:p-6 lg:sticky lg:top-8 lg:col-span-5 lg:mt-0 lg:p-8"
          >
            <Heading id="summary-heading" fontSize="text-2xl font-medium text-zinc-950" level={3}>
              <span data-slot="italic">Order</span> summary
            </Heading>

            <OrderTotals className="mt-8" totals={totals} />
            <Text className="mt-4 text-xs text-zinc-500">
              Delivery is estimated using {deliveryMethods[0].title}. You can change it at checkout.
            </Text>

            <div className="mt-8">
              <Button className="w-full font-medium" href={'/checkout'}>
                Checkout
              </Button>
              <div className="mt-4 flex justify-center text-center text-sm text-zinc-500">
                <span className="text-xs">
                  or{' '}
                  <span className="text-xs font-medium text-zinc-900 uppercase">
                    <Link href="/collections/page-style-2/all">Continue Shopping</Link>
                    <span aria-hidden="true"> →</span>
                  </span>
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
