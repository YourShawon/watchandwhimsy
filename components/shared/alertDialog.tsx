import { ReactNode } from 'react'
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

interface ReuseAlertDialogProps {
  children: ReactNode
  cb?: () => void // Optional callback function
  title?: string
  description?: string
  actionText?: string
}

function ReuseAlertDialog({
  children,
  cb,
  title = 'Are you absolutely sure?',
  description = 'This action cannot be undone.',
  actionText = 'Continue'
}: ReuseAlertDialogProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent className='w-72 bg-white border-none sm:w-96 lg:w-[32rem]'>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription className='text-black-solid'>
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className='sm:hover:bg-white-2x'>Cancel</AlertDialogCancel>
          <AlertDialogAction className='bg-green-0x sm:hover:bg-green-8x text-white transition-colors duration-300' onClick={cb}>{actionText}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ReuseAlertDialog
