import { idGenerator } from '@/lib/utils'
import image from '@/public/uploads/6.png'

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
  stock: number
  quantity: number
}

export const products: Product[] = [
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
    price: 100,
    oldPrice: 299,
    discount: '05%',
    tag: 'New',
    isAddFavorite: false,
    isAddedToCart: true,
    quantity: 1,
    category: 'Man',
    stock: 10
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
    price: 100,
    oldPrice: 299,
    discount: '05%',
    tag: 'New',
    isAddFavorite: false,
    isAddedToCart: true,
    quantity: 1,
    category: 'Man',
    stock: 0
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
    price: 100,
    oldPrice: 299,
    discount: '05%',
    tag: 'New',
    isAddFavorite: false,
    isAddedToCart: true,
    quantity: 1,
    category: 'Man',
    stock: 10
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
    price: 100,
    oldPrice: 299,
    discount: '05%',
    tag: 'New',
    isAddFavorite: false,
    isAddedToCart: true,
    quantity: 1,
    category: 'Man',
    stock: 10
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
    price: 100,
    oldPrice: 299,
    discount: '05%',
    tag: 'New',
    isAddFavorite: false,
    isAddedToCart: true,
    quantity: 1,
    category: 'Man',
    stock: 10
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
    price: 100,
    oldPrice: 299,
    discount: '05%',
    tag: 'New',
    isAddFavorite: false,
    isAddedToCart: true,
    quantity: 1,
    category: 'Man',
    stock: 10
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
    price: 100,
    oldPrice: 299,
    discount: '05%',
    tag: 'New',
    isAddFavorite: false,
    isAddedToCart: true,
    quantity: 1,
    category: 'Man',
    stock: 10
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
    price: 100,
    oldPrice: 299,
    discount: '05%',
    tag: 'New',
    isAddFavorite: false,
    isAddedToCart: true,
    quantity: 1,
    category: 'Man',
    stock: 10
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
    price: 100,
    oldPrice: 299,
    discount: '05%',
    tag: 'New',
    isAddFavorite: false,
    isAddedToCart: true,
    quantity: 1,
    category: 'Man',
    stock: 10
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
    price: 100,
    oldPrice: 299,
    discount: '05%',
    tag: 'New',
    isAddFavorite: false,
    isAddedToCart: true,
    quantity: 1,
    category: 'Man',
    stock: 10
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
    price: 100,
    oldPrice: 299,
    discount: '05%',
    tag: 'New',
    isAddFavorite: false,
    isAddedToCart: true,
    quantity: 1,
    category: 'Man',
    stock: 10
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
    price: 100,
    oldPrice: 299,
    discount: '05%',
    tag: 'New',
    isAddFavorite: false,
    isAddedToCart: true,
    quantity: 1,
    category: 'Man',
    stock: 10
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
    price: 100,
    oldPrice: 299,
    discount: '05%',
    tag: 'New',
    isAddFavorite: false,
    isAddedToCart: true,
    quantity: 1,
    category: 'Man',
    stock: 10
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
    price: 100,
    oldPrice: 299,
    discount: '05%',
    tag: 'New',
    isAddFavorite: false,
    isAddedToCart: true,
    quantity: 1,
    category: 'Man',
    stock: 10
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
    price: 100,
    oldPrice: 299,
    discount: '05%',
    tag: 'New',
    isAddFavorite: false,
    isAddedToCart: true,
    quantity: 1,
    category: 'Man',
    stock: 10
  }
]
