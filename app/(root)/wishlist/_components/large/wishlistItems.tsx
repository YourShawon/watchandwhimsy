'use client'

import { useStoreState } from 'easy-peasy'
import { useEffect, useState } from 'react'
import { Separator } from '@radix-ui/react-separator'
import WishlistItem from './wishlistItem'

const WishlistLarge: React.FC = () => {
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
    <div className='container'>
      <ul className='flex text-sm lg:text-base items-center border-y border-[#E8F6EA] py-2 text-center'>
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

export default WishlistLarge
