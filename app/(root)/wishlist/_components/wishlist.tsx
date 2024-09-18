'use client'

import { useStoreState } from 'easy-peasy'
import MobileWishlistItem from './smallWishlistItem'
import { FC, useEffect, useState } from 'react'
import { Separator } from '@radix-ui/react-separator'
import WishlistItem from './largeWishlistItem'

interface WishlistItemsProps {
  large: boolean
}

const WishlistItems: FC<WishlistItemsProps> = ({ large }) => {
  const [data, setData] = useState<any[]>([])

  const favorites = useStoreState((states: any) => states.favorites.items)

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

  if (large) {
    return (
      <div className='container'>
        <ul className='flex items-center border-y border-[#E8F6EA] py-2 text-center text-sm lg:text-base'>
          <li className='w-[55%]'>Product</li>
          <li className='w-[10%]'>Price</li>
          <li className='w-[10%]'>Stock Status</li>
          <li className='w-[15%]'>Action</li>
          <li className='w-[10%]'>Remove</li>
        </ul>

        <div className='flex flex-col gap-10 p-2'>
          {data.map(item => (
            <WishlistItem key={item.productId} item={item} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className='flex flex-col gap-10 p-2'>
      {data.map(item => (
        <div key={item.productId}>
          <Separator className='w-full border-t border-[#90908e50]' />
          <MobileWishlistItem item={item} />
        </div>
      ))}
    </div>
  )
}

export default WishlistItems
