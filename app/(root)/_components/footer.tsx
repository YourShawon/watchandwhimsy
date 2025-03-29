'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import FollowIcons from '@/components/shared/followIcons'

const FooterSection = ({
  title,
  links
}: {
  title: string
  links: string[]
}) => (
  <div className='space-y-2'>
    <h3 className='font-semibold text-green-0x'>{title}</h3>
    <ul className='space-y-1'>
      {links.map(link => (
        <li key={link}>
          <Link
            href='/'
            className='transition-all duration-300 sm:hover:ml-2 sm:hover:mr-0 sm:hover:text-green-0x'
          >
            {link}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Subscribed:', email)
    setEmail('')
  }

  return (
    <footer className='bg-green-2x'>
      <div className='sm:container mx-auto px-4 py-8 md:py-12'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
          <div className='space-y-4'>
            <Link href='/' className='flex items-center'>
              <span className='sr-only'>Watch Whimsy</span>
              <svg
                viewBox='0 0 24 24'
                className='h-6 w-6'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
              >
                <circle cx='12' cy='12' r='10' />
                <path d='M12 6v6l4 2' />
              </svg>
              <span className='text-xl font-semibold ml-2'>Watch Whimsy</span>
            </Link>
            <p className='text-sm text-muted-foreground'>
              South Banasree,
              <br />
              Khilgaon, Dhaka, Bangladesh
            </p>
            <p className='text-sm text-muted-foreground'>
              support@watchwhimsy.com
            </p>
            <p className='text-sm text-muted-foreground'>+880 19** - ****62</p>
          </div>

          <FooterSection
            title='INFORMATION'
            links={[
              'My Account',
              'Shop',
              'Login / Register',
              'Cart',
              'Wishlist'
            ]}
          />

          <FooterSection
            title='ABOUT'
            links={['Privacy Policy', 'Terms & Conditions', 'FAQ', 'Contact']}
          />

          <div className='space-y-4'>
            <h3 className='font-semibold text-green-0x'>SUBSCRIBE</h3>
            <form onSubmit={handleSubmit} className='flex space-x-2'>
              <Input
                type='email'
                placeholder='Enter your email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                className='flex-grow focus:border-cyan-600 focus-visible:ring-0 focus-visible:ring-offset-0'
              />
              <Button variant={"bgGreen"} className='transition-all duration-300' type='submit' size='icon'>
                <ArrowRight className='h-4 w-4' />
              </Button>
            </form>
            <FollowIcons />
          </div>
        </div>

        <Separator className='my-8' />

        <div className='text-center text-sm text-muted-foreground'>
          <p>
            Copyright © 2024 Watch and Whimsy - all rights reserved. Technical
            support by Quantic Dynamics.
          </p>
          <div className='mt-2'>
            <Link href='#' className='sm:hover:underline'>
              Terms and conditions
            </Link>
            {' | '}
            <Link href='#' className='sm:hover:underline'>
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
