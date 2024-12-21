import Image from 'next/image'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'
import ReuseAlertDialog from '@/components/shared/alertDialog'
import { formatAmount } from '@/lib/utils'
import { Product } from '@/interface/products'

function WishlistTable({ products }: { products: Product[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className='w-4/6 text-center'>Product</TableHead>
          <TableHead className='text-center'>Price</TableHead>
          <TableHead className='text-center'>Stock</TableHead>
          <TableHead className='text-center'>Action</TableHead>
          <TableHead className='text-center'>Remove</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map(product => (
          <TableRow key={product.productId}>
            <TableCell className='text-center'>
              <div className='flex items-center space-x-3'>
                <Image
                  src={product.media[0].url}
                  alt={product.media[0].alt}
                  width={120}
                  height={120}
                  className='rounded-md'
                />
                <div>
                  <div className='mb-1 text-base font-semibold'>
                    {product.title}
                  </div>
                  <div className='text-sm text-muted-foreground'>
                    {product.description}
                  </div>
                </div>
              </div>
            </TableCell>
            <TableCell className='text-center'>
              {formatAmount(product.price)}
            </TableCell>
            <TableCell
              className={`text-center ${product.stock === 0 ? 'text-red-500' : ''}`}
            >
              {product.stock === 0
                ? 'Out of Stock'
                : `${product.stock} ${product.stock === 1 ? 'Item' : 'Items'}`}
            </TableCell>
            <TableCell className='text-center'>
              <Button
                variant={'bgGreen'}
                onClick={() => console.log('add to cart')}
              >
                Add to Cart
              </Button>
            </TableCell>
            <TableCell className='text-center'>
              <ReuseAlertDialog>
                <Button
                  className='border text-green-0x transition-colors duration-500 sm:hover:bg-green-2x'
                  size='icon'
                >
                  <Trash2 className='h-4 w-4' />
                </Button>
              </ReuseAlertDialog>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default WishlistTable
