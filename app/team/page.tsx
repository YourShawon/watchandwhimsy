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
  linkdIn: string
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
      linkdIn: '#',
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
      linkdIn: '#',
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
      linkdIn: '#',
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
      linkdIn: '#',
      github: '#'
    }
  }
]

const TeamSection: FC = () => {
  return (
    <div>
      <div className='mt-20 flex flex-col gap-12 sm:container xs:mt-12'>
        <div className='m-auto flex flex-col items-center justify-center gap-2 text-center xs:w-[90%] sm:w-3/4 xl:w-2/4'>
          <h2 className='font-bold text-gray-800 xs:text-xl sm:text-xl md:text-2xl xl:text-4xl'>
            Our Amazing Team
          </h2>
          <p className='text-gray-600 xs:text-[14px] sm:text-base'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className='flex flex-wrap items-center justify-between gap-y-8'>
          {teamData.map((item, i) => (
            <div
              key={i}
              className='group xs:w-full sm:w-[48%] md:w-[31%] xl:w-[23%]'
            >
              <div className='relative flex items-center justify-center overflow-hidden transition-all hover:visible hover:opacity-100 sm:h-[400px] md:h-[370px] xl:h-[320px] xl:w-full'>
                <Image
                  src={item.image}
                  alt={item.name}
                  className='h-full w-auto max-w-none object-cover'
                />
                <ul className='absolute bottom-8 flex items-center gap-1'>
                  <li className='invisible translate-y-7 transform opacity-0 transition-all delay-150 duration-500 ease-in-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100'>
                    <Link href={item.media.twitter} target='_blank'>
                      <div className='flex h-8 w-8 items-center justify-center rounded-full border border-[#0000001e] bg-white'>
                        <TwitterLogoIcon
                          color='#000'
                          fill='#000'
                          width={20}
                          height={20}
                        />
                      </div>
                    </Link>
                  </li>
                  <li className='invisible translate-y-7 transform opacity-0 transition-all delay-300 duration-500 ease-in-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100'>
                    <Link href={item.media.linkdIn} target='_blank'>
                      <div className='flex h-8 w-8 items-center justify-center rounded-full border border-[#0000001e] bg-white'>
                        <LinkedInLogoIcon
                          color='#000'
                          fill='#000'
                          width={20}
                          height={20}
                        />
                      </div>
                    </Link>
                  </li>
                  <li className='invisible translate-y-7 transform opacity-0 transition-all delay-500 duration-500 ease-in-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100'>
                    <Link href={item.media.github} target='_blank'>
                      <div className='flex h-8 w-8 items-center justify-center rounded-full border border-[#0000001e] bg-white'>
                        <GitHubLogoIcon
                          color='#000'
                          fill='#000'
                          width={20}
                          height={20}
                        />
                      </div>
                    </Link>
                  </li>
                  <li className='invisible translate-y-7 transform opacity-0 transition-all delay-700 duration-500 ease-in-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100'>
                    <Link href={item.media.instagram} target='_blank'>
                      <div className='flex h-8 w-8 items-center justify-center rounded-full border border-[#0000001e] bg-white'>
                        <InstagramLogoIcon
                          color='#000'
                          fill='#000'
                          width={20}
                          height={20}
                        />
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='my-4 border-l-2 border-[#808080] pl-3 xs:mx-3 sm:mx-0'>
                <h2 className='text-base font-medium text-gray-800'>
                  {item.name}
                </h2>
                <h4 className='text-gray-600'>{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TeamSection
