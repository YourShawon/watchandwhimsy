import { FC } from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon
} from '@radix-ui/react-icons'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import DynamicBreadcrumb from '@/components/shared/dynamic-breadcrumb'
import { teamData } from '@/constants/team'
import { LiProps } from '@/interface/team'

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
    <>
      <div className='bg-white-2x'>
        <DynamicBreadcrumb />
      </div>
      <section className='px-2 py-12 sm:container'>
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
                    className='h-auto w-full rounded-md object-cover'
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
                    <h3 className='font-semibold text-black-solid'>
                      {item.name}
                    </h3>
                    <p className='text-sm text-muted-foreground'>{item.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default TeamSection
