'use client'

import { useAside } from '@/components/aside'
import { Checkbox, CheckboxField, CheckboxGroup } from '@/components/checkbox'
import { Fieldset, Label, Legend } from '@/components/fieldset'
import { Text } from '@/components/text'
import { gemFilters } from '@/gem-filters'
import { useGemFilters } from '@/hooks/use-gem-filters'
import { PlusSignIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

const CategoryFilters1 = () => {
  const { open: openAside } = useAside()
  const { isSelected, toggle, clear, hasSelection } = useGemFilters()

  return (
    <aside>
      <h2 className="sr-only">Filters</h2>

      <button
        type="button"
        onClick={() => openAside('category-filters')}
        className="inline-flex items-center lg:hidden"
      >
        <span className="text-sm font-medium text-gray-700 uppercase">Filters</span>
        <HugeiconsIcon
          icon={PlusSignIcon}
          className="ml-1 size-5 shrink-0 text-gray-400"
          size={16}
          color="currentColor"
          strokeWidth={1.5}
        />
      </button>

      <div className="hidden lg:block">
        {hasSelection ? (
          <button type="button" onClick={clear} className="mb-8 text-sm text-zinc-900 uppercase underline">
            Clear all filters
          </button>
        ) : null}

        <form className="divide-y divide-gray-200">
          {gemFilters.map((section) => (
            <div key={section.id} className="py-8 first:pt-0 last:pb-0">
              <Fieldset>
                <Legend className="block">
                  <Text className="font-medium">{section.name}</Text>
                </Legend>
                <div className="space-y-3 pt-5">
                  <CheckboxGroup>
                    {section.options.map((option) => (
                      <CheckboxField key={option.value}>
                        <Checkbox
                          name={`${section.id}[]`}
                          value={option.value}
                          checked={isSelected(section.id, option.value)}
                          onChange={() => toggle(section.id, option.value)}
                        />
                        <Label>
                          <Text className="text-zinc-600">{option.label}</Text>
                        </Label>
                      </CheckboxField>
                    ))}
                  </CheckboxGroup>
                </div>
              </Fieldset>
            </div>
          ))}
        </form>
      </div>
    </aside>
  )
}

export default CategoryFilters1
