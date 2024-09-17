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
import React from 'react'

interface CartItem {
  productId: string
  image: string
  title: string
  description: string
  price: number
  quantity: number
}

interface MobileCartItemProps {
  item: CartItem
}

const MobileCartItem: React.FC<MobileCartItemProps> = ({ item }) => {
  const carts = useStoreActions((actions: any) => actions.addToCarts)

  return (
    <div>
      {/* image, title and description */}
      <div className='flex flex-col items-center justify-center'>
        {/* <Link href={"#"}> // single product page a niye jabo. */}
        <Image
          className=''
          src={item.image}
          alt={item.title}
          width={100}
          height={100}
        />
        {/*</Link> */}
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

        {/* quantity */}
        <div className='flex border-b border-[#90908e50] p-2'>
          <h2 className='w-1/2 font-semibold'>Quantity</h2>
          <div className='relative flex w-28 items-center justify-center border border-[#90908e50] p-1'>
            <h2>{`${item.quantity}`}</h2>
            <Button
              className={`absolute right-0 h-full bg-[#F0F0F0] text-lg hover:bg-[#F0F0F0]`}
              onClick={() => {
                carts.incrementQuantity(item.productId)
              }}
              disabled={item.quantity > 9}
            >
              +
            </Button>
            <Button
              className={`absolute left-0 h-full bg-[#F0F0F0] text-lg hover:bg-[#F0F0F0]`}
              onClick={() => {
                carts.decrementQuantity(item.productId)
              }}
              disabled={item.quantity < 2}
            >
              -
            </Button>
          </div>
        </div>

        {/* subtotal */}
        <div className='flex border-b border-[#90908e50] p-2'>
          <h2 className='w-1/2 font-semibold'>Subtotal</h2>
          <h2 className='w-1/2'>{`$${item.price * item.quantity}`}</h2>
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
