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
import Link from 'next/link'

// Define types for the props
type WishlistItemType = {
  item: {
    productId: string
    title: string
    description: string
    image: string
    stock: boolean
    price: number
    quantity: number
  }
}

const WishlistItem: React.FC<WishlistItemType> = ({ item }) => {
  const favoritesAction = useStoreActions((actions: any) => actions.favorites)
  const addToCartAction = useStoreActions((actions: any) => actions.addToCarts)

  return (
    <div className='text-sm lg:text-base flex items-center justify-between border-b border-[#E8F6EA] py-3 text-[#222]'>
      <div className='flex w-[20%] items-center justify-center'>
        {/* <Link href={"#"}> // single product page a niye jabo. */}
        <Image src={item.image} alt={item.title} width={100} height={100} />
        {/* </Link> */}
      </div>
      <div className='w-[35%] text-center'>
        <h2 className='text-lg text-[#088178]'>{item.title}</h2>
        <p className='text-sm text-[#90908e]'>
          {item.description.length > 80
            ? item.description.slice(0, 80) + ' ....'
            : item.description}
        </p>
      </div>
      <h2 className='flex w-[10%] items-center justify-center'>{`$${item.price}`}</h2>

      <h2
        className={`flex w-[10%] text-center items-center justify-center ${item.stock ? 'text-[#222]' : 'text-red-600'}`}
      >
        {item.stock ? `In Stock` : `Out of Stock`}
      </h2>

      <div className='flex w-[15%] items-center justify-center'>
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
              className='rounded border-none bg-[#088178] text-xs lg:text-sm text-[#fff] hover:bg-[#088178] hover:text-[#fff]'
            >
              Add to Cart
            </Button>
          ) : (
            <Link href={'#'}>
              <Button className='rounded border-none bg-[#41506B] text-xs lg:text-sm text-[#fff] hover:bg-[#41506B] hover:text-[#fff]'>
                Contact Us
              </Button>
            </Link>
          )}
      </div>

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
                  favoritesAction.removeItem(item.productId)
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

export default WishlistItem
