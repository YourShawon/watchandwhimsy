'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  ClockIcon,
  ExitIcon,
  TokensIcon,
  CheckCircledIcon,
  ExternalLinkIcon,
  EyeOpenIcon
} from '@radix-ui/react-icons'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { Separator } from '@radix-ui/react-select'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import ChangePass from './_components/changePass'
import ChangePhoto from './_components/changePhoto'
import { Key, LogOut, MapPin, Package, Trash, Truck } from 'lucide-react'
import Orders from './_components/orders'
import TrackOrder from './_components/trackOrder'

export default function Profile() {
  const [deleteAccount, setDeleteAccount] = useState('')

  const [profileData, setProfileData] = useState({
    username: 'anamulhoquewd',
    name: 'Anamul Hoque',
    email: 'anamulhoquewd@gmail.com',
    phone: '+880 1975 024262'
  })

  const handleChange = e => {
    setDeleteAccount(e.target.value)
  }

  useEffect(() => {
    const fetchProfileData = async () => {
      const response = await fetch('/api/profile')
      const data = await response.json()
      setProfileData(data)
    }

    fetchProfileData()
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: profileData || {
      username: '',
      name: '',
      email: '',
      phone: ''
    }
  })

  const onSubmit = data => {
    setProfileData(data)
    console.log(data)
  }

  const handleDeleteAccount = () => {
    console.log('Deleting account')
  }

  return (
    <Tabs
      defaultValue='dashboard'
      className='flex flex-col gap-5 p-2 py-5 text-[#222] md:container md:flex-row md:py-10'
    >
      <div className='flex h-full flex-col gap-4 md:w-1/4'>
        <TabsList className='flex h-auto flex-col items-start justify-start rounded border-none bg-[#088178] p-2 text-[#fff]'>
          <div className='flex gap-2'>
            <Avatar className='h-12 w-12'>
              <AvatarImage
                src='/placeholder.svg?height=50&width=50'
                alt={profileData.name}
              />
              <AvatarFallback className='font-bold text-[#222]'>
                {profileData.username.charAt(0).toLocaleUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className='flex flex-col gap-0'>
              <h2 className='font-semibold'>
                {profileData?.name || 'Dear User'}
              </h2>
              <p className='text-sm'>{`@${profileData?.username}`}</p>
            </div>
          </div>
        </TabsList>

        <TabsList className='flex h-auto flex-col overflow-hidden rounded border border-[#e2e9e1] bg-[#fff] p-0'>
          <TabsTrigger
            className='w-full justify-start leading-9 text-[#90908e] hover:bg-[#F3F4F6] data-[state=active]:bg-[#088178] data-[state=active]:text-[#fff] md:font-semibold'
            value='dashboard'
          >
            <TokensIcon className='mr-2' />
            Dashboard
          </TabsTrigger>
          <TabsTrigger
            className='w-full justify-start leading-9 text-[#90908e] hover:bg-[#F3F4F6] data-[state=active]:bg-[#088178] data-[state=active]:text-[#fff] md:font-semibold'
            value='orders'
          >
            <Package className='mr-2 h-4 w-4' />
            Orders
          </TabsTrigger>
          <TabsTrigger
            className='w-full justify-start leading-9 text-[#90908e] hover:bg-[#F3F4F6] data-[state=active]:bg-[#088178] data-[state=active]:text-[#fff] md:font-semibold'
            value='trackYourOrder'
          >
            <Truck className='mr-2 h-4 w-4' />
            Track Your Order
          </TabsTrigger>
          <TabsTrigger
            className='w-full justify-start leading-9 text-[#90908e] hover:bg-[#F3F4F6] data-[state=active]:bg-[#088178] data-[state=active]:text-[#fff] md:font-semibold'
            value='changePass'
          >
            <Key className='mr-2 h-4 w-4' />
            Change Password
          </TabsTrigger>
          <TabsTrigger
            className='w-full justify-start leading-9 text-[#90908e] hover:bg-[#F3F4F6] data-[state=active]:bg-[#088178] data-[state=active]:text-[#fff] md:font-semibold'
            value='address'
          >
            <MapPin className='mr-2 h-4 w-4' />
            Address
          </TabsTrigger>

          <Separator className='h-[1px] w-full bg-[#e2e9e1]' />

          <AlertDialog>
            <AlertDialogTrigger className='flex w-full items-center justify-start pl-3 text-sm leading-10 text-red-500 hover:bg-[#F3F4F6] md:font-semibold'>
              <LogOut className='mr-2 h-4 w-4' />
              Log Out
            </AlertDialogTrigger>
            <AlertDialogContent
              className='w-64 border-none bg-[#E8F6EA] sm:w-96 lg:w-[32rem]'
              style={{ borderRadius: '6px' }}
            >
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className='rounded border border-[#088178]'>
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction className='rounded border-none bg-red-500 text-[#fff] hover:bg-red-600 hover:text-[#fff]'>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </TabsList>
      </div>

      <TabsContent value='dashboard' className='mt-0 md:w-3/4'>
        <Card className='space-y-5 border border-[#e2e9e1]'>
          <CardHeader>
            <CardTitle>My Account</CardTitle>
            <CardDescription className='flex flex-col gap-2 text-[#90908e]'>
              <span>{`Hello ${profileData?.name || 'Dear User'}. Welcome to our website!`}</span>
              <span>
                {
                  'From your account dashboard, you can easily check & view your recent orders, manage your shipping and billing addresses, and edit your password and account details.'
                }
              </span>
            </CardDescription>
          </CardHeader>

          <Separator className='m-0 h-[1px] w-full bg-[#e2e9e1]' />

          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='mt-5 grid grid-cols-1 gap-4 md:grid-cols-2'>
                <div>
                  <Label
                    className='cursor-pointer font-semibold text-[#90908e]'
                    htmlFor='username'
                  >
                    Username
                  </Label>
                  <Input
                    id='username'
                    className='rounded border-[#e2e9e1] font-semibold focus:border-cyan-600 focus-visible:ring-0 focus-visible:ring-offset-0'
                    type='text'
                    {...register('username', {
                      required: 'Username is required'
                    })}
                  />
                  <p className='text-sm text-red-500'>
                    {errors.username?.message}
                  </p>
                </div>
                <div>
                  <Label
                    className='cursor-pointer font-semibold text-[#90908e]'
                    htmlFor='email'
                  >
                    Email
                  </Label>
                  <Input
                    disabled
                    id='email'
                    className='rounded border-[#e2e9e1] font-semibold focus:border-cyan-600 focus-visible:ring-0 focus-visible:ring-offset-0'
                    type='text'
                    {...register('email')}
                  />
                </div>
                <div>
                  <Label
                    className='cursor-pointer font-semibold text-[#90908e]'
                    htmlFor='name'
                  >
                    Name
                  </Label>
                  <Input
                    id='name'
                    className='rounded border-[#e2e9e1] font-semibold focus:border-cyan-600 focus-visible:ring-0 focus-visible:ring-offset-0'
                    type='text'
                    {...register('name', { required: 'Name is required!' })}
                  />
                  <p className='text-sm text-red-500'>{errors.name?.message}</p>
                </div>
                <div>
                  <Label
                    className='cursor-pointer font-semibold text-[#90908e]'
                    htmlFor='phone'
                  >
                    Phone
                  </Label>
                  <Input
                    id='phone'
                    className='rounded border-[#e2e9e1] font-semibold focus:border-cyan-600 focus-visible:ring-0 focus-visible:ring-offset-0'
                    type='text'
                    {...register('phone', {
                      required: 'Phone number is required'
                    })}
                  />
                  <p className='text-sm text-red-500'>
                    {errors.phone?.message}
                  </p>
                </div>
              </div>

              <div className='mt-4 flex w-full justify-end'>
                <Button type='submit' className='font-semibold'>
                  Save changes
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <Card className='mt-6'>
          <CardHeader>
            <CardTitle>Delete Account</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              This will permanently delete your account and all associated data
            </CardDescription>
          </CardContent>
          <CardFooter>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant='destructive'>
                  <Trash className='mr-2 h-4 w-4' />
                  Delete Account
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete account</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to delete your account? This will
                    immediately log you out and you will not be able to log in
                    again.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <br />
                <Label htmlFor='delete' className='font-semibold text-[#222]'>
                  Please type “DELETE ACCOUNT” below
                </Label>
                <Input
                  id='delete'
                  autoFocus
                  onChange={handleChange}
                  className='focus:border-cyan-600 focus-visible:ring-0 focus-visible:ring-offset-0'
                />
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    disabled={deleteAccount !== 'DELETE ACCOUNT'}
                    onClick={handleDeleteAccount}
                  >
                    Delete Account
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value='orders' className='mt-0 md:w-3/4'>
        <Card className='space-y-5 border border-[#e2e9e1]'>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription className='flex flex-col gap-2 text-[#90908e]'>
              <span>{`View and manage your recent purchases`}</span>
            </CardDescription>
          </CardHeader>

          <Separator className='m-0 h-[1px] w-full bg-[#e2e9e1]' />

          <CardContent>
            <Orders/>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value='trackYourOrder' className='mt-0 md:w-3/4'>
        <Card className='space-y-5 border border-[#e2e9e1]'>
        <CardHeader>
        <CardTitle>Order Tracking</CardTitle>
        <CardDescription>Track the status of your order</CardDescription>
      </CardHeader>

          <Separator className='m-0 h-[1px] w-full bg-[#e2e9e1]' />

          <CardContent>
            <TrackOrder/>
          </CardContent>
        </Card>
      </TabsContent>
      


      <TabsContent value='changePass' className='mt-0 md:w-3/4'>
        <ChangePass />
      </TabsContent>
    </Tabs>
  )
}
