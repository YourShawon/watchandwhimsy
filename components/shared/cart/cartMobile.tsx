'use client'

import { useEffect, useState } from 'react'

import { idGenerator } from '@/lib/utils'
import image from '@/public/uploads/6.png'
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

const locations = [
  {
    department: 'dhaka',
    name: 'dhaka',
    cost: 50
  },
  {
    department: 'dhaka',
    name: 'faridpur',
    cost: 60
  },
  {
    department: 'dhaka',
    name: 'gazipur',
    cost: 100
  },
  {
    department: 'dhaka',
    name: 'gopalganj',
    cost: 40
  },
  {
    department: 'dhaka',
    name: 'kishoreganj',
    cost: 30
  },
  {
    department: 'dhaka',
    name: 'madaripur',
    cost: 70
  },
  {
    department: 'dhaka',
    name: 'munshiganj',
    cost: 50
  },
  {
    department: 'dhaka',
    name: 'narayanganj',
    cost: 50
  },
  {
    department: 'dhaka',
    name: 'rajbari',
    cost: 50
  },
  {
    department: 'dhaka',
    name: 'tangail',
    cost: 50
  },
  {
    department: 'dhaka',
    name: 'narayanganj',
    cost: 50
  },
  {
    department: 'dhaka',
    name: 'shariatpur',
    cost: 50
  },
  {
    department: 'rajshahi',
    name: 'rajshahi',
    cost: 120
  },
  {
    department: 'rajshahi',
    name: 'bogura',
    cost: 100
  },
  {
    department: 'rajshahi',
    name: 'joypurhat',
    cost: 100
  },
  {
    department: 'rajshahi',
    name: 'naogaon',
    cost: 150
  },
  {
    department: 'rajshahi',
    name: 'nator',
    cost: 50
  },
  {
    department: 'rajshahi',
    name: 'pabna',
    cost: 150
  },
  {
    department: 'rajshahi',
    name: 'sirajganj',
    cost: 50
  },
  {
    department: 'rangpur',
    name: 'rangpur',
    cost: 140
  },
  {
    department: 'rangpur',
    name: 'gaibandha',
    cost: 50
  },
  {
    department: 'rangpur',
    name: 'dinajpur',
    cost: 20
  },
  {
    department: 'rangpur',
    name: 'kurigram',
    cost: 50
  },
  {
    department: 'rangpur',
    name: 'lalomonirhat',
    cost: 60
  },
  {
    department: 'rangpur',
    name: 'thakurgaon',
    cost: 50
  },
  {
    department: 'rangpur',
    name: 'nilphamari',
    cost: 80
  },
  {
    department: 'rangpur',
    name: 'panchagarh',
    cost: 550
  }
]

function CartMobileView() {
  const getCarts = useStoreState(states => states.addToCarts).items
  
  const [data, setData] = useState([...getCarts])

  const [subtotal, setSubtotal] = useState(0)

  const [shippingPrice, setShippingPrice] = useState(0)
  const [selectedLocation, setSelectedLocation] = useState('')

  const [selectErrorMessage, setSelectErrorMessage] = useState('')
  const [dataSubmitErrorMessage, setDataSubmitErrorMessage] = useState('')

  useEffect(() => {
    setData(getCarts)
  }, [getCarts])

  const handleSubmit = e => {
    e.preventDefault()

    if (!selectedLocation) {
      setSelectErrorMessage('Please select a location.')
      console.log('Error: Please select a location.')
      return
    }

    setSelectErrorMessage('')

    const selected = locations.find(item => item.name === selectedLocation)

    setShippingPrice(selected.cost)

    console.log('Selected location: ', selected)
  }

  const handleQuantity = (productId, quantity) => {
    setData(prev =>
      prev.map(item =>
        item.productId === productId ? { ...item, quantity } : item
      )
    )
  }

  const sentData = () => {
    if (!shippingPrice) {
      setDataSubmitErrorMessage('Please update your location.')
      console.log('Error: Please update your location.')
      return
    }

    setDataSubmitErrorMessage('')

    const proceedOrder = data.map(item => {
      return { productId: item.productId, quantity: item.quantity }
    })

    proceedOrder.push(shippingPrice)

    console.log('sent data to database: ', proceedOrder)
  }

  useEffect(() => {
    setSubtotal(
      data.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
    )

    console.log('data: ', data)
    console.log('subtotal: ', subtotal)
  }, [getCarts, data])

  return (
    <div>
      {data.length < 1 ? (
        <div>
          <h2>404 Product not found</h2>
        </div>
      ) : (
        <div className='p-2'>
          <Separator className='mb-2 w-full bg-[#90908e50]' />
          <div className='flex flex-col gap-4'>
            {data.map(item => (
              <MobileCartItem
                key={item.productId}
                item={item}
                onQuantity={handleQuantity}
              />
            ))}
          </div>

          <div>
            <form onSubmit={handleSubmit}>
              <Select onValueChange={setSelectedLocation}>
                <SelectTrigger className='w-[280px]'>
                  <SelectValue placeholder='Select a Deistic' />
                </SelectTrigger>
                <SelectContent className='bg-white text-black'>
                  <SelectGroup>
                    <SelectLabel>Dhaka</SelectLabel>
                    {locations
                      .filter(item => item.department === 'dhaka')
                      .map((item, index) => (
                        <SelectItem key={index} value={item.name}>
                          {item.name}
                        </SelectItem>
                      ))}
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Rajshahi</SelectLabel>
                    {locations
                      .filter(item => item.department === 'rajshahi')
                      .map((item, index) => (
                        <SelectItem key={index} value={item.name}>
                          {item.name}
                        </SelectItem>
                      ))}
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Rangpur</SelectLabel>
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

              <Button type='submit'>Update</Button>
            </form>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Cart Totals</CardTitle>
              </CardHeader>
              <CardContent className='flex flex-col'>
                <span>Cart Subtotal</span>
                <span>{`${subtotal}`}</span>
                <span>Shipping</span>
                <span>{shippingPrice || 'Free Shipping'}</span>
                <span>Total</span>
                <span>{`${shippingPrice ? shippingPrice + subtotal : subtotal}`}</span>
              </CardContent>
              <CardFooter>
                {dataSubmitErrorMessage && (
                  <p className='mt-2 text-red-500'>{dataSubmitErrorMessage}</p>
                )}
                <Button onClick={sentData}>Proceed to Checkout</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}
    </div>
  )
}

export default CartMobileView
