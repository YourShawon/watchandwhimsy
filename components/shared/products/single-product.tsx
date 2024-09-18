'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

import Image from 'next/image'
import { useStoreActions, useStoreState } from 'easy-peasy'
import Link from 'next/link'
import { EyeIcon } from 'lucide-react'

import Cart from '../../../public/icons/cart'
import FavoriteIcon from '../../../public/icons/FavoriteIcon'
import ReuseTooltip from './components/tooltip'
import ReuseAlertDialog from '../alertDialog'

interface ItemMedia {
  url: string
  alt: string
}

interface Item {
  productId: string
  media: ItemMedia
  discount: string
  tag: string
  category: string
  title: string
  price: number
  oldPrice: number
  isAddFavorite: boolean
  isAddedToCart: boolean
  quantity: number
  description: string
  stock: number
}

interface SingleProductProps {
  item: Item
}

export default function SingleProduct({ item }: SingleProductProps) {
  const [cartAdded, setCartAdded] = useState(false)
  const [favoriteAdded, setFavoriteAdded] = useState(false)

  const { productId } = item

  const addToCartAction = useStoreActions((actions: any) => actions.addToCarts)
  const carts = useStoreState((state: any) => state.addToCarts)
  const cartIds = carts.items.map((i: any) => i.productId)

  const favoritesAction = useStoreActions((actions: any) => actions.favorites)
  const favorites = useStoreState((state: any) => state.favorites)
  const favoriteIds = favorites.items.map((i: any) => i.productId)

  useEffect(() => {
    setCartAdded(cartIds.includes(productId))
    setFavoriteAdded(favoriteIds.includes(productId))
  }, [cartIds, favoriteIds])

  return (
    <Card className='bg-red-00 bg-red-60 group w-full rounded-3xl border border-[#E8F6EA]'>
      <CardHeader className='relative h-80 w-full overflow-hidden p-4'>
        <Link href={'#'} className='h-full w-full'>
          <Image
            src={item.media.url}
            alt={item.media.alt}
            className='h-full w-full rounded-xl object-cover transition-all duration-700 ease-in-out group-hover:scale-105'
          />
        </Link>
        <Badge
          variant='outline'
          className='absolute left-6 top-5 border-none bg-[#088178] text-xs text-[#E8F6EA] shadow-none'
        >
          {item.tag}
        </Badge>

        {/* Add to favorite and View details */}
        <div className='invisible absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform gap-3 p-2 opacity-0 transition-all duration-700 ease-in-out group-hover:visible group-hover:opacity-100'>
          <ReuseTooltip text={'Quick View'}>
            <Link href={'#'}>
              <EyeIcon
                className={'stroke-[#088178] group-hover/btn:stroke-[#fff]'}
              />
            </Link>
          </ReuseTooltip>

          {favoriteAdded ? (
            <ReuseAlertDialog cb={() => favoritesAction.removeItem(productId)}>
              <FavoriteIcon
                size={20}
                color={'#088178'}
                className={`-ml-0.5 fill-none stroke-[#fff] group-hover/btn:stroke-[#088178]`}
              />
            </ReuseAlertDialog>
          ) : (
            <ReuseTooltip
              text={'Add to Favorite'}
              cb={() =>
                favoritesAction.addItem({
                  productId: item.productId,
                  title: item.title,
                  description: item.description,
                  image: item.media.url,
                  stock: item.stock,
                  quantity: item.quantity,
                  price: item.price
                })
              }
            >
              <FavoriteIcon
                size={20}
                color={'#088178'}
                className={`-ml-0.5 fill-none stroke-[#088178] group-hover/btn:stroke-[#fff]`}
              />
            </ReuseTooltip>
          )}
        </div>
      </CardHeader>

      <CardContent className='flex flex-col items-start justify-between gap-2 px-4 pb-4 font-spartan'>
        <span className='text-sm text-[#90908e]'>{item.category}</span>

        <CardTitle className='mb-2 text-xl leading-5 text-[#222]'>
          {item.title}
        </CardTitle>

        <div className='flex w-full items-end justify-between'>
          <div>
            <CardTitle className='text-[#088178]'>{`$${item.price}.00`}</CardTitle>
            <Badge
              variant='outline'
              className='border-none p-0 text-sm text-[#90908e] line-through'
            >
              {`$${item.oldPrice}.00`}
            </Badge>
          </div>

          {/* add to cart btn */}
          {cartAdded ? (
            <ReuseAlertDialog
              cb={() => addToCartAction.removeItem(item.productId)}
            >
              <Cart className={`fill-[#fff] group-hover/btn:fill-[#088178]`} />
            </ReuseAlertDialog>
          ) : (
            <ReuseTooltip
              text={'Add to Cart'}
              cb={() =>
                addToCartAction.addItem({
                  productId: item.productId,
                  title: item.title,
                  description: item.description,
                  image: item.media.url,
                  quantity: item.quantity,
                  price: item.price
                })
              }
            >
              <Cart className={`fill-[#088178] group-hover/btn:fill-[#fff]`} />
            </ReuseTooltip>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
