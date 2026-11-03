import { Divider } from '@/components/divider'
import FeatureSection2 from '@/components/sections/feature-section-2'
import FeatureSection3 from '@/components/sections/feature-section-3'
import HeroSection3 from '@/components/sections/hero-section-3'
import SectionCollectionCarousel from '@/components/sections/section-collection-carousel'
import SectionProductCarousel from '@/components/sections/section-product-carousel'
import { getGroupCollections } from '@/data'
import clsx from 'clsx'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fashion',
  description:
    'Discover the latest trends in fashion and style with our curated collection of clothing, accessories, and more.',
}

export default async function Home() {
  let groupCollections = await getGroupCollections('fashion')

  return (
    <div>
      <HeroSection3 />

      <SectionCollectionCarousel className="container mt-20 sm:mt-28 lg:mt-28" groupCollections={groupCollections} />

      {groupCollections?.slice(1, 4).map((group, index) => (
        <SectionProductCarousel
          key={group.handle}
          className={clsx('container', index === 0 ? 'mt-44' : 'mt-36')}
          collections={group.collections}
          collectionTitle={group.title}
          collectionHandle="all"
          collectionDescription={group.description}
        />
      ))}

      <FeatureSection2
        className="container mt-20 sm:mt-28 lg:mt-32"
        variant="up"
        heading={`Every Stone Is <span data-slot="italic">Chosen</span> With <span data-slot="italic">Care</span>`}
        faqs={[
          {
            question: 'Authenticity You Can Trust',
            answer:
              'Every gemstone is inspected before it is listed, and we clearly describe its type, origin and any known treatments.',
          },
          {
            question: 'Colour, Clarity & Cut',
            answer:
              'We look for lively colour, good clarity and a well-proportioned cut that brings out the natural brilliance of each stone.',
          },
          {
            question: 'Rooted in Ceylon Heritage',
            answer:
              'Sri Lanka, once known as Ceylon, has been celebrated for its gemstones for centuries. That heritage guides every stone we offer.',
          },
          {
            question: 'Careful Packing & Delivery',
            answer: 'Each stone is securely packed and carefully handled so it reaches you in perfect condition.',
          },
        ]}
        image={{
          src: '/images/fashion/tsavo.jpg',
          width: 1995,
          height: 1995,
          alt: 'Green tsavorite gemstone held in tweezers',
        }}
      />

      <div className="container mt-24 sm:mt-28 lg:mt-40">
        <Divider />
      </div>

      <FeatureSection3
        className="mt-20 sm:mt-28 lg:mt-32"
        heading={`Explore our rare gemstones, shaped by nature and chosen for their <span data-slot="italic">timeless beauty.</span>`}
        collection1={{
          title: 'A world of <br /><span data-slot="italic">colour.</span>',
          desciption: 'From deep blue sapphire to rich red, green and orange garnets, find the colour that speaks to you.',
          images: [
            '/images/fashion/blue.jpg',
            '/images/fashion/pyrope.jpg',
            '/images/fashion/tsavo.jpg',
            '/images/fashion/spess.jpg',
          ],
        }}
        collection2={{
          title: 'The Garnet <br /> <span data-slot="italic">family.</span>',
          desciption: 'From the fiery red of pyrope to vivid green tsavorite and glowing orange spessartine.',
          images: ['/images/fashion/pyrope.jpg', '/images/fashion/tsavo.jpg', '/images/fashion/spess.jpg'],
        }}
      />
    </div>
  )
}
