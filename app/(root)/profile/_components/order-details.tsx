'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  Package,
  Truck,
  CheckCircle,
  CreditCard,
  Clock,
  XCircle
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'

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
    date: '2023-06-01',
    status: 'shipped',
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
      cardNumber: '**** **** **** 1234',
      expirationDate: '12/2025'
    },
    items: [
      { product: 'Wireless Headphones', price: 79.99, quantity: 1 },
      { product: 'Phone Case', price: 19.99, quantity: 1 },
      { product: 'Screen Protector', price: 15.0, quantity: 2 }
    ]
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className='mr-1 h-4 w-4' />
      case 'processing':
        return <Package className='mr-1 h-4 w-4' />
      case 'shipped':
        return <Truck className='mr-1 h-4 w-4' />
      case 'delivered':
        return <CheckCircle className='mr-1 h-4 w-4' />
      case 'success':
        return <CheckCircle className='mr-1 h-4 w-4' />
      case 'failed':
        return <XCircle className='mr-1 h-4 w-4' />
      default:
        return null
    }
  }

  return (
    <DialogContent className='sm:max-w-[725px]'>
      <DialogHeader>
        <DialogTitle>Order Details #{orderDetails.id}</DialogTitle>
      </DialogHeader>
      <ScrollArea className='max-h-[80vh] overflow-y-auto pr-6'>
        <div className='grid gap-4'>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
            <div className='rounded-lg border p-4'>
              <h3 className='mb-2 font-semibold'>Order Summary</h3>
              <p className='mb-2 text-sm text-gray-500'>
                Overview of your order
              </p>
              <div className='space-y-1'>
                <div className='flex justify-between'>
                  <span className='text-sm font-medium'>Order Date:</span>
                  <span className='text-sm'>{orderDetails.date}</span>
                </div>

                <div className='flex items-center justify-between'>
                  <span className='text-sm font-medium'>Status:</span>
                  <span className='inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800'>
                    {getStatusIcon(orderDetails.status)}
                    {orderDetails.status}
                  </span>
                </div>

                <div className='flex justify-between'>
                  <span className='text-sm font-medium'>Total:</span>
                  <span className='text-sm'>${orderDetails.total}</span>
                </div>
              </div>
            </div>
            <div className='rounded-lg border p-4'>
              <h3 className='mb-2 font-semibold'>Shipping Information</h3>
              <p className='mb-2 text-sm text-gray-500'>
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
            <p className='mb-2 text-sm text-gray-500'>
              Details of items in your order
            </p>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead className='text-right'>Price</TableHead>
                  <TableHead className='text-right'>Quantity</TableHead>
                  <TableHead className='text-right'>Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orderDetails.items.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.product}</TableCell>
                    <TableCell className='text-right'>${item.price}</TableCell>
                    <TableCell className='text-right'>
                      {item.quantity}
                    </TableCell>
                    <TableCell className='text-right'>
                      ${item.price * item.quantity}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className='rounded-lg border p-4'>
            <h3 className='mb-2 font-semibold'>Payment Information</h3>
            <p className='mb-2 text-sm text-gray-500'>Payment method used</p>
            <div className='space-y-1'>
              <div className='flex items-center'>
                <CreditCard className='mr-2 h-4 w-4' />
                <span className='text-sm font-medium'>
                  {orderDetails.paymentInfo.method}
                </span>
              </div>
              <p className='text-sm'>{orderDetails.paymentInfo.cardNumber}</p>
              <p className='text-sm'>
                Expires: {orderDetails.paymentInfo.expirationDate}
              </p>
            </div>
          </div>
        </div>
      </ScrollArea>
    </DialogContent>
  )
}
