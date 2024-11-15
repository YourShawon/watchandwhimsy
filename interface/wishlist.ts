// Interface for product media
export interface ProductMedia {
  url: string
  alt: string
}

// Interface for the product
export interface Product {
  productId: string
  title: string
  description: string
  price: number
  stock?: number
  media: ProductMedia[]
  quantity: number
}

// Define actions for favorites
export interface FavoritesActions {
  removeItem: (productId: string) => void
}

// Define actions for cart
export interface CartActions {
  addItem: (product: Product) => void
}

// Store Model for useStoreActions
export interface StoreModel {
  favorites: FavoritesActions
  addToCarts: CartActions
}
