'use client'

import { useState, ChangeEvent, FormEvent } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '../ui/button'
import {
  ArrowRightIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon
} from '@radix-ui/react-icons'
import Link from 'next/link'
import Logo from '../icons/logo'
import Facebook from '../icons/facebook'
import Twitter from '../icons/twitter'
import Instagram from '../icons/instagram'
import Youtube from '../icons/youtube'
import { Separator } from '@radix-ui/react-separator'

const Footer = () => {
  const [value, setValue] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (value === '') return
    setValue('')
    console.log(value)
  }

  return (
    <div className='bg-[#E8F6EA] py-6 sm:pb-2 sm:pt-10'>
      <div className='container flex flex-wrap items-start justify-between gap-y-5 font-spartan text-base text-[#222] xl:text-lg'>
        <div className='lg:w-1/3 flex w-full flex-col gap-1 sm:w-1/2 xl:w-1/4'>
          <Link href={'#'}>
            <div className='flex items-end justify-start'>
              <Logo />
              <span className='text-xl font-semibold'>Watch Whimsy</span>
            </div>
          </Link>
          <span className='mt-4 font-semibold text-[#088178] sm:text-[#90908e]'>
            SUPPORT
          </span>
          <p>
            <span>South Banasree,</span>
            <br />
            <span>Khilgaon, Dhaka, Bangladesh.</span>
          </p>
          <p>support@wathwhimsy.com</p>
          <p>+880 19** - ****62</p>
        </div>

        <div className='lg:w-1/3 flex w-1/2 flex-col gap-1 xl:w-1/4'>
          <span className='font-semibold text-[#088178]'>INFORMATION</span>
          <ul>
            <li>
              <Link href='/'>
                <span className='transition-all duration-500 hover:ml-2 hover:mr-0 hover:text-[#088178]'>
                  My Account
                </span>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <span className='transition-all duration-500 hover:ml-2 hover:mr-0 hover:text-[#088178]'>
                  Shop
                </span>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <span className='transition-all duration-500 hover:ml-2 hover:mr-0 hover:text-[#088178]'>
                  Login / Register
                </span>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <span className='hover:ml-2 hover:mr-0 hover:text-[#088178] transition-all duration-500'>Cart</span>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <span className='transition-all duration-500 hover:ml-2 hover:mr-0 hover:text-[#088178]'>
                  Wishlist
                </span>
              </Link>
            </li>
          </ul>
        </div>

        <div className='lg:w-1/3 flex w-1/2 flex-col gap-1 xl:w-1/4'>
          <span className='font-semibold text-[#088178]'>ABOUT</span>
          <ul>
            <li>
              <Link href='/'>
                <span className='transition-all duration-500 hover:ml-2 hover:mr-0 hover:text-[#088178]'>
                  Privacy Policy
                </span>
              </Link>
            </li>

            <li>
              <Link href='/'>
                <span className='transition-all duration-500 hover:ml-2 hover:mr-0 hover:text-[#088178]'>
                  Terms & Conditions
                </span>
              </Link>
            </li>

            <li>
              <Link href='/'>
                <span className='transition-all duration-500 hover:ml-2 hover:mr-0 hover:text-[#088178]'>
                  FAQ
                </span>
              </Link>
            </li>

            <li>
              <Link href='/'>
                <span
                  className='transition-all duration-500 hover:ml-2 hover:mr-0 hover:text-[#088178]'
                >
                  Contact
                </span>
              </Link>
            </li>
          </ul>
        </div>

        <div className='lg:w-full lg:flex-row lg:justify-start lg:items-start lg:gap-12 flex w-full flex-col gap-4 sm:w-1/2 xl:w-1/4 xl:flex-col xl:gap-4'>
          <div className='lg:w-1/2 xl:w-full'>
            <h3 className='mb-2 font-semibold text-[#088178]'>SUBSCRIBE</h3>
            <form
              onSubmit={handleSubmit}
              className='flex w-full items-center space-x-2'
            >
              <Input
                type='email'
                value={value}
                name='email'
                onChange={handleChange}
                placeholder='Enter your email'
                className='lg:text-lg border border-[#088178] text-base text-[#222]'
              />
              <Button
                type='submit'
                variant='outline'
                className='border border-[#088178]'
              >
                <ArrowRightIcon className='text-[#088178]' />
              </Button>
            </form>
          </div>

          <div className='lg:w-1/2 xl:w-full'>
            <h5 className='font-spartan text-lg font-semibold text-[#90908c]'>
              Follow Us
            </h5>
            <ul className='mt-3 flex gap-3'>
              <Link href={'#'}>
                <li>
                  <Facebook />
                </li>
              </Link>
              <Link href={'#'}>
                <li>
                  <Twitter />
                </li>
              </Link>
              <Link href={'#'}>
                <li>
                  <Instagram />
                </li>
              </Link>
              <Link href={'#'}>
                <li>
                  <Youtube />
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      <Separator className='my-4 h-[1px] bg-[#90908e]' />

      <div className='container w-full text-center text-sm'>
        <span>
          Copyright © 2024 Watch and Whimsy - all rights reserved. Technical
          support by Quantic Dynamics.
        </span>
        <Separator className='my-4 h-[1px] bg-[#90908e48]' />
        <span>
          <Link href={'#'}>Terms and conditions </Link>|
          <Link href={'#'}> Privacy Policy</Link>
        </span>
      </div>
    </div>
  )
}

export default Footer
