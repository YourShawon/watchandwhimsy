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
import CartItem from './cartItem'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

const data = [
  {
    productId: idGenerator(6),
    title: 'This is Samsung new Watch.',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem",
    image: image,
    quantity: 1,
    price: 100
  },
  {
    productId: idGenerator(6),
    title: 'This is Samsung new Watch.',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem",
    image: image,
    quantity: 1,
    price: 100
  }
]

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
  const [cartData, setCartData] = useState([...data])
  const [shippingPrice, setShippingPrice] = useState(0)
  const [selectedLocation, setSelectedLocation] = useState('')
  const [selectErrorMessage, setSelectErrorMessage] = useState('')
  const [dataSubmitErrorMessage, setDataSubmitErrorMessage] = useState('')

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

    console.log(selected)
  }

  const handleQuantity = (id, quantity) => {
    setCartData(prevData =>
      prevData.map(item => (item.id === id ? { ...item, quantity } : item))
    )
  }

  const subtotal = cartData.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  const sentData = () => {
    if (!shippingPrice) {
      setDataSubmitErrorMessage('Please update your location.')
      console.log('Error: Please update your location.')
      return
    }

    setDataSubmitErrorMessage('')

    const data = cartData.map(item => {
      return { productId: item.productId, quantity: item.quantity, shipping: shippingPrice }
    })

    console.log('sent data to database: ', data)
  }

  return (
    <div>
      {data.map(item => (
        <CartItem key={item.productId} item={item} onQuantity={handleQuantity} />
      ))}

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
  )
}

export default CartMobileView
