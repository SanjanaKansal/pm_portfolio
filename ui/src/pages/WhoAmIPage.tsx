import data from '@/../product/sections/who-am-i/data.json'
import { WhoAmI } from '@/sections/who-am-i/components/WhoAmI'

export function WhoAmIPage() {
  return (
    <WhoAmI
      background={data.background}
      education={data.education}
      experience={data.experience}
    />
  )
}