import data from '@/../product/sections/contact-me/data.json'
import { ContactMe } from './components/ContactMe'

export default function ContactMePreview() {
  return <ContactMe identity={data.identity} socials={data.socials} />
}