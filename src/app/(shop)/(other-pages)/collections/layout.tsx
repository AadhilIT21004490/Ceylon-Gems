import AsideCategoryFilters from '@/components/aside-category-filters'
import { Suspense } from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Suspense>
        <AsideCategoryFilters />
      </Suspense>
    </>
  )
}

export default Layout
