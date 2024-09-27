import DynamicBreadcrumb from '@/components/shared/dynamic-breadcrumb'
import React from 'react'

function ProductsPage() {
  return (
    <div>
      <div className='bg-white-2x'>
        <DynamicBreadcrumb />
      </div>
      <div className='p-20'>
        <h2>This is Products page.</h2>
      </div>
    </div>
  )
}

export default ProductsPage
