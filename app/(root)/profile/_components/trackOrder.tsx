import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { TrackingResult } from '@/types/profile'
import { format } from 'date-fns'
import { Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, FormEvent } from 'react'

// Define types for the product and tracking result

function TrackOrder() {
  const [trackingId, setTrackingId] = useState<string>('') // trackingId is a string
  const [trackingResult, setTrackingResult] = useState<TrackingResult | null>(
    null
  ) // trackingResult can be null or a TrackingResult object

  const handleTrackOrder = () => {
    if (trackingId) {
      // Simulated order tracking result
      const mockResult: TrackingResult = {
        orderId: trackingId,
        status: 'Shipped',
        orderDate: new Date().toLocaleString(),
        products: [
          {
            id: 'P001',
            name: 'Wireless Headphones',
            photo:
              'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MCA4MCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIj4KICA8cmVjdCB3aWR0aD0iODAiIGhlaWdodD0iODAiIGZpbGw9IiNjY2NjY2MiPjwvcmVjdD4KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIxNnB4IiBmaWxsPSIjMzMzMzMzIj4jMTI1NDwvdGV4dD4gICAKPC9zdmc+'
          },
          {
            id: 'P005',
            name: 'Wireless Headphones',
            photo:
              'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MCA4MCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIj4KICA8cmVjdCB3aWR0aD0iODAiIGhlaWdodD0iODAiIGZpbGw9IiNjY2NjY2MiPjwvcmVjdD4KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIxNnB4IiBmaWxsPSIjMzMzMzMzIj4jMTI1NDwvdGV4dD4gICAKPC9zdmc+'
          },
          {
            id: 'P002',
            name: 'Smartwatch',
            photo:
              'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MCA4MCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIj4KICA8cmVjdCB3aWR0aD0iODAiIGhlaWdodD0iODAiIGZpbGw9IiNjY2NjY2MiPjwvcmVjdD4KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIxNnB4IiBmaWxsPSIjMzMzMzMzIj4jMTIwNDwvdGV4dD4gICAKPC9zdmc+'
          }
        ]
      }
      setTrackingResult(mockResult)
    } else {
      setTrackingResult(null)
    }
  }

  return (
    <Card className='space-y-5'>
      <CardHeader>
        <CardTitle>Order Tracking</CardTitle>
        <CardDescription>Track the status of your order</CardDescription>
      </CardHeader>

      <Separator className='m-0 h-[1px] w-full' />

      <CardContent>
        <form
          onSubmit={(e: FormEvent) => {
            e.preventDefault()
            handleTrackOrder()
          }}
          className='flex space-x-2'
        >
          <Input
            placeholder='Enter Order ID'
            value={trackingId}
            onChange={e => setTrackingId(e.target.value)}
            className='focus:border-cyan-600 focus-visible:ring-0 focus-visible:ring-offset-0'
          />
          <Button
            type='submit'
            variant="bgGreen" >
            <Search className='mr-2 h-4 w-4' /> Track Order
          </Button>
        </form>
        {trackingResult && (
          <div className='mt-6 space-y-4'>
            <div className='grid grid-cols-2 gap-4'>
              <div>
                <p className='font-semibold'>Order ID:</p>
                <p className='text-muted-foreground'>
                  {trackingResult.orderId}
                </p>
              </div>
              <div>
                <p className='font-semibold'>Order Date:</p>
                <p className='text-muted-foreground'>
                  {format(trackingResult.orderDate, 'dd-MMM-yyyy')}
                </p>
              </div>
              <div>
                <p className='font-semibold'>Status:</p>
                <p className='text-muted-foreground'>{trackingResult.status}</p>
              </div>
            </div>
            <div>
              <p className='mb-2 font-semibold'>Products:</p>
              <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                {trackingResult.products.map(product => (
                  <div key={product.id} className='flex items-center space-x-4'>
                    <Link href={`/product/${product.id}`}>
                      <Image
                        src={product.photo}
                        alt={product.name}
                        width={100}
                        height={100}
                        className='h-16 w-16 rounded object-cover'
                      />
                    </Link>
                    <div>
                      <p className='font-medium'>{product.name}</p>
                      <p className='text-sm text-muted-foreground'>
                        ID: {product.id}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default TrackOrder
