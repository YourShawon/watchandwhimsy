import Logo from '@/public/icons/logo'
import SearchIcon from '@/public/icons/search'
import Cart from '@/public/icons/cart'
import BagImage from '@/public/image/thumbnail-3.jpg'
import DressImage from '@/public/image/thumbnail-2.jpg'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/components/ui/hover-card'
import { FC } from 'react'
import { HeaderMiddleProps } from '@/interface/header-interface'
import Link from 'next/link'
import MobileNav from './mobile-nav'
import SearchModal from '@/components/shared/search-modal'
import ShortCartItem from '@/components/shared/short-cart-item'
import Button from '@/components/shared/button'

const HeaderMiddle: FC<HeaderMiddleProps> = ({
  handleSearch,
  text,
  open,
  setOpen
}) => {
  return (
    <>
      <div className='container'>
        <div className='flex items-center justify-between py-5 lg:py-9'>
            <Link href={"/"} className='cursor-pointer'>
            <Logo />
            </Link>
          
          {/* Search field */}
          <div className='hidden w-[800px] lg:block'>
            <form>
              <div className='flex items-center border border-black-1/10'>
                <span className='p-3'>
                  <SearchIcon />
                </span>

                <input
                  onFocus={handleSearch}
                  className='w-full border-none hover:outline-none rounded-lg bg-transparent px-4 py-2 text-slate-4x focus:outline-none'
                  placeholder={`Search ${text}`}
                  type='text'
                />
              </div>
            </form>
          </div>
          {/* Search modal */}

          <SearchModal open={open} setOpen={setOpen} />

          <div className='flex items-center gap-3'>
            <HoverCard>
              <HoverCardTrigger className='cursor-pointer rounded-full p-3 transition duration-500 hover:bg-green-3x'>
                <Cart />
              </HoverCardTrigger>
              <HoverCardContent
                align='end'
                sideOffset={30}
                className='flex w-[320px] flex-col gap-5 bg-white py-8'
              >
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
                  <span className='font-spartan text-lg font-medium text-gray-1x'>
                    Total
                  </span>
                  <span className='font-spartan text-2xl font-medium text-green'>
                    $4000.00
                  </span>
                </div>
                <div className='flex justify-between'>
                    <Link href={"/cart"}><Button text={'View Cart'} outline /></Link>
                    <Link href={"/checkout"}><Button text={'Checkout'} /></Link>
                </div>
              </HoverCardContent>
            </HoverCard>
            <MobileNav handleSearch={handleSearch}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderMiddle
