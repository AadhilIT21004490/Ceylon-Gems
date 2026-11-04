export async function getOrder(number: string) {
  return (await getOrders()).find((order) => order.number.toString() === number)
}

// Sample orders: replace with real customer orders once the store has a backend.
export async function getOrders() {
  const delivered = await getOrderItems(['emerald-cut-tsavorite-garnet'])
  const shipped = await getCartProducts()

  return [
    {
      number: '4657',
      placedOn: 'October 28, 2026',
      placedDatetime: '2026-10-28',
      statusLabel: 'Shipped',
      status: 'Shipped on October 30, 2026',
      step: 2,
      items: shipped,
      totals: getOrderTotals(shipped, deliveryMethods[0].price),
      address: ['Floyd Miles', 'Villa 12, Al Wasl Road', 'Dubai, United Arab Emirates'],
      email: 'f•••@example.com',
      phone: '+971 •• ••• ••40',
      payment: { last4: '4242', expires: '02 / 29' },
    },
    {
      number: '4376',
      placedOn: 'August 14, 2026',
      placedDatetime: '2026-08-14',
      statusLabel: 'Delivered',
      status: 'Delivered on August 18, 2026',
      step: 3,
      items: delivered,
      totals: getOrderTotals(delivered, deliveryMethods[1].price),
      address: ['Floyd Miles', 'Villa 12, Al Wasl Road', 'Dubai, United Arab Emirates'],
      email: 'f•••@example.com',
      phone: '+971 •• ••• ••40',
      payment: { last4: '4242', expires: '02 / 29' },
    },
  ]
}

export function getCountries() {
  return [
    {
      name: 'Canada',
      code: 'CA',
      flagUrl: '/flags/ca.svg',
      regions: [
        'Alberta',
        'British Columbia',
        'Manitoba',
        'New Brunswick',
        'Newfoundland and Labrador',
        'Northwest Territories',
        'Nova Scotia',
        'Nunavut',
        'Ontario',
        'Prince Edward Island',
        'Quebec',
        'Saskatchewan',
        'Yukon',
      ],
    },
    {
      name: 'Mexico',
      code: 'MX',
      flagUrl: '/flags/mx.svg',
      regions: [
        'Aguascalientes',
        'Baja California',
        'Baja California Sur',
        'Campeche',
        'Chiapas',
        'Chihuahua',
        'Ciudad de Mexico',
        'Coahuila',
        'Colima',
        'Durango',
        'Guanajuato',
        'Guerrero',
        'Hidalgo',
        'Jalisco',
        'Mexico State',
        'Michoacán',
        'Morelos',
        'Nayarit',
        'Nuevo León',
        'Oaxaca',
        'Puebla',
        'Querétaro',
        'Quintana Roo',
        'San Luis Potosí',
        'Sinaloa',
        'Sonora',
        'Tabasco',
        'Tamaulipas',
        'Tlaxcala',
        'Veracruz',
        'Yucatán',
        'Zacatecas',
      ],
    },
    {
      name: 'United States',
      code: 'US',
      flagUrl: '/flags/us.svg',
      regions: [
        'Alabama',
        'Alaska',
        'American Samoa',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'Washington DC',
        'Micronesia',
        'Florida',
        'Georgia',
        'Guam',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Marshall Islands',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Northern Mariana Islands',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Palau',
        'Pennsylvania',
        'Puerto Rico',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'U.S. Virgin Islands',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming',
        'Armed Forces Americas',
        'Armed Forces Europe',
        'Armed Forces Pacific',
      ],
    },
  ]
}

export async function getShopData() {
  return {
    description: 'An example shop with GraphQL.',
    name: 'graphql',
    termsOfService: {
      url: 'https://checkout.shopify.com/13120893/policies/30401347.html?locale=en',
      title: 'Terms of Service',
      id: 'gid://shopify/ShopPolicy/30401347',
      handle: 'terms-of-service',
      body: '<p><strong>OVERVIEW</strong> <br>This website is operated by graphql.</p>',
    },
    subscriptionPolicy: {
      body: '<p>We have a 30-day return policy</p>',
      handle: 'refund-policy',
      id: 'gid://shopify/ShopPolicy/30401219',
      title: 'Refund Policy',
      url: 'https://checkout.shopify.com/13120893/policies/30401219.html?locale=en',
    },
    shippingPolicy: {
      body: '<p>Shipping Policy</p>',
      handle: 'shipping-policy',
      id: 'gid://shopify/ShopPolicy/23745298488',
      title: 'Shipping Policy',
      url: 'https://checkout.shopify.com/13120893/policies/23745298488.html?locale=en',
    },
    refundPolicy: {
      body: '<p>We have a 30-day return policy</p>',
      handle: 'refund-policy',
      id: 'gid://shopify/ShopPolicy/30401219',
      title: 'Refund Policy',
      url: 'https://checkout.shopify.com/13120893/policies/30401219.html?locale=en',
    },
    privacyPolicy: {
      body: '<p>Lorem inpt...</p>',
      handle: 'privacy-policy',
      id: 'gid://shopify/ShopPolicy/30401283',
      title: 'Privacy Policy',
      url: 'https://checkout.shopify.com/13120893/policies/30401283.html?locale=en',
    },
    primaryDomain: {
      url: 'https://graphql.myshopify.com',
    },
  }
}

export function getProductReviews() {
  return [
    {
      id: 1,
      title: "Can't say enough good things",
      rating: 5,
      content: `
        <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
        <p>The product quality is amazing, it looks and feel even better than I had anticipated. </p>
      `,
      author: 'S. Walkinshaw',
      date: 'May 16, 2025',
      datetime: '2025-01-06',
    },
    {
      id: 2,
      title: 'Perfect for going out when you want to stay comfy',
      rating: 5,
      content: `
        <p>The product quality is amazing, it looks and feel even better than I had anticipated.</p>
        <p>I like it better than a regular hoody because it is tailored to be a slimmer fit. Perfect for going out when you want to stay comfy. The head opening is a little tight which makes it a little.</p>
      `,
      author: 'Risako M',
      date: 'May 16, 2025',
      datetime: '2025-01-06',
    },
    {
      id: 3,
      title: 'Very nice feeling sweater!',
      rating: 5,
      content: `
        <p> I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times.</p>
        <p>The product quality is amazing!</p>
      `,
      author: 'Eden Birch',
      date: 'May 16, 2025',
      datetime: '2025-01-06',
    },
  ]
}

export function getBlogPosts() {
  return [
    {
      id: 1,
      title: 'Graduation Dresses: A Style Guide',
      handle: 'graduation-dresses-style-guide',
      excerpt:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      featuredImage: {
        src: 'https://images.unsplash.com/photo-1640625695572-7289bd767f59?q=80&w=3874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

        alt: 'Graduation Dresses: A Style Guide',
        width: 3000,
        height: 2000,
      },
      date: 'Mar 16, 2020',
      category: { title: 'Marketing', href: '#' },
      timeToRead: '2 min read',
    },
    {
      id: 2,
      title: 'How to Wear Your Eid Pieces All Year Long',
      handle: 'how-to-wear-your-eid-pieces-all-year-long',
      excerpt:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      featuredImage: {
        src: 'https://images.unsplash.com/photo-1615165558255-519ba3990ac1?q=80&w=3854&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Graduation Dresses: A Style Guide',
        width: 3000,
        height: 2000,
      },
      date: 'Mar 16, 2020',
      category: { title: 'Marketing', href: '#' },
      timeToRead: '3 min read',
    },
    {
      id: 3,
      title: 'The Must-Have Hijabi Friendly Fabrics for 2024',
      handle: 'the-must-have-hijabi-friendly-fabrics-for-2024',
      excerpt:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      featuredImage: {
        src: 'https://images.unsplash.com/photo-1600634999635-f1f334b8e931?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Graduation Dresses: A Style Guide',
        width: 3000,
        height: 2000,
      },
      date: 'Mar 16, 2020',
      category: { title: 'Marketing', href: '#' },
      timeToRead: '3 min read',
    },
    {
      id: 4,
      title: 'The Hijabi Friendly Fabrics for 2025',
      handle: 'the-must-have-hijabi-friendly-fabrics-for',
      excerpt:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      featuredImage: {
        src: 'https://images.unsplash.com/photo-1600634999625-b98a8ff6cd1b?q=80&w=3893&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Graduation Dresses: A Style Guide',
        width: 3000,
        height: 2000,
      },
      date: 'Mar 16, 2020',
      category: { title: 'Marketing', href: '#' },
      timeToRead: '3 min read',
    },
    {
      id: 5,
      title: 'Boost your conversion rate',
      handle: 'boost-your-conversion-rate',
      excerpt:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      featuredImage: {
        src: 'https://images.unsplash.com/photo-1640625695572-7289bd767f59?q=80&w=3874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Graduation Dresses: A Style Guide',
        width: 3000,
        height: 2000,
      },
      date: 'Mar 16, 2020',
      category: { title: 'Marketing', href: '#' },
      timeToRead: '3 min read',
    },
    {
      id: 6,
      title: 'Graduation Dresses: A Style Guide',
      handle: 'graduation-dresses-style-guide',
      excerpt:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      featuredImage: {
        src: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=3008&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Graduation Dresses: A Style Guide',
        width: 3000,
        height: 2000,
      },
      date: 'Mar 16, 2020',
      category: { title: 'Marketing', href: '#' },
      timeToRead: '3 min read',
    },
  ]
}

export function getBlogPostsByHandle(handle: string) {
  const blogPosts = getBlogPosts()
  const post = blogPosts.find((post) => post.handle === handle) || {}

  return {
    id: 1,
    title: 'Graduation Dresses: A Style Guide',
    handle: 'graduation-dresses-style-guide',
    excerpt:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde.',
    featuredImage: {
      src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Graduation Dresses: A Style Guide',
      width: 3773,
      height: 600,
    },
    date: 'Mar 16, 2025',
    datetime: '2025-03-16',
    category: { title: 'Marketing', href: '#' },
    timeToRead: '2 min read',
    ...post,
    content: `<p>Beauty is a universal language</p>`,
    author: {
      name: 'S. Walkinshaw',
    },
  }
}

// Sample delivery options: replace with your real courier services and prices.
export const deliveryMethods = [
  { id: 'tracked', title: 'Tracked Delivery', turnaround: '5–8 business days', price: 75 },
  { id: 'express', title: 'Express Delivery', turnaround: '2–3 business days', price: 150 },
]

const VAT_RATE = 0.05

export function getOrderTotals(items: { price: number }[], shipping: number) {
  const subtotal = items.reduce((sum, item) => sum + item.price, 0)
  const vat = Math.round((subtotal + shipping) * VAT_RATE * 100) / 100
  return { subtotal, shipping, vat, total: subtotal + shipping + vat }
}

export function getGemSpecs(gem: NonNullable<TProductItem['gem']>) {
  return [
    { label: 'Carat', value: `${gem.carat.toFixed(2)} ct` },
    { label: 'Cut', value: gem.shapeLabel },
    { label: 'Color', value: gem.colorLabel },
    { label: 'Origin', value: gem.originLabel },
    { label: 'Treatment', value: gem.treatmentLabel },
  ]
}

async function getOrderItems(handles: string[]) {
  const gems = await getGemProducts()

  return handles.flatMap((handle) => {
    const product = gems.find((item) => item.handle === handle)
    if (!product?.gem) return []
    const { gem } = product

    return [
      {
        id: product.id,
        name: product.title,
        handle: product.handle,
        type: gem.type,
        price: product.price,
        imageSrc: product.images[0].src,
        imageAlt: product.images[0].alt,
        specs: getGemSpecs(gem),
      },
    ]
  })
}

export type TOrderItem = Awaited<ReturnType<typeof getOrderItems>>[number]

// Sample cart: replace with the customer's real cart once the store has a backend.
export async function getCartProducts() {
  return getOrderItems(['oval-ceylon-sapphire', 'cushion-pyrope-garnet'])
}

// ------------------------ SKINCARE DATA ------------------------
// ------------------------ SKINCARE DATA ------------------------
export async function getSkincareCollections() {
  // for demo purposes,
  const products = await getSkincareProducts()
  return [
    {
      id: '1',
      title: 'Face Wash',
      handle: 'face-wash',
      description:
        'A gentle cleanser for all skin types. Removes impurities and makeup. Leaves skin fresh and clean. Perfect for daily use.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      image: '/images/skincare/feature-6.webp',
      products: products.slice(0, 5),
    },
    {
      id: '2',
      title: 'Cleansers',
      handle: 'cleansers',
      description:
        'Gentle and effective cleansers to remove impurities and refresh your skin daily. Suitable for all skin types.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      image: '/images/skincare/c1.webp',
      products: products.slice(5, 10),
    },
    {
      id: '3',
      title: 'Beauty tools',
      handle: 'beauty-tools',
      description: 'Essential beauty tools to enhance your skincare routine and achieve salon-like results at home.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      image: '/images/skincare/p2-1-1.webp',
      products: products.slice(2, 7),
    },
    {
      id: '4',
      title: 'Sunscreens',
      handle: 'sunscreens',
      description: 'Broad-spectrum sunscreens to protect your skin from harmful UV rays.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      image: '/images/skincare/p2-5.webp',
      products: products.slice(1, 6),
    },
    {
      id: '5',
      title: 'Moisturizers',
      handle: 'moisturizers',
      description: 'Hydrating moisturizers to keep your skin soft, smooth, and radiant.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      image: '/images/skincare/c5.webp',
      products: products.slice(4, 9),
    },
  ]
}
export async function getSkincareGroupCollections() {
  const collections = await getSkincareCollections()
  return [
    {
      id: '1',
      title: 'Skincare',
      handle: 'skincare',
      description: 'Explore our range of skincare products for all your beauty needs.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      collections,
    },
    {
      id: '2',
      title: 'Makeup',
      handle: 'makeup',
      description: 'Discover our makeup collection for a flawless look.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      collections,
    },
    {
      id: '3',
      title: 'Haircare',
      handle: 'haircare',
      description: 'Nourish and style your hair with our premium haircare products.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      collections,
    },
    {
      id: '4',
      title: 'Fragrance',
      handle: 'fragrance',
      description: 'Find your signature scent with our exquisite fragrance collection.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      collections,
    },
    {
      id: '5',
      title: 'Tools & Accessories',
      handle: 'tools-accessories',
      description: 'Enhance your beauty routine with our tools and accessories.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      collections,
    },
  ]
}

// ------------------------ HIJAB DATA ------------------------
// ------------------------ HIJAB DATA ------------------------
export async function getHijabCollections() {
  const products = await getHijabProducts()

  return [
    {
      id: '1',
      title: 'Chiffon Hijabs',
      handle: 'chiffon-hijabs',
      description: 'Lightweight and elegant chiffon hijabs for a soft, flowy look.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      image: '/images/hijab/c1.webp',
      products: products.slice(0, 5),
    },
    {
      id: '2',
      title: 'Jersey Hijabs',
      handle: 'jersey-hijabs',
      description: 'Soft and stretchy jersey hijabs for comfort and versatility.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      image: '/images/hijab/c2.webp',
      products: products.slice(5, 10),
    },
    {
      id: '3',
      title: 'Cotton Hijabs',
      handle: 'cotton-hijabs',
      description: 'Breathable and durable cotton hijabs for everyday wear.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      image: '/images/hijab/c3.webp',
      products: products.slice(2, 7),
    },
    {
      id: '4',
      title: 'Silk Hijabs',
      handle: 'silk-hijabs',
      description: 'Luxurious silk hijabs for a smooth and sophisticated look.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      image: '/images/hijab/c4.webp',
      products: products.slice(1, 6),
    },
    {
      id: '5',
      title: 'Instant Hijabs',
      handle: 'instant-hijabs',
      description: 'Convenient and ready-to-wear instant hijabs for quick, stylish coverage.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      image: '/images/hijab/c5.webp',
      products: products.slice(4, 9),
    },
  ]
}
export async function getHijabGroupCollections() {
  const collections = await getHijabCollections()
  return [
    {
      title: 'Spring Arrivals',
      handle: 'spring-arrivals',
      description: 'lorem ipsum',
      collections,
    },
    {
      title: 'NEW ARRIVALS',
      handle: 'new-arrivals',
      description: 'lorem ipsum',
      collections,
    },
    {
      title: 'Best Selling',
      handle: 'best-selling',
      description: 'lorem ipsum',
      collections,
    },
    {
      title: 'Hijabs',
      handle: 'hijabs',
      description: 'lorem ipsum',
      collections,
    },
    {
      title: 'Accessories',
      handle: 'accessories',
      description: 'lorem ipsum',
      collections,
    },
  ]
}

// ------------------------ FASHION DATA ------------------------
// ------------------------ FASHION DATA ------------------------
export async function getFashionCollections() {
  const gems = await getGemProducts()
  const byVariety = (variety: string) => gems.filter((product) => product.gem?.variety === variety)
  return [
    {
      id: '1',
      title: 'Pyrope Garnet',
      handle: 'pyrope-garnet',
      description: 'Deep, fiery red garnets prized for their rich colour and lively sparkle.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      image: '/images/fashion/pyrope.jpg',
      products: byVariety('pyrope-garnet'),
    },
    {
      id: '2',
      title: 'Tsavorite',
      handle: 'tsavorite',
      description: 'A vivid green variety of garnet, admired for its brilliance and rarity.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      image: '/images/fashion/tsavo.jpg',
      products: byVariety('tsavorite'),
    },
    {
      id: '3',
      title: 'Spessartine',
      handle: 'spessartine',
      description: 'Glowing orange garnets with a warm, radiant colour.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      image: '/images/fashion/spess.jpg',
      products: byVariety('spessartine'),
    },
    {
      id: '4',
      title: 'Blue Sapphire',
      handle: 'blue-sapphire',
      description: 'A timeless favourite, celebrated for its deep blue colour and lasting brilliance.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      image: '/images/fashion/blue.jpg',
      products: byVariety('blue-sapphire'),
    },
  ]
}
export async function getFashionGroupCollections() {
  const collections = await getFashionCollections()
  return [
    {
      title: 'NEW ARRIVALS',
      handle: 'new-arrivals',
      description: 'lorem ipsum',
      collections,
    },
    {
      title: 'Best Selling',
      handle: 'best-selling',
      description: 'The gemstones our customers love most, chosen for their colour, clarity and brilliance.',
      collections,
    },
    {
      title: 'Traditional Stones',
      handle: 'accessories',
      description: 'Classic gemstones treasured for generations, each one selected for its natural beauty.',
      collections,
    },
    {
      title: 'Abroad Stones',
      handle: 'footwear',
      description: 'Remarkable gemstones sourced from around the world to complement our collection.',
      collections,
    },
    {
      title: 'Jewelry',
      handle: 'jewelry',
      description: 'lorem ipsum',
      collections,
    },
  ]
}

// ------------------------ COMMON DEMO DATA ------------------------
// ------------------------  COMMON DEMO DATA ------------------------
export async function getGroupCollections(theme: 'fashion' | 'hijab' | 'skincare') {
  if (theme === 'fashion') {
    return getFashionGroupCollections()
  }
  if (theme === 'hijab') {
    return getHijabGroupCollections()
  }
  if (theme === 'skincare') {
    return getSkincareGroupCollections()
  }
}
export async function getCollections(theme: 'fashion' | 'hijab' | 'skincare' | 'all') {
  if (theme === 'fashion') {
    return await getFashionCollections()
  }
  if (theme === 'hijab') {
    return await getHijabCollections()
  }
  if (theme === 'skincare') {
    return await getSkincareCollections()
  }

  if (theme === 'all') {
    const fashionCollections = getFashionCollections()
    const hijabCollections = getHijabCollections()
    const skincareCollections = getSkincareCollections()

    // use promises.all to get all collections
    const collections = await Promise.all([fashionCollections, hijabCollections, skincareCollections])
    return collections.flat()
  }
}
export async function getCollectionById(id: string) {
  const allCollections = await getCollections('all')
  return allCollections?.find((collection) => collection?.id.toString() === id)
}
export async function getCollectionByHandle(handle: string) {
  // the demo data, 'all' -> get skincare collections
  if (handle === 'all') {
    return {
      id: 'gid://0',
      title: 'All Gemstones',
      handle: '/all',
      description:
        'Browse our full selection of natural gemstones. Filter by type, cut, carat, colour, origin and treatment to find your perfect stone.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      image: '/images/fashion/blue.jpg',
      products: await getGemProducts(),
    }
  }
  const allCollections = await getCollections('all')
  return allCollections?.find((collection) => collection?.handle === handle)
}

export async function getProducts() {
  return [
    // Skincare Products 10 items
    {
      id: 1001,
      title: 'Clay Mask',
      handle: 'clay-mask',
      vendor: 'GlowBeauty',
      tags: ['Oily Skin', 'Detox'],
      price: 199,
      images: [
        { src: '/images/skincare/face-1.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/skincare/face-1-1.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/skincare/face-1.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/skincare/face-1-1.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
      ],
      featured_image: { src: '/images/skincare/face-1.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
      options: [
        {
          name: 'Color',
          optionValues: [
            { name: 'Light Blue', swatch: { color: '#ADD8E6', image: null } },
            { name: 'Dark Blue', swatch: { color: '#00008B', image: null } },
            { name: 'Black', swatch: { color: '#000000', image: null } },
          ],
        },
        {
          name: 'Size',
          optionValues: [
            { swatch: null, name: '100g' },
            { swatch: null, name: '200g' },
            { swatch: null, name: '300g' },
          ],
        },
      ],
      selected_options: [
        { name: 'Color', value: 'Light Blue' },
        { name: 'Size', value: '100g' },
      ],
      collections: [{ title: 'Skincare Essentials', id: 2001, handle: 'skincare-essentials' }],
    },
    {
      id: 1002,
      title: 'Hydrating Sheet Mask',
      handle: 'hydrating-sheet-mask',
      vendor: 'GlowBeauty',
      tags: ['Hydrating', 'All Skin Types'],
      price: 299,
      images: [
        { src: '/images/skincare/face-2.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/skincare/face-2-2.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/skincare/face-2.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/skincare/face-2-2.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
      ],
      featured_image: { src: '/images/skincare/face-2.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
      options: [
        {
          name: 'Color',
          optionValues: [
            { name: 'White', swatch: { color: 'oklch(93% 0.034 272.788)', image: null } },
            { name: 'Cream', swatch: { color: '#FFFDD0', image: null } },
            { name: 'Pink', swatch: { color: '#FFC1CC', image: null } },
          ],
        },
        {
          name: 'Pack Size',
          optionValues: [
            { swatch: null, name: '1 Sheet' },
            { swatch: null, name: '5 Sheets' },
            { swatch: null, name: '10 Sheets' },
          ],
        },
      ],
      selected_options: [
        { name: 'Color', value: 'White' },
        { name: 'Pack Size', value: '1 Sheet' },
      ],
      collections: [{ title: 'Skincare Essentials', id: 2001, handle: 'skincare-essentials' }],
    },
    {
      id: 1003,
      title: 'Exfoliating Mask',
      handle: 'exfoliating-mask',
      vendor: 'GlowBeauty',
      tags: ['Exfoliating', 'Brightening'],
      price: 399,
      images: [
        { src: '/images/skincare/face-3.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/skincare/face-3-3.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/skincare/face-3.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/skincare/face-3-3.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
      ],
      featured_image: { src: '/images/skincare/face-3.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
      options: [
        {
          name: 'Color',
          optionValues: [
            { name: 'Green', swatch: { color: '#008000', image: null } },
            { name: 'Yellow', swatch: { color: '#FFFF00', image: null } },
            { name: 'White', swatch: { color: 'oklch(95.1% 0.026 236.824)', image: null } },
          ],
        },
        {
          name: 'Size',
          optionValues: [
            { swatch: null, name: '100g' },
            { swatch: null, name: '150g' },
            { swatch: null, name: '200g' },
          ],
        },
      ],
      selected_options: [
        { name: 'Color', value: 'Green' },
        { name: 'Size', value: '100g' },
      ],
      collections: [{ title: 'Skincare Essentials', id: 2001, handle: 'skincare-essentials' }],
    },
    {
      id: 1004,
      title: 'Charcoal Mask',
      handle: 'charcoal-mask',
      vendor: 'GlowBeauty',
      tags: ['Detox', 'Oily Skin'],
      price: 155,
      images: [
        { src: '/images/skincare/face-4.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/skincare/face-2-2.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/skincare/face-4.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/skincare/face-2-2.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
      ],
      featured_image: { src: '/images/skincare/face-4.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
      options: [
        {
          name: 'Color',
          optionValues: [
            { name: 'Black', swatch: { color: '#000000', image: null } },
            { name: 'Grey', swatch: { color: '#808080', image: null } },
            { name: 'Charcoal', swatch: { color: '#36454F', image: null } },
          ],
        },
        {
          name: 'Size',
          optionValues: [
            { swatch: null, name: '100g' },
            { swatch: null, name: '200g' },
            { swatch: null, name: '300g' },
          ],
        },
      ],
      selected_options: [
        { name: 'Color', value: 'Charcoal' },
        { name: 'Size', value: '100g' },
      ],
      collections: [{ title: 'Skincare Essentials', id: 2001, handle: 'skincare-essentials' }],
    },
    {
      id: 1005,
      title: 'Overnight Mask',
      handle: 'overnight-mask',
      vendor: 'GlowBeauty',
      tags: ['Hydrating', 'Night'],
      price: 188,
      images: [
        { src: '/images/skincare/face-5.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/skincare/face-3-3.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/skincare/face-5.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/skincare/face-3-3.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
      ],
      featured_image: { src: '/images/skincare/face-5.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
      options: [
        {
          name: 'Color',
          optionValues: [
            { name: 'Cream', swatch: { color: '#FFFDD0', image: null } },
            { name: 'White', swatch: { color: 'oklch(95.1% 0.026 236.824)', image: null } },
            { name: 'Beige', swatch: { color: '#F5F5DC', image: null } },
          ],
        },
        {
          name: 'Size',
          optionValues: [
            { swatch: null, name: '100g' },
            { swatch: null, name: '150g' },
            { swatch: null, name: '200g' },
          ],
        },
      ],
      selected_options: [
        { name: 'Color', value: 'Cream' },
        { name: 'Size', value: '100g' },
      ],
      collections: [{ title: 'Skincare Essentials', id: 2001, handle: 'skincare-essentials' }],
    },
    {
      id: 1006,
      title: 'Vitamin C Serum',
      handle: 'vitamin-c-serum',
      vendor: 'GlowBeauty',
      tags: ['Brightening', 'Daily'],
      price: 399,
      images: [
        { src: '/images/skincare/p3-1.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/skincare/p3-4.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/skincare/p3-1.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/skincare/p3-4.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
      ],
      featured_image: { src: '/images/skincare/p3-1.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
      options: [
        {
          name: 'Color',
          optionValues: [
            { name: 'Yellow', swatch: { color: '#FFFF00', image: null } },
            { name: 'Clear', swatch: { color: 'oklch(95.1% 0.026 236.824)', image: null } },
            { name: 'Light Orange', swatch: { color: '#FFA500', image: null } },
          ],
        },
        {
          name: 'Size',
          optionValues: [
            { swatch: null, name: '15ml' },
            { swatch: null, name: '30ml' },
            { swatch: null, name: '50ml' },
          ],
        },
      ],
      selected_options: [
        { name: 'Color', value: 'Yellow' },
        { name: 'Size', value: '30ml' },
      ],
      collections: [{ title: 'Skincare Essentials', id: 2001, handle: 'skincare-essentials' }],
    },
    {
      id: 1007,
      title: 'Hyaluronic Acid Serum',
      handle: 'hyaluronic-acid-serum',
      vendor: 'GlowBeauty',
      tags: ['Hydrating', 'All Skin Types'],
      price: 199,
      images: [
        { src: '/images/skincare/p3-2.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/skincare/p3-5-5.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/skincare/p3-2.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/skincare/p3-5-5.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
      ],
      featured_image: { src: '/images/skincare/p3-2.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
      options: [
        {
          name: 'Color',
          optionValues: [
            { name: 'Clear', swatch: { color: 'oklch(95.1% 0.026 236.824)', image: null } },
            { name: 'Light Blue', swatch: { color: '#ADD8E6', image: null } },
            { name: 'Light Green', swatch: { color: '#90EE90', image: null } },
          ],
        },
        {
          name: 'Size',
          optionValues: [
            { swatch: null, name: '15ml' },
            { swatch: null, name: '30ml' },
            { swatch: null, name: '50ml' },
          ],
        },
      ],
      selected_options: [
        { name: 'Color', value: 'Clear' },
        { name: 'Size', value: '30ml' },
      ],
      collections: [{ title: 'Skincare Essentials', id: 2001, handle: 'skincare-essentials' }],
    },
    {
      id: 1008,
      title: 'Retinol Serum',
      handle: 'retinol-serum',
      vendor: 'GlowBeauty',
      tags: ['Anti-Aging', 'Night'],
      price: 99,
      images: [
        { src: '/images/skincare/p3-3.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/skincare/p3-1.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/skincare/p3-3.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/skincare/p3-1.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
      ],
      featured_image: { src: '/images/skincare/p3-3.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
      options: [
        {
          name: 'Color',
          optionValues: [
            { name: 'Amber', swatch: { color: '#FFBF00', image: null } },
            { name: 'Clear', swatch: { color: 'oklch(95.1% 0.026 236.824)', image: null } },
            { name: 'Yellow', swatch: { color: '#FFFF00', image: null } },
          ],
        },
        {
          name: 'Size',
          optionValues: [
            { swatch: null, name: '15ml' },
            { swatch: null, name: '30ml' },
            { swatch: null, name: '50ml' },
          ],
        },
      ],
      selected_options: [
        { name: 'Color', value: 'Amber' },
        { name: 'Size', value: '30ml' },
      ],
      collections: [{ title: 'Skincare Essentials', id: 2001, handle: 'skincare-essentials' }],
    },
    {
      id: 1009,
      title: 'Niacinamide Serum',
      handle: 'niacinamide-serum',
      vendor: 'GlowBeauty',
      tags: ['Oily Skin', 'Pore-Minimizing'],
      price: 199,
      images: [
        { src: '/images/skincare/p3-4.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/skincare/p3-1.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/skincare/p3-4.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/skincare/p3-1.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
      ],
      featured_image: { src: '/images/skincare/p3-4.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
      options: [
        {
          name: 'Color',
          optionValues: [
            { name: 'Clear', swatch: { color: 'oklch(95.1% 0.026 236.824)', image: null } },
            { name: 'Light Green', swatch: { color: '#90EE90', image: null } },
            { name: 'White', swatch: { color: 'oklch(96.7% 0.001 286.375)', image: null } },
          ],
        },
        {
          name: 'Size',
          optionValues: [
            { swatch: null, name: '15ml' },
            { swatch: null, name: '30ml' },
            { swatch: null, name: '50ml' },
          ],
        },
      ],
      selected_options: [
        { name: 'Color', value: 'Clear' },
        { name: 'Size', value: '30ml' },
      ],
      collections: [{ title: 'Skincare Essentials', id: 2001, handle: 'skincare-essentials' }],
    },
    {
      id: 1010,
      title: 'Peptide Serum',
      handle: 'peptide-serum',
      vendor: 'GlowBeauty',
      tags: ['Anti-Aging', 'Firming'],
      price: 199,
      images: [
        { src: '/images/skincare/p3-5.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/skincare/p3-5-5.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/skincare/p3-5.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/skincare/p3-5-5.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
      ],
      featured_image: { src: '/images/skincare/p3-5.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
      options: [
        {
          name: 'Color',
          optionValues: [
            { name: 'Clear', swatch: { color: 'oklch(96.7% 0.001 286.375)', image: null } },
            { name: 'Light Blue', swatch: { color: '#ADD8E6', image: null } },
            { name: 'Beige', swatch: { color: '#F5F5DC', image: null } },
          ],
        },
        {
          name: 'Size',
          optionValues: [
            { swatch: null, name: '15ml' },
            { swatch: null, name: '30ml' },
            { swatch: null, name: '50ml' },
          ],
        },
      ],
      selected_options: [
        { name: 'Color', value: 'Beige' },
        { name: 'Size', value: '30ml' },
      ],
      collections: [{ title: 'Skincare Essentials', id: 2001, handle: 'skincare-essentials' }],
    },
    // Fashion Products 10 items
    {
      id: 1011,
      title: 'Leather Tote Bag',
      handle: 'leather-tote-bag',
      vendor: 'LuxCouture',
      tags: ['Leather', 'Daily'],
      price: 255,
      images: [
        { src: '/images/fashion/p1-1.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
        { src: '/images/fashion/p1-2.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
        { src: '/images/fashion/p1-3.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
        { src: '/images/fashion/p1-4.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
      ],
      featured_image: { src: '/images/fashion/p1-1.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
      options: [
        {
          name: 'Color',
          optionValues: [
            { name: 'Black', swatch: { color: '#000000', image: null } },
            { name: 'Brown', swatch: { color: '#8B4513', image: null } },
            { name: 'Tan', swatch: { color: '#D2B48C', image: null } },
          ],
        },
        {
          name: 'Size',
          optionValues: [
            { swatch: null, name: 'Medium' },
            { swatch: null, name: 'Large' },
            { swatch: null, name: 'Extra Large' },
          ],
        },
      ],
      selected_options: [
        { name: 'Color', value: 'Black' },
        { name: 'Size', value: 'Large' },
      ],
      collections: [{ title: 'Luxury Fashion', id: 2002, handle: 'luxury-fashion' }],
    },
    {
      id: 1012,
      title: 'Suede Clutch',
      handle: 'suede-clutch',
      vendor: 'LuxCouture',
      tags: ['Suede', 'Evening'],
      price: 199,
      images: [
        { src: '/images/fashion/p2-1.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
        { src: '/images/fashion/p2-2.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
        { src: '/images/fashion/p2-3.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
        { src: '/images/fashion/p2-4.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
      ],
      featured_image: { src: '/images/fashion/p2-1.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
      options: [
        {
          name: 'Color',
          optionValues: [
            { name: 'Navy', swatch: { color: '#000080', image: null } },
            { name: 'Grey', swatch: { color: '#808080', image: null } },
            { name: 'Black', swatch: { color: '#000000', image: null } },
          ],
        },
        {
          name: 'Size',
          optionValues: [
            { swatch: null, name: 'Small' },
            { swatch: null, name: 'Medium' },
          ],
        },
      ],
      selected_options: [
        { name: 'Color', value: 'Navy' },
        { name: 'Size', value: 'Medium' },
      ],
      collections: [{ title: 'Luxury Fashion', id: 2002, handle: 'luxury-fashion' }],
    },
    {
      id: 1018,
      title: 'Satchel Bag',
      handle: 'satchel-bag',
      vendor: 'LuxCouture',
      tags: ['Leather', 'Formal'],
      price: 299,
      images: [
        { src: '/images/fashion/p3-1.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
        { src: '/images/fashion/p3-2.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
        { src: '/images/fashion/p3-3.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
        { src: '/images/fashion/p3-4.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
      ],
      featured_image: { src: '/images/fashion/p3-1.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
      options: [
        {
          name: 'Color',
          optionValues: [
            { name: 'Burgundy', swatch: { color: '#800020', image: null } },
            { name: 'Black', swatch: { color: '#000000', image: null } },
            { name: 'Brown', swatch: { color: '#8B4513', image: null } },
          ],
        },
        {
          name: 'Size',
          optionValues: [
            { swatch: null, name: 'Medium' },
            { swatch: null, name: 'Large' },
          ],
        },
      ],
      selected_options: [
        { name: 'Color', value: 'Burgundy' },
        { name: 'Size', value: 'Medium' },
      ],
      collections: [{ title: 'Luxury Fashion', id: 2002, handle: 'luxury-fashion' }],
    },
    {
      id: 1019,
      title: 'Mini Crossbody Bag',
      handle: 'mini-crossbody-bag',
      vendor: 'LuxCouture',
      tags: ['Leather', 'Casual'],
      price: 199,
      images: [
        { src: '/images/fashion/p4-1.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
        { src: '/images/fashion/p4-2.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
        { src: '/images/fashion/p4-3.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
        { src: '/images/fashion/p4-4.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
      ],
      featured_image: { src: '/images/fashion/p4-1.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
      selected_options: [
        { name: 'Color', value: 'Cream' },
        { name: 'Size', value: 'Small' },
      ],
      collections: [{ title: 'Luxury Fashion', id: 2002, handle: 'luxury-fashion' }],
    },
    {
      id: 1020,
      title: 'Embossed Shoulder Bag',
      handle: 'embossed-shoulder-bag',
      vendor: 'LuxCouture',
      tags: ['Leather', 'Statement'],
      price: 299,
      images: [
        { src: '/images/fashion/p5-1.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
        { src: '/images/fashion/p5-2.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
        { src: '/images/fashion/p5-3.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
        { src: '/images/fashion/p5-4.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
      ],
      featured_image: { src: '/images/fashion/p5-1.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
      options: [
        {
          name: 'Color',
          optionValues: [
            { name: 'Black', swatch: { color: '#000000', image: null } },
            { name: 'Brown', swatch: { color: '#8B4513', image: null } },
            { name: 'Navy', swatch: { color: '#000080', image: null } },
          ],
        },
        {
          name: 'Size',
          optionValues: [
            { swatch: null, name: 'Medium' },
            { swatch: null, name: 'Large' },
          ],
        },
      ],
      selected_options: [
        { name: 'Color', value: 'Black' },
        { name: 'Size', value: 'Large' },
      ],
      collections: [{ title: 'Luxury Fashion', id: 2002, handle: 'luxury-fashion' }],
    },
    {
      id: 1021,
      title: 'Silk Evening Gown',
      handle: 'silk-evening-gown',
      vendor: 'LuxCouture',
      tags: ['Silk', 'Evening'],
      price: 199,
      images: [
        { src: '/images/fashion/p6-1.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
        { src: '/images/fashion/p6-2.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
        { src: '/images/fashion/p6-3.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
        { src: '/images/fashion/p6-4.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
      ],
      featured_image: { src: '/images/fashion/p6-1.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
      options: [
        {
          name: 'Color',
          optionValues: [
            { name: 'Black', swatch: { color: '#000000', image: null } },
            { name: 'Red', swatch: { color: '#FF0000', image: null } },
            { name: 'Navy', swatch: { color: '#000080', image: null } },
          ],
        },
        {
          name: 'Size',
          optionValues: [
            { swatch: null, name: 'S' },
            { swatch: null, name: 'M' },
            { swatch: null, name: 'L' },
          ],
        },
      ],
      selected_options: [
        { name: 'Color', value: 'Black' },
        { name: 'Size', value: 'M' },
      ],
      collections: [{ title: 'Luxury Fashion', id: 2002, handle: 'luxury-fashion' }],
    },
    {
      id: 1022,
      title: 'Velvet Cocktail Dress',
      handle: 'velvet-cocktail-dress',
      vendor: 'LuxCouture',
      tags: ['Velvet', 'Cocktail'],
      price: 199,
      images: [
        { src: '/images/fashion/p7-1.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
        { src: '/images/fashion/p7-2.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
        { src: '/images/fashion/p7-3.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
        { src: '/images/fashion/p7-4.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
      ],
      featured_image: { src: '/images/fashion/p7-1.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
      options: [
        {
          name: 'Color',
          optionValues: [
            { name: 'Black', swatch: { color: '#000000', image: null } },
            { name: 'Burgundy', swatch: { color: '#800020', image: null } },
            { name: 'Emerald', swatch: { color: '#50C878', image: null } },
          ],
        },
        {
          name: 'Size',
          optionValues: [
            { swatch: null, name: 'S' },
            { swatch: null, name: 'M' },
            { swatch: null, name: 'L' },
          ],
        },
      ],
      selected_options: [
        { name: 'Color', value: 'Burgundy' },
        { name: 'Size', value: 'S' },
      ],
      collections: [{ title: 'Luxury Fashion', id: 2002, handle: 'luxury-fashion' }],
    },
    {
      id: 1023,
      title: 'Embroidered Midi Dress',
      handle: 'embroidered-midi-dress',
      vendor: 'LuxCouture',
      tags: ['Embroidered', 'Day-to-Night'],
      price: 399,
      images: [
        { src: '/images/fashion/p8-1.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
        { src: '/images/fashion/p8-2.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
        { src: '/images/fashion/p8-3.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
        { src: '/images/fashion/p8-4.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
      ],
      featured_image: { src: '/images/fashion/p8-1.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
      options: [
        {
          name: 'Color',
          optionValues: [
            { name: 'White', swatch: { color: 'oklch(96.7% 0.001 286.375)', image: null } },
            { name: 'Navy', swatch: { color: '#000080', image: null } },
            { name: 'Black', swatch: { color: '#000000', image: null } },
          ],
        },
        {
          name: 'Size',
          optionValues: [
            { swatch: null, name: 'S' },
            { swatch: null, name: 'M' },
            { swatch: null, name: 'L' },
          ],
        },
      ],
      selected_options: [
        { name: 'Color', value: 'Navy' },
        { name: 'Size', value: 'M' },
      ],
      collections: [{ title: 'Luxury Fashion', id: 2002, handle: 'luxury-fashion' }],
    },
    {
      id: 1024,
      title: 'Satin Wrap Dress',
      handle: 'satin-wrap-dress',
      vendor: 'LuxCouture',
      tags: ['Satin', 'Casual'],
      price: 99,
      images: [
        { src: '/images/fashion/p9-1.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
        { src: '/images/fashion/p9-2.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
        { src: '/images/fashion/p9-3.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
        { src: '/images/fashion/p9-4.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
      ],
      featured_image: { src: '/images/fashion/p9-1.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
      options: [
        {
          name: 'Color',
          optionValues: [
            { name: 'Red', swatch: { color: '#FF0000', image: null } },
            { name: 'Black', swatch: { color: '#000000', image: null } },
            { name: 'Cream', swatch: { color: '#FFFDD0', image: null } },
          ],
        },
        {
          name: 'Size',
          optionValues: [
            { swatch: null, name: 'S' },
            { swatch: null, name: 'M' },
            { swatch: null, name: 'L' },
          ],
        },
      ],
      selected_options: [
        { name: 'Color', value: 'Red' },
        { name: 'Size', value: 'L' },
      ],
      collections: [{ title: 'Luxury Fashion', id: 2002, handle: 'luxury-fashion' }],
    },
    {
      id: 1025,
      title: 'Sequin Party Dress',
      handle: 'sequin-party-dress',
      vendor: 'LuxCouture',
      tags: ['Sequin', 'Party'],
      price: 350,
      images: [
        { src: '/images/fashion/p10-1.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
        { src: '/images/fashion/p10-2.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
        { src: '/images/fashion/p10-3.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
        { src: '/images/fashion/p10-4.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
      ],
      featured_image: { src: '/images/fashion/p10-1.jpg', width: 1920, height: 2880, alt: 'lorem insput dolor' },
      options: [
        {
          name: 'Color',
          optionValues: [
            { name: 'Silver', swatch: { color: '#C0C0C0', image: null } },
            { name: 'Gold', swatch: { color: '#FFD700', image: null } },
            { name: 'Black', swatch: { color: '#000000', image: null } },
          ],
        },
        {
          name: 'Size',
          optionValues: [
            { swatch: null, name: 'S' },
            { swatch: null, name: 'M' },
            { swatch: null, name: 'L' },
          ],
        },
      ],
      selected_options: [
        { name: 'Color', value: 'Silver' },
        { name: 'Size', value: 'S' },
      ],
      collections: [{ title: 'Luxury Fashion', id: 2002, handle: 'luxury-fashion' }],
    },
    // Hijab Products 10 items
    {
      id: 1026,
      title: 'Pastel Chiffon Hijab',
      handle: 'pastel-chiffon-hijab',
      vendor: 'ModestTrend',
      tags: ['Chiffon', 'Daily'],
      price: 59,
      images: [
        { src: '/images/hijab/essential-modal-1.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/hijab/keffiyeh-modal-1.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/hijab/essential-modal-1.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/hijab/keffiyeh-modal-1.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
      ],
      featured_image: {
        src: '/images/hijab/essential-modal-1.webp',
        width: 1600,
        height: 2000,
        alt: 'lorem insput dolor',
      },
      options: [
        {
          name: 'Color',
          optionValues: [
            { name: 'Blush Pink', swatch: { color: '#FFC1CC', image: null } },
            { name: 'Mint Green', swatch: { color: '#98FF98', image: null } },
            { name: 'Light Blue', swatch: { color: '#ADD8E6', image: null } },
          ],
        },
        {
          name: 'Size',
          optionValues: [
            { swatch: null, name: 'Standard' },
            { swatch: null, name: 'Large' },
          ],
        },
      ],
      selected_options: [
        { name: 'Color', value: 'Blush Pink' },
        { name: 'Size', value: 'Standard' },
      ],
      collections: [{ title: 'Modest Elegance', id: 2003, handle: 'modest-elegance' }],
    },
    {
      id: 1027,
      title: 'Embroidered Chiffon Hijab',
      handle: 'embroidered-chiffon-hijab',
      vendor: 'ModestTrend',
      tags: ['Chiffon', 'Formal'],
      price: 3500,
      images: [
        { src: '/images/hijab/essential-modal-2.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/hijab/essential-modal-1-1.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/hijab/essential-modal-2.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/hijab/essential-modal-1-1.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
      ],
      featured_image: {
        src: '/images/hijab/essential-modal-2.webp',
        width: 1600,
        height: 2000,
        alt: 'lorem insput dolor',
      },
      options: [
        {
          name: 'Color',
          optionValues: [
            { name: 'Ivory', swatch: { color: 'oklch(94.8% 0.028 342.258)', image: null } },
            { name: 'White', swatch: { color: 'oklch(87.1% 0.15 154.449)', image: null } },
            { name: 'Gold', swatch: { color: '#FFD700', image: null } },
          ],
        },
        {
          name: 'Size',
          optionValues: [
            { swatch: null, name: 'Standard' },
            { swatch: null, name: 'Large' },
          ],
        },
      ],
      selected_options: [
        { name: 'Color', value: 'Ivory' },
        { name: 'Size', value: 'Large' },
      ],
      collections: [{ title: 'Modest Elegance', id: 2003, handle: 'modest-elegance' }],
    },
    {
      id: 1028,
      title: 'Bold Chiffon Hijab',
      handle: 'bold-chiffon-hijab',
      vendor: 'ModestTrend',
      tags: ['Chiffon', 'Statement'],
      price: 2800,
      images: [
        { src: '/images/hijab/essential-modal-3.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/hijab/hijab-haze-1.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/hijab/essential-modal-3.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/hijab/hijab-haze-1.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
      ],
      featured_image: {
        src: '/images/hijab/essential-modal-3.webp',
        width: 1600,
        height: 2000,
        alt: 'lorem insput dolor',
      },
      options: [
        {
          name: 'Color',
          optionValues: [
            { name: 'Emerald Green', swatch: { color: '#50C878', image: null } },
            { name: 'Royal Blue', swatch: { color: '#4169E1', image: null } },
            { name: 'Red', swatch: { color: '#FF0000', image: null } },
          ],
        },
        {
          name: 'Size',
          optionValues: [
            { swatch: null, name: 'Standard' },
            { swatch: null, name: 'Large' },
          ],
        },
      ],
      selected_options: [
        { name: 'Color', value: 'Emerald Green' },
        { name: 'Size', value: 'Standard' },
      ],
      collections: [{ title: 'Modest Elegance', id: 2003, handle: 'modest-elegance' }],
    },
    {
      id: 1029,
      title: 'Printed Chiffon Hijab',
      handle: 'printed-chiffon-hijab',
      vendor: 'ModestTrend',
      tags: ['Chiffon', 'Printed'],
      price: 299,
      images: [
        { src: '/images/hijab/keffiyeh-modal-1.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/hijab/essential-modal-1.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/hijab/keffiyeh-modal-1.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/hijab/essential-modal-1.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
      ],
      featured_image: {
        src: '/images/hijab/keffiyeh-modal-1.webp',
        width: 1600,
        height: 2000,
        alt: 'lorem insput dolor',
      },
      options: [
        {
          name: 'Color',
          optionValues: [
            { name: 'Floral Blue', swatch: { color: '#4682B4', image: null } },
            { name: 'Floral Pink', swatch: { color: '#FFC1CC', image: null } },
            { name: 'Geometric Black', swatch: { color: '#000000', image: null } },
          ],
        },
        {
          name: 'Size',
          optionValues: [
            { swatch: null, name: 'Standard' },
            { swatch: null, name: 'Large' },
          ],
        },
      ],
      selected_options: [
        { name: 'Color', value: 'Floral Blue' },
        { name: 'Size', value: 'Standard' },
      ],
      collections: [{ title: 'Modest Elegance', id: 2003, handle: 'modest-elegance' }],
    },
    {
      id: 1030,
      title: 'Neutral Chiffon Hijab',
      handle: 'neutral-chiffon-hijab',
      vendor: 'ModestTrend',
      tags: ['Chiffon', 'Daily'],
      price: 199,
      images: [
        { src: '/images/hijab/hijab-white-1.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/hijab/premium-rayon-1.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/hijab/hijab-white-1.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/hijab/premium-rayon-1.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
      ],
      featured_image: { src: '/images/hijab/hijab-white-1.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
      options: [
        {
          name: 'Color',
          optionValues: [
            { name: 'Beige', swatch: { color: '#F5F5DC', image: null } },
            { name: 'White', swatch: { color: 'oklch(96.7% 0.003 264.542)', image: null } },
            { name: 'Cream', swatch: { color: '#FFFDD0', image: null } },
          ],
        },
        {
          name: 'Size',
          optionValues: [
            { swatch: null, name: 'Standard' },
            { swatch: null, name: 'Large' },
          ],
        },
      ],
      selected_options: [
        { name: 'Color', value: 'Beige' },
        { name: 'Size', value: 'Standard' },
      ],
      collections: [{ title: 'Modest Elegance', id: 2003, handle: 'modest-elegance' }],
    },
    {
      id: 1031,
      title: 'Classic Jersey Hijab',
      handle: 'classic-jersey-hijab',
      vendor: 'ModestTrend',
      tags: ['Jersey', 'Daily'],
      price: 180,
      images: [
        { src: '/images/hijab/printed-modal-2.webp', width: 2000, height: 3000, alt: 'lorem insput dolor' },
        { src: '/images/hijab/printed-modal-2-2.jpg', width: 2000, height: 3000, alt: 'lorem insput dolor' },
        { src: '/images/hijab/printed-modal-2.webp', width: 2000, height: 3000, alt: 'lorem insput dolor' },
        { src: '/images/hijab/printed-modal-2-2.jpg', width: 2000, height: 3000, alt: 'lorem insput dolor' },
      ],
      featured_image: {
        src: '/images/hijab/printed-modal-2.webp',
        width: 2000,
        height: 3000,
        alt: 'lorem insput dolor',
      },
      options: [
        {
          name: 'Color',
          optionValues: [
            { name: 'Black', swatch: { color: '#000000', image: null } },
            { name: 'Navy', swatch: { color: '#000080', image: null } },
            { name: 'Grey', swatch: { color: '#808080', image: null } },
          ],
        },
        {
          name: 'Size',
          optionValues: [
            { swatch: null, name: 'Standard' },
            { swatch: null, name: 'Large' },
          ],
        },
      ],
      selected_options: [
        { name: 'Color', value: 'Black' },
        { name: 'Size', value: 'Standard' },
      ],
      collections: [{ title: 'Modest Elegance', id: 2003, handle: 'modest-elegance' }],
    },
    {
      id: 1032,
      title: 'Premium Jersey Hijab',
      handle: 'classic-jersey-hijab',
      vendor: 'ModestTrend',
      tags: ['Jersey', 'Premium'],
      price: 250,
      images: [
        { src: '/images/hijab/hijab-coral-1.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/hijab/hijab-coral-2.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/hijab/hijab-coral-1.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/hijab/hijab-coral-2.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
      ],
      featured_image: { src: '/images/hijab/hijab-coral-1.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
      options: [
        {
          name: 'Color',
          optionValues: [
            { name: 'Navy', swatch: { color: '#000080', image: null } },
            { name: 'Coral', swatch: { color: '#FF7F50', image: null } },
            { name: 'Black', swatch: { color: '#000000', image: null } },
          ],
        },
        {
          name: 'Size',
          optionValues: [
            { swatch: null, name: 'Standard' },
            { swatch: null, name: 'Large' },
          ],
        },
      ],
      selected_options: [
        { name: 'Color', value: 'Navy' },
        { name: 'Size', value: 'Large' },
      ],
      collections: [{ title: 'Modest Elegance', id: 2003, handle: 'modest-elegance' }],
    },
    {
      id: 1033,
      title: 'Sport Jersey Hijab',
      handle: 'sport-jersey-hijab',
      vendor: 'ModestTrend',
      tags: ['Jersey', 'Sport'],
      price: 200,
      images: [
        { src: '/images/hijab/hijab-mosaic-1.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/hijab/hijab-mosaic-2.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/hijab/hijab-mosaic-1.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/hijab/hijab-mosaic-2.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
      ],
      featured_image: {
        src: '/images/hijab/hijab-mosaic-1.webp',
        width: 1600,
        height: 2000,
        alt: 'lorem insput dolor',
      },
      options: [
        {
          name: 'Color',
          optionValues: [
            { name: 'Grey', swatch: { color: '#808080', image: null } },
            { name: 'Black', swatch: { color: '#000000', image: null } },
            { name: 'White', swatch: { color: 'oklch(97% 0 0)', image: null } },
          ],
        },
        {
          name: 'Size',
          optionValues: [
            { swatch: null, name: 'Standard' },
            { swatch: null, name: 'Large' },
          ],
        },
      ],
      selected_options: [
        { name: 'Color', value: 'Grey' },
        { name: 'Size', value: 'Standard' },
      ],
      collections: [{ title: 'Modest Elegance', id: 2003, handle: 'modest-elegance' }],
    },
    {
      id: 1034,
      title: 'Patterned Jersey Hijab',
      handle: 'patterned-jersey-hijab',
      vendor: 'ModestTrend',
      tags: ['Jersey', 'Patterned'],
      price: 350,
      images: [
        { src: '/images/hijab/hijab-white-1.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/hijab/hijab-white-2.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/hijab/hijab-white-1.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/hijab/hijab-white-2.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
      ],
      featured_image: { src: '/images/hijab/hijab-white-1.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
      options: [
        {
          name: 'Color',
          optionValues: [
            { name: 'Geometric Blue', swatch: { color: '#4682B4', image: null } },
            { name: 'Geometric Black', swatch: { color: '#000000', image: null } },
            { name: 'Floral Grey', swatch: { color: '#808080', image: null } },
          ],
        },
        {
          name: 'Size',
          optionValues: [
            { swatch: null, name: 'Standard' },
            { swatch: null, name: 'Large' },
          ],
        },
      ],
      selected_options: [
        { name: 'Color', value: 'Geometric Blue' },
        { name: 'Size', value: 'Standard' },
      ],
      collections: [{ title: 'Modest Elegance', id: 2003, handle: 'modest-elegance' }],
    },
    {
      id: 1035,
      title: 'Soft Jersey Hijab',
      handle: 'soft-jersey-hijab',
      vendor: 'ModestTrend',
      tags: ['Jersey', 'Daily'],
      price: 190,
      images: [
        { src: '/images/hijab/hijab-yellow-2.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/hijab/hijab-yellow-1.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/hijab/hijab-yellow-2.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
        { src: '/images/hijab/hijab-yellow-1.webp', width: 1600, height: 2000, alt: 'lorem insput dolor' },
      ],
      featured_image: {
        src: '/images/hijab/hijab-yellow-2.webp',
        width: 1600,
        height: 2000,
        alt: 'lorem insput dolor',
      },
      options: [
        {
          name: 'Color',
          optionValues: [
            { name: 'Cream', swatch: { color: '#FFFDD0', image: null } },
            { name: 'Yellow', swatch: { color: 'oklch(95.2% 0.037 318.852)', image: null } },
            { name: 'Beige', swatch: { color: '#F5F5DC', image: null } },
          ],
        },
        {
          name: 'Size',
          optionValues: [
            { swatch: null, name: 'Standard' },
            { swatch: null, name: 'Large' },
          ],
        },
      ],
      selected_options: [
        { name: 'Color', value: 'Cream' },
        { name: 'Size', value: 'Standard' },
      ],
      collections: [{ title: 'Modest Elegance', id: 2003, handle: 'modest-elegance' }],
    },
    // Sample stones: replace the prices and gem details with your real stock.
    {
      id: 9001,
      title: 'Oval Ceylon Sapphire',
      handle: 'oval-ceylon-sapphire',
      vendor: 'Sapphire',
      tags: ['Gemstone'],
      price: 6800,
      images: [{ src: '/images/fashion/blue.jpg', width: 800, height: 800, alt: 'Oval blue sapphire' }],
      featured_image: { src: '/images/fashion/blue.jpg', width: 800, height: 800, alt: 'Oval blue sapphire' },
      options: [],
      selected_options: [{ name: 'Color', value: 'Blue' }],
      collections: [{ title: 'Gemstones', id: 2004, handle: 'gemstones' }],
      gem: {
        variety: 'blue-sapphire',
        description: 'An oval sapphire with a rich, even blue colour. Sapphires are among the hardest natural gemstones, which makes them a lasting choice for jewellery.',
        colorLabel: 'Blue',
        originLabel: 'Ceylon (Sri Lanka)',
        treatmentLabel: 'Heated',
        type: 'sapphire',
        shape: 'oval',
        shapeLabel: 'Oval',
        carat: 1.25,
        color: 'blue',
        origin: ['ceylon'],
        treatment: 'heated',
      },
    },
    {
      id: 9002,
      title: 'Cushion Pyrope Garnet',
      handle: 'cushion-pyrope-garnet',
      vendor: 'Garnet',
      tags: ['Gemstone'],
      price: 3800,
      images: [{ src: '/images/fashion/pyrope.jpg', width: 800, height: 800, alt: 'Cushion cut pyrope garnet' }],
      featured_image: { src: '/images/fashion/pyrope.jpg', width: 800, height: 800, alt: 'Cushion cut pyrope garnet' },
      options: [],
      selected_options: [{ name: 'Color', value: 'Red' }],
      collections: [{ title: 'Gemstones', id: 2004, handle: 'gemstones' }],
      gem: {
        variety: 'pyrope-garnet',
        description: 'A cushion cut pyrope garnet with a deep, fiery red colour and bright, lively facets. A striking centre stone with plenty of presence.',
        colorLabel: 'Red',
        originLabel: 'Ceylon (Sri Lanka)',
        treatmentLabel: 'Untreated',
        type: 'garnet',
        shape: 'cushion',
        shapeLabel: 'Cushion',
        carat: 5.2,
        color: 'red',
        origin: ['ceylon', 'untreated'],
        treatment: 'untreated',
      },
    },
    {
      id: 9003,
      title: 'Emerald Cut Tsavorite Garnet',
      handle: 'emerald-cut-tsavorite-garnet',
      vendor: 'Garnet',
      tags: ['Gemstone'],
      price: 12500,
      images: [{ src: '/images/fashion/tsavo.jpg', width: 1995, height: 1995, alt: 'Emerald cut tsavorite garnet' }],
      featured_image: { src: '/images/fashion/tsavo.jpg', width: 1995, height: 1995, alt: 'Emerald cut tsavorite garnet' },
      options: [],
      selected_options: [{ name: 'Color', value: 'Green' }],
      collections: [{ title: 'Gemstones', id: 2004, handle: 'gemstones' }],
      gem: {
        variety: 'tsavorite',
        description: 'An emerald cut tsavorite, the vivid green variety of garnet. Its saturated colour and brilliance make it a favourite among gem collectors.',
        colorLabel: 'Green',
        originLabel: 'Tanzania',
        treatmentLabel: 'Untreated',
        type: 'garnet',
        shape: 'emerald-cut',
        shapeLabel: 'Emerald Cut',
        carat: 2.4,
        color: 'green',
        origin: ['other', 'untreated'],
        treatment: 'untreated',
      },
    },
    {
      id: 9004,
      title: 'Oval Spessartine Garnet',
      handle: 'oval-spessartine-garnet',
      vendor: 'Garnet',
      tags: ['Gemstone'],
      price: 850,
      images: [{ src: '/images/fashion/spess.jpg', width: 1000, height: 1000, alt: 'Oval spessartine garnet' }],
      featured_image: { src: '/images/fashion/spess.jpg', width: 1000, height: 1000, alt: 'Oval spessartine garnet' },
      options: [],
      selected_options: [{ name: 'Color', value: 'Orange' }],
      collections: [{ title: 'Gemstones', id: 2004, handle: 'gemstones' }],
      gem: {
        variety: 'spessartine',
        description: 'An oval spessartine garnet with a warm, glowing orange colour. An eye-catching stone that brings energy to any design.',
        colorLabel: 'Orange',
        originLabel: 'Namibia',
        treatmentLabel: 'Untreated',
        type: 'garnet',
        shape: 'oval',
        shapeLabel: 'Oval',
        carat: 0.95,
        color: 'orange',
        origin: ['other', 'untreated'],
        treatment: 'untreated',
      },
    },
  ]
}
export async function getGemProducts() {
  const allProducts = await getProducts()
  return allProducts.filter((product) => product.gem)
}
export function formatPrice(price: number) {
  const minimumFractionDigits = Number.isInteger(price) ? 0 : 2
  return `AED ${price.toLocaleString('en-US', { minimumFractionDigits, maximumFractionDigits: 2 })}`
}
export async function getSkincareProducts() {
  const allProducts = await getProducts()
  return allProducts.slice(0, 10)
}
export async function getFashionProducts() {
  const allProducts = await getProducts()
  return allProducts.slice(10, 20)
}
export async function getHijabProducts() {
  const allProducts = await getProducts()
  return allProducts.slice(20, 30)
}

// get product by handle
export async function getProductByHandle(handle: string) {
  // lower case the handle
  handle = handle.toLowerCase()
  const allProducts = await getProducts()
  const product = allProducts?.find((product) => product?.handle === handle) as TProductItem
  if (!product) {
    return null
  }
  return {
    ...product,
    description: product.gem?.description ?? 'lorem ipsum dolor...',
  }
}

// COMMON Types ------------------------------------------------------------------------
export type TCollection = Awaited<ReturnType<typeof getSkincareCollections>>[number]
export type TProductItem = Awaited<ReturnType<typeof getProducts>>[number]
