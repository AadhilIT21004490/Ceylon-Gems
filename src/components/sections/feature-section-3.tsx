'use client'

import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import useEmblaCarousel from 'embla-carousel-react'
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Button, ButtonCircle } from '../button'
import { Heading } from '../heading'
import { Text } from '../text'

const demo_collections = [
  {
    title: '<span data-slot="italic">Premium Rayon</span> Hijab',
    desciption: 'The fabric is soft and smooth, making it easy to wear and style, and it is comfortable to wear.',
    images: [
      '/images/hijab/premium-rayon-1.webp',
      //  more images ...
    ],
  },
  {
    title: '<span data-slot="italic">Premium Chiffon</span> Hijab',
    desciption: 'Experience unparalleled comfort with our breathable hijabs, perfect for any season.',
    images: [
      '/images/hijab/essential-modal-1-1.webp',
      //  more images ...
    ],
  },
]

interface Collection {
  title: string
  desciption: string
  images: string[]
}

interface FeatureSection3Props {
  className?: string
  containerClassName?: string
  heading?: string
  collection1?: Collection
  collection2?: Collection
}

/** True on large screens, where the pinned layout has room to fit in one viewport. */
const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const update = () => setIsDesktop(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  return isDesktop
}

// ---------------------------------------------------------------------------
// Collection card
// ---------------------------------------------------------------------------

const CollectionCard = ({
  collection,
  reverse = false,
  pinned = false,
  priority,
}: {
  collection: Collection
  reverse?: boolean
  /** Pinned cards fill the sticky stage height instead of using natural aspect ratios. */
  pinned?: boolean
  priority?: boolean
}) => {
  const [emblaRef] = useEmblaCarousel({ slidesToScroll: 'auto' })

  return (
    <div
      className={clsx(
        'flex flex-col gap-10 lg:gap-0',
        reverse ? 'lg:flex-row-reverse' : 'lg:flex-row',
        pinned && 'h-full'
      )}
    >
      {/* MAIN IMAGE */}
      <div className="relative flex-1/2">
        <div className={clsx('relative w-full overflow-hidden', pinned ? 'h-full' : 'aspect-5/6')}>
          <Image
            src={collection.images[0]}
            alt={'feature-section'}
            fill
            className="z-0 object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={priority}
          />
        </div>
      </div>

      {/* TEXT + SLIDER */}
      <div
        className={clsx(
          'flex min-w-0 flex-1/2 flex-col gap-8 lg:self-center',
          reverse ? 'lg:pe-10 xl:pe-16' : 'lg:ps-10 xl:ps-16'
        )}
      >
        <div className="flex items-end justify-between gap-4">
          <Heading dangerouslySetInnerHTML={{ __html: collection.title }}></Heading>
          <ButtonCircle href={'/collections/page-style-2/all'}>
            <ArrowUpRightIcon className="h-4 w-4 text-zinc-50" />
          </ButtonCircle>
        </div>

        <div className="embla-overflow-unset" ref={emblaRef}>
          <div className="embla__container">
            {collection.images
              .filter((_, i) => i !== 0)
              .map((image, index) => (
                <div
                  key={index}
                  className="ms-4 min-w-0 embla__slide shrink-0 grow-0 basis-3/4 first:ms-0 sm:basis-2/5"
                >
                  <div
                    className={clsx(
                      'relative w-full',
                      // Cap slide height when pinned so the whole card fits one screen
                      pinned ? 'h-[min(34vh,22rem)]' : 'aspect-4/6'
                    )}
                  >
                    <Image
                      src={image}
                      alt={'feature-section'}
                      fill
                      className="z-0 rounded-lg object-cover"
                      sizes="(max-width: 768px) 75vw, 20vw"
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="flex items-end justify-between gap-4">
          <Text className="max-w-sm">{collection.desciption}</Text>
          <Button outline href={'/collections/page-style-2/all'}>
            VIEW STONES
          </Button>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Pinned (desktop) layout
// ---------------------------------------------------------------------------

/**
 * Timeline (progress = how far through the tall wrapper we've scrolled while pinned):
 *   0.00 – 0.15  section locks in place, Collection 1 settles
 *   0.15 – 0.70  Collection 2 scrolls up over Collection 1, which recedes
 *   0.70 – 1.00  hold on Collection 2, then the page continues
 */
const PinnedCollections = ({
  heading,
  collection1,
  collection2,
  containerClassName,
}: {
  heading: string
  collection1: Collection
  collection2: Collection
  containerClassName: string
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  // While pinned
  const { scrollYProgress: progress } = useScroll({ target: wrapperRef, offset: ['start start', 'end end'] })
  // While the section is scrolling into view, before it pins
  const { scrollYProgress: approach } = useScroll({ target: wrapperRef, offset: ['start end', 'start start'] })

  // Collection 1 scrolls up into its slot as the section arrives
  const c1EnterY = useTransform(approach, [0.3, 1], ['35%', '0%'])
  // ...then recedes as Collection 2 covers it
  const c1Scale = useTransform(progress, [0.15, 0.7], [1, 0.9])
  const c1Y = useTransform(progress, [0.15, 0.7], ['0%', '-6%'])
  const c1Dim = useTransform(progress, [0.15, 0.7], [0, 0.45])

  // Collection 2 scrolls up from below the stage
  const c2Y = useTransform(progress, [0.15, 0.7], ['105%', '0%'])

  // Heading drifts up slightly while pinned
  const headingY = useTransform(progress, [0, 1], ['0%', '-15%'])

  return (
    <div ref={wrapperRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-dvh flex-col overflow-hidden">
        <div className={clsx(containerClassName, 'flex h-full w-full flex-col pt-20 pb-10')}>
          {/* SECTION HEADING */}
          <motion.div
            style={reduceMotion ? undefined : { y: headingY }}
            className="flex shrink-0 flex-row items-end justify-between gap-4"
          >
            <div className="flex-1/3">
              <Button href={'/collections/page-style-2/all'} outline>
                Our stones
              </Button>
            </div>
            <Heading className="flex-2/3" bigger dangerouslySetInnerHTML={{ __html: heading }} />
          </motion.div>

          {/* STAGE */}
          <div className="relative mt-10 min-h-0 flex-1">
            {/* Collection 1 */}
            <motion.div
              style={reduceMotion ? undefined : { y: c1EnterY }}
              className="absolute inset-0"
            >
              <motion.div
                style={reduceMotion ? undefined : { scale: c1Scale, y: c1Y }}
                className="relative h-full origin-top overflow-hidden rounded-2xl bg-white"
              >
                <CollectionCard collection={collection1} pinned />
                <motion.div
                  aria-hidden
                  style={{ opacity: c1Dim }}
                  className="pointer-events-none absolute inset-0 bg-cyprus"
                />
              </motion.div>
            </motion.div>

            {/* Collection 2 */}
            <motion.div
              style={{ y: c2Y }}
              className="absolute inset-0 overflow-hidden rounded-2xl bg-white shadow-[0_-20px_60px_-20px_rgb(0_0_0/0.25)]"
            >
              <CollectionCard collection={collection2} reverse pinned />
            </motion.div>
          </div>

          <ProgressDots progress={progress} />
        </div>
      </div>
    </div>
  )
}

const ProgressDots = ({ progress }: { progress: MotionValue<number> }) => {
  const fill = useTransform(progress, [0.15, 0.7], ['0%', '100%'])
  return (
    <div className="mt-6 flex shrink-0 items-center justify-center gap-3 text-xs font-medium tracking-widest">
      <span>01</span>
      <div className="relative h-0.5 w-24 overflow-hidden rounded-full bg-cyprus/15">
        <motion.div style={{ width: fill }} className="absolute inset-y-0 left-0 bg-cyprus" />
      </div>
      <span>02</span>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

const FeatureSection3 = ({
  className,
  containerClassName = 'container',
  heading = `Essentials for <span data-slot="italic">Muslim Women</span> , from Daily Scarves to Versatile Clothing.`,
  collection1 = demo_collections[0],
  collection2 = demo_collections[1],
}: FeatureSection3Props) => {
  const isDesktop = useIsDesktop()

  // NOTE: `overflow-x-clip` (not `overflow-hidden`) — a hidden-overflow ancestor would break `position: sticky`.
  if (isDesktop) {
    return (
      <div className={clsx('overflow-x-clip', className)}>
        <PinnedCollections
          heading={heading}
          collection1={collection1}
          collection2={collection2}
          containerClassName={containerClassName}
        />
      </div>
    )
  }

  // Mobile / tablet: stacked rows are too tall to pin, so use the normal flow layout
  return (
    <div className={clsx('overflow-hidden', className)}>
      <div className={containerClassName}>
        <div className="flex flex-col justify-between gap-4">
          <div>
            <Button href={'/collections/page-style-2/all'} outline>
              Our stones
            </Button>
          </div>
          <Heading bigger dangerouslySetInnerHTML={{ __html: heading }} />
        </div>

        <div className="mt-20">
          <CollectionCard collection={collection1} priority />
        </div>
        <div className="mt-20">
          <CollectionCard collection={collection2} reverse />
        </div>
      </div>
    </div>
  )
}

export default FeatureSection3
