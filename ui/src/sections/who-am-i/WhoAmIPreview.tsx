import data from '@/../product/sections/who-am-i/data.json'
import { WhoAmI } from './components/WhoAmI'

export default function WhoAmIPreview() {
  return (
    <WhoAmI
      background={data.background}
      education={data.education}
      experience={data.experience}
    />
  )
}