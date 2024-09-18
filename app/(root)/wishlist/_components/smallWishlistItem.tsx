import ReuseAlertDialog from '@/components/shared/alertDialog'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useStoreActions } from 'easy-peasy'
import { Trash } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface CartItem {
  productId: string
  title: string
  description: string
  image: string
  stock: boolean
  quantity: number
  price: number
}

interface SmallWishlistItemProps {
  item: CartItem
}

const SmallWishlistItem: FC<SmallWishlistItemProps> = ({ item }) => {
  const favoritesAction = useStoreActions((actions: any) => actions.favorites)
  const addToCartAction = useStoreActions((actions: any) => actions.addToCarts)

  return (
    <div>
      {/* image, title and description */}
      <div className='flex flex-col items-center justify-center'>
        {/* <Link href={"#"}> // single product page a niye jabo. */}
        <Image src={item.image} alt={item.title} width={100} height={100} />
        {/* </Link> */}

        <Separator className='my-3 w-full bg-[#90908e50]' />
        <div className='w-full space-y-1 text-center'>
          {/* <Link href={"#"}> // single product page a niye jabo. */}
          <h2 className='text-lg text-[#088178]'>{item.title}</h2>
          {/* </Link> */}

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
            <ReuseAlertDialog
              isTrash={true}
              cb={() => favoritesAction.removeItem(item.productId)}
            >
              <Trash className='w-5 text-[#90908e]' />
            </ReuseAlertDialog>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SmallWishlistItem
