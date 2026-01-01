import data from '@/../product/sections/my-toolbox/data.json'
import { MyToolbox } from '@/sections/my-toolbox/components/MyToolbox'
import type { Category } from '@/../product/sections/my-toolbox/types'

export function MyToolboxPage() {
  return <MyToolbox categories={data.categories as Category[]} />
}