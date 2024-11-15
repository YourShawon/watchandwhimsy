interface Media {
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
  price: number
  discount: number
  releaseDate: string
}

export interface tagStyles {
  hot: string
  new: string
  sold: string
  bestseller: string
  popular: string
}
