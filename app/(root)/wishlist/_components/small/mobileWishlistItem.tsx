import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useStoreActions } from 'easy-peasy'
import { Trash } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface CartItem {
  productId: string
  title: string
  description: string
  image: string
  stock: boolean
  quantity: number
  price: number
}

interface MobileWishlistItemProps {
  item: CartItem
}

const MobileWishlistItem: React.FC<MobileWishlistItemProps> = ({ item }) => {
  const favoritesAction = useStoreActions((actions: any) => actions.favorites)
  const addToCartAction = useStoreActions((actions: any) => actions.addToCarts)

  return (
    <div>
      {/* image, title and description */}
      <div className='flex flex-col items-center justify-center'>
        {/* <Link href={"#"}> // single product page a niye jabo. */}
        <Image
          src={item.image}
          alt={item.title}
          width={100}
          height={100}
        />
        {/* </Link> */}
        <Separator className='my-3 w-full bg-[#90908e50]' />
        <div className='w-full space-y-1 text-center'>
          <h2 className='text-lg text-[#088178]'>{item.title}</h2>
          <p className='m-auto w-4/5 text-sm text-[#90908e]'>
            {item.description.length > 60
              ? item.description.slice(0, 60) + ' ....'
              : item.description}
          </p>
        </div>
      </div>

      <div className='mt-5 flex flex-col'>
        {/* price */}
        <div className='flex border-y border-[#90908e50] p-2'>
          <h2 className='w-1/2 font-semibold'>Price</h2>
          <h2 className='w-1/2'>{`$${item.price}`}</h2>
        </div>

        {/* stock */}
        <div className='flex border-b border-[#90908e50] p-2'>
          <h2 className='w-1/2 font-semibold'>Stock</h2>
          <h2
            className={`w-1/2 ${item.stock ? 'text-[#222]' : 'text-red-600'}`}
          >{`${item.stock ? 'In Stock' : 'Out of Stock'}`}</h2>
        </div>

        {/* Add to Cart */}
        <div className='flex border-b border-[#90908e50] p-2'>
          <h2 className='w-1/2 font-semibold'>Cart</h2>
          {item.stock ? (
            <Button
              onClick={() => {
                addToCartAction.addItem({
                  productId: item.productId,
                  title: item.title,
                  description: item.description,
                  image: item.image,
                  quantity: item.quantity,
                  price: item.price
                })
              }}
              className='rounded border-none bg-[#088178] text-sm text-[#fff] hover:bg-[#088178] hover:text-[#fff]'
            >
              Add to Cart
            </Button>
          ) : (
            <Link href={'#'}>
              <Button className='rounded border-none bg-[#41506B] text-sm text-[#fff] hover:bg-[#41506B] hover:text-[#fff]'>
                Contact Us
              </Button>
            </Link>
          )}
        </div>

        {/* remove button */}
        <div className='flex border-b border-[#90908e50] p-2'>
          <h2 className='w-1/2 font-semibold'>Remove</h2>
          <div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Trash className='w-5 text-[#90908e]' />
              </AlertDialogTrigger>
              <AlertDialogContent
                className='w-64 rounded border-none bg-[#E8F6EA] sm:w-96 lg:w-[32rem]'
                style={{ borderRadius: '8px' }}
              >
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className='rounded border border-[#088178]'>
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => {
                      favoritesAction.removeItem(item.productId)
                    }}
                    className='rounded border-none bg-[#088178] text-[#fff] hover:bg-[#088178] hover:text-[#fff]'
                  >
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileWishlistItem
