import Aside from '@/components/aside'
import '@/styles/tailwind.css'
import clsx from 'clsx'
import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'

const dm_sans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  variable: '--font-dm-sans',
})
const playfair_display = Playfair_Display({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  style: 'italic',
  variable: '--font-playfair-display',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Ceylon Lueur',
    default: 'Ceylon Lueur',
  },
  description: 'Discover natural gemstones at Ceylon Lueur, with carat, cut, origin and treatment listed for every stone.',
  keywords: ['Ceylon Lueur', 'Gemstones', 'Sapphire', 'Garnet', 'Tsavorite', 'Spessartine', 'Natural gemstones'],
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={clsx(
        'text-zinc-950 antialiased dark:bg-zinc-900 dark:text-white dark:lg:bg-zinc-950',
        dm_sans.variable,
        playfair_display.variable
      )}
    >
      <body>
        <Aside.Provider>{children}</Aside.Provider>
      </body>
    </html>
  )
}
