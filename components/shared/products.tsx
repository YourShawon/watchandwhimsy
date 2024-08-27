import SimgleProduct from './single-product'
import image from '@/public/uploads/6.png'
import { idGenerator } from '@/lib/utils'

function Products() {
  const products = [
    {
      id: idGenerator(6),
      media: {
        alt: 'Sumsung Watch',
        url: image
      },
      name: 'Watch',
      title: 'Apple Watch SE',
      description:
        'Easy ways to stay connected. Motivating fitness metrics. Innovative health and safety features. And carbon neutral case and band combinations. Apple Watch SE offers totally lovable features at a feel‑good price.',
      pirce: 249,
      oldPrice: 299,
      discount: '05%',
      tag: 'New',
      isAddFevorite: false,
      isAddedToCart: true,
      category: 'Man'
    },
    {
      id: idGenerator(6),
      media: {
        alt: 'Sumsung Watch',
        url: image
      },
      name: 'Watch',
      title: 'Apple Watch SE',
      description:
        'Easy ways to stay connected. Motivating fitness metrics. Innovative health and safety features. And carbon neutral case and band combinations. Apple Watch SE offers totally lovable features at a feel‑good price.',
      pirce: 249,
      oldPrice: 299,
      discount: '05%',
      tag: 'New',
      isAddFevorite: false,
      isAddedToCart: true,
      category: 'Man'
    },
    {
      id: idGenerator(6),
      media: {
        alt: 'Sumsung Watch',
        url: image
      },
      name: 'Watch',
      title: 'Apple Watch SE',
      description:
        'Easy ways to stay connected. Motivating fitness metrics. Innovative health and safety features. And carbon neutral case and band combinations. Apple Watch SE offers totally lovable features at a feel‑good price.',
      pirce: 249,
      oldPrice: 299,
      discount: '05%',
      tag: 'New',
      isAddFevorite: false,
      isAddedToCart: true,
      category: 'Man'
    },
    {
      id: idGenerator(6),
      media: {
        alt: 'Sumsung Watch',
        url: image
      },
      name: 'Watch',
      title: 'Apple Watch SE',
      description:
        'Easy ways to stay connected. Motivating fitness metrics. Innovative health and safety features. And carbon neutral case and band combinations. Apple Watch SE offers totally lovable features at a feel‑good price.',
      pirce: 249,
      oldPrice: 299,
      discount: '05%',
      tag: 'New',
      isAddFevorite: false,
      isAddedToCart: true,
      category: 'Man'
    }
  ]

  return (
    <div className='my-20 grid xl:grid-cols-4 gap-6 xs:grid-cols-1 xs:p-2 sm:grid-cols-2 sm:p-8 md:grid-cols-3'>
      {products.map(product => (
        <SimgleProduct key={product.id} item={product} />
      ))}
    </div>
  )
}

export default Products
