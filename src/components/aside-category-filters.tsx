'use client'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'

import { ArrowDown01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { gemFilters } from '@/gem-filters'
import { useGemFilters } from '@/hooks/use-gem-filters'
import clsx from 'clsx'
import { Aside } from './aside/aside'
import { Checkbox, CheckboxField, CheckboxGroup } from './checkbox'
import { Fieldset, Label, Legend } from './fieldset'
import { Text } from './text'

interface Props {
  className?: string
}

const AsideCategoryFilters = ({ className = '' }: Props) => {
  const { isSelected, toggle, clear, hasSelection } = useGemFilters()

  return (
    <Aside openFrom="right" type="category-filters" heading="Filters" contentMaxWidthClassName="max-w-sm">
      <div className={clsx('flex h-full flex-col', className)}>
        {/* CONTENT */}

        <div className="flex-1 overflow-x-hidden overflow-y-auto hidden-scrollbar">
          <div className="flow-root">
            {/* Filters */}
            <form className="">
              {gemFilters.map((section) => (
                <Disclosure key={section.id} as="div" className="border-b border-zinc-200 pt-4 pb-4">
                  <Fieldset>
                    <Legend className="w-full">
                      <DisclosureButton className="group flex w-full items-center justify-between p-2 text-zinc-400 hover:text-zinc-500">
                        <Text className="text-sm font-medium text-zinc-900">{section.name}</Text>
                        <span className="ms-6 flex h-7 items-center">
                          <HugeiconsIcon
                            icon={ArrowDown01Icon}
                            className="size-5 shrink-0 group-data-open:-rotate-180"
                            size={16}
                            color="currentColor"
                            strokeWidth={1.5}
                          />
                        </span>
                      </DisclosureButton>
                    </Legend>
                    <DisclosurePanel className="px-4 pt-4 pb-2">
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
                    </DisclosurePanel>
                  </Fieldset>
                </Disclosure>
              ))}
            </form>

            {hasSelection ? (
              <button type="button" onClick={clear} className="mt-6 text-sm text-zinc-900 uppercase underline">
                Clear all filters
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </Aside>
  )
}

export default AsideCategoryFilters
