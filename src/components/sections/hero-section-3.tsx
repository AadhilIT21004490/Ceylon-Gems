'use client'

import { ArrowLeftIcon, ArrowRightIcon, ArrowUpRightIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import { AnimatePresence, motion, type Variants } from 'framer-motion'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { Button } from '../button'
import { Heading } from '../heading'
import StarSvg from '../star-svg'
import { Text } from '../text'

interface HeroSection3Props {
  className?: string
}

interface Slide {
  image: string
  eyebrow: string
  title: React.ReactNode
  description: string
}

const SLIDES: Slide[] = [
  {
    image: '/images/fashion/hr1.jpg',
    eyebrow: 'Ceylon Heritage',
    title: (
      <>
        <span data-slot="italic">Where</span> Luxury <br /> finds its <span data-slot="italic">Meaning.</span>
      </>
    ),
    description:
      'Where we craft exceptional pieces that celebrate the natural beauty and cultural heritage of our island.',
  },
  {
    image: '/images/fashion/hr2.png',
    eyebrow: 'Rare Garnets',
    title: (
      <>
        Fire born <br /> from the <span data-slot="italic">Earth.</span>
      </>
    ),
    description: 'Deep, radiant pyrope garnets — hand-selected for colour, clarity and brilliance.',
  },
  {
    image: '/images/fashion/hr3.jpg',
    eyebrow: 'Ethically Sourced',
    title: (
      <>
        Nature&apos;s <span data-slot="italic">finest</span> <br /> Treasures.
      </>
    ),
    description: 'Every stone is traced from mine to market, cut by master artisans with generations of craft.',
  },
]

const AUTOPLAY_MS = 6000
const EASE = [0.22, 1, 0.36, 1] as const

const bgVariants: Variants = {
  enter: (dir: number) => ({
    clipPath: dir > 0 ? 'inset(0 0 0 100%)' : 'inset(0 100% 0 0)',
    scale: 1.15,
  }),
  center: {
    clipPath: 'inset(0 0 0 0%)',
    scale: 1,
    transition: { clipPath: { duration: 1.1, ease: EASE }, scale: { duration: 1.6, ease: EASE } },
  },
  exit: { opacity: 0.6, scale: 1.05, transition: { duration: 1.1, ease: EASE } },
}

const contentVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.45 } },
  exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: EASE } },
  exit: { opacity: 0, y: -24, filter: 'blur(6px)', transition: { duration: 0.4, ease: 'easeIn' } },
}

const HeroSection3 = ({ className }: HeroSection3Props) => {
  const [[index, direction], setState] = useState<[number, number]>([0, 1])
  const [paused, setPaused] = useState(false)

  const paginate = useCallback((dir: number) => {
    setState(([i]) => [(i + dir + SLIDES.length) % SLIDES.length, dir])
  }, [])

  const goTo = (i: number) => {
    if (i === index) return
    setState([i, i > index ? 1 : -1])
  }

  // Autoplay — restarts whenever the slide changes
  useEffect(() => {
    if (paused) return
    const id = setTimeout(() => paginate(1), AUTOPLAY_MS)
    return () => clearTimeout(id)
  }, [index, paused, paginate])

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') paginate(1)
      if (e.key === 'ArrowLeft') paginate(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [paginate])

  const slide = SLIDES[index]

  return (
    <section
      className={clsx('relative flex min-h-dvh w-full overflow-hidden bg-zinc-950', className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {/* Background images */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={bgVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={(_, info) => {
            if (info.offset.x < -80 || info.velocity.x < -500) paginate(1)
            else if (info.offset.x > 80 || info.velocity.x > 500) paginate(-1)
          }}
        >
          {/* Slow Ken Burns zoom while the slide is visible */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1 }}
            animate={{ scale: 1.08 }}
            transition={{ duration: AUTOPLAY_MS / 1000 + 2, ease: 'linear' }}
          >
            <Image
              src={slide.image}
              alt={slide.eyebrow}
              className="pointer-events-none object-cover object-center select-none"
              fill
              priority={index === 0}
              sizes="100vw"
              draggable={false}
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="pointer-events-none relative container flex flex-1 pt-20 pb-44">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-y-7 self-center text-center text-white"
            aria-live="polite"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, rotate: -90, scale: 0.4 },
                visible: { opacity: 1, rotate: 0, scale: 1, transition: { duration: 1, ease: EASE } },
                exit: { opacity: 0, rotate: 90, scale: 0.4, transition: { duration: 0.4 } },
              }}
            >
              <StarSvg width={48} height={48} color="white" />
            </motion.div>

            <motion.span
              variants={itemVariants}
              className="rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-[0.25em] uppercase backdrop-blur-md"
            >
              {slide.eyebrow}
            </motion.span>

            <motion.div variants={itemVariants}>
              <Heading fontSize="text-5xl/none md:text-6xl/none lg:text-7xl/none 2xl:text-8xl/none font-semibold">
                {slide.title}
              </Heading>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Text className="max-w-md text-white/85">{slide.description}</Text>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Arrows */}
      <div className="absolute inset-x-0 top-1/2 z-10 hidden -translate-y-1/2 justify-between px-6 md:flex lg:px-10">
        {[
          { dir: -1, Icon: ArrowLeftIcon, label: 'Previous slide' },
          { dir: 1, Icon: ArrowRightIcon, label: 'Next slide' },
        ].map(({ dir, Icon, label }) => (
          <motion.button
            key={dir}
            type="button"
            aria-label={label}
            onClick={() => paginate(dir)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-zinc-900"
          >
            <Icon className="h-5 w-5" />
          </motion.button>
        ))}
      </div>

      {/* Bottom: progress indicators + CTA */}
      <div className="absolute bottom-10 left-1/2 z-10 container max-w-3xl -translate-x-1/2 sm:bottom-16">
        <div className="flex items-center justify-center gap-x-3">
          <span className="w-8 text-right text-sm font-medium text-white tabular-nums">
            {String(index + 1).padStart(2, '0')}
          </span>
          {SLIDES.map((s, i) => (
            <button
              key={s.image}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              onClick={() => goTo(i)}
              className="group relative h-6 w-14 cursor-pointer sm:w-20"
            >
              <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 overflow-hidden rounded-full bg-white/30 transition-all group-hover:h-1">
                {i === index ? (
                  <motion.span
                    key={`${index}-${paused}`}
                    className="absolute inset-y-0 left-0 bg-white"
                    initial={{ width: paused ? '100%' : '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: paused ? 0 : AUTOPLAY_MS / 1000, ease: 'linear' }}
                  />
                ) : (
                  i < index && <span className="absolute inset-0 bg-white/70" />
                )}
              </span>
            </button>
          ))}
          <span className="w-8 text-sm font-medium text-white/60 tabular-nums">
            {String(SLIDES.length).padStart(2, '0')}
          </span>
        </div>

        <Button
          href={'/collections/page-style-2/all'}
          color="white"
          className="mt-6 w-full cursor-pointer !border-white py-5 font-medium tracking-wide underline sm:py-6"
        >
          Explore all Stones
          <div className="absolute right-1.5 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-white sm:h-12 sm:w-12">
            <ArrowUpRightIcon className="h-4 w-4" />
          </div>
        </Button>
      </div>
    </section>
  )
}

export default HeroSection3
