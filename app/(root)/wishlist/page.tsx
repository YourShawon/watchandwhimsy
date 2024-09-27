'use client'

import Image from 'next/image'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'
import { useStoreActions, useStoreState } from 'easy-peasy'
import { useEffect, useState } from 'react'
import ReuseAlertDialog from '@/components/shared/alertDialog'
import { formatAmount } from '@/lib/utils'

function Wishlist() {
  const [products, setProducts] = useState<any[]>([])
  const favorites = useStoreState((states: any) => states.favorites.items)

  const favoritesAction = useStoreActions((actions: any) => actions.favorites)
  const addToCartAction = useStoreActions((actions: any) => actions.addToCarts)

  useEffect(() => {
    setProducts(favorites)
  }, [favorites])

  if(products.length === 0) {
    return (    
      <div className='mx-auto p-4 sm:container'>
        <h1 className='mb-4 text-2xl font-bold text-black-solid'>Wishlist</h1>
        <Card className='mb-4 text-center'>
          <CardHeader>
            <CardTitle className='text-xl text-black-solid'>
              Your wishlist is empty
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-sm text-muted-foreground'>
              You have no items in your wishlist
            </p>
          </CardContent>  
        </Card>
      </div>
    )
  }

  return (
    <div className='mx-auto p-4 sm:container'>
      <h1 className='mb-4 text-2xl font-bold text-black-solid'>Wishlist</h1>

      {/* Table for larger screens */}
      <div className='hidden md:block'>
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
              <TableRow key={product.id}>
                <TableCell className='text-center'>
                  <div className='flex items-center space-x-3'>
                    <Image
                      src={product.media.url}
                      alt={product.media.alt}
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
                <TableCell className='text-center'>{formatAmount(product.price)}</TableCell>
                <TableCell className='text-center'>{`${product.stock} ${product.stock > 1 ? 'Items' : 'Item'}`}</TableCell>
                <TableCell className='text-center'>
                  <Button
                    className='bg-green-0x text-white transition-colors duration-300 sm:hover:bg-green-8x'
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
                    Add to Cart
                  </Button>
                </TableCell>
                <TableCell className='text-center'>
                  <ReuseAlertDialog
                    cb={() => favoritesAction.removeItem(product.productId)}
                  >
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
      </div>

      {/* Cards for smaller screens */}
      <div className='space-y-4 md:hidden'>
        {products.map(product => (
          <Card key={product.productId}>
            <CardHeader>
              <CardTitle className='text-xl text-black-solid'>
                {product.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='mb-2 flex items-center space-x-3'>
                <Image
                  src={product.media.url}
                  alt={product.media.alt}
                  width={120}
                  height={120}
                  className='rounded-md'
                />
                <div className='text-sm line-clamp-3 text-muted-foreground'>
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
                  Add to Cart
                </Button>
                <ReuseAlertDialog
                  cb={() => favoritesAction.removeItem(product.productId)}
                >
                  <Button
                    className='border bg-transparent text-green-0x'
                    size='icon'
                  >
                    <Trash2 className='h-4 w-4' />
                  </Button>
                </ReuseAlertDialog>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Wishlist
