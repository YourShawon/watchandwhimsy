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
import { Button } from '@/components/ui/button'

interface ReuseAlertDialogProps {
  children: ReactNode
  cb?: () => void // Optional callback function
  isTrash?: boolean
}

function ReuseAlertDialog({
  children,
  cb,
  isTrash = false
}: ReuseAlertDialogProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant='outline'
          className={`group/btn h-8 w-8 rounded-full border-none hover:bg-[#E8F6EA] ${isTrash ? 'bg-[#fff]' : 'bg-[#088178] transition-all duration-700 hover:-translate-y-1'}`}
          size='icon'
        >
          {children}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent
        className='w-64 border-none bg-[#E8F6EA] sm:w-96 lg:w-[32rem]'
        style={{ borderRadius: '8px' }}
      >
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this item
            and remove it from your browser.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className='rounded border border-[#088178]'>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={cb}
            className='rounded border-none bg-[#088178] text-[#fff] hover:bg-[#088178] hover:text-[#fff]'
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ReuseAlertDialog
