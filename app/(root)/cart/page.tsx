'use client'

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
import Image from 'next/image'
import { useState } from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription
} from '@/components/ui/card'

import { locations as allLocation } from '@/constants/locations'
import SelectLocationForm from './_components/selectLocations'
import ReuseAlertDialog from '@/components/shared/alertDialog'
import { formatAmount } from '@/lib/utils'
import DynamicBreadcrumb from '@/components/shared/dynamic-breadcrumb'
import { Location, Product } from '@/interface/cart'

function Cart() {
  const [locations, setLocations] = useState<Location[]>([])
  const [carts, setCarts] = useState<Product[]>([]) // Define as array of Product

  if (carts.length === 0) {
    return (
      <>
        <div className='bg-white-2x'>
          <DynamicBreadcrumb />
        </div>
        <div className='mx-auto p-4 sm:container'>
          <h1 className='mb-4 text-2xl font-bold text-black-solid'>Wishlist</h1>

          <Card className='mb-4 text-center'>
            <CardHeader>
              <CardTitle>Your wishlist is empty</CardTitle>
            </CardHeader>
            <CardContent>
              <p>You have no items in your wishlist</p>
            </CardContent>
          </Card>
        </div>
      </>
    )
  }

  return (
    <>
      <div className='bg-white-2x'>
        <DynamicBreadcrumb />
      </div>
      <div className='mx-auto p-4 sm:container'>
        <h1 className='mb-6 text-xl font-bold text-black-solid md:text-2xl'>
          Shopping Cart
        </h1>

        {/* Table for larger screens */}
        <div className='mb-8 hidden md:block'>
          <Table>
            <TableHeader>
              <TableRow>
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
                <TableRow key={product.productId}>
                  <TableCell>
                    <Image
                      src={product.media[0].url}
                      alt={product.media[0].alt}
                      width={120}
                      height={120}
                      className='rounded-md'
                    />
                  </TableCell>
                  <TableCell>
                    <div className='mb-1 text-base font-semibold'>
                      {product.title}
                    </div>
                    <div className='text-sm text-muted-foreground'>
                      {product.description}
                    </div>
                  </TableCell>
                  <TableCell>{formatAmount(product.price)}</TableCell>
                  <TableCell>
                    <div className='flex h-20 w-10 flex-col items-center justify-between overflow-hidden border'>
                      <Button
                        className='text-green-0x transition-all duration-300 sm:hover:bg-white-1x'
                        onClick={() => console.log("Increase Product")}
                        disabled={product.quantity >= 10}
                      >
                        <Plus className='h-3 w-3' />
                      </Button>
                      <h2>{product.quantity}</h2>
                      <Button
                        className='text-green-0x transition-all duration-300 sm:hover:bg-white-1x'
                        onClick={() => console.log("Decrease products")}
                        disabled={product.quantity <= 1}
                      >
                        <Minus className='h-3 w-3' />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>
                    {formatAmount(product.price * product.quantity)}
                  </TableCell>
                  <TableCell>
                    <ReuseAlertDialog
                      
                    >
                      <Button
                        className='border bg-transparent text-green-0x transition-all duration-300 sm:hover:bg-white-1x'
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
        <div className='mb-8 space-y-4 md:hidden'>
          {carts.map(product => (
            <Card key={product.productId}>
              <CardContent className='p-4'>
                <div className='flex items-center space-x-4'>
                  <Image
                    src={product.media[0].url}
                    alt={product.media[0].alt}
                    width={120}
                    height={120}
                    className='rounded-md'
                  />
                  <div className='flex-1'>
                    <h3 className='mb-1 font-medium'>{product.title}</h3>
                    <p className='line-clamp-2 text-sm text-muted-foreground'>
                      {product.description}
                    </p>
                  </div>
                </div>
                <div className='mt-4 flex items-center justify-between'>
                  <span className='font-medium'>
                    Price: {formatAmount(product.price)}
                  </span>

                  <div className='flex h-10 w-24 items-center justify-between overflow-hidden border'>
                    <Button
                      className='border-r p-2 text-green-0x'
                      onClick={() => console.log("decrease quantity")}
                      disabled={product.quantity <= 1}
                    >
                      <Minus className='h-3 w-3' />
                    </Button>
                    <h2>{product.quantity}</h2>
                    <Button
                      className='border-l p-2 text-green-0x transition-all duration-300'
                      onClick={() => console.log("increase quantity")}
                      disabled={product.quantity >= 10}
                    >
                      <Plus className='h-3 w-3' />
                    </Button>
                  </div>
                </div>

                <div className='mt-4 flex items-center justify-between'>
                  <span className='font-medium'>
                    Total: {formatAmount(product.price * product.quantity)}
                  </span>
                  <ReuseAlertDialog
                    
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

        {/* Shipping and Total */}
        <div className='grid gap-8 md:grid-cols-2'>
          {/* Calculate Shipping */}
          <Card>
            <CardHeader>
              <CardTitle className='text-xl'>Select Shipping Address</CardTitle>
              <CardDescription className='text-muted-foreground'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* <SelectLocationForm
                handleShippingPrice={handleShippingPrice}
                handleSelectLocation={setSelectedLocation}
                errorMessage={dataSubmitErrorMessage}
                locations={locations}
              /> */}
            </CardContent>
          </Card>

          {/* Cart Total */}
          <Card>
            <CardHeader>
              <CardTitle className='text-xl'>Cart Total</CardTitle>
              <CardDescription className='text-muted-foreground'>
                Lorem ipsum dolor sit amet consectetur.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='space-y-2'>
                <div className='flex justify-between'>
                  <span>Cart Subtotal</span>
                  <span>{`$ 100`}</span>
                </div>
                <div className='flex justify-between'>
                  <span>Shipping</span>
                  <span>{`$ 100`}</span>
                </div>
                <div className='flex justify-between'>
                  <span>Address</span>
                  <span className='capitalize'>
                    { 'Select Location'}
                  </span>
                </div>
                <div className='flex justify-between font-bold'>
                  <span>Total</span>
                  <span>{`$ 100`}</span>
                </div>
              </div>
              <Button
                className='mt-4 w-full'
                variant={'bgGreen'}
                onClick={() => console.log("proceed to checkout")}
              >
                Proceed to Checkout
              </Button>
              {/* {dataSubmitErrorMessage && (
                <p className='mt-2 text-red-500'>{dataSubmitErrorMessage}</p>
              )} */}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Cart
