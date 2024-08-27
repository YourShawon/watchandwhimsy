import { HeartFilledIcon, HeartIcon } from '@radix-ui/react-icons'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'

import { Badge } from '@/components/ui/badge'

import Image from 'next/image'
import Cart from '../icons/cart'

interface ItemMedia {
  url: string
  width: number
  height: number
  alt: string
}

interface Item {
  media: ItemMedia
  discount: string
  tag: string
  category: string
  title: string
  pirce: number
  oldPrice: number
  isAddFevorite: boolean
  isAddedToCart: boolean
}

interface SimgleProductProps {
  item: Item
}

export default function SimgleProduct({ item }: SimgleProductProps) {
  return (
    <Card className='flex w-full flex-col items-stretch justify-start gap-2 rounded-2xl border border-[#088178] p-3'>
      <div className={`relative h-80 overflow-hidden rounded-2xl bg-[#F1F1F1]`}>
        <Image
          src={item.media.url}
          alt={item.media.alt}
          className='h-full w-full object-cover'
        />
        <Badge
          variant='outline'
          className='absolute left-2 top-2 border-none bg-[#088178] text-xs text-[#E8F6EA] shadow-none'
        >
          {item.tag}
        </Badge>
      </div>

      <CardContent className='flex flex-col gap-1 p-0'>
        <span className='xs:text-xs sm:text-sm font-semibold text-[#90908e]'>
          {item.category}
        </span>

        <CardTitle className='mb-2 xs:text-base sm:text-base md:text-xl text-[#222]'>
          {item.title}
        </CardTitle>

        <div className='mt-auto flex items-end justify-between'>
          <div>
            <CardTitle className='text-2xl text-[#088178]'>{`$${item.pirce}.00`}</CardTitle>
            <Badge
              variant='outline'
              className='border-none p-0 text-sm text-[#90908e] line-through shadow-none'
            >
              {`$${item.oldPrice}.00`}
            </Badge>
          </div>
          <Button
            variant='outline'
            className='border-none bg-[#E8F6EA] rounded-full hover:bg-[#E8F6EA]'
            size='icon'
          >
            <Cart />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
