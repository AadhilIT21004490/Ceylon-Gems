import type { TProductItem } from '@/data'

type GemFilterOption = { value: string; label: string; min?: number; max?: number }
type GemFilter = { id: string; name: string; options: GemFilterOption[] }

export const gemFilters: GemFilter[] = [
  {
    id: 'type',
    name: 'Gemstone Type',
    options: [
      { value: 'ruby', label: 'Ruby' },
      { value: 'sapphire', label: 'Sapphire' },
      { value: 'emerald', label: 'Emerald' },
      { value: 'tanzanite', label: 'Tanzanite' },
      { value: 'opal', label: 'Opal' },
      { value: 'tourmaline', label: 'Tourmaline' },
      { value: 'aquamarine', label: 'Aquamarine' },
      { value: 'garnet', label: 'Garnet' },
    ],
  },
  {
    id: 'price',
    name: 'Price Range',
    options: [
      { value: 'under-1000', label: 'Under AED 1,000', max: 1000 },
      { value: '1000-5000', label: 'AED 1,000 – AED 5,000', min: 1000, max: 5000 },
      { value: '5000-20000', label: 'AED 5,000 – AED 20,000', min: 5000, max: 20000 },
      { value: 'over-20000', label: 'AED 20,000+', min: 20000 },
    ],
  },
  {
    id: 'shape',
    name: 'Shape / Cut',
    options: [
      { value: 'round', label: 'Round' },
      { value: 'oval', label: 'Oval' },
      { value: 'emerald-cut', label: 'Emerald Cut' },
      { value: 'pear', label: 'Pear' },
      { value: 'cushion', label: 'Cushion' },
      { value: 'marquise', label: 'Marquise' },
      { value: 'asscher', label: 'Asscher' },
      { value: 'cabochon', label: 'Cabochon' },
    ],
  },
  {
    id: 'carat',
    name: 'Carat Weight',
    options: [
      { value: 'under-1', label: 'Under 1ct', max: 1 },
      { value: '1-2', label: '1 – 2ct', min: 1, max: 2 },
      { value: '2-5', label: '2 – 5ct', min: 2, max: 5 },
      { value: 'over-5', label: '5ct+', min: 5 },
    ],
  },
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'red', label: 'Red' },
      { value: 'blue', label: 'Blue' },
      { value: 'green', label: 'Green' },
      { value: 'yellow', label: 'Yellow' },
      { value: 'orange', label: 'Orange' },
      { value: 'pink', label: 'Pink' },
      { value: 'multi-color', label: 'Multi-color' },
    ],
  },
  {
    id: 'origin',
    name: 'Origin / Locality',
    options: [
      { value: 'burmese', label: 'Burmese' },
      { value: 'ceylon', label: 'Ceylon (Sri Lankan)' },
      { value: 'colombian', label: 'Colombian' },
      { value: 'zambian', label: 'Zambian' },
      { value: 'other', label: 'Other Origins' },
      { value: 'untreated', label: 'Unheated / Untreated' },
    ],
  },
  {
    id: 'treatment',
    name: 'Treatment Status',
    options: [
      { value: 'untreated', label: 'Untreated / No Treatment' },
      { value: 'heated', label: 'Heated' },
      { value: 'oiled', label: 'Oiled' },
      { value: 'diffused', label: 'Diffused' },
    ],
  },
]

export const gemSortOptions = [
  { value: '', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'carat-desc', label: 'Carat: High to Low' },
]

const inRange = (value: number, { min = 0, max = Infinity }: GemFilterOption) => value >= min && value < max

function matches(product: TProductItem, filterId: string, option: GemFilterOption) {
  const gem = product.gem
  if (!gem) return false

  switch (filterId) {
    case 'type':
      return gem.type === option.value
    case 'price':
      return inRange(product.price, option)
    case 'shape':
      return gem.shape === option.value
    case 'carat':
      return inRange(gem.carat, option)
    case 'color':
      return gem.color === option.value
    case 'origin':
      return gem.origin.includes(option.value)
    case 'treatment':
      return gem.treatment === option.value
    default:
      return false
  }
}

type SearchParams = Record<string, string | string[] | undefined>

// Options within a filter widen the results; separate filters narrow them.
export function filterAndSortGems(products: TProductItem[], searchParams: SearchParams) {
  const result = gemFilters.reduce((remaining, filter) => {
    const selected = String(searchParams[filter.id] ?? '').split(',')
    const options = filter.options.filter((option) => selected.includes(option.value))
    if (!options.length) return remaining
    return remaining.filter((product) => options.some((option) => matches(product, filter.id, option)))
  }, products)

  switch (searchParams.sort) {
    case 'price-asc':
      return [...result].sort((a, b) => a.price - b.price)
    case 'price-desc':
      return [...result].sort((a, b) => b.price - a.price)
    case 'carat-desc':
      return [...result].sort((a, b) => (b.gem?.carat ?? 0) - (a.gem?.carat ?? 0))
    default:
      return result
  }
}
