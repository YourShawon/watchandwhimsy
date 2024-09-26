import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import X from '@/public/icons/crossIcon'
import Category from '@/public/icons/browsCategory'
import Facebook from '@/public/icons/facebook'
import Twitter from '@/public/icons/twitter'
import Instagram from '@/public/icons/instagram'
import Youtube from '@/public/icons/youtube'
import SearchIcon from '@/public/icons/search'
import { FC } from 'react'
import { MobileNavProps } from '@/interface/header-interface'
import { headerCategoryList, NavbarList } from '@/constants/header'
import Link from 'next/link'
import Bars from '@/public/icons/bars'

const MobileNav: FC<MobileNavProps> = ({ handleSearch }) => {
  return (
    <div className='block leading-3 lg:hidden'>
      <Sheet>
        <SheetTrigger>
          <Bars />
        </SheetTrigger>
        <SheetContent className='bg-white'>
          <SheetTitle></SheetTitle>
          <SheetClose className='absolute right-3 top-3'>
            <X />
          </SheetClose>
          <SheetHeader>
            <SheetTitle className='mb-5 mt-10 flex items-center rounded-[5px] border border-green pr-4'>
              <input
                onFocus={handleSearch}
                className='w-full border-none bg-transparent px-4 py-2 font-normal text-[#222] outline-none duration-200 placeholder:text-base placeholder:text-black focus:outline-none'
                placeholder='Search for items...'
                type='text'
              />
              <SearchIcon />
            </SheetTitle>
          </SheetHeader>
          <SheetDescription>
            <Accordion type='single' collapsible>
              <AccordionItem value='item-1'>
                <AccordionTrigger className='flex items-center gap-2 text-lg font-bold text-green justify-normal'>
                    <Category />
                    Browse Categories
                </AccordionTrigger>
                <AccordionContent >
                  <ul className='flex flex-col'>
                    {headerCategoryList.map(category => (
                      <li
                        key={category.id}
                        className='cursor-pointer px-5 py-2 text-base capitalize transition duration-200 hover:bg-[#4e97fd19] hover:text-green'
                      >
                        {category.title}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <ul className='flex flex-col'>
              {NavbarList.map((item, index) => (
                <li
                  key={item.id}
                  className={`py-2 text-base font-bold ${index !== NavbarList.length - 1 ? 'border-b border-gray-200' : ''}`}
                >
                  <Link href={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </SheetDescription>
          <SheetFooter className='my-6'>
            <ul className='flex flex-col gap-4'>
              <li className='text-base font-medium text-green hover:text-black'>
                <Link href={'/contact'}>Our Location</Link>
              </li>
              <li>
                <Link
                  href={'/log-in'}
                  className='text-base font-medium text-green hover:underline'
                >
                  Log In
                </Link>{' '}
                <span> / </span>
                <Link
                  href={'/sign-up'}
                  className='text-base font-medium text-green hover:underline'
                >
                  Sign Up
                </Link>
              </li>
              <li>
              <Link href='tel:01234546789' className='text-base  font-medium text-green hover:text-black'>
                  (+8801) - 23454 - 6789
                </Link>
              </li>
            </ul>
          </SheetFooter>
          <div>
            <h5 className='font-spartan text-lg font-semibold text-[#90908c]'>
              Follow Us
            </h5>
            <ul className='mt-3 flex gap-3'>
              <li>
                <Link target='_blank' href={"https://www.facebook.com/"}>
                <Facebook />
                </Link>
              </li>
              <li>
              <Link target='_blank' href={"https://www.twitter.com/"}>
              <Twitter />
                </Link>
                
              </li>
              <li>
              <Link target='_blank' href={"https://www.instagram.com/"}>
              <Instagram />
                </Link>
                
              </li>
              <li>
                <Link target='_blank' href={"https://www.youtube.com/"}>
                <Youtube />
                </Link>
                
              </li>
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNav
