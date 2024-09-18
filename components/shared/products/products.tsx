import { products } from '@/constants/products'
import SingleProduct from './single-product'





function Products() {
  return (
    <div className='mt-10 grid justify-center gap-y-4 p-4 sm:container sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4'>
      {products.map(product => (
        <SingleProduct key={product.productId} item={product} />
      ))}
    </div>
  )
}

export default Products
