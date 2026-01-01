import data from '@/../product/sections/mutual-fit/data.json'
import { MutualFit } from './components/MutualFit'
import type { FitRow } from '@/../product/sections/mutual-fit/types'

export default function MutualFitPreview() {
  return <MutualFit rows={data.rows as FitRow[]} />
}