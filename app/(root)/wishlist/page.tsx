'use client'

import DynamicBreadcrumb from '@/components/shared/dynamic-breadcrumb'
import { AllProducts } from '@/constants/products'
import WishlistTable from './_components/WishlistTable'
import WishlistCard from './_components/WishlistCard'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

function Wishlist() {
  const products = AllProducts
  // const [products, setProducts] = useState<Product[]>([])
  const favorites = []

  return (
    <>
      <div className='bg-white-2x'>
        <DynamicBreadcrumb />
      </div>
      <div className='mx-auto p-4 sm:container'>
        <h1 className='mb-4 text-2xl font-bold text-black-solid'>Wishlist</h1>
        {products.length === 0 ? (
          <Card className='mb-4 text-center'>
            <CardHeader>
              <CardTitle className='text-xl text-black-solid'>
                Your wishlist is empty
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-sm text-muted-foreground'>
                You have no items in your wishlist
              </p>
            </CardContent>
          </Card>
        ) : (
          <>
            <div className='hidden md:block'>
              <WishlistTable products={products} />
            </div>
            <div className='space-y-4 md:hidden'>
              {products.map(product => (
                <WishlistCard key={product.productId} product={product} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Wishlist
