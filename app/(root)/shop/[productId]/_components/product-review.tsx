import { Separator } from '@/components/ui/separator'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ReviewForm from './review-form'
import RatingBar from '@/components/shared/rating-bar'
import RatingStar from '@/components/shared/rating-star'

const ProductReview = () => {
  return (
    <div className='flex flex-col'>
      {/* Reviews */}

      <div className='flex flex-col lg:flex-row pb-12'>
        {/* Review Top */}
        <div className='px-3 lg:w-[66.666%] '>
          {/* Reviews with profiles */}
          <h2 className='font-spartan font-spartanSemiBold text-[18px] leading-5 text-black-2x mb-8'>Customer questions & answers</h2>
          <div className='flex flex-row font-lato'>
            {/* Review card */}
            <div className='mr-5 text-center'>
              {/* Review user info */}
              {/* Image tag */}
              <Image 
                src="/jacky.jpg"
                width={100}
                height={100}
                alt='User Image'
                className='min-w-16 rounded-full mb-2'
              />
              <h6 className='text-xs leading-[1.2] font-spartan font-spartanSemiBold text-black-solid'>Jacky Chan</h6>
              <p className='text-xs leading-6 font-[400] text-green-7x'>Since 2008</p>
            </div>
            <div className='space-y-2'>
              {/* Review info */}
              <div>
                {/* rating component */}
                <RatingStar 
                  value={3}
                />
              </div>
              <p className='font-[400] leading-6 text-green-7x'>
                {/* Review comment */}
                Like it allot. My last eco-drive lasted about 25 years before battery died.
              </p>
              <div className='flex items-center'>
                {/* comment time details */}
                <p className='mr-8 text-xs leading-6 text-green-7x'>
                  December 4, 2020 at 3:12pm
                </p>
                <Link href="/" className='text-sm font-[400] text-green-0x cursor-pointer flex gap-1'>
                  Reply
                  <ArrowRight className='h-5 mt-[2px]'/>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='lg:w-[33.33%]'>
          {/* Customer review summary */}
          <h2 className='font-spartan font-spartanSemiBold text-[18px] leading-5 text-black-2x mt-3 lg:mt-0'>Customer reviews</h2>
          <div className='mt-3'>
            <RatingBar />
            {/* summary with percentage */}
          </div>
        </div>
      </div>

      <Separator />

      <div className='pt-12'>
        {/* Add a review. review form */}
        <ReviewForm />
      </div>
    </div>
  )
}

export default ProductReview