import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { Product, tagStyles } from '@/interface/products'
import { formatAmount } from '@/lib/utils'
import { useStoreActions } from 'easy-peasy'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { IoBagAddOutline } from 'react-icons/io5'
import { BiHeart, BiSearch } from 'react-icons/bi'
import { PiShareNetworkLight } from 'react-icons/pi'
import React from 'react'
import Rating from '@/components/shared/rating-stars'

function ProductCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false)

  // add to favorite
  const favoritesAction = useStoreActions((actions: any) => actions.favorites)

  // add to cart
  const addToCartAction = useStoreActions((actions: any) => actions.addToCarts)

  const tagStyles: tagStyles = {
    hot: 'bg-yellow-200 sm:hover:bg-yellow-300',
    new: 'bg-green-200 sm:hover:bg-green-300',
    sold: 'bg-red-200 sm:hover:bg-red-300',
    bestseller: 'bg-green-200 sm:hover:bg-green-300',
    popular: 'bg-pink-200 sm:hover:bg-pink-300'
  }

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className='relative w-full rounded-3xl'
    >
      <div className='relative p-3'>
        <div className='h-[260px] overflow-hidden rounded-2xl bg-white-1x'>
          <Image
            src={isHovered ? product.media[1].url : product.media[0].url}
            width={400}
            height={400}
            alt={isHovered ? product.media[1].alt : product.media[0].alt}
            className='mx-auto h-full w-auto object-cover transition-all duration-700 ease-in-out hover:scale-105'
          />
        </div>

        {product.tag && (
          <Badge
            className={`absolute left-5 top-5 z-10 text-black-solid transition-all duration-300 ${tagStyles[product.tag as keyof tagStyles]}`}
          >
            {product.tag}
          </Badge>
        )}

        {isHovered && (
          <div className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform gap-2'>
            <TooltipProvider>
              <Tooltip delayDuration={200}>
                <TooltipTrigger>
                  <Link
                    href={`/products/${product.productId}`}
                    className='group/btn flex h-8 w-8 items-center justify-center rounded-full bg-green-2x transition-all duration-300 hover:-translate-y-1 hover:bg-green-0x lg:h-9 lg:w-9'
                  >
                    <BiSearch className='h-4 w-4 text-green-0x group-hover/btn:text-white lg:h-5 lg:w-5' />
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  sideOffset={10}
                  className='border-none bg-green-0x text-xs text-white'
                >
                  <span
                    className={`absolute -bottom-1 left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-l-sm border-b border-r bg-green-0x`}
                  ></span>
                  <p>Quick view</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip delayDuration={200}>
                <TooltipTrigger>
                  <Button
                    size={'icon'}
                    className='group/btn flex h-8 w-8 items-center justify-center rounded-full bg-green-2x transition-all duration-300 hover:-translate-y-1 hover:bg-green-0x lg:h-9 lg:w-9'
                    onClick={() => {
                      favoritesAction.addItem({
                        productId: product.productId,
                        title: product.title,
                        description: product.description,
                        media: product.media,
                        stock: product.stock,
                        quantity: product.quantity,
                        price: product.price
                      })
                    }}
                  >
                    <BiHeart className='h-4 w-4 text-green-0x group-hover/btn:text-white lg:h-5 lg:w-5' />
                  </Button>
                </TooltipTrigger>
                <TooltipContent
                  sideOffset={10}
                  className='border-none bg-green-0x text-xs text-white'
                >
                  <span
                    className={`absolute -bottom-1 left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-l-sm border-b border-r bg-green-0x`}
                  ></span>
                  <p>Add to wishlist</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip delayDuration={200}>
                <TooltipTrigger>
                  <Button
                    size={'icon'}
                    className='group/btn flex h-8 w-8 items-center justify-center rounded-full bg-green-2x transition-all duration-300 hover:-translate-y-1 hover:bg-green-0x lg:h-9 lg:w-9'
                    onClick={() => {
                      const fullUrl = `${window.location.origin}/products/${product.slug}`
                      navigator.clipboard.writeText(fullUrl)
                    }}
                  >
                    <PiShareNetworkLight className='h-4 w-4 text-green-0x group-hover/btn:text-white lg:h-5 lg:w-5' />
                  </Button>
                </TooltipTrigger>
                <TooltipContent
                  sideOffset={10}
                  className='border-none bg-green-0x text-xs text-white'
                >
                  <span
                    className={`absolute -bottom-1 left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-l-sm border-b border-r border-green-0x bg-green-0x`}
                  ></span>
                  <p>Click to copy link for shear</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        )}
      </div>

      <CardContent className='px-4'>
        <small className='text-muted-foreground'>{product.category}</small>
        <Link href='javascript:void(0)'>
          <h3 className='mt-1 line-clamp-2 w-fit font-semibold text-black-solid transition-all duration-300 hover:text-green-0x'>
            {product.title}
          </h3>
        </Link>

        <div className='flex items-center justify-start gap-2'>
          <Rating
            count={5}
            size={20}
            value={(product.rating / 100) * 5}
            actionColor='#eab308'
          />
          <small>{`${product.rating}%`}</small>
        </div>

        <div>
          <span className='text-lg font-bold text-green-0x'>
            {formatAmount(product.price)}
          </span>
          <span className='ml-2 text-sm text-muted-foreground line-through'>
            {formatAmount(product.originalPrice)}
          </span>
        </div>
      </CardContent>

      <div className='absolute bottom-6 right-5'>
        <TooltipProvider>
          <Tooltip delayDuration={200}>
            <TooltipTrigger>
              <Button
                size={'icon'}
                className='group/btn flex h-9 w-9 items-center justify-center rounded-full border border-green-1x bg-green-2x transition-all duration-300 hover:-translate-y-1 hover:bg-green-0x'
                onClick={() => {
                  addToCartAction.addItem({
                    productId: product.productId,
                    title: product.title,
                    description: product.description,
                    media: product.media,
                    quantity: product.quantity,
                    price: product.price
                  })
                }}
              >
                <IoBagAddOutline className='h-5 w-5 text-green-0x group-hover/btn:text-white' />
              </Button>
            </TooltipTrigger>
            <TooltipContent
              sideOffset={10}
              className='border-none bg-green-0x text-xs text-white'
            >
              <span
                className={`dark:border-dark-3 dark:bg-dark absolute -bottom-1 left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-l-sm border-b border-r bg-green-0x`}
              ></span>
              <p>Add to cart</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </Card>
  )
}

export default ProductCard
