export interface Skill {
  title: string
  description: string
}

export interface Category {
  id: string
  title: string
  color: 'stone' | 'blue' | 'amber' | 'green'
  skills: Skill[]
}

export interface MyToolboxData {
  categories: Category[]
}

export interface MyToolboxProps {
  categories: Category[]
}