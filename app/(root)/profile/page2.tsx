"use client"

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { User, Package, Truck, Key, MapPin, LogOut, Trash, Search } from 'lucide-react'
import { Checkbox } from "@/components/ui/checkbox"
import Image from 'next/image'

type Order = {
  id: string
  date: string
  status: string
  total: string
}

const orders: Order[] = [
  { id: '1234', date: '2023-06-01', status: 'Delivered', total: '$120.00' },
  { id: '1235', date: '2023-06-05', status: 'Shipped', total: '$85.50' },
  { id: '1236', date: '2023-06-10', status: 'Processing', total: '$220.00' },
]

export default function Component() {
  const [trackingId, setTrackingId] = useState('')
  const [trackingResult, setTrackingResult] = useState(null)
  
  const [activeTab, setActiveTab] = useState('dashboard')
  const [userData, setUserData] = useState({
    username: 'anamulhoque',
    email: 'anamulhoquewd@gmail.com',
    name: 'Anamul Hoque',
    phone: '+880 1975 024262'
  })

  const { control, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      sameAsBilling: false,
      shippingAddress: {
        street: '',
        city: '',
        state: '',
        zip: '',
        country: ''
      },
      billingAddress: {
        street: '',
        city: '',
        state: '',
        zip: '',
        country: ''
      }
    }
  })

  const sameAsBilling = watch('sameAsBilling')

  const onSubmit = (data: any) => {
    console.log(data)
    // Here you would typically send the data to your backend
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  const handleDeleteAccount = () => {
    console.log('Deleting account')
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <aside className="w-full md:w-64 bg-white p-6 border-r">
        <div className="flex items-center mb-6">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/placeholder.svg?height=50&width=50" alt={userData.name} />
            <AvatarFallback>{userData.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="ml-3">
            <h2 className="font-semibold">{userData.name}</h2>
            <p className="text-sm text-gray-500">@{userData.username}</p>
          </div>
        </div>
        <nav className="space-y-2">
          <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab('dashboard')}>
            <User className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab('orders')}>
            <Package className="mr-2 h-4 w-4" />
            Orders
          </Button>
          <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab('track-order')}>
            <Truck className="mr-2 h-4 w-4" />
            Track Order
          </Button>
          <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab('change-password')}>
            <Key className="mr-2 h-4 w-4" />
            Change Password
          </Button>
          <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab('address')}>
            <MapPin className="mr-2 h-4 w-4" />
            Address
          </Button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="ghost" className="w-full justify-start text-red-500">
                <LogOut className="mr-2 h-4 w-4" />
                Log Out
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure you want to log out?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action will end your current session.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Log Out</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        {activeTab === 'dashboard' && (
          <Card>
            <CardHeader>
              <CardTitle>My Account</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="profile" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="profile">Profile</TabsTrigger>
                  <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
                <TabsContent value="profile">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                        <Controller
                          name="username"
                          control={control}
                          defaultValue={userData.username}
                          render={({ field }) => <Input {...field} />}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <Controller
                          name="email"
                          control={control}
                          defaultValue={userData.email}
                          render={({ field }) => <Input {...field} type="email" />}
                        />
                      </div>
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <Controller
                          name="name"
                          control={control}
                          defaultValue={userData.name}
                          render={({ field }) => <Input {...field} />}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                        <Controller
                          name="phone"
                          control={control}
                          defaultValue={userData.phone}
                          render={({ field }) => <Input {...field} />}
                        />
                      </div>
                    </div>
                    <Button type="submit">Save changes</Button>
                  </form>
                </TabsContent>
                <TabsContent value="password">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                      <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">Current Password</label>
                      <Controller
                        name="currentPassword"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <Input {...field} type="password" />}
                      />
                    </div>
                    <div>
                      <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">New Password</label>
                      <Controller
                        name="newPassword"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <Input {...field} type="password" />}
                      />
                    </div>
                    <div>
                      <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                      <Controller
                        name="confirmPassword"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <Input {...field} type="password" />}
                      />
                    </div>
                    <Button type="submit">Change Password</Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        )}
        {activeTab === 'orders' && (
          <Card>
            <CardHeader>
              <CardTitle>My Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex items-center">
                    <Controller
                      name="searchOrder"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <div className="relative w-full">
                          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input {...field} placeholder="Search orders" className="pl-8" />
                        </div>
                      )}
                    />
                    <Button type="submit" className="ml-2">Search</Button>
                  </div>
                </form>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell>{order.id}</TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell>{order.status}</TableCell>
                      <TableCell>{order.total}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}
        {activeTab === 'track-order' && (
          <Card className="mt-6">
          <CardHeader>
            <CardTitle>Order Tracking</CardTitle>
            <CardDescription>Track the status of your order</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2">
              <Input
                placeholder="Enter Order ID"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
              />
              <Button onClick={handleTrackOrder}>
                <Search className="mr-2 h-4 w-4" /> Track Order
              </Button>
            </div>
            {trackingResult && (
              <div className="mt-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold">Order ID:</p>
                    <p>{trackingResult.orderId}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Order Date:</p>
                    <p>{trackingResult.orderDate}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Status:</p>
                    <p>{trackingResult.status}</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold mb-2">Products:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {trackingResult.products.map((product) => (
                      <div key={product.id} className="flex items-center space-x-4">
                        <Link href={`/product/${product.id}`}>
                          <Image
                            src={product.photo}
                            alt={product.name}
                            className="w-16 h-16 object-cover rounded"
                          />
                        </Link>
                        <div>
                          <p className="font-medium">{product.name}</p>
                          <p className="text-sm text-gray-500">ID: {product.id}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
        )}
        {activeTab === 'change-password' && (
          <Card>
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">Current Password</label>
                  <Controller
                    name="currentPassword"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <Input {...field} type="password" />}
                  />
                </div>
                <div>
                  <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">New Password</label>
                  <Controller
                    name="newPassword"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <Input {...field} type="password" />}
                  />
                </div>
                <div>
                  <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                  <Controller
                    name="confirmPassword"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <Input {...field} type="password" />}
                  />
                </div>
                <Button type="submit">Change Password</Button>
              </form>
            </CardContent>
          </Card>
        )}
        {activeTab === 'address' && (
          <Card>
            <CardHeader>
              <CardTitle>My Addresses</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">Shipping Address</h3>
                  <div className="mt-2 space-y-4">
                    <div>
                      <label htmlFor="shipping-street" className="block text-sm font-medium text-gray-700">Street Address</label>
                      <Controller
                        name="shippingAddress.street"
                        control={control}
                        render={({ field }) => <Input {...field} />}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="shipping-city" className="block text-sm font-medium text-gray-700">City</label>
                        <Controller
                          name="shippingAddress.city"
                          control={control}
                          render={({ field }) => <Input {...field} />}
                        />
                      </div>
                      <div>
                        <label htmlFor="shipping-state" className="block text-sm font-medium text-gray-700">State</label>
                        <Controller
                          name="shippingAddress.state"
                          control={control}
                          render={({ field }) => <Input {...field} />}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="shipping-zip" className="block text-sm font-medium text-gray-700">ZIP Code</label>
                        <Controller
                          name="shippingAddress.zip"
                          control={control}
                          render={({ field }) => <Input {...field} />}
                        />
                      </div>
                      <div>
                        <label htmlFor="shipping-country" className="block text-sm font-medium text-gray-700">Country</label>
                        <Controller
                          name="shippingAddress.country"
                          control={control}
                          render={({ field }) => <Input {...field} />}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Controller
                    name="sameAsBilling"
                    control={control}
                    render={({ field }) => (
                      <Checkbox
                        id="same-as-billing"
                        checked={field.value}
                        onCheckedChange={(checked) => {
                          field.onChange(checked)
                          if (checked) {
                            const shippingAddress = watch('shippingAddress')
                            Object.keys(shippingAddress).forEach(key => {
                              setValue(`billingAddress.${key}`, shippingAddress[key])
                            })
                          }
                        }}
                      />
                    )}
                  />
                  <label
                    htmlFor="same-as-billing"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Billing address same as shipping
                  </label>
                </div>
                {!sameAsBilling && (
                  <div>
                    <h3 className="text-lg font-medium">Billing Address</h3>
                    <div className="mt-2 space-y-4">
                      <div>
                        <label htmlFor="billing-street" className="block text-sm font-medium text-gray-700">Street Address</label>
                        <Controller
                          name="billingAddress.street"
                          control={control}
                          render={({ field }) => <Input {...field} />}
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="billing-city" className="block text-sm font-medium text-gray-700">City</label>
                          <Controller
                            name="billingAddress.city"
                            control={control}
                            render={({ field }) => <Input {...field} />}
                          />
                        </div>
                        <div>
                          <label htmlFor="billing-state" className="block text-sm font-medium text-gray-700">State</label>
                          <Controller
                            name="billingAddress.state"
                            control={control}
                            render={({ field }) => <Input {...field} />}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="billing-zip" className="block text-sm font-medium text-gray-700">ZIP Code</label>
                          <Controller
                            name="billingAddress.zip"
                            control={control}
                            render={({ field }) => <Input {...field} />}
                          />
                        </div>
                        <div>
                          <label htmlFor="billing-country" className="block text-sm font-medium text-gray-700">Country</label>
                          <Controller
                            name="billingAddress.country"
                            control={control}
                            render={({ field }) => <Input {...field} />}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <Button type="submit">Save Addresses</Button>
              </form>
            </CardContent>
          </Card>
        )}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Delete Account</CardTitle>
          </CardHeader>
          <CardContent>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">
                  <Trash className="mr-2 h-4 w-4" />
                  Delete Account
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleDeleteAccount}>Delete Account</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}