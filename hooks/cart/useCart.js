import { useState, useEffect } from 'react'

const useCart = (getCarts, locations) => {
  const [data, setData] = useState(getCarts)
  const [subtotal, setSubtotal] = useState(0)
  const [shippingPrice, setShippingPrice] = useState(0)
  const [selectedLocation, setSelectedLocation] = useState('')
  const [dataSubmitErrorMessage, setDataSubmitErrorMessage] = useState('')

  useEffect(() => {
    setData(getCarts)
  }, [getCarts])

  useEffect(() => {
    setSubtotal(data.reduce((acc, curr) => acc + curr.price * curr.quantity, 0))
  }, [data])

  const handleShippingPrice = value => {
    const selected = locations.find(item => item.name === value)
    setShippingPrice(selected.cost)
  }

  const sentData = () => {
    if (!shippingPrice) {
      setDataSubmitErrorMessage('Please select shipping address!.')
      return
    }
    if (!subtotal) {
      setDataSubmitErrorMessage('Minimum on product purchase.!')
      return
    }
    setDataSubmitErrorMessage('')

    const proceedOrder = data.map(product => ({
      productId: product.productId,
      quantity: product.quantity
    }))
    proceedOrder.push(shippingPrice)

    console.log('sent data to database: ', proceedOrder)
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
