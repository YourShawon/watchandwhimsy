import { useState, useEffect } from 'react'
import { apiGet, getFromCache, saveToCache } from '@/utils/api'

export const useFetchProducts = () => {
  const [products, setProducts] = useState([])
  const [fetchedProducts, setFetchedProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const cachedProducts = getFromCache('cashedProducts')

      if (cachedProducts) {
        const products = cachedProducts.map((item: any) => ({
          ...item,
          price: item.originalPrice - (item.originalPrice * item.discount) / 100
        }))
        setProducts(products)
        setFetchedProducts(products)
      } else {
        const data = await apiGet('/products0', {
          'x-mock-response-code': '200'
        })
        const products = data.products.map((item: any) => ({
          ...item,
          price: item.originalPrice - (item.originalPrice * item.discount) / 100
        }))
        saveToCache('cashedProducts', data.products)
        setProducts(products)
        setFetchedProducts(products)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err))
      console.error('Error fetching products:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  // Now return setProducts along with other state variables
  return { products, fetchedProducts, loading, error, setProducts }
}
