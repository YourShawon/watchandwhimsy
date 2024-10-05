import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

const ProductSkeleton = () => {
  return (
    <Card className=''>
      <CardHeader>
        <Skeleton className='h-[250px] w-full rounded-md bg-white-1x' />
      </CardHeader>
      <CardContent className='space-y-2'>
        <Skeleton className='h-4 w-1/3 bg-white-1x' />
        <Skeleton className='h-4 w-full bg-white-1x' />
        <div className='flex items-center space-x-1'>
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className='h-4 w-4 rounded-full bg-white-1x' />
          ))}
          <Skeleton className='ml-2 h-4 w-8 bg-white-1x' />
        </div>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Skeleton className='h-6 w-24 bg-white-1x' />
        <Skeleton className='h-10 w-10 rounded-full bg-white-1x' />
      </CardFooter>
    </Card>
  )
}

export default ProductSkeleton
