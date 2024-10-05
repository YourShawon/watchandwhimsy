export type Address = {
  street: string
  city: string
  state: string
  postcode: string
  country: string
  phone?: string
}

export type OrderItem = {
  product: string
  price: number
  quantity: number
}

export type OrderDetails = {
  id: string
  date: string
  status:
    | 'pending'
    | 'processing'
    | 'success'
    | 'failed'
    | 'shipped'
    | 'delivered'
  total: number
  shippingInfo: {
    name: string
    address: string
    city: string
    state: string
    zip: string
    country: string
  }
  paymentInfo: {
    method: string
    cardNumber: string
    expirationDate: string
  }
  items: OrderItem[]
}

export type Order = {
  orderId: string
  date: string
  status:
    | 'pending'
    | 'processing'
    | 'success'
    | 'failed'
    | 'shipped'
    | 'delivered'
  quantity: string
  amount: number
}

export type Product = {
  id: string
  name: string
  photo: string
}

export type TrackingResult = {
  orderId: string
  status: string
  orderDate: string
  products: Product[]
}
