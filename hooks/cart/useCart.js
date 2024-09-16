import { useState, useEffect } from 'react'

const useCart = (getCarts, locations) => {
  const [data, setData] = useState(getCarts)
  const [subtotal, setSubtotal] = useState(0)
  const [shippingPrice, setShippingPrice] = useState(0)
  const [selectedLocation, setSelectedLocation] = useState('')
  const [selectErrorMessage, setSelectErrorMessage] = useState('')
  const [dataSubmitErrorMessage, setDataSubmitErrorMessage] = useState('')

  useEffect(() => {
    setData(getCarts)
  }, [getCarts])

  useEffect(() => {
    setSubtotal(data.reduce((acc, curr) => acc + curr.price * curr.quantity, 0))
  }, [data])

  const handleSubmit = e => {
    e.preventDefault()

    if (!selectedLocation) {
      setSelectErrorMessage('Please select a location.')
      return
    }
    setSelectErrorMessage('')

    const selected = locations.find(item => item.name === selectedLocation)
    setShippingPrice(selected.cost)
  }

  const sentData = () => {
    if (!shippingPrice) {
      setDataSubmitErrorMessage('Please update your location.')
      return
    }
    if (!subtotal) {
      setDataSubmitErrorMessage('Please minimum on product purchase.')
      return
    }
    setDataSubmitErrorMessage('')

    const proceedOrder = data.map(item => ({
      productId: item.productId,
      quantity: item.quantity
    }))
    proceedOrder.push(shippingPrice)

    console.log('sent data to database: ', proceedOrder)
  }

  return {
    data,
    subtotal,
    shippingPrice,
    selectErrorMessage,
    dataSubmitErrorMessage,
    setSelectedLocation,
    handleSubmit,
    sentData
  }
}

export default useCart
