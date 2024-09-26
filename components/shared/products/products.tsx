'use client'

import { Button } from '@/components/ui/button'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Eye, Heart, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useStoreActions } from 'easy-peasy'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

interface Product {
  productId: string
  media: {
    alt: string
    url: string
  }
  title: string
  price: number
  oldPrice: number
  category: string
  description: string
  stock: number
  quantity: number
  tag: 'popular' | 'new' | 'sold' | 'hot' | 'discount' | 'bestseller'
}

interface tagStyles {
  hot: string
  new: string
  sold: string
  discount: string
  bestseller: string
}

function Products() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)

  // add to favorite
  const favoritesAction = useStoreActions((actions: any) => actions.favorites)

  // add to cart
  const addToCartAction = useStoreActions((actions: any) => actions.addToCarts)

  // get products
  const fetchProducts = async () => {
    setLoading(true)
    try {
      const response = await axios.get(
        'https://0cd2d96d-2302-4e65-86a9-e5a92a4471f7.mock.pstmn.io/products',
        {
          headers: {
            'x-mock-response-code': '200'
          }
        }
      )
      setProducts(response.data.data)
      console.log(response.data.data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchProducts()
  }, [])

  const tagStyles: tagStyles = {
    hot: 'bg-warning hover:bg-warning-hover',
    new: 'bg-green hover:bg-green-hover',
    sold: 'bg-danger hover:bg-danger-hover',
    bestseller: 'bg-green hover:bg-green-hover',
    discount: 'bg-warning hover:bg-warning-hover'
  }

  if (loading)
    return (
      <div className='flex items-center justify-center p-20'>Loading...</div>
    )

  return (
    <div className='mx-auto px-4 py-8 sm:container'>
      <h1 className='mb-4 text-2xl font-bold'>Products</h1>

      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {products.map(product => (
          <Card key={product.productId} className='relative overflow-hidden border-border'>
            {product.tag && (
              <Badge
                className={`absolute left-2 top-2 z-10 ${tagStyles[product.tag as keyof tagStyles]} text-white`}
              >
                {product.tag}
              </Badge>
            )}
            <CardContent className='p-0'>
              <div className='relative aspect-square'>
                <Image
                  src={product.media.url}
                  alt={product.media.alt}
                  width={100}
                  height={100}
                  className='h-full w-full object-cover p-2'
                />
                <div className='absolute right-2 top-2 flex gap-2'>
                  <TooltipProvider delayDuration={300}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        {/* create link go to single product by id/slug */}
                        <Button size='icon' className='p-2 rounded-full text-green bg-border hover:bg-green hover:text-border transition-all duration-500'>
                          <Eye className='h-4 w-4' />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className='bg-green text-white border-none text-xs'>
                        <p>View product details</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip >
                      <TooltipTrigger asChild>
                        <Button
                          size='icon'
                          className='p-2 rounded-full text-green bg-border hover:bg-green hover:text-border transition-all duration-500'
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
                          <Heart className='h-4 w-4' />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className='text-white bg-green border-none text-xs'>
                        <p>Add to favorite</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </CardContent>
            <CardFooter className='flex-col items-start p-4'>
              <div className='text-sm text-muted-foreground'>
                {product.category}
              </div>
              <h3 className='text-lg font-semibold'>{product.title}</h3>
              <div className='mt-1 flex items-center gap-2'>
                <span className='font-extrabold text-green'>{product.price}</span>
                {product.oldPrice && (
                  <span className='text-sm text-muted-foreground line-through'>
                    {product.oldPrice}
                  </span>
                )}
              </div>
              <Button
                className='hover:bg-green-hover mt-4 w-full bg-green text-white'
                size='sm'
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
                <ShoppingBag className='mr-2 h-4 w-4' /> Add to cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Products
