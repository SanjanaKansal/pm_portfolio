export interface Background {
  title: string
  points: string[]
}

export interface EducationItem {
  institution: string
  degree: string
  years: string
  description: string
}

export interface Education {
  title: string
  items: EducationItem[]
}

export interface ExperienceItem {
  company: string
  role: string
  years: string
  description: string
}

export interface Experience {
  title: string
  items: ExperienceItem[]
}

export interface WhoAmIData {
  background: Background
  education: Education
  experience: Experience
}

export interface WhoAmIProps {
  background: Background
  education: Education
  experience: Experience
}