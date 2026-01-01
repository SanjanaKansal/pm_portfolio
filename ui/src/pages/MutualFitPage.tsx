import data from '@/../product/sections/mutual-fit/data.json'
import { MutualFit } from '@/sections/mutual-fit/components/MutualFit'
import type { FitRow } from '@/../product/sections/mutual-fit/types'

export function MutualFitPage() {
  return <MutualFit rows={data.rows as FitRow[]} />
}