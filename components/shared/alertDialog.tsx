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
      <AlertDialogTrigger >{children}</AlertDialogTrigger>
      <AlertDialogContent className='w-72 bg-white rounded-md border-none sm:w-96 lg:w-[32rem]'>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription className='text-[#222]'>
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className='bg-green hover:bg-green-hover text-white' onClick={cb}>{actionText}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ReuseAlertDialog
