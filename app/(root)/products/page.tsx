import DynamicBreadcrumb from '@/components/shared/dynamic-breadcrumb'
import React from 'react'
import Filtering from './_components/filtering'
import ProductsInShop from './_components/products'

function ProductsPage() {
  return (
    <div>
      <div className='bg-white-2x'>
        <DynamicBreadcrumb />
      </div>
      <div className='flex flex-col-reverse px-2 py-10 sm:container lg:grid lg:grid-cols-12 lg:gap-2'>
        <Filtering />
        <ProductsInShop />
      </div>
    </div>
  )
}

export default ProductsPage
