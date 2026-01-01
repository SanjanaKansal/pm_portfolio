export interface Identity {
  name: string
  email: string
  phone: string
}

export interface Social {
  platform: string
  url: string
}

export interface ContactMeData {
  identity: Identity
  socials: Social[]
  tagline: string
}

export interface ContactMeProps {
  identity: Identity
  socials: Social[]
  tagline: string
}