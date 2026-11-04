import { Divider } from '@/components/divider'
import { Heading } from '@/components/heading'
import ProductCardHorizontal from '@/components/product-card-horizontal'
import { Text } from '@/components/text'
import { getGemProducts, getProductByHandle } from '@/data'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import FeaturedSection from '../featured-section'
import ProductDetailContent from '../product-detail-content'
import ProductFaqsSection from '../product-faqs-section'
import { ProductForm } from '../product-form'
import { ProductGallery } from '../product-gallery'
import ProductRelatedSection from '../product-related-section'
import ProductUsageSection from '../product-usage-section'

export async function generateMetadata({ params }: { params: Promise<{ handle: string }> }): Promise<Metadata> {
  const { handle } = await params
  const product = await getProductByHandle(handle)
  if (!product?.gem) {
    return {
      title: 'Stone not found',
      description: 'The stone you are looking for does not exist.',
    }
  }

  const { title, description } = product
  return { title, description }
}

const tabs = ['About', 'Gem care', 'FAQs']

export default async function Product({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params
  const product = await getProductByHandle(handle)
  if (!product?.gem) {
    return notFound()
  }

  const otherStones = (await getGemProducts()).filter((item) => item.id !== product.id)
  const pairedStone = otherStones[0]
  const { images, description, title } = product
  const careImage = otherStones[0]?.images[0]
  const faqImage = otherStones[1]?.images[0]

  return (
    <div className={clsx('product-page relative space-y-12 sm:space-y-16')}>
      <div className="absolute inset-x-0 -top-px z-10 h-px bg-white"></div>

      <main className="container">
        <div className="lg:flex">
          {/* Galleries */}
          <div className="relative w-full lg:w-1/2">
            <div className="sticky top-0">
              <ProductGallery media={images} />
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full pt-10 lg:w-1/2 lg:pt-16 lg:pl-10 xl:pl-14 2xl:pl-16">
            <div className="sticky top-16">
              {/* Heading, Price, Specifications,...  */}
              <ProductForm product={product} />

              {pairedStone ? (
                <div className="mt-10 rounded-lg bg-zinc-100 p-5">
                  <Text className="mb-3 font-semibold">You may also like</Text>
                  <ProductCardHorizontal product={pairedStone} />
                </div>
              ) : null}

              <FeaturedSection className="mt-10 lg:mt-16" />
            </div>
          </div>
        </div>

        <Divider className="my-16 sm:my-24 lg:my-28" />

        {/* THE CONTENT OF THE STONE  */}
        <Heading bigger className="text-center">
          <span data-slot="italic">all about the</span> <br />
          <span>STONE</span>
        </Heading>

        {/* MAIN TAB GROUP */}
        <TabGroup className="mt-14 lg:mt-16 xl:mt-20">
          <TabList className="flex w-full justify-center gap-4 rounded-full bg-zinc-50 p-1">
            {tabs.map((tab) => (
              <Tab
                key={tab}
                className="w-full rounded-full focus-visible:outline-none data-selected:bg-zinc-900 data-selected:text-white"
              >
                <Text className="py-4">{tab}</Text>
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-10 lg:mt-16">
            <TabPanel>
              <ProductDetailContent content={description} imageSrc={images[0].src} imageAlt={images[0].alt} />
            </TabPanel>
            <TabPanel>
              <ProductUsageSection imageSrc={careImage?.src ?? images[0].src} imageAlt={careImage?.alt ?? title} />
            </TabPanel>
            <TabPanel>
              <ProductFaqsSection imageSrc={faqImage?.src ?? images[0].src} imageAlt={faqImage?.alt ?? title} />
            </TabPanel>
          </TabPanels>
        </TabGroup>

        <Divider className="my-16 sm:my-24 lg:my-28" />

        {/* RELATED STONES */}
        <ProductRelatedSection products={otherStones} />
      </main>
    </div>
  )
}
