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
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

interface SocialMedia {
  twitter: string
  instagram: string
  linkedIn: string
  github: string
}

interface TeamMember {
  name: string
  image: StaticImageData
  role: string
  media: SocialMedia
}

const teamData: TeamMember[] = [
  {
    name: 'Anamul Hoque',
    image: image1,
    role: 'Developer',
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
    role: 'Developer',
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
    role: 'Developer',
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
    role: 'Developer',
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
    role: 'Developer',
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
    role: 'Developer',
    media: {
      twitter: 'https://x.com/anamulhoque_wd',
      instagram: '#',
      linkedIn: '#',
      github: '#'
    }
  }
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
        <div className='flex h-8 w-8 items-center justify-center rounded-full bg-green-2x'>
          {children}
        </div>
      </Link>
    </li>
  )
}

const TeamSection: FC = () => {
  return (
    <section className='sm:container px-2 py-12'>
      <div className='mx-auto'>
        <h2 className='mb-4 text-center text-3xl font-bold'>
          Our Amazing Team
        </h2>
        <p className='mx-auto mb-8 max-w-2xl text-center text-muted-foreground'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className='grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 xl:grid-cols-4'>
          {teamData.map((item, i) => (
            <Card
              key={`${item.name}-${i}`}
              className='group relative flex flex-col overflow-hidden p-2 transition-all hover:visible hover:opacity-100'
            >
              <CardContent className='p-0'>
                <Image
                  src={item.image}
                  alt={`Profile picture of ${item.name}`}
                  width={400}
                  height={400}
                  className='h-auto w-full object-cover rounded-md'
                />

                <ul className='absolute bottom-24 left-1/2 top-1/2 flex -translate-x-1/2 translate-y-1/2 transform items-center gap-1'>
                  {[
                    {
                      link: item.media.twitter,
                      Icon: TwitterLogoIcon,
                      delay: 'delay-150'
                    },
                    {
                      link: item.media.linkedIn,
                      Icon: LinkedInLogoIcon,
                      delay: 'delay-300'
                    },
                    {
                      link: item.media.github,
                      Icon: GitHubLogoIcon,
                      delay: 'delay-500'
                    },
                    {
                      link: item.media.instagram,
                      Icon: InstagramLogoIcon,
                      delay: 'delay-700'
                    }
                  ].map((item, i) => (
                    <Li key={i} icon={item.link} delay={item.delay}>
                      <item.Icon
                        color='#088178'
                        fill='#088178'
                        width={20}
                        height={20}
                      />
                    </Li>
                  ))}
                </ul>

                <div className='p-4 pb-0'>
                  <h3 className='text-black-solid font-semibold'>{item.name}</h3>
                  <p className='text-muted-foreground text-sm'>{item.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
