import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import Image from 'next/image'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'


const AdditionalInfo = () => {
  return (
    <Tabs defaultValue='additional-info' className='w-full flex-wrap'>
      <TabsList className='*:font-spartan font-spartanSemiBold'>
        <TabsTrigger value="additional-info">Additional Info</TabsTrigger>
        <TabsTrigger value="reviews">Reviews (3)</TabsTrigger>
      </TabsList>
      <div className='mt-10'>
        <TabsContent value='additional-info'>
          <Table className='border'>
            <TableBody>
              <TableRow>
                <TableCell>Frame</TableCell>
                <TableCell>Aluminum</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Width</TableCell>
                <TableCell>24&quot;</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Seat back height</TableCell>
                <TableCell>21.5&quot;</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value='reviews'>
          <div className='flex flex-col'>
            {/* Reviews */}

            <div className='flex flex-col lg:flex-row pb-12'>
              {/* Review Top */}
              <div className='px-3 lg:w-[66.666%] '>
                {/* Reviews with profiles */}
                <h2 className='font-spartan font-spartanSemiBold text-[18px] leading-5 text-black-2x mb-8'>Customer questions & answers</h2>
                <div className='flex flex-row font-lato'>
                  {/* Review card */}
                  <div className='mr-5 text-center'>
                    {/* Review user info */}
                    {/* Image tag */}
                    <Image 
                      src="/jacky.jpg"
                      width={100}
                      height={100}
                      alt='User Image'
                      className='rounded-full mb-2'
                    />
                    <h6 className='text-xs leading-[1.2] font-spartan font-spartanSemiBold text-black-solid'>Jacky Chan</h6>
                    <p className='text-xs leading-6 font-[400] text-green-7x'>since 2008</p>
                  </div>
                  <div className='space-y-2'>
                    {/* Review info */}
                    <div>
                      {/* rating component */}
                      rating
                    </div>
                    <p className='font-[400] leading-6 text-green-7x'>
                      {/* Review comment */}
                      Like it allot. My last eco-drive lasted about 25 years before battery died. I decided to treat myself to a new one for Christmas & am very happy with it. Even got a good deal thanks Watch and Whimsy. 
                    </p>
                    <div className='flex items-center'>
                      {/* comment time details */}
                      <p className='mr-8 text-xs leading-6 text-green-7x'>
                        December 4, 2020 at 3:12pm
                      </p>
                      <Link href="/" className='text-sm font-[400] text-green cursor-pointer flex gap-1'>
                        Reply
                        <ArrowRight className='h-5 mt-[2px]'/>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className='lg:w-[33.33%]'>
                {/* Customer review summary */}
                <h2 className='font-spartan font-spartanSemiBold text-[18px] leading-5 text-black-2x'>Customer reviews</h2>
                <div>rating component</div>
                <div>
                  {/* summary with percentage */}
                </div>
              </div>
            </div>

            <Separator />

            <div className='pt-12'>
              {/* Add a review. review form */}
              Review Form
            </div>
          </div>
        </TabsContent>
      </div>
    </Tabs>
  )
}

export default AdditionalInfo