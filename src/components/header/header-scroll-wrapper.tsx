'use client'

import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'

interface HeaderScrollWrapperProps {
  children: React.ReactNode
  variant: 'default' | 'bg-transparent-text-white'
}

/** Minimum scroll distance (px) before the direction counts — avoids jitter on trackpads. */
const SCROLL_TOLERANCE = 6

/**
 * Fixes the header to the top of the viewport, slides it out of view while scrolling down
 * and brings it back as soon as the user scrolls up.
 */
export default function HeaderScrollWrapper({ children, variant }: HeaderScrollWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [height, setHeight] = useState<number>()

  // Keep a spacer the same height as the header so in-flow pages don't jump under it
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ro = new ResizeObserver(() => setHeight(el.offsetHeight))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    let lastY = window.scrollY
    let ticking = false

    const update = () => {
      ticking = false
      const y = Math.max(window.scrollY, 0)
      const headerH = ref.current?.offsetHeight ?? 80
      setScrolled(y > 10)

      // Always visible near the top of the page
      if (y <= headerH) {
        setHidden(false)
        lastY = y
        return
      }

      const delta = y - lastY
      if (Math.abs(delta) < SCROLL_TOLERANCE) return

      // Never hide while a menu / search popover is open
      const menuOpen = !!ref.current?.querySelector('[data-open]')
      setHidden(delta > 0 && !menuOpen)
      lastY = y
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isTransparent = variant === 'bg-transparent-text-white'

  return (
    <>
      {!isTransparent && <div aria-hidden style={{ height }} className={clsx(!height && 'h-[89px]')} />}

      <div
        ref={ref}
        // Keep the header reachable for keyboard users even when hidden
        onFocusCapture={() => setHidden(false)}
        className={clsx(
          'fixed inset-x-0 top-0 z-40 transition-[translate,background-color,color,box-shadow] duration-300 ease-out',
          hidden && '-translate-y-full',
          isTransparent && !scrolled ? 'bg-transparent text-white' : 'bg-cyprus text-sand',
          scrolled && !hidden && 'shadow-lg shadow-black/10',
          'has-[.bitpan-popover-full-panel]:text-cyprus'
        )}
      >
        {children}
      </div>
    </>
  )
}
