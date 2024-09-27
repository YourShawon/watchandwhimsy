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
import { TokensIcon } from '@radix-ui/react-icons'
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
import { Key, LogOut, MapPin, Package, Trash, Truck } from 'lucide-react'
import ChangePass from './_components/changePass'
import Orders from './_components/orders'
import TrackOrder from './_components/trackOrder'
import AddressSection from './_components/address'
import axios from 'axios'

interface ProfileData {
  name: string
  username: string
  email: string
  phone: string
}

export default function Profile() {
  const [deleteAccount, setDeleteAccount] = useState('')
  const [profileData, setProfileData] = useState<ProfileData>({
    name: '',
    username: '',
    email: '',
    phone: ''
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: profileData
  })

  // get profile data
  const fetchProfileData = async () => {
    try {
      const response = await axios.get(
        'https://c45143fa-b1d2-41f5-8445-a488e6931b78.mock.pstmn.io/users',
        {
          headers: {
            'x-mock-response-code': '200'
          }
        }
      )
      const fetchedData = response.data.user
      setProfileData(fetchedData)
      console.log(response.data.message)
      reset(fetchedData) // Update form values with fetched data
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchProfileData()
  }, [])

  const onSubmit = async (data: any) => {
    setProfileData(data)
    // try {
    //   const response = await axios.post(
    //     'https://c45143fa-b1d2-41f5-8445-a488e6931b78.mock.pstmn.io/users',
    //     data,
    //     {
    //       headers: {
    //         'x-mock-response-code': '201'
    //       }
    //     }
    //   )
    //   const fetchedData = response.data.user
    //   setProfileData(fetchedData)
    //   console.log(response.data.message)
    //   reset(fetchedData) // Update form values with fetched data
    // } catch (error) {
    //   console.error(error)
    // }

    console.log('Post data')
  }

  const handleDeleteAccount = () => {
    console.log('Deleting account')
  }

  return (
    <Tabs
      defaultValue='dashboard'
      className='flex flex-col gap-5 p-2 py-5 md:container md:flex-row md:py-10'
    >
      <div className='flex h-full flex-col gap-4 md:w-1/4'>
        <div className='flex h-auto items-center gap-5 rounded border-none bg-green-2x p-2'>
          <Avatar className='h-12 w-12'>
            <AvatarImage src='' alt={profileData?.name} />
            <AvatarFallback className='bg-white font-bold text-muted-foreground'>
              {profileData?.username?.charAt(0).toLocaleUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className='flex flex-col gap-0'>
            <h2 className='font-semibold text-black-solid'>
              {profileData?.name || 'Dear User'}
            </h2>
            <p className='text-sm lowercase text-muted-foreground'>{`@${profileData?.username || 'username'}`}</p>
          </div>
        </div>

        <TabsList className='flex h-auto flex-col bg-green-2x p-2'>
          <TabsTrigger
            className='w-full justify-start leading-9 sm:hover:bg-green-50 data-[state=active]:bg-green-50 md:font-medium'
            value='dashboard'
          >
            <TokensIcon className='mr-2' />
            Dashboard
          </TabsTrigger>
          <TabsTrigger
            className='w-full justify-start leading-9 sm:hover:bg-green-50 data-[state=active]:bg-green-50 md:font-medium'
            value='orders'
          >
            <Package className='mr-2 h-4 w-4' />
            Orders
          </TabsTrigger>
          <TabsTrigger
            className='w-full justify-start leading-9 sm:hover:bg-green-50 data-[state=active]:bg-green-50 md:font-medium'
            value='trackYourOrder'
          >
            <Truck className='mr-2 h-4 w-4' />
            Track Your Order
          </TabsTrigger>
          <TabsTrigger
            className='w-full justify-start leading-9 sm:hover:bg-green-50 data-[state=active]:bg-green-50 md:font-medium'
            value='changePass'
          >
            <Key className='mr-2 h-4 w-4' />
            Change Password
          </TabsTrigger>
          <TabsTrigger
            className='w-full justify-start leading-9 sm:hover:bg-green-50 data-[state=active]:bg-green-50 md:font-medium'
            value='address'
          >
            <MapPin className='mr-2 h-4 w-4' />
            Address
          </TabsTrigger>

          <Separator className='h-[1px] w-full' />

          <AlertDialog>
            <AlertDialogTrigger className='flex w-full items-center justify-start pl-3 text-sm leading-10 text-red-500 sm:hover:bg-red-100 md:font-medium'>
              <LogOut className='mr-2 h-4 w-4' />
              Log Out
            </AlertDialogTrigger>
            <AlertDialogContent className='w-64 border-none bg-white sm:w-96 lg:w-[32rem]'>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription className='text-muted-foreground'>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className='sm:hover:bg-white-2x'>
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction className='border-none bg-red-600 text-white sm:hover:bg-red-700'>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </TabsList>
      </div>

      <TabsContent value='dashboard' className='mt-0 md:w-3/4'>
        <Card className='space-y-5 border'>
          <CardHeader>
            <CardTitle className='text-black-solid'>My Account</CardTitle>
            <CardDescription className='flex flex-col gap-2 text-muted-foreground'>
              <span>{`Hello ${profileData?.name || 'Dear User'}. Welcome to our website!`}</span>
              <span>
                {
                  'From your account dashboard, you can easily check & view your recent orders, manage your shipping and billing addresses, and edit your password and account details.'
                }
              </span>
            </CardDescription>
          </CardHeader>

          <Separator className='m-0 h-[1px] w-full' />

          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='mt-5 grid grid-cols-1 gap-4 md:grid-cols-2'>
                <div>
                  <Label
                    className='cursor-pointer font-medium text-muted-foreground'
                    htmlFor='username'
                  >
                    Username
                  </Label>
                  <Input
                    id='username'
                    className='border font-semibold focus:border-cyan-600 focus-visible:ring-0 focus-visible:ring-offset-0'
                    type='text'
                    {...register('username', {
                      required: 'Username is required!'
                    })}
                  />
                  <p className='text-sm text-red-500'>
                    {errors.username?.message}
                  </p>
                </div>
                <div>
                  <Label
                    className='cursor-pointer font-medium text-muted-foreground'
                    htmlFor='email'
                  >
                    Email
                  </Label>
                  <Input
                    disabled
                    id='email'
                    className='border font-semibold focus:border-cyan-600 focus-visible:ring-0 focus-visible:ring-offset-0'
                    type='text'
                    {...register('email')}
                  />
                </div>
                <div>
                  <Label
                    className='cursor-pointer font-medium text-muted-foreground'
                    htmlFor='name'
                  >
                    Name
                  </Label>
                  <Input
                    id='name'
                    className='border font-semibold focus:border-cyan-600 focus-visible:ring-0 focus-visible:ring-offset-0'
                    type='text'
                    {...register('name', { required: 'Name is required!' })}
                  />
                  <p className='text-sm text-red-500'>{errors.name?.message}</p>
                </div>
                <div>
                  <Label
                    className='cursor-pointer font-medium text-muted-foreground'
                    htmlFor='phone'
                  >
                    Phone
                  </Label>
                  <Input
                    id='phone'
                    className='border font-semibold focus:border-cyan-600 focus-visible:ring-0 focus-visible:ring-offset-0'
                    type='text'
                    {...register('phone', {
                      required: 'Phone is required!'
                    })}
                  />
                  <p className='text-sm text-red-500'>
                    {errors.phone?.message}
                  </p>
                </div>
              </div>

              <div className='mt-4 flex w-full justify-end'>
                <Button
                  type='submit'
                  className='bg-green-0x text-base text-white transition-all duration-300 sm:hover:bg-green-8x'
                >
                  Save changes
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <Card className='mt-6 border'>
          <CardHeader>
            <CardTitle>Delete Account</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className='text-muted-foreground'>
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
              <AlertDialogContent className='w-72 border-none bg-white sm:w-96 lg:w-[32rem]'>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete account</AlertDialogTitle>
                  <AlertDialogDescription className='text-muted-foreground'>
                    Are you sure you want to delete your account? This will
                    immediately log you out and you will not be able to log in
                    again.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <br />
                <Label
                  htmlFor='delete'
                  className='font-semibold text-muted-foreground'
                >
                  Please type “DELETE ACCOUNT” below
                </Label>
                <Input
                  id='delete'
                  autoFocus
                  onChange={e => setDeleteAccount(e.target.value)}
                  className='focus:border-cyan-600 focus-visible:ring-0 focus-visible:ring-offset-0'
                />
                <AlertDialogFooter>
                  <AlertDialogCancel className='sm:hover:bg-white-2x'>
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                    disabled={deleteAccount !== 'DELETE ACCOUNT'}
                    onClick={handleDeleteAccount}
                    className='bg-red-600 text-white transition-all duration-300 sm:hover:bg-red-700'
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
        <Orders />
      </TabsContent>

      <TabsContent value='trackYourOrder' className='mt-0 md:w-3/4'>
        <TrackOrder />
      </TabsContent>

      <TabsContent value='changePass' className='mt-0 md:w-3/4'>
        <ChangePass />
      </TabsContent>

      <TabsContent value='address' className='mt-0 md:w-3/4'>
        <AddressSection />
      </TabsContent>
    </Tabs>
  )
}
