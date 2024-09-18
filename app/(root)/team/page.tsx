import { FC } from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon
} from '@radix-ui/react-icons'

import image1 from '@/public/uploads/2.jpg'

interface SocialMedia {
  twitter: string
  instagram: string
  linkedIn: string
  github: string
}

interface TeamMember {
  name: string
  image: StaticImageData
  title: string
  media: SocialMedia
}

const teamData: TeamMember[] = [
  {
    name: 'Anamul Hoque',
    image: image1,
    title: 'Developer',
    media: {
      twitter: 'https://x.com/anamulhoque_wd',
      instagram: '#',
      linkedIn: '#',
      github: '#'
    }
  },
  {
    name: 'Anamul Hoque',
    image: image1,
    title: 'Developer',
    media: {
      twitter: 'https://x.com/anamulhoque_wd',
      instagram: '#',
      linkedIn: '#',
      github: '#'
    }
  },
  {
    name: 'Anamul Hoque',
    image: image1,
    title: 'Developer',
    media: {
      twitter: 'https://x.com/anamulhoque_wd',
      instagram: '#',
      linkedIn: '#',
      github: '#'
    }
  },
  {
    name: 'Anamul Hoque',
    image: image1,
    title: 'Developer',
    media: {
      twitter: 'https://x.com/anamulhoque_wd',
      instagram: '#',
      linkedIn: '#',
      github: '#'
    }
  },
  {
    name: 'Anamul Hoque',
    image: image1,
    title: 'Developer',
    media: {
      twitter: 'https://x.com/anamulhoque_wd',
      instagram: '#',
      linkedIn: '#',
      github: '#'
    }
  },
  {
    name: 'Anamul Hoque',
    image: image1,
    title: 'Developer',
    media: {
      twitter: 'https://x.com/anamulhoque_wd',
      instagram: '#',
      linkedIn: '#',
      github: '#'
    }
  },
  // Additional team members...
]

interface LiProps {
  children: React.ReactNode
  icon: string
  delay: string
}

const Li: FC<LiProps> = ({ children, icon, delay }) => {
  return (
    <li
      className={`invisible translate-y-7 transform opacity-0 transition-all ${delay} duration-500 ease-in-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100`}
    >
      <Link href={icon} target='_blank'>
        <div className='flex h-8 w-8 items-center justify-center rounded-full border border-[#0000001e] bg-[#fff]'>
          {children}
        </div>
      </Link>
    </li>
  )
}

const TeamSection: FC = () => {
  return (
    <div className='my-10 flex flex-col items-center justify-center gap-10 text-[#222] sm:container'>
      <div className='px-5 text-center lg:w-3/4'>
        <h2 className='text-xl font-medium'>Our Amazing Team</h2>
        <p className='mt-3 text-sm text-[#90908e]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className='grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 xl:grid-cols-4'>
        {teamData.map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            className='group relative flex flex-col transition-all hover:visible hover:opacity-100'
          >
            <Image
              src={item.image}
              alt={`Profile picture of ${item.name}`}
              className='h-full w-auto max-w-none object-cover'
            />

            <ul className='absolute bottom-24 left-1/2 top-1/2 flex -translate-x-1/2 translate-y-1/2 transform items-center gap-1'>
              {[
                { link: item.media.twitter, Icon: TwitterLogoIcon, delay: 'delay-150' },
                { link: item.media.linkedIn, Icon: LinkedInLogoIcon, delay: 'delay-300' },
                { link: item.media.github, Icon: GitHubLogoIcon, delay: 'delay-500' },
                { link: item.media.instagram, Icon: InstagramLogoIcon, delay: 'delay-700' }
              ].map((item, i) => (
                <Li key={i} icon={item.link} delay={item.delay}>
                  <item.Icon color='#000' fill='#000' width={20} height={20} />
                </Li>
              ))}
            </ul>

            <div className='mt-1 border-l-2 border-[#90908e] py-1 pl-3'>
              <h2 className='text-lg font-medium'>{item.name}</h2>
              <h4 className='text-[#90908e]'>{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TeamSection
