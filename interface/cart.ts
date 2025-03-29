import { StaticImageData } from "next/image"

// Interface for location
export interface Location {
  name: string
  department: string
  cost: number
}

// Define the props interface for the SelectLocationForm
export interface SelectLocationFormProps {
  handleSelectLocation: (value: string) => void
  handleShippingPrice: (value: string) => void
  locations: Location[]
  errorMessage?: string
}

interface Media {
  url: string
  alt: string
}

// Interface for cart product
export interface Product {
  productId: string
  title: string
  description: string
  price: number
  quantity: number
  media: Media[]
}

// short-cart item

export interface ShortCartProps {
  image: StaticImageData, alt: string, name: string, price: number, quantity: number
}