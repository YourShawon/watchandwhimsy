import { useState, useEffect } from 'react'
import { apiGet, saveToLocalStore, getFromLocalStore } from '@/utils/api'

export const useFetchProducts = () => {
  const [products, setProducts] = useState([])

  // To remember the first time the data came.
  const [fetchedProducts, setFetchedProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const LOCAL_STORE_PRODUCTS_KEY =
    process.env.NEXT_PUBLIC_LOCAL_STORE_PRODUCTS_KEY

  const fetchProducts = async () => {
    try {
      setLoading(true)

      const storedProducts = getFromLocalStore(
        LOCAL_STORE_PRODUCTS_KEY as string
      )

      if (storedProducts) {
        const products = storedProducts.map((item: any) => ({
          ...item,
          price: item.originalPrice - (item.originalPrice * item.discount) / 100
        }))
        setProducts(products)
        // As the data was after the first fetch. without sort.
        setFetchedProducts(products)
      } else {
        const data = await apiGet('/products', {
          'x-mock-response-code': '500'
        })
        const products = data.products.map((item: any) => ({
          ...item,
          price: item.originalPrice - (item.originalPrice * item.discount) / 100
        }))
        saveToLocalStore(LOCAL_STORE_PRODUCTS_KEY as string, data.products)
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Now return setProducts along with other state variables
  return { products, fetchedProducts, loading, error, setProducts }
}
