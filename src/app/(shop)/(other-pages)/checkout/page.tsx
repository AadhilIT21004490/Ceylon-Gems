import { Divider } from '@/components/divider'
import { getCartProducts } from '@/data'
import { Metadata } from 'next'
import CheckoutForm from './checkout-form'

export const metadata: Metadata = {
  title: 'Checkout',
  description: 'Complete your gemstone order.',
}

export default async function Page() {
  const products = await getCartProducts()

  return (
    <div className="container">
      <div className="mx-auto max-w-7xl pt-16 pb-24">
        <h2 className="sr-only">Checkout</h2>

        <CheckoutForm products={products} />
      </div>

      <Divider />
    </div>
  )
}
