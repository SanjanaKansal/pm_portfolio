import data from '@/../product/sections/my-toolbox/data.json'
import { MyToolbox } from './components/MyToolbox'

export default function MyToolboxPreview() {
  return <MyToolbox categories={data.categories} />
}