import { Heading } from '@/components/heading'
import clsx from 'clsx'
import Image from 'next/image'

interface ProductDetailContentProps {
  className?: string
  content: string
  imageSrc?: string
  imageAlt?: string
}

const ProductDetailContent = ({ content, className, imageAlt, imageSrc }: ProductDetailContentProps) => {
  return (
    <div className={clsx('max-w-none', className)}>
      <div className="flex flex-col-reverse justify-between gap-14 lg:flex-row lg:gap-12 xl:gap-20 2xl:gap-32">
        <div className="flex flex-3/7">
          <Image
            src={imageSrc || '/placeholder.webp'}
            width={494}
            height={494}
            alt={imageAlt || 'Gemstone'}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            className="w-full rounded-lg object-cover"
          />
        </div>

        <div className="flex flex-4/7 flex-col gap-5 lg:gap-10 2xl:gap-14">
          <Heading>
            <span>About this</span>
            <br />
            <span data-slot="italic">stone</span>
          </Heading>

          <p className="max-w-xl leading-relaxed">{content}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailContent
