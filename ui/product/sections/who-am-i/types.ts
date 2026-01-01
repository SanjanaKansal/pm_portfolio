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

export interface ExperienceItem {
  company: string
  role: string
  description: string
}

export interface Experience {
  title: string
  items: ExperienceItem[]
  summary: string
}

export interface CurrentRole {
  title: string
  company: string
  role: string
  points: string[]
}

export interface WhoAmIData {
  background: Background
  education: Education
  experience: Experience
  currentRole: CurrentRole
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
  /** Current role section data */
  currentRole: CurrentRole
}