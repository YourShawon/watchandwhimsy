'use client'
import Cart from '../icons/cart'
import LocationIcon from '../icons/locationIcon'
import Logo from '../icons/logo'
import MobileIcon from '../icons/mobileIcon'
import SearchIcon from '../icons/search'
import UserIcon from '../icons/userIcon'
import { useTypewriter } from 'react-simple-typewriter'
import BagImage from '@/public/image/thumbnail-3.jpg'
import DressImage from '@/public/image/thumbnail-2.jpg'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/components/ui/hover-card'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
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

import ShortCartItem from '@/components/shared/short-cart-item'
import Button from './button'
import Category from '../icons/browsCategory'
import Bars from '../icons/bars'
import X from '../icons/crossIcon'
import Facebook from '../icons/facebook'
import Twitter from '../icons/twitter'
import Instagram from '../icons/instagram'
import Youtube from '../icons/youtube'
import SearchModal from './SearchModal'
import { useState } from 'react'

const Navbar = () => {
  const [text] = useTypewriter({
    words: [
      'Man',
      'Woman',
      'kids',
      'Couples',
      'Minimalist Watch',
      'Leather',
      'Metal',
      'Smart Watch',
      'Digital Watch'
    ],
    loop: 0,
    typeSpeed: 50,
    deleteSpeed: 40,
    delaySpeed: 1000
  })

  const [open, setOpen] = useState(false)

  const [isOpen, setIsOpen] = useState(true);

  const handleSearch = () => {
    setOpen(!open)
  }
  const handleToggle = () => {
    setIsOpen((prev) => !prev); // Toggle popover open state
  };

  const handleOpenChange = (open:boolean) => {
    if (open) {
      setIsOpen(true); // Allow opening
    } else if (!open && !isOpen) {
      setIsOpen(false); // Allow closing
    }
  };

  return (


    <header>
      {/* header top wrapper */}
      <div className='border-green hidden border-b-[3px] border-solid lg:block'>
        <div className='container'>
          {/* header top */}
          <div className='flex items-center justify-between py-[10px]'>
            {/* left side */}
            <div>
              <ul className='flex items-center gap-1'>
                <li className='flex items-center gap-1'>
                  <MobileIcon />
                  <span className='cursor-pointer text-sm'>
                    (+01) - 2345 - 6789
                  </span>
                </li>
                <span className='text-[#dedfe2]'>|</span>

                <li className='flex items-center gap-1 text-sm'>
                  <LocationIcon />
                  <span className='cursor-pointer text-sm'>Our Location</span>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className='flex items-center gap-1 text-sm'>
                  <UserIcon />
                  <span className='cursor-pointer text-sm'>Log In/Sign Up</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* card middle */}

      <div className='container'>
        <div className='flex items-center justify-between py-5 lg:py-9'>
          <Logo />
          {/* Search field */}
          <div className='hidden w-[800px] lg:block'>
            <form>
              <div className='flex items-center border border-[#dedfe2]'>
                <span className='p-3'>
                  <SearchIcon />
                </span>

                <input
                onFocus={handleSearch}
                  className='w-full rounded-lg bg-transparent px-4 py-2 text-[#414648] focus:outline-none'
                  placeholder={`Search ${text}`}
                  type='text'
                />
              </div>
            </form>
          </div>
          {/* Search modal */}

         <SearchModal open={open} setOpen={setOpen}/>

          <div className='flex items-center gap-3'>
            <HoverCard>
              <HoverCardTrigger className='cursor-pointer rounded-full p-3 transition duration-500 hover:bg-[#E5F0EF]'>
                <Cart />
              </HoverCardTrigger>
              <HoverCardContent align='end' sideOffset={30} className='flex w-[320px] flex-col gap-5 bg-white py-8'>
                <ShortCartItem
                  image={BagImage}
                  alt={'shop bag'}
                  name={'Daisy Casual Bag'}
                  price={800.0}
                  quantity={1}
                />
                <ShortCartItem
                  image={DressImage}
                  alt={'shop dress'}
                  name={'Corduroy Shirts'}
                  price={320.0}
                  quantity={1}
                />
                <hr />
                <div className='flex justify-between'>
                  <span className='font-spartan text-lg font-medium text-[#9b9b9b]'>
                    Total
                  </span>
                  <span className='text-green font-spartan text-2xl font-medium'>
                    $4000.00
                  </span>
                </div>
                <div className='flex justify-between'>
                  <Button text={'View Cart'} outline />
                  <Button text={'Checkout'} />
                </div>
              </HoverCardContent>
            </HoverCard>
            <div className='block leading-3 lg:hidden'>
              <Sheet>
                <SheetTrigger>
                  <Bars />
                </SheetTrigger>
                <SheetContent className='bg-white'>
                  <SheetClose className='absolute right-3 top-3'>
                    <X />
                  </SheetClose>
                  <SheetHeader>
                    <SheetTitle className='border-green mb-5 mt-10 flex items-center rounded-[5px] border pr-4'>
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
                          <AccordionTrigger>
                            <div className='flex items-center gap-2 text-green text-lg font-bold'>
                            <Category />
                            Browse Categories
                            </div>
                            </AccordionTrigger>
                          <AccordionContent>
                          <ul className='flex flex-col'>
                  <li className='hover:text-green cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19]'>
                    Man
                  </li>
                  <li className='hover:text-green cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19]'>
                    Woman
                  </li>
                  <li className='hover:text-green cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19]'>
                    kids
                  </li>
                  <li className='hover:text-green cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19]'>
                    Couples
                  </li>
                  <li className='hover:text-green cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19]'>
                    Minimalist Watch
                  </li>
                  <li className='hover:text-green cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19]'>
                    Leather
                  </li>
                  <li className='hover:text-green cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19]'>
                    Metal
                  </li>
                  <li className='hover:text-green cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19]'>
                    Smart Watch
                  </li>
                  <li className='hover:text-green cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19]'>
                    Digital Watch
                  </li>
                  <li className='hover:text-green cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19]'>
                    Analog Watch With Number
                  </li>
                  <li className='hover:text-green cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19]'>
                    Analog Watch Without Number
                  </li>
                  <li className='hover:text-green cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19]'>
                    Table Watch
                  </li>
                  <li className='hover:text-green cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19]'>
                    Wall clock
                  </li>
                </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                      <ul className='flex flex-col'>
                        <li className='py-2 text-base font-bold border-b border-gray-200'>Home</li>
                        <li className='py-2 text-base font-bold border-b border-gray-200'>About</li>
                        <li className='py-2 text-base font-bold border-b border-gray-200'>Shop</li>
                        <li className='py-2 text-base font-bold'>Contact</li>
                      </ul>
                    </SheetDescription>
                  <SheetFooter className='my-6'>
                    <ul className='flex gap-4 flex-col'>
                      <li className='text-base font-medium text-green hover:text-black'>Our Location</li>
                      <li className='text-base font-medium text-green hover:text-black'>Log In / Sign Up</li>
                      <li className='text-base font-medium text-green hover:text-black'>(+01) - 2345 - 6789</li>
                    </ul>
                  </SheetFooter>
                  <div>
                    <h5 className='text-lg font-semibold text-[#90908c] font-spartan'>Follow Us</h5>
                    <ul className='flex gap-3 mt-3'>
                      <li><Facebook/></li>
                      <li><Twitter/></li>
                      <li><Instagram/></li>
                      <li><Youtube/></li>
                    </ul>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
      {/* Card Nav */}
      <div className='container mb-5 hidden lg:block'>
        <div className='flex justify-between'>
          <div>
            <Popover open={isOpen} onOpenChange={handleOpenChange}>
              <PopoverTrigger onClick={handleToggle} className='text-green flex cursor-pointer items-center gap-2 text-xl font-bold'>
                <Category />
                Browse Categories
              </PopoverTrigger>
              <PopoverContent id='popover-content-scroll' align='start' sideOffset={20} className={`bg-white px-0 top-4 left-[46px] max-h-[554px] overflow-y-scroll scroll-smooth`}>
                <ul className='flex flex-col'>
                  <li className='border-b border-[#E5E7EB] hover:text-green cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19]'>
                    Man
                  </li>
                  <li className='border-b border-[#E5E7EB] hover:text-green cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19]'>
                    Woman
                  </li>
                  <li className='border-b border-[#E5E7EB] hover:text-green cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19]'>
                    kids
                  </li>
                  <li className='border-b border-[#E5E7EB] hover:text-green cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19]'>
                    Couples
                  </li>
                  <li className='border-b border-[#E5E7EB] hover:text-green cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19]'>
                    Minimalist Watch
                  </li>
                  <li className='border-b border-[#E5E7EB] hover:text-green cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19]'>
                    Leather
                  </li>
                  <li className='border-b border-[#E5E7EB] hover:text-green cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19]'>
                    Metal
                  </li>
                  <li className='border-b border-[#E5E7EB] hover:text-green cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19]'>
                    Smart Watch
                  </li>
                  <li className='border-b border-[#E5E7EB] hover:text-green cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19]'>
                    Digital Watch
                  </li>
                  <li className='border-b border-[#E5E7EB] hover:text-green cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19]'>
                    Analog Watch With Number
                  </li>
                  <li className='border-b border-[#E5E7EB] hover:text-green cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19]'>
                    Analog Watch Without Number
                  </li>
                  <li className='border-b border-[#E5E7EB] hover:text-green cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19]'>
                    Table Watch
                  </li>
                  <li className='hover:text-green cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19]'>
                    Wall clock
                  </li>
                </ul>
              </PopoverContent>
            </Popover>
          </div>
          <ul className='flex gap-4'>
            <li className='hover:text-green cursor-pointer text-base font-bold transition-all duration-200'>
              Home
            </li>
            <li className='hover:text-green cursor-pointer text-base font-bold transition-all duration-200'>
              About
            </li>
            <li className='hover:text-green cursor-pointer text-base font-bold transition-all duration-200'>
              Shop
            </li>
            <li className='hover:text-green cursor-pointer text-base font-bold transition-all duration-200'>
              Contact
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </header>
  )
}

export default Navbar
