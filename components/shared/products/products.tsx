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
import { formatAmount } from '@/lib/utils'

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
      // const response = await axios.get(
      //   'https://0cd2d96d-2302-4e65-86a9-e5a92a4471f7.mock.pstmn.io/products',
      //   {
      //     headers: {
      //       'x-mock-response-code': '200'
      //     }
      //   }
      // )

      const response = [
        {
          productId: '0a7aeffa-a87e-415b-8b2d-ed56834ccfd0',
          media: {
            url: 'https://res.cloudinary.com/anamulhoquewd/image/upload/v1727198994/image0_h8yoef.png',
            alt: 'Handmade Granite Sausages'
          },
          name: 'Handmade Wooden Bike',
          title: 'Generic Granite Pants',
          description:
            'Buckinghamshire service-desk supply-chains Mouse Switzerland Unbranded Berkshire Customizable payment Computers Barbados Liaison Personal Buckinghamshire Right-sized e-markets Plastic program Franc back-end Towels',
          price: 17,
          oldPrice: 21,
          quantity: 1,
          tag: 'hot',
          category: 'woman',
          stock: 6
        },
        {
          productId: '3689af39-1b06-498d-a207-8535b721858c',
          media: {
            url: 'https://res.cloudinary.com/anamulhoquewd/image/upload/v1727198994/image0_h8yoef.png',
            alt: 'Intelligent Frozen Tuna'
          },
          name: 'Ergonomic Steel Pants',
          title: 'Sleek Metal Sausages',
          description:
            'Industrial Myanmar e-business implement Bike bandwidth Applications aggregate Beauty Cross-platform mobile Card Bacon Cheese',
          price: 39,
          oldPrice: 41,
          quantity: 1,
          tag: 'new',
          category: 'kids',
          stock: 9
        },
        {
          productId: '1f5f0e2c-42c1-4b6c-8fa3-77075f14da3e',
          media: {
            url: 'https://res.cloudinary.com/anamulhoquewd/image/upload/v17219/image14_qyprkj.png',
            alt: 'Incredible Concrete Towels'
          },
          name: 'Small Cotton Shirt',
          title: 'Practical Cotton Ball',
          description:
            'mobile quantify Tuna Kansas Computer definition Sahara Cheese actuating Lead Intuitive purple Business-focused XSS',
          price: 12,
          oldPrice: 13,
          quantity: 1,
          tag: 'sold',
          category: 'couple',
          stock: 5
        },
        {
          productId: 'e8e4d781-3db9-4b11-b68a-10a9f66512c6',
          media: {
            url: 'https://res.cloudinary.com/anamulhoquewd/image/upload/v17219/image12_wswnex.png',
            alt: 'Tasty Frozen Pizza'
          },
          name: 'Incredible Soft Salad',
          title: 'Licensed Plastic Gloves',
          description:
            'Industrial Myanmar e-business implement Bike bandwidth Applications aggregate Beauty Cross-platform mobile Card Bacon Cheese',
          price: 8,
          oldPrice: 14,
          quantity: 1,
          tag: 'bestseller',
          category: 'woman',
          stock: 5
        },
        {
          productId: 'f391d7ca-cf4c-4154-8476-8759aa328f83',
          media: {
            url: 'https://res.cloudinary.com/anamulhoquewd/image/upload/v1727199016/image10_q4pxh8.png',
            alt: 'Rustic Metal Salad'
          },
          name: 'Handcrafted Steel Bike',
          title: 'Ergonomic Fresh Chicken',
          description:
            'Industrial Myanmar e-business implement Bike bandwidth Applications aggregate Beauty Cross-platform mobile Card Bacon Cheese',
          price: 26,
          oldPrice: 33,
          quantity: 1,
          tag: 'discount',
          category: 'couple',
          stock: 4
        },
        {
          productId: '23d14b0f-bb58-4771-9647-18be6c178337',
          media: {
            url: 'https://res.cloudinary.com/anamulhoquewd/image/upload/v1727199021/image16_mrywfp.png',
            alt: 'Incredible Rubber Mouse'
          },

          name: 'Unbranded Fresh Pants',
          title: 'Unbranded Wooden Chicken',
          description:
            'Buckinghamshire service-desk supply-chains Mouse Switzerland Unbranded Berkshire Customizable payment Computers Barbados Liaison Personal Buckinghamshire Right-sized e-markets Plastic program Franc back-end Towels',
          price: 69,
          oldPrice: 98,
          quantity: 1,
          tag: 'new',
          category: 'woman',
          stock: 2
        },
        {
          productId: '87340ede-6f6c-49cf-b95d-8476c9bac571',
          media: {
            url: 'https://res.cloudinary.com/anamulhoquewd/image/upload/v1727199031/image8_rzochq.png',
            alt: 'Licensed Steel Pants'
          },
          name: 'Awesome Cotton Sausages',
          title: 'Licensed Granite Soap',
          description:
            'mobile quantify Tuna Kansas Computer definition Sahara Cheese actuating Lead Intuitive purple Business-focused XSS',
          price: 36,
          oldPrice: 37,
          quantity: 1,
          tag: 'hot',
          category: 'kids',
          stock: 3
        }
      ]
      setProducts(response.map(item => ({
        ...item,
        tag: item.tag as "popular" | "new" | "sold" | "hot" | "discount" | "bestseller"
      })))
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
    hot: 'bg-yellow-100 sm:hover:bg-yellow-200',
    new: 'bg-green-100 sm:hover:bg-green-200',
    sold: 'bg-red-100 sm:hover:bg-red-200',
    bestseller: 'bg-green-100 sm:hover:bg-green-200',
    discount: 'bg-yellow-100 sm:hover:bg-yellow-200'
  }

  return (
    <div className='mx-auto px-4 py-8 sm:container'>
      <h1 className='mb-4 text-2xl font-bold text-black-solid'>Products</h1>

      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {products.map(product => (
          <Card key={product.productId} className='relative overflow-hidden'>
            {product.tag && (
              <Badge
                className={`absolute left-2 top-2 z-10 text-black-solid transition-all duration-300 ${tagStyles[product.tag as keyof tagStyles]}`}
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
                  <TooltipProvider delayDuration={200}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        {/* create link go to single product by id/slug */}
                        <Button className='h-9 w-9 rounded-full bg-green-2x p-1 text-green-0x transition-all duration-500 sm:hover:bg-green-0x sm:hover:text-green-2x'>
                          <Eye className='h-4 w-4' />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className='sm:block hidden border-none bg-green-0x text-xs text-white sm:hover:bg-green-8x'>
                        <p>View product details</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          className='h-9 w-9 rounded-full bg-green-2x p-1 text-green-0x transition-all duration-500 sm:hover:bg-green-0x sm:hover:text-green-2x'
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
                      <TooltipContent className='sm:block hidden border-none bg-green-0x text-xs text-white sm:hover:bg-green-8x'>
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
              <h3 className='text-lg font-semibold text-black-solid'>
                {product.title}
              </h3>
              <div className='mt-1 flex items-center gap-2'>
                <span className='font-semibold text-green-0x'>
                  {formatAmount(product.price)}
                </span>
                {product.oldPrice && (
                  <span className='text-sm text-muted-foreground line-through'>
                    {product.oldPrice.toFixed(2)}
                  </span>
                )}
              </div>
              <Button
                className='mt-4 w-full bg-green-0x text-white transition-all duration-300 sm:hover:bg-green-8x'
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
