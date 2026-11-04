'use client'

import { Button } from '@/components/button'
import { Description, Field, Fieldset, Label } from '@/components/fieldset'
import GemLineItem from '@/components/gem-line-item'
import { Heading } from '@/components/heading'
import { Input } from '@/components/input'
import OrderTotals from '@/components/order-totals'
import { Radio, RadioGroup } from '@/components/radio'
import { Select } from '@/components/select'
import { Text } from '@/components/text'
import { deliveryMethods, getOrderTotals, TOrderItem } from '@/data'
import Link from 'next/link'
import { useState } from 'react'
import DeliveryRadio from './delivery-radio'

const countries = [
  'United Arab Emirates',
  'Saudi Arabia',
  'Qatar',
  'Kuwait',
  'Bahrain',
  'Oman',
  'Sri Lanka',
  'United Kingdom',
  'United States',
]

const CheckoutForm = ({ products }: { products: TOrderItem[] }) => {
  const [delivery, setDelivery] = useState(deliveryMethods[0])
  const [payment, setPayment] = useState('card')
  const totals = getOrderTotals(products, delivery.price)

  return (
    <form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16 2xl:gap-x-20">
      <div>
        {/* Contact */}
        <div>
          <Heading fontSize="text-2xl font-medium text-zinc-950" level={3}>
            <span data-slot="italic">Contact</span> information
          </Heading>

          <Field className="mt-10">
            <Label>Email address</Label>
            <Input type="email" name="email" autoComplete="email" />
            <Description>We’ll send your order confirmation and delivery updates here.</Description>
          </Field>
        </div>

        {/* Shipping */}
        <div className="mt-10 border-t border-zinc-200 pt-10">
          <Heading fontSize="text-2xl font-medium text-zinc-950" level={3}>
            <span data-slot="italic">Shipping</span> information
          </Heading>
          <div className="mt-10 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
            <Field>
              <Label>First name</Label>
              <Input type="text" name="first-name" autoComplete="given-name" />
            </Field>

            <Field>
              <Label>Last name</Label>
              <Input type="text" name="last-name" autoComplete="family-name" />
            </Field>

            <Field className="sm:col-span-2">
              <Label>Address</Label>
              <Input type="text" name="address" autoComplete="address-line1" />
            </Field>

            <Field className="sm:col-span-2">
              <Label>Apartment, villa, office, etc.</Label>
              <Input type="text" name="apartment" autoComplete="address-line2" />
            </Field>

            <Field>
              <Label>City</Label>
              <Input type="text" name="city" autoComplete="address-level2" />
            </Field>

            <Field>
              <Label>Country</Label>
              <Select name="country" autoComplete="country-name">
                {countries.map((country) => (
                  <option key={country}>{country}</option>
                ))}
              </Select>
            </Field>

            <Field>
              <Label>Emirate / State</Label>
              <Input type="text" name="region" autoComplete="address-level1" />
            </Field>

            <Field>
              <Label>Postal code (optional)</Label>
              <Input type="text" name="postal-code" autoComplete="postal-code" />
            </Field>

            <Field className="sm:col-span-2">
              <Label>Phone</Label>
              <Input type="tel" name="phone" autoComplete="tel" />
            </Field>
          </div>
        </div>

        {/* Delivery */}
        <div className="mt-10 border-t border-zinc-200 pt-10">
          <Fieldset>
            <Heading fontSize="text-2xl font-medium text-zinc-950" level={3}>
              <span data-slot="italic">Delivery</span> method
            </Heading>

            <DeliveryRadio value={delivery} onChange={setDelivery} />
          </Fieldset>
        </div>

        {/* Payment */}
        <div className="mt-10 border-t border-zinc-200 pt-10">
          <Heading fontSize="text-2xl font-medium text-zinc-950" level={3}>
            <span data-slot="italic">Payment</span> method
          </Heading>

          <Fieldset className="mt-4">
            <legend className="sr-only">Payment type</legend>

            <RadioGroup
              name="payment-type"
              value={payment}
              onChange={setPayment}
              className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10"
            >
              <Field className="flex items-center gap-x-3">
                <Radio value="card" />
                <Label>Credit / debit card</Label>
              </Field>
              <Field className="flex items-center gap-x-3">
                <Radio value="bank" />
                <Label>Bank transfer</Label>
              </Field>
            </RadioGroup>
          </Fieldset>

          {payment === 'card' ? (
            <div className="mt-8 grid grid-cols-4 gap-x-4 gap-y-6">
              <Field className="col-span-4">
                <Label>Card number</Label>
                <Input type="text" name="card-number" autoComplete="cc-number" />
              </Field>
              <Field className="col-span-4">
                <Label>Name on card</Label>
                <Input type="text" name="name-on-card" autoComplete="cc-name" />
              </Field>
              <Field className="col-span-3">
                <Label>Expiration date (MM/YY)</Label>
                <Input type="text" name="expiration-date" autoComplete="cc-exp" />
              </Field>
              <Field>
                <Label>CVC</Label>
                <Input type="text" name="cvc" autoComplete="cc-csc" />
              </Field>
            </div>
          ) : (
            <Text className="mt-8 text-zinc-500">
              We’ll email our bank details after you confirm your order. Your order will be processed once payment is
              received.
            </Text>
          )}
        </div>
      </div>

      {/* Order summary */}
      <div className="mt-10 lg:mt-0">
        <div className="lg:sticky lg:top-8">
          <Heading fontSize="text-2xl font-medium text-zinc-950" level={3}>
            <span data-slot="italic">Order</span> summary
          </Heading>

          <div className="mt-5 rounded-lg border border-zinc-200 bg-white">
            <h3 className="sr-only">Stones in your cart</h3>
            <ul role="list" className="divide-y divide-zinc-200">
              {products.map((product) => (
                <li key={product.id} className="px-4 py-6 sm:px-6">
                  <GemLineItem item={product} compact />
                </li>
              ))}
            </ul>

            <OrderTotals className="border-t border-zinc-200 px-4 py-6 sm:px-6" totals={totals} />

            <div className="border-t border-zinc-200 px-4 py-6 sm:px-6">
              <Button className="w-full font-medium" href={'/order-successful'}>
                Confirm order
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
          </div>
        </div>
      </div>
    </form>
  )
}

export default CheckoutForm
