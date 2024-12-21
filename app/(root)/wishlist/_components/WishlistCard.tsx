import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'
import ReuseAlertDialog from '@/components/shared/alertDialog'
import { formatAmount } from '@/lib/utils'
import { Product } from '@/interface/products'

function WishlistCard({ product }: { product: Product }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-xl text-black-solid'>
          {product.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='mb-2 flex items-center space-x-3'>
          <Image
            src={product.media[0].url}
            alt={product.media[0].alt}
            width={120}
            height={120}
            className='rounded-md'
          />
          <div className='line-clamp-3 text-sm text-muted-foreground'>
            {product.description}
          </div>
        </div>
        <div className='mb-4 flex items-center justify-between'>
          <span>Price: {formatAmount(product.price)}</span>
          <span>{`Stock: ${product.stock}`}</span>
        </div>
        <div className='flex items-center justify-between'>
          <Button
            className='bg-green-0x text-white'
            onClick={() => console.log('Add to cart')}
          >
            Add to Cart
          </Button>
          <ReuseAlertDialog>
            <Button className='border bg-transparent text-green-0x' size='icon'>
              <Trash2 className='h-4 w-4' />
            </Button>
          </ReuseAlertDialog>
        </div>
      </CardContent>
    </Card>
  )
}

export default WishlistCard
