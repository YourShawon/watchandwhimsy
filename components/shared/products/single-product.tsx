'use client'

import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

import Image from 'next/image'
import { useStoreActions, useStoreState } from 'easy-peasy'
import Link from 'next/link'
import { EyeIcon } from 'lucide-react'

import Cart from '../../icons/cart'
import FavoriteIcon from '../../icons/FavoriteIcon'

interface ItemMedia {
  url: string
  alt: string
}

interface Item {
  media: ItemMedia
  discount: string
  tag: string
  category: string
  title: string
  price: number
  oldPrice: number
  isAddFavorite: boolean
  isAddedToCart: boolean
}

interface SingleProductProps {
  item: Item
}

export default function SingleProduct({ item }: SingleProductProps) {
  const [cart, setCart] = useState(false)
  const [hasFavorite, setHasFavorite] = useState(false)

  const { productId } = item

  const addToCart = useStoreActions(actions => actions.addToCarts)
  const carts = useStoreState(states => states.addToCarts)
  const cartIds = carts.items.map(i => i.productId)

  const setFavorites = useStoreActions(actions => actions.favorites)
  const favorites = useStoreState(states => states.favorites)

  useEffect(() => {
    setCart(cartIds.includes(productId))
  }, [carts])

  useEffect(() => {
    setHasFavorite(favorites.items.includes(productId))
  }, [favorites])

  return (
    <Card className='bg-red-00 bg-red-60 group rounded-3xl border border-[#E8F6EA]'>
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
          <TooltipProvider>
            <Tooltip delayDuration={150}>
              <TooltipTrigger asChild>
                <Link href={'#'}>
                  <Button
                    variant='outline'
                    className='group/btn h-8 w-8 rounded-full border-none bg-[#E8F6EA] transition-all duration-700 hover:-translate-y-1 hover:bg-[#088178]'
                    size='icon'
                  >
                    <EyeIcon
                      className={
                        'stroke-[#088178] group-hover/btn:stroke-[#fff]'
                      }
                    />
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent className='rounded-xl border-none bg-[#088178] text-xs text-[#fff]'>
                <p>Quick View</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {hasFavorite ? (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant='outline'
                  className='group/btn h-8 w-8 rounded-full border-none bg-[#E8F6EA] transition-all duration-700 hover:-translate-y-1 hover:bg-[#088178]'
                  size='icon'
                >
                  <FavoriteIcon
                    isFilled={true}
                    size={20}
                    color={'#088178'}
                    className={`-ml-0.5 fill-[#088178] stroke-[#088178] group-hover/btn:fill-[#fff] group-hover/btn:stroke-[#fff]`}
                  />
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
                      setFavorites.removeItem(productId)
                    }}
                    className='hover:text-[#fff rounded border-none bg-[#088178] text-[#fff] hover:bg-[#088178]'
                  >
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          ) : (
            <TooltipProvider>
              <Tooltip delayDuration={150}>
                <TooltipTrigger asChild>
                  <Button
                    variant='outline'
                    className='group/btn h-8 w-8 rounded-full border-none bg-[#E8F6EA] transition-all duration-700 hover:-translate-y-1 hover:bg-[#088178]'
                    size='icon'
                    onClick={() => {
                      setFavorites.addItem(productId)
                    }}
                  >
                    <FavoriteIcon
                      isFilled={hasFavorite}
                      size={20}
                      color={hasFavorite ? '#088178' : '#088178'}
                      className={`-ml-0.5 fill-none stroke-[#088178] group-hover/btn:stroke-[#fff]`}
                    />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className='rounded-xl border-none bg-[#088178] text-xs text-[#fff]'>
                  <p>{'Add to Favorite'}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
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
          {cart ? (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant='outline'
                  className={`group/btn h-8 w-8 rounded-full border-none bg-[#088178] transition-all duration-700 hover:-translate-y-1 hover:bg-[#E8F6EA]`}
                  size='icon'
                >
                  <Cart
                    className={`fill-[#fff] group-hover/btn:fill-[#088178]`}
                  />
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
                      addToCart.removeItem(item.productId)
                    }}
                    className='hover:text-[#fff rounded border-none bg-[#088178] text-[#fff] hover:bg-[#088178]'
                  >
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          ) : (
            <TooltipProvider>
              <Tooltip delayDuration={150}>
                <TooltipTrigger asChild>
                  <Button
                    variant='outline'
                    className={`group/btn hover:bg-[#088178]} h-8 w-8 rounded-full border-none bg-[#E8F6EA] transition-all duration-700 hover:-translate-y-1`}
                    size='icon'
                    onClick={() => {
                      addToCart.addItem({
                        productId: item.productId,
                        title: item.title,
                        description: item.description,
                        image: item.media.url,
                        quantity: item.quantity,
                        price: item.price
                      })
                    }}
                  >
                    <Cart
                      className={`group-hover/btn:fill-[#fff]} fill-[#088178]`}
                    />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className='rounded-xl border-none bg-[#088178] text-xs text-[#fff]'>
                  <p>{'Add to Cart'}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
