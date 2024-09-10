import SingleProduct from './single-product'
import image from '@/public/uploads/6.png'
import { idGenerator } from '@/lib/utils'

interface Product {
  productId: string
  media: {
    alt: string
    url: string
  }
  name: string
  title: string
  description: string
  price: number
  oldPrice: number
  discount: string
  tag: string
  isAddFavorite: boolean
  isAddedToCart: boolean
  category: string
}
const products: Product[] = [
  {
    productId: idGenerator(6),
    media: {
      alt: 'Samsung Watch',
      url: image
    },
    name: 'Watch',
    title: 'Apple Watch SE',
    description:
      'Easy ways to stay connected. Motivating fitness metrics. Innovative health and safety features. And carbon neutral case and band combinations. Apple Watch SE offers totally lovable features at a feel‑good price.',
    price: 249,
    oldPrice: 299,
    discount: '05%',
    tag: 'New',
    isAddFavorite: false,
    isAddedToCart: true,
    quantity: 1,
    category: 'Man'
  },
  {
    productId: idGenerator(6),
    media: {
      alt: 'Samsung Watch',
      url: image
    },
    name: 'Watch',
    title: 'Apple Watch SE',
    description:
      'Easy ways to stay connected. Motivating fitness metrics. Innovative health and safety features. And carbon neutral case and band combinations. Apple Watch SE offers totally lovable features at a feel‑good price.',
    price: 249,
    oldPrice: 299,
    discount: '05%',
    tag: 'New',
    isAddFavorite: false,
    isAddedToCart: true,
    quantity: 1,
    category: 'Man'
  },
  {
    productId: idGenerator(6),
    media: {
      alt: 'Samsung Watch',
      url: image
    },
    name: 'Watch',
    title: 'Apple Watch SE',
    description:
      'Easy ways to stay connected. Motivating fitness metrics. Innovative health and safety features. And carbon neutral case and band combinations. Apple Watch SE offers totally lovable features at a feel‑good price.',
    price: 249,
    oldPrice: 299,
    discount: '05%',
    tag: 'New',
    isAddFavorite: false,
    isAddedToCart: true,
    quantity: 1,
    category: 'Man'
  }
  // other products...
]

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
