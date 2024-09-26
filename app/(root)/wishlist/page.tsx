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

function Wishlist() {
  const [products, setProducts] = useState<any[]>([])
  const favorites = useStoreState((states: any) => states.favorites.items)

  const favoritesAction = useStoreActions((actions: any) => actions.favorites)
  const addToCartAction = useStoreActions((actions: any) => actions.addToCarts)

  useEffect(() => {
    setProducts(favorites)
  }, [favorites])

  return (
    <div className='mx-auto p-4 sm:container'>
      <h1 className='mb-4 text-2xl font-bold'>Wishlist</h1>

      {/* Table for larger screens */}
      <div className='hidden md:block'>
        <Table >
          <TableHeader >
            <TableRow className='border-border'>
              <TableHead className='w-4/6 text-center'>Product</TableHead>
              <TableHead className='text-center'>Price</TableHead>
              <TableHead className='text-center'>Stock Status</TableHead>
              <TableHead className='text-center'>Action</TableHead>
              <TableHead className='text-center'>Remove</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody >
            {products.map(product => (
              <TableRow key={product.id} className='border-border'>
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
                      <div className='font-bold'>{product.title}</div>
                      <div className='text-sm text-gray-500'>
                        {product.description}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className='text-center'>${product.price}</TableCell>
                <TableCell className='text-center'>{product.stock}</TableCell>
                <TableCell className='text-center'>
                  <Button
                    className='hover:bg-green-hover bg-green text-white transition-colors duration-500'
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
                      className='bg-transparent text-green hover:bg-border'
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
          <Card key={product.productId} className='border-border'>
            <CardHeader>
              <CardTitle>{product.title}</CardTitle>
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
                <div className='text-sm text-gray-500'>
                  {product.description}
                </div>
              </div>
              <div className='mb-2 flex items-center justify-between'>
                <span>Price: ${product.price}</span>
                <span>{`Stock: ${product.stock}`}</span>
              </div>
              <div className='flex items-center justify-between'>
                <Button
                  className='hover:bg-green-hover bg-green text-white transition-colors duration-500'
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
                  <Button  className='bg-transparent text-green hover:bg-border' size='icon'>
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
