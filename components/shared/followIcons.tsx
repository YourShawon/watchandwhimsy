import Facebook from '@/public/icons/facebook'
import Instagram from '@/public/icons/instagram'
import Twitter from '@/public/icons/twitter'
import Youtube from '@/public/icons/youtube'
import Link from 'next/link'
import React from 'react'

const FollowIcons: React.FC = () => {
  return (
    <div className='lg:w-1/2 xl:w-full'>
      <h5 className='font-spartan text-lg font-semibold text-muted-foreground'>
        Follow Us
      </h5>
      <div className='mt-3 flex gap-3'>
        <Link href={'/'}>
          <Facebook />
        </Link>
        <Link href={'/'}>
          <Twitter />
        </Link>
        <Link href={'/'}>
          <Instagram />
        </Link>
        <Link href={'/'}>
          <Youtube />
        </Link>
      </div>
    </div>
  )
}

export default FollowIcons
