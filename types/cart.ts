export type CartItem = {
  productId: string
  price: number
  quantity: number
  title: string
  description: string
  media: {
    url: string
    alt: string
  }[]
  total: number
  name: string
  department: string
}

export type Location = {
  name: string
  cost: number
}

export type UseCartReturnType = {
  data: CartItem[]
  subtotal: number
  shippingPrice: number
  dataSubmitErrorMessage: string
  selectedLocation: string
  setSelectedLocation: (value: string) => void
  handleShippingPrice: (value: string) => void
  sentData: () => void
}

