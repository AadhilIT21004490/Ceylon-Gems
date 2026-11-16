import Image from 'next/image'
import clsx from 'clsx'

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/images/fashion/wht.png"
      alt="Ceylon Lueur"
      width={256}
      height={64}
      priority
      className={clsx('w-auto', !/(^|\s)h-/.test(className ?? '') && 'h-8', className)}
    />
  )
}
