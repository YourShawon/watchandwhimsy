import { HeartFilledIcon, HeartIcon } from '@radix-ui/react-icons'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

import Image from 'next/image'
import Cart from '../icons/cart'

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
  isAddFevorite: boolean
  isAddedToCart: boolean
}

interface SimgleProductProps {
  item: Item
}

export default function SimgleProduct({ item }: SimgleProductProps) {
  return (
    <Card className='bg-red-00 bg-red-60 group rounded-3xl border border-[#E8F6EA]'>
      <CardHeader className='relative h-80 w-full overflow-hidden p-4'>
        <Image
          src={item.media.url}
          alt={item.media.alt}
          className='h-full w-full rounded-xl object-cover transition-all duration-700 ease-in-out group-hover:scale-105'
        />
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
                <Button
                  variant='outline'
                  className='group/btn h-8 w-8 rounded-full border-none bg-[#E8F6EA] transition-all duration-700 hover:-translate-y-1 hover:bg-[#088178]'
                  size='icon'
                >
                  <Cart
                    className={'fill-[#088178] group-hover/btn:fill-[#fff]'}
                  />
                </Button>
              </TooltipTrigger>
              <TooltipContent className='rounded-xl border-none bg-[#088178] text-xs text-[#fff]'>
                <p>Quick View</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip delayDuration={150}>
              <TooltipTrigger asChild>
                <Button
                  variant='outline'
                  className='group/btn h-8 w-8 rounded-full border-none bg-[#E8F6EA] transition-all duration-700 hover:-translate-y-1 hover:bg-[#088178]'
                  size='icon'
                >
                  <Cart
                    className={'fill-[#088178] group-hover/btn:fill-[#fff]'}
                  />
                </Button>
              </TooltipTrigger>
              <TooltipContent className='rounded-xl border-none bg-[#088178] text-xs text-[#fff]'>
                <p>Add to Wishlist</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
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
          <TooltipProvider>
            <Tooltip delayDuration={150}>
              <TooltipTrigger asChild>
                <Button
                  variant='outline'
                  className='group/btn h-8 w-8 rounded-full border-none bg-[#E8F6EA] transition-all duration-700 hover:-translate-y-1 hover:bg-[#088178]'
                  size='icon'
                >
                  <Cart
                    className={'fill-[#088178] group-hover/btn:fill-[#fff]'}
                  />
                </Button>
              </TooltipTrigger>
              <TooltipContent className='rounded-xl border-none bg-[#088178] text-xs text-[#fff]'>
                <p>Add to Cart</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardContent>
    </Card>
  )
}
