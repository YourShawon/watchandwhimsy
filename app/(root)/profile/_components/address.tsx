import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { MapPin, Home } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'

type Address = {
  street: string
  city: string
  state: string
  zipCode: string
  country: string
  phone?: string
}

export default function AddressSection() {
  const [billingAddress, setBillingAddress] = useState<Address>({
    street: '3522 Interstate 75 Business Spur',
    city: 'Sault Ste. Marie',
    state: 'MI',
    zipCode: '49783',
    country: 'New York'
  })

  const [shippingAddress, setShippingAddress] = useState<Address>({
    street: '4299 Express Lane',
    city: 'Sarasota',
    state: 'FL',
    zipCode: '34249',
    country: 'USA',
    phone: '1.941.227.4444'
  })

  const [editingAddress, setEditingAddress] = useState<
    'billing' | 'shipping' | null
  >(null)

  const handleEditAddress = (type: 'billing' | 'shipping') => {
    setEditingAddress(type)
  }

  const handleSaveAddress = (
    type: 'billing' | 'shipping',
    newAddress: Address
  ) => {
    if (type === 'billing') {
      setBillingAddress(newAddress)
    } else {
      setShippingAddress(newAddress)
    }
    setEditingAddress(null)
  }

  const AddressCard = ({
    title,
    address,
    type
  }: {
    title: string
    address: Address
    type: 'billing' | 'shipping'
  }) => (
    <Card className='border-border'>
      <CardHeader>
        <CardTitle className='flex items-center'>
          {type === 'billing' ? (
            <Home className='mr-2 h-4 w-4' />
          ) : (
            <MapPin className='mr-2 h-4 w-4' />
          )}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{address.street}</p>
        <p>{address.city},</p>
        <p>
          {address.state} {address.zipCode} {address.country}
        </p>
        {address.phone && <p>Phone: {address.phone}</p>}
        <Button
          variant={'ghost'}
          className='mt-2 border border-border font-semibold'
          onClick={() => handleEditAddress(type)}
        >
          Edit
        </Button>
      </CardContent>
    </Card>
  )

  const AddressEditForm = ({
    address,
    type,
    onSave
  }: {
    address: Address
    type: 'billing' | 'shipping'
    onSave: (address: Address) => void
  }) => {
    const [editedAddress, setEditedAddress] = useState(address)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEditedAddress({ ...editedAddress, [e.target.name]: e.target.value })
    }

    return (
      <form
        onSubmit={e => {
          e.preventDefault()
          onSave(editedAddress)
        }}
        className='space-y-4'
      >
        <div>
          <Label htmlFor='street'>Street</Label>
          <Input
            id='street'
            name='street'
            value={editedAddress.street}
            onChange={handleChange}
            className='focus:border-cyan-600 focus-visible:ring-0 focus-visible:ring-offset-0'
          />
        </div>
        <div>
          <Label htmlFor='city'>City</Label>
          <Input
            id='city'
            name='city'
            value={editedAddress.city}
            onChange={handleChange}
            className='focus:border-cyan-600 focus-visible:ring-0 focus-visible:ring-offset-0'
          />
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <Label htmlFor='state'>State</Label>
            <Input
              id='state'
              name='state'
              value={editedAddress.state}
              onChange={handleChange}
              className='focus:border-cyan-600 focus-visible:ring-0 focus-visible:ring-offset-0'
            />
          </div>
          <div>
            <Label htmlFor='zipCode'>ZIP Code</Label>
            <Input
              id='zipCode'
              name='zipCode'
              value={editedAddress.zipCode}
              onChange={handleChange}
              className='focus:border-cyan-600 focus-visible:ring-0 focus-visible:ring-offset-0'
            />
          </div>
        </div>
        <div>
          <Label htmlFor='country'>Country</Label>
          <Input
            id='country'
            name='country'
            value={editedAddress.country}
            onChange={handleChange}
            className='focus:border-cyan-600 focus-visible:ring-0 focus-visible:ring-offset-0'
          />
        </div>
        {type === 'shipping' && (
          <div>
            <Label htmlFor='phone'>Phone</Label>
            <Input
              id='phone'
              name='phone'
              value={editedAddress.phone}
              onChange={handleChange}
              className='focus:border-cyan-600 focus-visible:ring-0 focus-visible:ring-offset-0'
            />
          </div>
        )}
        <Button className='bg-green hover:bg-green-hover text-white'  type='submit'>Save Address</Button>
      </form>
    )
  }

  return (
    <Card className='space-y-5 border-border'>
      <CardHeader>
        <CardTitle>Addresses</CardTitle>
        <CardDescription className='space-y-2 text-[#90908e]'>
          <span>
            {
              'From your account dashboard, you can easily check & view your recent orders, manage your shipping and billing addresses, and edit your password and account details.'
            }
          </span>
        </CardDescription>
      </CardHeader>

      <Separator className='m-0 h-[1px] w-full bg-border' />

      <CardContent className='grid gap-6 md:grid-cols-2'>
        <AddressCard
          title='Billing Address'
          address={billingAddress}
          type='billing'
        />
        <AddressCard
          title='Shipping Address'
          address={shippingAddress}
          type='shipping'
        />
      </CardContent>

      <Dialog
        open={editingAddress !== null}
        onOpenChange={() => setEditingAddress(null)}
      >
        <DialogContent className='w-72 rounded-md border-none sm:w-96 lg:w-[32rem]'>
          <DialogHeader>
            <DialogTitle>
              Edit {editingAddress === 'billing' ? 'Billing' : 'Shipping'}
              Address
            </DialogTitle>
          </DialogHeader>
          <ScrollArea className='max-h-[70vh] overflow-y-auto pr-4'>
            {editingAddress === 'billing' && (
              <AddressEditForm
                address={billingAddress}
                type='billing'
                onSave={newAddress => handleSaveAddress('billing', newAddress)}
              />
            )}
            {editingAddress === 'shipping' && (
              <AddressEditForm
                address={shippingAddress}
                type='shipping'
                onSave={newAddress => handleSaveAddress('shipping', newAddress)}
              />
            )}
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </Card>
  )
}
