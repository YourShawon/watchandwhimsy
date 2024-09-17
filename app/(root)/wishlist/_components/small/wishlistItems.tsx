'use client'

import { useStoreState } from 'easy-peasy'
import MobileWishlistItem from './mobileWishlistItem'
import { useEffect, useState } from 'react'
import { Separator } from '@radix-ui/react-separator'

const WishlistSmall: React.FC = () => {
  const [data, setData] = useState([])

  const favorites = useStoreState(states => states.favorites.items)

  useEffect(() => {
    setData(favorites)
  }, [favorites])

  if (data.length <= 0) {
    return (
      <div className='flex items-center justify-center border-t border-[#E8F6EA] p-10'>
        <h2>404 Product not found</h2>
      </div>
    )
  }

  return (
    <div className='flex flex-col gap-10 p-2'>
      {data.map(item => (
        <>
          <Separator className='w-full border-t border-[#90908e50]' />
          <MobileWishlistItem key={item.productId} item={item} />
        </>
      ))}
    </div>
  )
}

export default WishlistSmall
