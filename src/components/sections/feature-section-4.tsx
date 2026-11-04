import {
  CheckmarkBadge01Icon,
  CreditCardIcon,
  CustomerService01Icon,
  DeliveryBox01Icon,
  DiamondIcon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import clsx from 'clsx'
import { Text } from '../text'

const data = [
  {
    id: 1,
    title: 'One of a kind',
    description: 'Every natural gemstone is truly unique.',
    icon: DiamondIcon,
  },
  {
    id: 2,
    title: 'Know your stone',
    description: 'Carat, cut, origin and treatment are always listed.',
    icon: CheckmarkBadge01Icon,
  },
  {
    id: 3,
    title: 'Careful packing',
    description: 'Each stone is securely packed for its journey to you.',
    icon: DeliveryBox01Icon,
  },
  {
    id: 4,
    title: 'Simple payment',
    description: 'Pay by card or bank transfer at checkout.',
    icon: CreditCardIcon,
  },
  {
    id: 5,
    title: 'Here to help',
    description: 'Questions about a stone? <a class="underline" href="/contact">Contact us</a>',
    icon: CustomerService01Icon,
  },
]

interface FeatureSection4Props {
  className?: string
}

const FeatureSection4 = ({ className }: FeatureSection4Props) => {
  return (
    <div className={clsx('grid grid-cols-1 gap-y-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5', className)}>
      {data.map((item, index, arr) => (
        <div
          key={item.id}
          className={clsx(
            'flex-col gap-2 border border-zinc-100 border-l-transparent px-4 py-5 sm:px-8 sm:py-10',
            index === arr.length - 1 ? 'sm:border-r-transparent' : 'bg-white'
          )}
        >
          <Text className="text-zinc-500">({index + 1})</Text>
          <Text className="mt-2 font-medium">{item.title}</Text>
          <HugeiconsIcon icon={item.icon} size={40} className="mt-10 text-zinc-700 sm:mt-14" strokeWidth={1} />
          <Text
            className="mt-4 line-clamp-3 text-zinc-500"
            dangerouslySetInnerHTML={{ __html: item.description }}
          ></Text>
        </div>
      ))}
    </div>
  )
}

export default FeatureSection4
