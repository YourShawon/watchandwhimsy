import ProductCard from '@/components/shared/product-card'
import React from 'react'

const page = () => {
  return (
    <div className='max-w-[400px]'>
      <ProductCard 
        imgUrl='/watch1/img1.jpg'
        category='watch'
        title='Orient Kamasu Diver Watch'
        rating={5}
        price={120}
        prevPrice={200}
        addToCart={true}
        badge="Hot"
        variant='horizontal'
      />
    </div>
  )
}

export default page