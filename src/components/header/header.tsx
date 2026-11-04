import { Logo } from '@/app/logo'
import { getFashionCollections } from '@/data'
import clsx from 'clsx'
import Link from 'next/link'
import { TextLink } from '../text'
import CartIconBtn from './cart-icon-btn'
import DropdownMenuPopover from './dropdown-menu-popover'
import HamburgerIconMenu from './hamburger-icon-menu'
import MegaMenuPopover, { MegaMenuPopoverProps } from './mega-menu-popover'
import SearchIconPopover from './search-icon-popover'
import UserIconPopover from './user-icon-popover'

const stone_menu = [
  { name: 'All gemstones', href: '/collections/page-style-2/all' },
  { name: 'Blue sapphire', href: '/collections/page-style-2/blue-sapphire' },
  { name: 'Pyrope garnet', href: '/collections/page-style-2/pyrope-garnet' },
  { name: 'Tsavorite', href: '/collections/page-style-2/tsavorite' },
  { name: 'Spessartine', href: '/collections/page-style-2/spessartine' },
]
const account_menu = [
  { name: 'Login / Sign up', href: '/login' },
  { name: 'Cart', href: '/cart' },
  { name: 'Checkout', href: '/checkout' },
  { name: 'Orders', href: '/orders' },
]
const mega_menus = [
  {
    name: 'Gemstones',
    href: '#',
    chidren: stone_menu,
  },
  {
    name: 'Your account',
    href: '#',
    chidren: account_menu,
  },
  {
    name: 'Company',
    href: '#',
    chidren: [
      { name: 'About us', href: '/about-us' },
      { name: 'Contact us', href: '/contact' },
      { name: 'Journal', href: '/blog' },
    ],
  },
]

interface HeaderProps {
  className?: string
  hasBottomBorder?: boolean
  variant?: 'default' | 'bg-transparent-text-white'
  megamenuVariant?: MegaMenuPopoverProps['variant']
}

const Header = async ({ className, hasBottomBorder = true, variant = 'default', megamenuVariant }: HeaderProps) => {
  const collections = await getFashionCollections()
  const featuredCollections = collections.slice(0, 3) // Get 3 collections

  return (
    <header
      className={clsx(
        className,
        'group z-10 w-full',
        variant === 'default' && 'relative',
        variant === 'bg-transparent-text-white' &&
          'absolute inset-x-0 top-0 bg-transparent text-white transition-colors duration-300 has-[.bitpan-popover-full-panel]:text-zinc-950'
      )}
    >
      <nav aria-label="Global" className="container">
        <div
          className={clsx(
            'flex items-center justify-between border-zinc-950/10 py-6 dark:border-white/10',
            hasBottomBorder && 'border-b',
            !hasBottomBorder && 'has-[.bitpan-popover-full-panel]:border-b'
          )}
        >
          {/* LEFT LOGO */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Ceylon Lueur</span>
              <Logo />
            </Link>
          </div>

          {/* MAIN CENTER MENUS */}
          <div className="hidden lg:flex lg:gap-x-8">
            {/* DROPDOWN */}
            <DropdownMenuPopover dropdownMenu={stone_menu}>Gemstones</DropdownMenuPopover>

            {/* MEGA MENU */}
            <MegaMenuPopover
              megamenu={mega_menus}
              rightImage={{
                src: '/images/fashion/blue.jpg',
                alt: 'Blue sapphire',
              }}
              featuredCollections={featuredCollections}
              variant={megamenuVariant}
            >
              Explore
            </MegaMenuPopover>

            {/* TEXT LINKS */}
            <TextLink href="/collections/page-style-2/all">Shop</TextLink>
            <DropdownMenuPopover dropdownMenu={account_menu}>Account</DropdownMenuPopover>
          </div>

          {/* RIGHT ICON BUTTONS */}
          <div className="flex flex-1 justify-end gap-x-2.5 md:gap-x-4 xl:gap-x-5">
            {/* HAMBURGER MENU */}
            <HamburgerIconMenu />

            {/* SEARCH  */}
            <SearchIconPopover />

            {/* USER - DROPDOWN */}
            <UserIconPopover />

            {/* CART */}
            <CartIconBtn />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
