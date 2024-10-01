'use client'

import { Button } from '@/components/ui/button'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Eye, Heart, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useStoreActions } from 'easy-peasy'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { formatAmount } from '@/lib/utils'
import { Product } from '@/interface/products'
import { response } from '@/constants/products'
import ProductCard from './product-card'

function Products() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    setProducts(response)
  }, [])

  return (
    <div className='mx-auto px-4 py-8 sm:container'>
      <h1 className='mb-4 text-2xl font-bold text-black-solid'>Products</h1>

      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {products.map(product => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products
