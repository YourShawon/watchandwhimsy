import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import Image from 'next/image'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import ProductReview from './product-review'


const AdditionalInfo = () => {
  return (
    <Tabs defaultValue='additional-info' className='w-full flex-wrap'>
      <TabsList className='*:font-spartan leading-4 text-green-0x appearance-none bg-transparent'>
        <TabsTrigger value="additional-info" className='data-[state=active]:shadow-none font-spartanSemiBold data-[state=active]:bg-green-0x/10'>Additional Info</TabsTrigger>
        <TabsTrigger value="reviews" className='data-[state=active]:shadow-none  font-spartanSemiBold data-[state=active]:bg-green-0x/10' >Reviews (3)</TabsTrigger>
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
          <ProductReview />
          
        </TabsContent>
      </div>
    </Tabs>
  )
}

export default AdditionalInfo