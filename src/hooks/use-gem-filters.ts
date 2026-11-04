'use client'

import { gemFilters } from '@/gem-filters'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useOptimistic, useTransition } from 'react'

export function useGemFilters() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [, startTransition] = useTransition()
  // Keeps checkboxes instant and lets quick successive clicks build on each other.
  const [query, setQuery] = useOptimistic(searchParams.toString())

  const navigate = (params: URLSearchParams) => {
    const next = params.toString()
    startTransition(() => {
      setQuery(next)
      router.replace(next ? `${pathname}?${next}` : pathname, { scroll: false })
    })
  }

  const current = new URLSearchParams(query)
  const getSelected = (filterId: string) => current.get(filterId)?.split(',').filter(Boolean) ?? []

  const toggle = (filterId: string, value: string) => {
    const selected = getSelected(filterId)
    const next = selected.includes(value) ? selected.filter((item) => item !== value) : [...selected, value]
    const params = new URLSearchParams(query)
    if (next.length) params.set(filterId, next.join(','))
    else params.delete(filterId)
    navigate(params)
  }

  const clear = () => {
    const params = new URLSearchParams(query)
    gemFilters.forEach((filter) => params.delete(filter.id))
    navigate(params)
  }

  return {
    isSelected: (filterId: string, value: string) => getSelected(filterId).includes(value),
    toggle,
    clear,
    hasSelection: gemFilters.some((filter) => getSelected(filter.id).length > 0),
  }
}
