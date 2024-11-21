interface Media {
  id: string
  url: string
  alt: string
}

export interface Product {
  productId: string
  slug: string
  media: Media[]
  name: string
  title: string
  description: string
  originalPrice: number
  quantity: number
  tag: 'popular' | 'new' | 'sold' | 'hot' | 'bestseller'
  category: string
  stock: number
  rating: number
  brand: string
  warranty: number
  sku: string
  gender: string
  price: number
  discount: number
  releaseDate: string
  reviews: Reviews[]
}

interface Reviews {
  id: string
  username: string
  message: string
  rating: number
  date: string
  avatarUrl: string
}

export interface tagStyles {
  hot: string
  new: string
  sold: string
  bestseller: string
  popular: string
}
