'use client'

import { locations as allLocation } from '@/lib/utils'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { useStoreState } from 'easy-peasy'

import MobileCartItem from './mobileCartItem'
import { Separator } from '@/components/ui/separator'
import useCart from '@/hooks/cart/useCart'
import { useEffect, useState } from 'react'

// Define types for cart item and location
type CartItemType = {
  productId: string
  name: string
  price: number
  quantity: number
  total: number
  image: string
}

type LocationType = {
  name: string
  department: string
}

const CartMobileView: React.FC = () => {
  const [locations, setLocations] = useState<LocationType[]>([])
  const [carts, setCarts] = useState<CartItemType[]>([]) // Initialize as empty array

  const cartItems: CartItemType[] = useStoreState(
    (states: { addToCarts: { items: CartItemType[] } }) =>
      states.addToCarts.items
  )

  const {
    data,
    subtotal,
    shippingPrice,
    selectErrorMessage,
    dataSubmitErrorMessage,
    setSelectedLocation,
    handleSubmit,
    sentData
  } = useCart(cartItems, locations)

  useEffect(() => {
    setCarts(data || []) // Ensure data is an array
  }, [data])

  useEffect(() => {
    setLocations(allLocation)
  }, [])

  if (carts.length <= 0) {
    return (
      <div className='flex items-center justify-center border-2 border-[#E8F6EA] p-10'>
        <h2>404 Product not found</h2>
      </div>
    )
  }

  return (
    <div className='flex flex-col gap-10 p-2'>
      <Separator className='mb-2 w-full border-t border-[#90908e50]' />
      <div className='flex flex-col gap-4'>
        {carts.map((item: CartItemType) => (
          <MobileCartItem key={item.productId} item={item} />
        ))}
        <Button
          onClick={() => {
            window.history.back()
          }}
          className='ml-auto mt-2 rounded bg-[#088178] text-base font-medium text-white hover:bg-[#088178] hover:text-white'
        >
          Continue Shopping
        </Button>
      </div>

      <Separator className='h-0.5 w-full bg-[#E8F6EA]' />

      <div>
        <h2 className='mb-4 text-2xl'>Calculate Shipping</h2>
        <form onSubmit={e => handleSubmit(e)}>
          <Select onValueChange={setSelectedLocation}>
            {' '}
            {/* No need for value || '' */}
            <SelectTrigger className='w-40 rounded border-[#E8F6EA]'>
              <SelectValue placeholder='Select a District' />
            </SelectTrigger>
            <SelectContent className='h-80 rounded border-[#E8F6EA] bg-[#f5fff6] text-[#222]'>
              <SelectGroup>
                <SelectLabel className='bg-[#E8F6EA]'>Dhaka</SelectLabel>
                {locations
                  .filter((item: any) => item.department === 'dhaka')
                  .map((item: any, index: number) => (
                    <SelectItem key={index} value={item.name}>
                      {item.name}
                    </SelectItem>
                  ))}
              </SelectGroup>
              <SelectGroup>
                <SelectLabel className='bg-[#E8F6EA]'>Rajshahi</SelectLabel>
                {locations
                  .filter((item: any) => item.department === 'rajshahi')
                  .map((item: any, index: number) => (
                    <SelectItem key={index} value={item.name}>
                      {item.name}
                    </SelectItem>
                  ))}
              </SelectGroup>
              <SelectGroup>
                <SelectLabel className='bg-[#E8F6EA]'>Rangpur</SelectLabel>
                {locations
                  .filter((item: any) => item.department === 'rangpur')
                  .map((item: any, index: number) => (
                    <SelectItem key={index} value={item.name}>
                      {item.name}
                    </SelectItem>
                  ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          {selectErrorMessage && (
            <p className='mt-2 text-red-500'>{selectErrorMessage}</p>
          )}

          <Button
            type='submit'
            className='mt-4 rounded bg-[#088178] px-6 text-base font-medium text-white hover:bg-[#088178] hover:text-white'
          >
            Update
          </Button>
        </form>
      </div>

      <Card className='flex flex-col gap-4 rounded border-[#E8F6EA] p-6'>
        <CardHeader>
          <CardTitle className='font-medium'>Cart Total</CardTitle>
        </CardHeader>
        <CardContent className='flex flex-col'>
          <span className='rounded border border-[#E8F6EA] p-2 text-center text-[#222]'>
            Cart Subtotal
          </span>
          <span className='rounded border border-[#E8F6EA] p-2 text-center text-lg font-semibold text-[#088178]'>{`$${subtotal ?? 0}.00`}</span>
          <span className='rounded border border-[#E8F6EA] p-2 text-center text-[#222]'>
            Shipping
          </span>
          <span className='rounded border border-[#E8F6EA] p-2 text-center text-[#222]'>
            {shippingPrice ? `$${shippingPrice}.00` : 'No Select'}
          </span>
          <span className='rounded border border-[#E8F6EA] p-2 text-center text-[#222]'>
            Total
          </span>
          <span className='rounded border border-[#E8F6EA] p-2 text-center text-lg font-semibold text-[#088178]'>{`$${shippingPrice ? shippingPrice + (subtotal ?? 0) : (subtotal ?? 0)}.00`}</span>
        </CardContent>
        <CardFooter className='flex flex-col gap-3'>
          {dataSubmitErrorMessage && (
            <p className='mt-2 text-red-500'>{dataSubmitErrorMessage}</p>
          )}
          <Button
            className='w-full rounded bg-[#088178] text-base font-medium text-white hover:bg-[#088178] hover:text-white'
            onClick={sentData}
          >
            Proceed to Checkout
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default CartMobileView
