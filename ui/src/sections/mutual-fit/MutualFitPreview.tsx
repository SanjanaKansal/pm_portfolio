import data from '@/../product/sections/mutual-fit/data.json'
import { MutualFit } from './components/MutualFit'

export default function MutualFitPreview() {
  return <MutualFit rows={data.rows} />
}