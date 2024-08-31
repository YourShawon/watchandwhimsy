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

  return (
    <header>
      {/* header top wrapper */}
      <div className='hidden border-b-[3px] border-solid border-green lg:block'>
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
          <div className='hidden w-[800px] lg:block'>
            <form>
              <div className='flex items-center border border-[#dedfe2]'>
                <span className='p-3'>
                  <SearchIcon />
                </span>

                <input
                  className='w-full rounded-lg bg-transparent px-4 py-2 text-[#414648] focus:outline-none'
                  placeholder={`Search ${text}`}
                  type='text'
                />
              </div>
            </form>
          </div>
          <div className='flex items-center gap-3'>
            <HoverCard>
              <HoverCardTrigger className='cursor-pointer rounded-full p-3 transition duration-500 hover:bg-[#E5F0EF]'>
                <Cart />
              </HoverCardTrigger>
              <HoverCardContent className='flex w-[320px] flex-col gap-5 bg-white py-8'>
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
                  <span className='font-spartan text-2xl font-medium text-green'>
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
                    <SheetTitle className='mb-5 mt-10 flex items-center rounded-[5px] border border-green pr-4'>
                      <input
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
                          <div className='flex items-center gap-2 text-lg font-bold text-green'>
                            <Category />
                            Browse Categories
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className='flex flex-col'>
                            <li className='cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19] hover:text-green'>
                              Man
                            </li>
                            <li className='cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19] hover:text-green'>
                              Woman
                            </li>
                            <li className='cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19] hover:text-green'>
                              kids
                            </li>
                            <li className='cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19] hover:text-green'>
                              Couples
                            </li>
                            <li className='cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19] hover:text-green'>
                              Minimalist Watch
                            </li>
                            <li className='cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19] hover:text-green'>
                              Leather
                            </li>
                            <li className='cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19] hover:text-green'>
                              Metal
                            </li>
                            <li className='cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19] hover:text-green'>
                              Smart Watch
                            </li>
                            <li className='cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19] hover:text-green'>
                              Digital Watch
                            </li>
                            <li className='cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19] hover:text-green'>
                              Analog Watch With Number
                            </li>
                            <li className='cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19] hover:text-green'>
                              Analog Watch Without Number
                            </li>
                            <li className='cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19] hover:text-green'>
                              Table Watch
                            </li>
                            <li className='cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19] hover:text-green'>
                              Wall clock
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <ul className='flex flex-col'>
                      <li className='border-b border-gray-200 py-2 text-base font-bold'>
                        Home
                      </li>
                      <li className='border-b border-gray-200 py-2 text-base font-bold'>
                        About
                      </li>
                      <li className='border-b border-gray-200 py-2 text-base font-bold'>
                        Shop
                      </li>
                      <li className='py-2 text-base font-bold'>Contact</li>
                    </ul>
                  </SheetDescription>
                  <SheetFooter className='my-6'>
                    <ul className='flex flex-col gap-4'>
                      <li className='text-base font-medium text-green hover:text-black'>
                        Our Location
                      </li>
                      <li className='text-base font-medium text-green hover:text-black'>
                        Log In / Sign Up
                      </li>
                      <li className='text-base font-medium text-green hover:text-black'>
                        (+01) - 2345 - 6789
                      </li>
                    </ul>
                  </SheetFooter>
                  <div>
                    <h5 className='font-spartan text-lg font-semibold text-[#90908c]'>
                      Follow Us
                    </h5>
                    <ul className='mt-3 flex gap-3'>
                      <li>
                        <Facebook />
                      </li>
                      <li>
                        <Twitter />
                      </li>
                      <li>
                        <Instagram />
                      </li>
                      <li>
                        <Youtube />
                      </li>
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
            <Popover>
              <PopoverTrigger className='flex cursor-pointer items-center gap-2 text-xl font-bold text-green'>
                <Category />
                Browse Categories
              </PopoverTrigger>
              <PopoverContent className='bg-white px-0'>
                <ul className='flex flex-col'>
                  <li className='cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19] hover:text-green'>
                    Man
                  </li>
                  <li className='cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19] hover:text-green'>
                    Woman
                  </li>
                  <li className='cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19] hover:text-green'>
                    kids
                  </li>
                  <li className='cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19] hover:text-green'>
                    Couples
                  </li>
                  <li className='cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19] hover:text-green'>
                    Minimalist Watch
                  </li>
                  <li className='cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19] hover:text-green'>
                    Leather
                  </li>
                  <li className='cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19] hover:text-green'>
                    Metal
                  </li>
                  <li className='cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19] hover:text-green'>
                    Smart Watch
                  </li>
                  <li className='cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19] hover:text-green'>
                    Digital Watch
                  </li>
                  <li className='cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19] hover:text-green'>
                    Analog Watch With Number
                  </li>
                  <li className='cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19] hover:text-green'>
                    Analog Watch Without Number
                  </li>
                  <li className='cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19] hover:text-green'>
                    Table Watch
                  </li>
                  <li className='cursor-pointer px-5 py-2 text-base transition duration-200 hover:bg-[#4e97fd19] hover:text-green'>
                    Wall clock
                  </li>
                </ul>
              </PopoverContent>
            </Popover>
          </div>
          <ul className='flex gap-4'>
            <li className='cursor-pointer text-base font-bold transition-all duration-200 hover:text-green'>
              Home
            </li>
            <li className='cursor-pointer text-base font-bold transition-all duration-200 hover:text-green'>
              About
            </li>
            <li className='cursor-pointer text-base font-bold transition-all duration-200 hover:text-green'>
              Shop
            </li>
            <li className='cursor-pointer text-base font-bold transition-all duration-200 hover:text-green'>
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
