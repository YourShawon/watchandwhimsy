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
import { Separator } from '@/components/ui/separator'
import { useStoreActions } from 'easy-peasy'
import { Trash } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

function MobileCartItem({ item, onQuantity }) {
  const [quantity, setQuantity] = useState(1)

  const increment = () => {
    setQuantity(prev => {
      const newQuantity = prev < 10 ? prev + 1 : 10
      onQuantity(item.productId, newQuantity)
      return newQuantity
    })
  }

  const decrement = () => {
    setQuantity(prev => {
      const newQuantity = prev > 1 ? prev - 1 : 1
      onQuantity(item.productId, newQuantity)
      return newQuantity
    })
  }

  const carts = useStoreActions(actions => actions.addToCarts)

  return (
    <div>
      <div className='flex flex-col items-center justify-center'>
        <Image
          className=''
          src={item.image}
          alt='Samsung Watch.'
          width={100}
          height={100}
        />
        <Separator className='my-3 w-full bg-[#90908e50]' />
        <div className='space-y-1 text-center'>
          <h2 className='text-lg text-[#088178]'>{item.title}</h2>
          <p className='text-sm text-[#90908e]'>
            {item.description.length > 60
              ? item.description.slice(0, 60) + ' ....'
              : item.description}
          </p>
        </div>
      </div>

      <div className='mt-5 flex flex-col'>
        <div className='flex border-y border-[#90908e50] p-2'>
          <h2 className='w-1/2 font-semibold'>Price</h2>
          <h2 className='w-1/2'>{`$${item.price}`}</h2>
        </div>

        <div className='flex border-b border-[#90908e50] p-2'>
          <h2 className='w-1/2 font-semibold'>Quantity</h2>
          <div className='relative flex w-28 items-center justify-center border border-[#90908e50] p-1'>
            <h2>{`${quantity}`}</h2>
            <button
              className='absolute right-0 h-full bg-[#90908e50] px-3'
              onClick={increment}
            >
              +
            </button>
            <button
              className='absolute left-0 h-full bg-[#90908e50] px-3'
              onClick={decrement}
            >
              -
            </button>
          </div>
        </div>

        <div className='flex border-b border-[#90908e50] p-2'>
          <h2 className='w-1/2 font-semibold'>Subtotal</h2>
          <h2 className='w-1/2'>{`$${item.price * quantity}`}</h2>
        </div>

        <div className='flex border-b border-[#90908e50] p-2'>
          <h2 className='w-1/2 font-semibold'>Remove</h2>
          <div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                {/* <Button variant='outline' size='icon' className='border-none'> */}
                  <Trash className='w-5 text-[#90908e]'/>
                {/* </Button> */}
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
                      carts.removeItem(item.productId)
                    }}
                    className='hover:text-[#fff rounded border-none bg-[#088178] text-[#fff] hover:bg-[#088178]'
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

export default MobileCartItem
