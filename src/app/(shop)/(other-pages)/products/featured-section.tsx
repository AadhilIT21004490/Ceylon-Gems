import { Text } from '@/components/text'
import {
  CheckmarkBadge01Icon,
  DeliveryBox01Icon,
  DeliveryTracking01Icon,
  DiamondIcon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import clsx from 'clsx'

const data = [
  { title: 'One of a Kind', icon: DiamondIcon },
  { title: 'Inspected Before Listing', icon: CheckmarkBadge01Icon },
  { title: 'Securely Packed', icon: DeliveryBox01Icon },
  { title: 'Tracked Delivery', icon: DeliveryTracking01Icon },
]

const FeaturedSection = ({ className }: { className?: string }) => {
  return (
    <div className={clsx('grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4', className)}>
      {data.map((item) => {
        return (
          <div key={item.title} className="flex flex-col items-center justify-start gap-5 text-center">
            <div className="flex size-16 items-center justify-center rounded-full bg-zinc-100">
              <HugeiconsIcon icon={item.icon} size={28} color="currentColor" strokeWidth={1} />
            </div>
            <Text className="max-w-xs text-center leading-snug text-zinc-600">{item.title}</Text>
          </div>
        )
      })}
    </div>
  )
}

export default FeaturedSection
