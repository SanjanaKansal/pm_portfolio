import data from '@/../product/sections/contact-me/data.json'
import { ContactMe } from '@/sections/contact-me/components/ContactMe'

export function ContactMePage() {
  return <ContactMe identity={data.identity} socials={data.socials} />
}