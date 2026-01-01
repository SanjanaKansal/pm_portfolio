export interface FitItem {
  title: string
  description: string
}

export interface FitRow {
  id: string
  title: string
  color: 'purple' | 'green'
  items: FitItem[]
}

export interface MutualFitData {
  rows: FitRow[]
}

export interface MutualFitProps {
  rows: FitRow[]
}