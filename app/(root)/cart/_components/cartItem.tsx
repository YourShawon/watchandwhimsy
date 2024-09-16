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

// Define types for the props
type CartItemType = {
  item: {
    productId: string
    title: string
    description: string
    image: string
    price: number
    quantity: number
    total: number
  }
}

const CartItem: React.FC<CartItemType> = ({ item }) => {
  const carts = useStoreActions((actions: any) => actions.addToCarts)

  return (
    <div className='flex items-center border-b border-[#E8F6EA] py-3 text-[#222]'>
      <div className='flex w-[20%] items-center justify-center'>
        <Image src={item.image} alt={item.title} width={100} height={100} />
      </div>
      <div className='w-[40%] text-center'>
        <h2 className='text-lg text-[#088178]'>{item.title}</h2>
        <p className='text-sm text-[#90908e]'>
          {item.description.length > 100
            ? item.description.slice(0, 100) + ' ....'
            : item.description}
        </p>
      </div>
      <h2 className='flex w-[10%] items-center justify-center'>{`$${item.price}`}</h2>

      <div className='flex w-[10%] items-center justify-center'>
        <div className='flex h-20 w-10 flex-col items-center justify-between border border-[#90908e50]'>
          <Button
            className={`w-full bg-[#F0F0F0] text-lg hover:bg-[#F0F0F0]`}
            onClick={() => {
              carts.incrementQuantity(item.productId)
            }}
            disabled={item.quantity > 9}
            size={'icon'}
          >
            +
          </Button>
          <h2>{`${item.quantity}`}</h2>
          <Button
            className={`w-full bg-[#F0F0F0] text-xl hover:bg-[#F0F0F0]`}
            onClick={() => {
              carts.decrementQuantity(item.productId)
            }}
            disabled={item.quantity < 2}
            size={'icon'}
          >
            -
          </Button>
        </div>
      </div>
      <h2 className='flex w-[10%] items-center justify-center'>{`$${item.price * item.quantity}`}</h2>

      <div className='flex w-[10%] items-center justify-center'>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Trash className='w-6 cursor-pointer text-[#90908e]' />
          </AlertDialogTrigger>
          <AlertDialogContent
            className='w-72 rounded border-none bg-[#E8F6EA] sm:w-96 lg:w-[32rem]'
            style={{ borderRadius: '8px' }}
          >
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
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
  )
}

export default CartItem
