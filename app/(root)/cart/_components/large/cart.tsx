'use client'

import { useEffect, useState } from 'react'
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
import useCart from '@/hooks/cart/useCart'
import CartItem from './cartItem'
import { Separator } from '@radix-ui/react-separator'

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

const CartView: React.FC = () => {
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
        <span>404 Product not found</span>
      </div>
    )
  }

  return (
    <div className='container py-10'>
      <ul className='flex items-center border-y border-[#E8F6EA] py-2 text-center'>
        <li className='w-[20%]'>Image</li>
        <li className='w-[40%]'>Name</li>
        <li className='w-[10%]'>Price</li>
        <li className='w-[10%]'>Quantity</li>
        <li className='w-[10%]'>Total</li>
        <li className='w-[10%]'>Remove</li>
      </ul>

      <div className='flex flex-col'>
        {carts.map((item: CartItemType) => (
          <CartItem item={item} key={item.productId} />
        ))}
        <Button
          onClick={() => {
            window.history.back()
          }}
          className='ml-auto mt-10 rounded bg-[#088178] text-base font-medium text-white hover:bg-[#088178] hover:text-white'
        >
          Continue Shopping
        </Button>
      </div>

      <Separator className='my-10 h-1 w-full bg-[#E8F6EA]' />

      {/* Calculate shipping Price */}
      <div className='xl:flex'>
        <div className='xl:w-1/2'>
          <h2 className='mb-4 text-2xl'>Calculate Shipping</h2>
          <form onSubmit={e => handleSubmit(e)}>
            <Select onValueChange={setSelectedLocation}>
              <SelectTrigger className='w-52 rounded border-[#E8F6EA]'>
                <SelectValue placeholder='Select a Location' />
              </SelectTrigger>
              <SelectContent className='h-80 rounded border-[#E8F6EA] bg-[#f5fff6] text-[#222]'>
                <SelectGroup>
                  <SelectLabel className='bg-[#E8F6EA]'>Dhaka</SelectLabel>
                  {locations
                    .filter(item => item.department === 'dhaka')
                    .map((item, index) => (
                      <SelectItem key={index} value={item.name}>
                        {item.name}
                      </SelectItem>
                    ))}
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel className='bg-[#E8F6EA]'>Rajshahi</SelectLabel>
                  {locations
                    .filter(item => item.department === 'rajshahi')
                    .map((item, index) => (
                      <SelectItem key={index} value={item.name}>
                        {item.name}
                      </SelectItem>
                    ))}
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel className='bg-[#E8F6EA]'>Rangpur</SelectLabel>
                  {locations
                    .filter(item => item.department === 'rangpur')
                    .map((item, index) => (
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
              className='mt-4 rounded bg-[#088178] px-12 text-base font-medium text-white hover:bg-[#088178] hover:text-white'
            >
              Update
            </Button>
          </form>
        </div>

        {/* cart details */}
        <div className='mt-10 xl:w-1/2'>
          <Card className='flex flex-col gap-4 rounded border-[#E8F6EA] p-3'>
            <CardHeader>
              <CardTitle className='font-medium'>Cart Total</CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col'>
              <div className='flex items-center'>
                <span className='w-1/2 rounded border border-[#E8F6EA] p-2 text-center text-[#222]'>
                  Cart Subtotal
                </span>
                <span className='w-1/2 rounded border border-[#E8F6EA] p-2 text-center font-semibold text-[#088178]'>{`$${subtotal || 0}.00`}</span>
              </div>
              <div className='flex items-center'>
                <span className='w-1/2 rounded border border-[#E8F6EA] p-2 text-center text-[#222]'>
                  Shipping
                </span>
                <span className='w-1/2 rounded border border-[#E8F6EA] p-2 text-center text-[#222]'>
                  {shippingPrice ? `$${shippingPrice}.00` : 'No Select'}
                </span>
              </div>
              <div className='flex items-center'>
                <span className='w-1/2 rounded border border-[#E8F6EA] p-2 text-center text-[#222]'>
                  Total
                </span>
                <span className='w-1/2 rounded border border-[#E8F6EA] p-2 text-center font-semibold text-[#088178]'>{`$${shippingPrice ? shippingPrice + (subtotal || 0) : subtotal || 0}.00`}</span>
              </div>
            </CardContent>
            <CardFooter className='flex flex-col gap-3'>
              {dataSubmitErrorMessage && (
                <p className='mt-2 text-red-500'>{dataSubmitErrorMessage}</p>
              )}
              <Button
                className='w-full rounded bg-[#088178] text-base font-medium text-[#fff] hover:bg-[#088178] hover:text-[#fff]'
                onClick={sentData}
              >
                Proceed to Checkout
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default CartView
