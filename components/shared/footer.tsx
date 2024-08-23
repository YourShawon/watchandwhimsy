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
    <>
      <div className='bg-darkBlue flex flex-wrap items-start justify-between border-t border-[#088178] bg-[#E8F6EA] py-10 xs:gap-y-5 xs:px-2 sm:gap-y-8 sm:px-8'>
        <div className='flex flex-col gap-3 xs:w-full sm:w-2/4 md:w-1/3 xl:w-1/4'>
          <Link href={'#'}>
            <div className='mb-4 flex items-center justify-start gap-3'>
              <Logo />
              <span className='font-semibold text-[#088178]'>Watch Whimsy</span>
            </div>
          </Link>
          <span className='font-semibold xs:text-sm xs:text-[#088178] sm:text-[16px] sm:leading-6 sm:text-[#90908e]'>
            SUPPORT
          </span>
          <p className='text-[#222] xs:text-sm sm:text-[16px] sm:leading-6'>
            <span className=''>South Banasree,</span>
            <br />
            <span className=''>Khilgaon, Dhaka, Bangladesh.</span>
          </p>
          <p className='text-[#222] xs:text-sm sm:text-[16px] sm:leading-6'>
            support@wathwhimsy.com
          </p>
          <p className='text-[#222] xs:text-sm sm:text-[16px] sm:leading-6'>
            +880 19** - ****62
          </p>
        </div>
        <div className='flex flex-col gap-4 xs:w-2/4 md:w-1/3 xl:w-1/4'>
          <span className='font-semibold text-[#088178] xs:text-sm sm:text-[16px] sm:leading-6'>
            INFORMATION
          </span>
          <Link href='/'>
            <span className='mr-2 text-[#222] transition-all duration-500 hover:ml-2 hover:mr-0 hover:text-[#088178] xs:text-sm sm:text-[16px] sm:leading-6'>
              My Account
            </span>
          </Link>
          <Link href='/'>
            <span className='mr-2 text-[#222] transition-all duration-500 hover:ml-2 hover:mr-0 hover:text-[#088178] xs:text-sm sm:text-[16px] sm:leading-6'>
              Shop
            </span>
          </Link>
          <Link href='/'>
            <span className='mr-2 text-[#222] transition-all duration-500 hover:ml-2 hover:mr-0 hover:text-[#088178] xs:text-sm sm:text-[16px] sm:leading-6'>
              Login / Register
            </span>
          </Link>
          <Link href='/'>
            <span className='mr-2 text-[#222] transition-all duration-500 hover:ml-2 hover:mr-0 hover:text-[#088178] xs:text-sm sm:text-[16px] sm:leading-6'>
              Cart
            </span>
          </Link>
          <Link href='/'>
            <span className='mr-2 text-[#222] transition-all duration-500 hover:ml-2 hover:mr-0 hover:text-[#088178] xs:text-sm sm:text-[16px] sm:leading-6'>
              Wishlist
            </span>
          </Link>
        </div>
        <div className='flex flex-col gap-4 xs:w-2/4 md:w-1/3 xl:w-1/4'>
          <span className='font-semibold text-[#088178] xs:text-sm sm:text-[16px] sm:leading-6'>
            ABOUT
          </span>
          <Link href='/'>
            <span className='mr-2 text-[#222] transition-all duration-500 hover:ml-2 hover:mr-0 hover:text-[#088178] xs:text-sm sm:text-[16px] sm:leading-6'>
              Privacy Policy
            </span>
          </Link>
          <Link href='/'>
            <span className='mr-2 text-[#222] transition-all duration-500 hover:ml-2 hover:mr-0 hover:text-[#088178] xs:text-sm sm:text-[16px] sm:leading-6'>
              Terms & Conditions
            </span>
          </Link>
          <Link href='/'>
            <span className='mr-2 text-[#222] transition-all duration-500 hover:ml-2 hover:mr-0 hover:text-[#088178] xs:text-sm sm:text-[16px] sm:leading-6'>
              FAQ
            </span>
          </Link>
          <Link href='/'>
            <span className='mr-2 text-[#222] transition-all duration-500 hover:ml-2 hover:mr-0 hover:text-[#088178] xs:text-sm sm:text-[16px] sm:leading-6'>
              Contact
            </span>
          </Link>
        </div>
        <div className='flex flex-col gap-4 xs:w-full sm:w-2/4 md:w-full md:flex-row xl:w-1/4 xl:flex-col'>
          <div className='flex flex-col gap-4 md:w-1/2 xl:w-full'>
            <h3 className='font-semibold text-[#088178] xs:text-sm sm:text-[16px] sm:leading-6'>
              SUBSCRIBE
            </h3>
            <form
              onSubmit={handleSubmit}
              className='flex w-full max-w-sm items-center space-x-2'
            >
              <Input
                type='email'
                value={value}
                name='email'
                onChange={handleChange}
                placeholder='Enter your email'
                className='border border-[#088178] text-[#222]'
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
          <div className='flex flex-col gap-4 md:w-1/2 xl:w-full'>
            <h2 className='text-base font-semibold text-[#90908e] md:text-[16px] md:uppercase md:leading-6 md:text-[#088178] xl:capitalize xl:text-[#90908e]'>
              Follow Us
            </h2>
            <div className='flex gap-2'>
              <Link href='/'>
                <Button
                  variant='outline'
                  size='icon'
                  className='border border-[#088178] bg-transparent'
                >
                  <GitHubLogoIcon className='h-4 w-4' />
                </Button>
              </Link>
              <Link href='/'>
                <Button
                  variant='outline'
                  size='icon'
                  className='border border-[#088178] bg-transparent'
                >
                  <LinkedInLogoIcon className='h-4 w-4' />
                </Button>
              </Link>
              <Link href='/'>
                <Button
                  variant='outline'
                  size='icon'
                  className='border border-[#088178] bg-transparent'
                >
                  <InstagramLogoIcon className='h-4 w-4' />
                </Button>
              </Link>
              <Link href='/'>
                <Button
                  variant='outline'
                  size='icon'
                  className='border border-[#088178] bg-transparent'
                >
                  <TwitterLogoIcon className='h-4 w-4' />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-darkBlue flex flex-col items-center justify-center gap-2 border-t border-[#088178] bg-[#E8F6EA] p-2 text-[#90908e] sm:container xs:text-xs'>
        <span className='px-5 text-center leading-5'>
          Copyright © 2024 Watch and Whimsy - all rights reserved. Technical
          support by Quantic Dynamics.
        </span>
        <hr className='w-full bg-[#088178] opacity-30' />
        <span className='px-5 text-center'>
          <Link href={'#'}>Terms and conditions </Link>|
          <Link href={'#'}> Privacy Policy</Link>
        </span>
      </div>
    </>
  )
}

export default Footer
