import {
  Package,
  Truck,
  CheckCircle,
  CreditCard,
  Clock,
  XCircle
} from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import {
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { formatAmount } from '@/lib/utils'
import { format } from 'date-fns'

type OrderItem = {
  product: string
  price: number
  quantity: number
}

type OrderDetails = {
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

export default function OrderDetails() {
  const orderDetails: OrderDetails = {
    id: '12345',
    date: new Date().toLocaleString(),
    status: 'success',
    total: 129.99,
    shippingInfo: {
      name: 'John Doe',
      address: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '12345',
      country: 'USA'
    },
    paymentInfo: {
      method: 'Credit Card',
      cardNumber: '1234 **** **** 1234',
      expirationDate: '12-2025'
    },
    items: [
      { product: 'Wireless Headphones', price: 79.99, quantity: 1 },
      { product: 'Phone Case', price: 19.99, quantity: 1 },
      { product: 'Screen Protector', price: 156.99, quantity: 2 }
    ]
  }

  const statusOptions = {
    pending: {
      label: 'pending',
      bgColor: 'bg-yellow-100',
      textColor: 'text-yellow-800',
      hoverColor: 'sm:hover:bg-yellow-200',
      icon: Clock
    },
    processing: {
      label: 'processing',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-800',
      hoverColor: 'sm:hover:bg-blue-200',
      icon: Package
    },
    shipped: {
      label: 'shipped',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-800',
      hoverColor: 'sm:hover:bg-purple-200',
      icon: Truck
    },
    delivered: {
      label: 'delivered',
      bgColor: 'bg-teal-100',
      textColor: 'text-teal-800',
      hoverColor: 'sm:hover:bg-teal-200',
      icon: CheckCircle
    },
    success: {
      label: 'success',
      bgColor: 'bg-green-100',
      textColor: 'text-green-800',
      hoverColor: 'sm:hover:bg-green-200',
      icon: CheckCircle
    },
    failed: {
      label: 'failed',
      bgColor: 'bg-red-100',
      textColor: 'text-red-800',
      hoverColor: 'sm:hover:bg-red-200',
      icon: XCircle
    }
  }

  const getStatusIcon = (status: string) => {
    const option = statusOptions[status as keyof typeof statusOptions]

    if (!option) return null

    const { label, bgColor, textColor, hoverColor, icon: Icon } = option

    return (
      <span
        className={`inline-flex items-center rounded-full transition-all duration-500 ${bgColor} px-2.5 py-0.5 text-sm font-medium ${textColor} ${hoverColor}`}
      >
        <Icon className='mr-2 h-4 w-4' />
        {label}
      </span>
    )
  }

  return (
    <DialogContent className='w-[95%] rounded-md border-none bg-white px-2 sm:max-w-[725px] sm:p-6'>
      <DialogHeader>
        <DialogTitle>Order Details #{orderDetails.id}</DialogTitle>
      </DialogHeader>

      <ScrollArea className='max-h-[70vh] overflow-auto pr-4 sm:max-h-[80vh] sm:pr-6'>
        <div className='grid gap-4'>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
            <div className='rounded-lg border p-4'>
              <h3 className='mb-2 font-semibold'>Order Summary</h3>
              <p className='mb-2 text-sm text-muted-foreground'>
                Overview of your order
              </p>
              <div className='space-y-1'>
                <div className='flex justify-between'>
                  <span className='text-sm font-medium'>Order Date:</span>
                  <span className='text-sm'>
                    {format(orderDetails.date, 'dd-MMM-yyyy')}
                  </span>
                </div>

                <div className='flex items-center justify-between'>
                  <span className='text-sm font-medium'>Status:</span>
                  {getStatusIcon(orderDetails.status)}
                </div>

                <div className='flex justify-between'>
                  <span className='text-sm font-medium'>Total:</span>
                  <span className='text-sm'>
                    {formatAmount(orderDetails.total)}
                  </span>
                </div>
              </div>
            </div>
            <div className='rounded-lg border p-4'>
              <h3 className='mb-2 font-semibold'>Shipping Information</h3>
              <p className='mb-2 text-sm text-muted-foreground'>
                Delivery address for your order
              </p>
              <div className='space-y-1 text-sm'>
                <p>{orderDetails.shippingInfo.name}</p>
                <p>{orderDetails.shippingInfo.address}</p>
                <p>
                  {orderDetails.shippingInfo.city},{' '}
                  {orderDetails.shippingInfo.state}{' '}
                  {orderDetails.shippingInfo.zip}
                </p>
                <p>{orderDetails.shippingInfo.country}</p>
              </div>
            </div>
          </div>

          <div className='rounded-lg border p-4'>
            <h3 className='mb-2 font-semibold'>Order Items</h3>
            <p className='mb-2 text-sm text-muted-foreground'>
              Details of items in your order
            </p>
            <Table>
              <TableHeader>
                <TableRow className='text-muted-foreground'>
                  <TableHead>Product</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orderDetails.items.map((item, index) => (
                  <TableRow key={index} className=''>
                    <TableCell>{item.product}</TableCell>
                    <TableCell>{formatAmount(item.price)}</TableCell>
                    <TableCell>{`${item.quantity} ${item.quantity > 1 ? 'Items' : 'Item'}`}</TableCell>
                    <TableCell>
                      {formatAmount(item.price * item.quantity)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className='rounded-lg border p-4'>
            <h3 className='mb-2 font-semibold'>Payment Information</h3>
            <p className='mb-2 text-sm text-muted-foreground'>
              Payment method used
            </p>
            <div className='space-y-1'>
              <div className='flex items-center'>
                <CreditCard className='mr-2 h-4 w-4' />
                <span className='text-sm font-medium'>
                  {orderDetails.paymentInfo.method}
                </span>
              </div>
              <p className='text-sm text-muted-foreground'>
                {orderDetails.paymentInfo.cardNumber}
              </p>
              <p className='text-sm'>
                Expires: {orderDetails.paymentInfo.expirationDate}
              </p>
            </div>
          </div>
        </div>
        <ScrollBar orientation='horizontal' className='h-2' />
      </ScrollArea>
    </DialogContent>
  )
}
