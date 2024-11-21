import { MailIcon } from 'lucide-react'
import React from 'react'

const NewsLetter = () => {
  return (
    <div className='bg-[#AECCC5] p-[30px]'>
      <div className='container mx-auto flex items-center gap-10 flex-wrap justify-between'>
        <div className='flex items-center gap-3'>
          <MailIcon className='size-10' />
          <h5 className='font-spartan text-lg font-semibold text-black-solid'>
            Sign up to Newsletter
          </h5>
        </div>
          <h5 className='font-spartan hidden sm:block text-sm font-semibold text-black-solid'>
            ...and receive $25 coupon for first shopping.
          </h5>
          <div className='grow'>
            <form>
              <div className='flex items-center'>
                <input
                  type='text'
                  placeholder='Enter your email'
                  className='h-12 w-full rounded-s-[4px] border-none bg-white pl-[30px] pr-5 text-sm outline-none'
                />
                <button
                  className='h-12 cursor-pointer rounded-e-[4px] bg-black-1x sm:px-[30px] px-5 font-spartan text-sm text-white transition-all duration-300 ease-linear hover:bg-green-0x'
                  type='submit'
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
      </div>
    </div>
  )
}

export default NewsLetter
