import { CartItem, Location, UseCartReturnType } from '@/types/cart'
import { useState, useEffect } from 'react'

const useCart = (
  cartItems: CartItem[],
  locations: Location[]
): UseCartReturnType => {
  const [data, setData] = useState<CartItem[]>(cartItems)
  const [subtotal, setSubtotal] = useState<number>(0)
  const [shippingPrice, setShippingPrice] = useState<number>(0)
  const [selectedLocation, setSelectedLocation] = useState<string>('')
  const [dataSubmitErrorMessage, setDataSubmitErrorMessage] =
    useState<string>('')

  useEffect(() => {
    setData(cartItems)
  }, [cartItems])

  useEffect(() => {
    setSubtotal(data.reduce((acc, curr) => acc + curr.price * curr.quantity, 0))
  }, [data])

  const handleShippingPrice = (value: string) => {
    const selected = locations.find(item => item.name === value)
    if (selected) {
      setShippingPrice(selected.cost)
    }
  }

  const sentData = () => {
    if (!shippingPrice) {
      setDataSubmitErrorMessage('Please select shipping address!.')
      return
    }
    if (!subtotal) {
      setDataSubmitErrorMessage('Minimum on product purchase!.')
      return
    }
    setDataSubmitErrorMessage('')

    const proceedOrder = data.map(product => ({
      productId: product.productId,
      quantity: product.quantity
    }))

    const orderPayload = {
      products: proceedOrder,
      shippingPrice
    }

    console.log('sent data to database: ', orderPayload)
  }

  return {
    data,
    subtotal,
    shippingPrice,
    dataSubmitErrorMessage,
    selectedLocation,
    setSelectedLocation,
    handleShippingPrice,
    sentData
  }
}

export default useCart
