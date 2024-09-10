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
import { useStoreActions } from 'easy-peasy'
import { Trash } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

function CartItem({ item, onQuantity }) {
  const [quantity, setQuantity] = useState(1)

  const increment = () => {
    setQuantity(prevQuantity => {
      const newQuantity = prevQuantity < 10 ? prevQuantity + 1 : 10
      onQuantity(item.id, newQuantity)
      return newQuantity
    })
  }

  const decrement = () => {
    setQuantity(prevQuantity => {
      const newQuantity = prevQuantity > 1 ? prevQuantity - 1 : 1
      onQuantity(item.id, newQuantity)
      return newQuantity
    })
  }

  const carts = useStoreActions(actions => actions.addToCarts)

  return (
    <>
      <div>
        <Image src={item.image} alt='Samsung Watch.' width={100} height={100} />
        <div>
          <h2>{item.title}</h2>
          <p>
            {item.description.length > 60
              ? item.description.slice(0, 60) + ' ....'
              : item.description}
          </p>
        </div>
      </div>
      <div>
        <div>
          <h2>Price</h2>
          <h2>{`$${item.price}`}</h2>
        </div>
        <div>
          <h2>Quantity</h2>
          <h2>{`${quantity}`}</h2>
          <button onClick={increment}>increment</button>
          <button onClick={decrement}>decrement</button>
        </div>
        <div>
          <h2>Subtotal</h2>
          <h2>{`$${item.price * quantity}`}</h2>
        </div>
        <div>
          <h2>Remove</h2>
          <h2>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant='outline' size='icon'>
                  <Trash />
                </Button>
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
          </h2>
        </div>
      </div>
    </>
  )
}

export default CartItem
