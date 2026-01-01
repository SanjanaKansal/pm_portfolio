import data from '@/../product/sections/my-toolbox/data.json'
import { MyToolbox } from './components/MyToolbox'
import type { Category } from '@/../product/sections/my-toolbox/types'

export default function MyToolboxPreview() {
  return <MyToolbox categories={data.categories as Category[]} />
}