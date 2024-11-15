'use client'
import { Product } from '@/interface/products'
import ProductCard from '@/components/shared/product/product-card'
import { response } from '@/constants/products'

function Products() {
  return (
    <div className='mx-auto px-4 py-8 sm:container'>
      <h1 className='mb-4 text-2xl font-bold text-black-solid'>Products</h1>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {response.slice(0, 8).map((product: Product) => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products