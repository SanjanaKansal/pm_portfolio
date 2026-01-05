// =============================================================================
// Data Types
// =============================================================================

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

export interface StoryItem {
  context: string
  insight: string
  reasoning: string
  action: string
  impact: string
}

export interface ExperienceItem {
  company: string
  role: string
  years: string
  description: string
  tagline?: string
  stories?: StoryItem[]
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

// =============================================================================
// Component Props
// =============================================================================

export interface WhoAmIProps {
  /** Background section data */
  background: Background
  /** Education section data */
  education: Education
  /** Experience section data */
  experience: Experience
}