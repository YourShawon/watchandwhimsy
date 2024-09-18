import ReuseAlertDialog from '@/components/shared/alertDialog'

import { Button } from '@/components/ui/button'
import { useStoreActions } from 'easy-peasy'
import { Trash } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

// Define types for the props
type LargeWishlistItemType = {
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

const LargeWishlistItem: FC<LargeWishlistItemType> = ({ item }) => {
  const favoritesAction = useStoreActions((actions: any) => actions.favorites)
  const addToCartAction = useStoreActions((actions: any) => actions.addToCarts)

  return (
    <div className='flex items-center justify-between border-b border-[#E8F6EA] py-3 text-sm text-[#222] lg:text-base'>
      <div className='flex w-[20%] items-center justify-center'>
        {/* <Link href={"#"}> // single product page a niye jabo. */}
        <Image src={item.image} alt={item.title} width={100} height={100} />
        {/* </Link> */}
      </div>
      <div className='w-[35%] text-center'>
        {/* <Link href={"#"}> // single product page a niye jabo. */}
        <h2 className='text-lg text-[#088178]'>{item.title}</h2>
        {/* </Link> */}

        <p className='text-sm text-[#90908e]'>
          {item.description.length > 80
            ? item.description.slice(0, 80) + ' ....'
            : item.description}
        </p>
      </div>
      <h2 className='flex w-[10%] items-center justify-center'>{`$${item.price}`}</h2>

      <h2
        className={`flex w-[10%] items-center justify-center text-center ${item.stock ? 'text-[#222]' : 'text-red-600'}`}
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
            className='rounded border-none bg-[#088178] text-xs text-[#fff] hover:bg-[#088178] hover:text-[#fff] lg:text-sm'
          >
            Add to Cart
          </Button>
        ) : (
          <Link href={'#'}>
            <Button className='rounded border-none bg-[#41506B] text-xs text-[#fff] hover:bg-[#41506B] hover:text-[#fff] lg:text-sm'>
              Contact Us
            </Button>
          </Link>
        )}
      </div>

      <div className='flex w-[10%] items-center justify-center'>
        <ReuseAlertDialog
          isTrash={true}
          cb={() => favoritesAction.removeItem(item.productId)}
        >
          <Trash className='w-6 cursor-pointer text-[#90908e]' />
        </ReuseAlertDialog>
      </div>
    </div>
  )
}

export default LargeWishlistItem
