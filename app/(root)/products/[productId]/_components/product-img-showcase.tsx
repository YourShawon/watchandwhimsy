"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const ProductImgShowcase = ({imgUrls}) => {
  const [displayImg, setDisplayImg] = useState(imgUrls[0]);
  const changeDisplayImg = (url) => {
    
    setDisplayImg(url);
    console.log(url)
  }
  return (
    <div>
      <div>
        <div className='md:mr-3'>
          <Image
            src={displayImg}
            width={500}
            height={500}
            alt='Product Image'
            className='w-full'
          />
        </div>
      </div>
      <div className='flex items-center gap-2 mt-4'>
        {imgUrls.map((imgUrl, idx) => (
          <Image 
            src={imgUrl}
            alt='Image'
            width={400}
            height={400}
            key={idx}
            className={`${imgUrl === displayImg ? "border-green-0x" : ""} max-w-[90px] h-auto border rounded-sm cursor-pointer transition-all hover:-translate-y-1`}
            onClick={() => changeDisplayImg(imgUrl)}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductImgShowcase