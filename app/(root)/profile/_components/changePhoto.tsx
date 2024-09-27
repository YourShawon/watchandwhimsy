import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Pencil } from 'lucide-react'
import React, { useState } from 'react'

function ChangePhoto() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  // Handle file change
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      // Create a preview URL for the selected image
      setPreviewUrl(URL.createObjectURL(file))
    }
  }

  // Function to handle the file upload (to backend or cloud storage)
  const handleFileUpload = async () => {
    if (selectedFile) {
      // Use FormData to send the file
      const formData = new FormData()
      formData.append('file', selectedFile)

      try {
        // Example: Upload the file to your server or a cloud service
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData
        })

        if (response.ok) {
          const data = await response.json()
          // Assuming 'data.url' is the URL of the uploaded image
          console.log('File uploaded successfully:', data.url)
        } else {
          console.error('File upload failed')
        }
      } catch (error) {
        console.error('Error uploading file:', error)
      }
    }
  }

  return (
    <div className='flex items-center gap-3 md:gap-6'>
      <Avatar className='relative h-24 w-24 bg-[#F7F8F9] text-[#222] md:h-32 md:w-32'>
        <AvatarImage
          src={
            previewUrl ||
            'https://profile-assets.showwcase.com/106386/1690316458208-anam.jpg'
          }
          alt={'user.username'}
        />
        <AvatarFallback>{'U'}</AvatarFallback>

        <div className='absolute bottom-3 right-4 rounded-full'>
          <div className='relative flex h-8 w-8 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#F4F4F5]'>
            <Input
              type='file'
              className='absolute h-full w-full cursor-pointer rounded-full opacity-0'
              onChange={handleFileChange}
            />
            <Pencil className='w-4 text-[#90908e]' />
          </div>
        </div>
      </Avatar>

      {selectedFile && (
        <Button
          variant={'outline'}
          className='rounded border-[#e2e9e1] text-[#90908e] sm:hover:text-[#90908e] md:font-semibold'
          onClick={handleFileUpload}
        >
          Upload Photo
        </Button>
      )}
    </div>
  )
}

export default ChangePhoto
