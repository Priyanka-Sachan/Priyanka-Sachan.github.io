import { socialLinks } from '../public/data.json'
import Image from 'next/image'

export default function SocialBar() {
  return (
    <div className="md:fixed md:bottom-0 md:left-5">
      <div className="grid grid-cols-4 md:block justify-items-center max-w-fit md:max-w-none mx-auto">
        <div className="py-2 px-2">
          <a href={socialLinks.github}>
            <Image src="/svg/github.svg" width="24" height="24" />
          </a>
        </div>
        <div className="py-2 px-2">
          <a href={socialLinks.twitter}>
            <Image src="/svg/twitter.svg" width="24" height="24" />
          </a>
        </div>
        <div className="py-2 px-2">
          <a href={socialLinks.linkedin}>
            <Image src="/svg/linkedin.svg" width="24" height="24" />
          </a>
        </div>
        <div className="py-2 px-2">
          <a href={socialLinks.codepen}>
            <Image src="/svg/codepen.svg" width="24" height="24" />
          </a>
        </div>
        <div className="hidden md:block ml-4 h-16 w-1 bg-slate-600"></div>
      </div>
    </div>
  )
}
