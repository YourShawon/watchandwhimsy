'use client'

import CartPage from '@/app/(root)/cart/_components/large/cart'
import CartMobileView from '@/app/(root)/cart/_components/small/cartMobile'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy'
import useCart from '@/hooks/cart/useCart'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription
} from '@/components/ui/card'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '@/components/ui/select'

import { locations as allLocation } from '@/constants/locations'
import SelectLocationForm from './_components/selectLocations'
import ReuseAlertDialog from '@/components/shared/alertDialog'

type CartItemType = {
  productId: string
  title: string
  description: string
  media: {
    url: string
    alt: string
  }
  price: number
  quantity: number
  total: number
  name: string
}

type LocationType = {
  name: string
  department: string
}

function Cart() {
  const [locations, setLocations] = useState<LocationType[]>([])
  const [carts, setCarts] = useState<CartItemType[]>([]) // Initialize as empty array

  const cartItems: CartItemType[] = useStoreState(
    (states: { addToCarts: { items: CartItemType[] } }) =>
      states.addToCarts.items
  )

  const cartActions = useStoreActions((actions: any) => actions.addToCarts)

  const {
    data,
    subtotal,
    shippingPrice,
    dataSubmitErrorMessage,
    selectedLocation,
    handleShippingPrice,
    setSelectedLocation,
    sentData
  } = useCart(cartItems, locations)

  useEffect(() => {
    setCarts(data || []) // Ensure data is an array
  }, [data])

  useEffect(() => {
    setLocations(allLocation)
  }, [])

  return (
    <div className='mx-auto p-4 sm:container'>
      <h1 className='mb-6 text-3xl font-bold'>Shopping Cart</h1>

      {/* Table for larger screens */}
      <div className='mb-8 hidden md:block'>
        <Table>
          <TableHeader>
            <TableRow className='border-border'>
              <TableHead>Product</TableHead>
              <TableHead className='w-3/5'>Description</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Remove</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {carts.map(product => (
              <TableRow key={product.productId} className='border-border'>
                <TableCell>
                  <Image
                    src={product.media.url}
                    alt={product.media.alt}
                    width={120}
                    height={120}
                    className='rounded-md'
                  />
                </TableCell>
                <TableCell>
                  <div className='font-semibold'>{product.title}</div>
                  <div className='text-sm text-gray'>
                    {product.description}
                  </div>
                </TableCell>
                <TableCell>${product.price}</TableCell>
                <TableCell>
                  <div className='flex h-20 w-10 flex-col items-center justify-between border border-border'>
                    <Button
                      variant={'ghost'}
                      onClick={() => {
                        cartActions.incrementQuantity(product.productId)
                      }}
                      disabled={product.quantity >= 10}
                      size={'icon'}
                    >
                      <Plus className='h-3 w-3' />
                    </Button>
                    <h2>{product.quantity}</h2>
                    <Button
                      variant={'ghost'}
                      onClick={() => {
                        cartActions.decrementQuantity(product.productId)
                      }}
                      disabled={product.quantity <= 1}
                      size={'icon'}
                    >
                      <Minus className='h-3 w-3' />
                    </Button>
                  </div>
                </TableCell>
                <TableCell>${product.price * product.quantity}</TableCell>
                <TableCell>
                  <ReuseAlertDialog
                    cb={() => cartActions.removeItem(product.productId)}
                  >
                    <Button className='bg-transparent text-green hover:bg-border' size='icon'>
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
      <div className='mb-8 space-y-4 md:hidden'>
        {carts.map(product => (
          <Card key={product.productId} className='border-border'>
            <CardContent className='p-4'>
              <div className='flex items-center space-x-4'>
                <Image
                  src={product.media.url}
                  alt={product.media.alt}
                  width={120}
                  height={120}
                  className='rounded-md'
                />
                <div className='flex-1'>
                  <h3 className='font-medium'>{product.title}</h3>
                  <p className='line-clamp-2 text-sm text-gray-500'>
                    {product.description}
                  </p>
                </div>
              </div>
              <div className='mt-4 flex items-center justify-between'>
                <span className='font-medium'>Price: {product.price}</span>

                <div className='flex h-10 w-24 border-border items-center justify-between border'>
                  <Button
                    variant={'ghost'}
                    onClick={() => {
                      cartActions.decrementQuantity(product.productId)
                    }}
                    disabled={product.quantity <= 1}
                    size={'icon'}
                  >
                    <Minus className='h-3 w-3' />
                  </Button>
                  <h2>{product.quantity}</h2>
                  <Button
                    variant={'ghost'}
                    onClick={() => {
                      cartActions.incrementQuantity(product.productId)
                    }}
                    disabled={product.quantity >= 10}
                    size={'icon'}
                  >
                    <Plus className='h-3 w-3' />
                  </Button>
                </div>
              </div>
              <div className='mt-4 flex items-center justify-between'>
                <span className='font-medium'>
                  Total: {(product.price * product.quantity).toFixed(2)}
                </span>
                <ReuseAlertDialog
                  cb={() => cartActions.removeItem(product.productId)}
                >
                  <Button className='bg-transparent text-green hover:bg-border' size='icon'>
                    <Trash2 className='h-4 w-4' />
                  </Button>
                </ReuseAlertDialog>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Shipping and Total */}
      <div className='grid gap-8 md:grid-cols-2'>
        {/* Calculate Shipping */}
        <Card className='border-border'>
          <CardHeader>
            <CardTitle>Select Shipping Address</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              beatae laboriosam impedit fuga expedita nesciunt voluptate dolorum
              placeat labore, praesentium temporibus deleniti voluptatibus
              perspiciatis animi repellat sapiente. Magni, et dolor!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SelectLocationForm
              handleShippingPrice={handleShippingPrice}
              handleSelectLocation={setSelectedLocation}
              errorMessage={dataSubmitErrorMessage}
              locations={locations}
            />
          </CardContent>
        </Card>

        {/* Cart Total */}
        <Card className='border-border'>
          <CardHeader>
            <CardTitle>Cart Total</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-2'>
              <div className='flex justify-between'>
                <span>Cart Subtotal</span>
                <span>{subtotal}</span>
              </div>
              <div className='flex justify-between'>
                <span>Shipping</span>
                <span>{shippingPrice}</span>
              </div>
              <div className='flex justify-between'>
                <span>Address</span>
                <span className='capitalize'>{selectedLocation || 'Select Location'}</span>
              </div>
              <div className='flex justify-between font-bold'>
                <span>Total</span>
                <span>{subtotal + shippingPrice}</span>
              </div>
            </div>
            <Button className='mt-4 w-full bg-green hover:bg-green-hover text-white font-medium' onClick={sentData}>
              Proceed to Checkout
            </Button>
            {dataSubmitErrorMessage && (
              <p className='mt-2 text-danger'>{dataSubmitErrorMessage}</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Cart
