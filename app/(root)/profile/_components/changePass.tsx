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
import { Separator } from '@/components/ui/separator'
import { ChangePassFormData } from '@/interface/profile'
import React from 'react'
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form'

function ChangePass() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<ChangePassFormData>()

  const onSubmit: SubmitHandler<ChangePassFormData> = data => {
    // Here you will handle the form submission, including password validation logic
    if (data.newPass !== data.confirmPass) {
      alert('New password and confirm password must match!')
      return
    }
    console.log(data)
  }

  const newPassword = watch('newPass')
  const confirmPassword = watch('confirmPass')

  return (
    <Card className='space-y-5'>
      <CardHeader>
        <CardTitle>Change Password</CardTitle>
        <CardDescription className='text-gray space-y-2'>
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
                htmlFor='oldPass'
              >
                Old Password
              </Label>
              <Input
                id='oldPass'
                className='focus:border-cyan-600 focus-visible:ring-0 focus-visible:ring-offset-0'
                type='password'
                placeholder='********'
                {...register('oldPass', {
                  required: 'Old password not match!'
                })}
              />
              <p className='text-sm text-red-500'>{errors?.oldPass?.message}</p>
            </div>
            <div>
              <Label
                className='cursor-pointer font-medium text-muted-foreground'
                htmlFor='newPass'
              >
                New Password
              </Label>
              <Input
                id='newPass'
                className='focus:border-cyan-600 focus-visible:ring-0 focus-visible:ring-offset-0'
                type='password'
                placeholder='********'
                {...register('newPass', {
                  required: 'This field is required!'
                })}
              />
              <p className='text-sm text-red-500'>{errors?.newPass?.message}</p>
            </div>
            <div>
              <Label
                className='cursor-pointer font-medium text-muted-foreground'
                htmlFor='confirmPass'
              >
                Confirm Password
              </Label>
              <Input
                id='confirmPass'
                className='focus:border-cyan-600 focus-visible:ring-0 focus-visible:ring-offset-0'
                type='password'
                placeholder='********'
                {...register('confirmPass', {
                  required: 'Passwords do not match!'
                })}
              />
              <p className='text-sm text-red-500'>
                {errors?.confirmPass?.message}
              </p>
            </div>
          </div>

          <div className='mt-4 flex w-full justify-end'>
            <Button
            variant={"bgGreen"}
              type='submit'
              className='w-fit'
            >
              Save changes
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

export default ChangePass
