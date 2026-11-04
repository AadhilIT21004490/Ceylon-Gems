'use client'

import { Text, TextLink } from '@/components/text'
import { gemSortOptions } from '@/gem-filters'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ArrowDown01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import clsx from 'clsx'
import { usePathname, useSearchParams } from 'next/navigation'

interface ProductSortDropdownProps {
  className?: string
  align?: 'left' | 'right'
}

const ProductSortDropdown = ({ className, align = 'left' }: ProductSortDropdownProps) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const getHref = (sort: string) => {
    const params = new URLSearchParams(searchParams)
    if (sort) params.set('sort', sort)
    else params.delete('sort')
    const query = params.toString()
    return query ? `${pathname}?${query}` : pathname
  }

  return (
    <div className={className}>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <MenuButton className="group inline-flex justify-center focus-visible:outline-none">
            <Text>Sort by</Text>
            <span className="sr-only">Sort products</span>
            <HugeiconsIcon
              icon={ArrowDown01Icon}
              className="-mr-1 ml-1 size-5 shrink-0 text-zinc-400 group-hover:text-zinc-500"
              size={16}
              color="currentColor"
              strokeWidth={1.5}
            />
          </MenuButton>
        </div>

        <MenuItems
          transition
          className={clsx(
            'absolute z-10 mt-2 w-48 rounded-md bg-white shadow-2xl ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in',
            align === 'left' && 'left-0 origin-top-left',
            align === 'right' && 'right-0 origin-top-right'
          )}
        >
          <div className="py-1">
            {gemSortOptions.map((option) => (
              <MenuItem key={option.value}>
                <TextLink
                  href={getHref(option.value)}
                  scroll={false}
                  className="block px-4 py-1.5 text-zinc-900 data-focus:bg-zinc-100 data-focus:outline-hidden"
                >
                  {option.label}
                </TextLink>
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Menu>
    </div>
  )
}

export default ProductSortDropdown
