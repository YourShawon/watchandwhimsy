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
import { Address } from '@/types/profile'

export default function AddressSection() {
  const [billingAddress, setBillingAddress] = useState<Address>({
    street: '3522 Interstate 75 Business Spur',
    city: 'Sault Ste. Marie',
    state: 'MI',
    postcode: '1219',
    country: 'New York'
  })

  const [shippingAddress, setShippingAddress] = useState<Address>({
    street: '4299 Express Lane',
    city: 'Sarasota',
    state: 'FL',
    postcode: '1212',
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
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center text-black-solid'>
          {type === 'billing' ? (
            <Home className='mr-2 h-4 w-4' />
          ) : (
            <MapPin className='mr-2 h-4 w-4' />
          )}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className='text-black-solid'>
        <p>{address.street}</p>
        <p>{address.city},</p>
        <p>
          {address.state} {address.postcode} {address.country}
        </p>
        {address.phone && <p>Phone: {address.phone}</p>}
        <Button
          className='mt-2 border font-semibold sm:hover:bg-white-2x'
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
          <Label htmlFor='street' className='text-muted-foreground'>
            Street Address
          </Label>
          <Input
            id='street'
            name='street'
            value={editedAddress.street}
            onChange={handleChange}
            className='focus:border-cyan-600 focus-visible:ring-0 focus-visible:ring-offset-0'
          />
        </div>
        <div>
          <Label htmlFor='city' className='text-muted-foreground'>
            City
          </Label>
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
            <Label htmlFor='state' className='text-muted-foreground'>
              State
            </Label>
            <Input
              id='state'
              name='state'
              value={editedAddress.state}
              onChange={handleChange}
              className='focus:border-cyan-600 focus-visible:ring-0 focus-visible:ring-offset-0'
            />
          </div>
          <div>
            <Label htmlFor='postcode' className='text-muted-foreground'>
              Postcode
            </Label>
            <Input
              id='postcode'
              name='postcode'
              value={editedAddress.postcode}
              onChange={handleChange}
              className='focus:border-cyan-600 focus-visible:ring-0 focus-visible:ring-offset-0'
            />
          </div>
        </div>
        <div>
          <Label htmlFor='country' className='text-muted-foreground'>
            Country
          </Label>
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
            <Label htmlFor='phone' className='text-muted-foreground'>
              Phone
            </Label>
            <Input
              id='phone'
              name='phone'
              value={editedAddress.phone}
              onChange={handleChange}
              className='focus:border-cyan-600 focus-visible:ring-0 focus-visible:ring-offset-0'
            />
          </div>
        )}
        <Button
          variant={"bgGreen"}
          type='submit'
        >
          Save Address
        </Button>
      </form>
    )
  }

  return (
    <Card className='space-y-5'>
      <CardHeader>
        <CardTitle className='text-black-solid'>Addresses</CardTitle>
        <CardDescription className='space-y-2 text-muted-foreground'>
          <span>
            {
              'From your account dashboard, you can easily check & view your recent orders, manage your shipping and billing addresses, and edit your password and account details.'
            }
          </span>
        </CardDescription>
      </CardHeader>

      <Separator className='m-0 h-[1px] w-full' />

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
        <DialogContent className='w-72 border-none bg-white sm:w-96 lg:w-[32rem]'>
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
