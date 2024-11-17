'use client'

import { Product } from '@/interface/products'
import ProductCard from '@/components/shared/product/product-card'
import ProductSkeleton from '@/components/shared/product/skeleton'
import { AllProducts } from '@/constants/products'

function Products() {
  const products = AllProducts;
  const [error, loading] = [false, false];


  if (error || loading || products.length === 0) {
    return (
      <div className='mx-auto px-4 py-8 sm:container'>
        <h1 className='mb-4 text-2xl font-bold text-black-solid'>Products</h1>

        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
        </div>
      </div>
    )
  }

  return (
    <div className='mx-auto px-4 py-8 sm:container'>
      <h1 className='mb-4 text-2xl font-bold text-black-solid'>Products</h1>

      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {products.slice(0, 8).map((product: Product) => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products
