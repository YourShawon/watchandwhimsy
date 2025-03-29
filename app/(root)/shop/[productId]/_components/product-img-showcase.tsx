"use client"
import Image from 'next/image'
import React, { useState } from 'react'
interface Images {
  id: string
  url: string
  alt: string
}

const ProductImgShowcase = ({ images }: {
  images: Images[]
}) => {
  const [displayImg, setDisplayImg] = useState(images[0].url);
  const changeDisplayImg = (url: string) => {
    
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
        {images.map((img, idx: number) => (
          <Image 
            src={img.url}
            alt={img.alt}
            width={400}
            height={400}
            key={idx}
            className={`${img.url === displayImg ? "border-green-0x" : ""} max-w-[90px] h-auto border rounded-sm cursor-pointer transition-all hover:-translate-y-1`}
            onClick={() => changeDisplayImg(img.url)}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductImgShowcase