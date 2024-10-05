'use client'

import { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem
} from '@/components/ui/pagination'
import ProductCard from '@/components/shared/product/product-card'
import { Button } from '@/components/ui/button'
import { CiGrid31, CiGrid41 } from 'react-icons/ci'

// import { response as products } from '@/constants/products'
import { Product } from '@/interface/products'
import { useFetchProducts } from '@/components/shared/product/hooks/useFetchProducts'
import useSortProducts from '@/components/shared/product/hooks/useSortProducts'
import ProductSkeleton from '@/components/shared/product/skeleton'

function ProductsInShop() {
  const { products, fetchedProducts, loading, error, setProducts } =
    useFetchProducts()

  const [currentPage, setCurrentPage] = useState(1)

  const INIT_SHOW_PRODUCTS = 10 // 9 products per page
  const [showProducts, setShowProducts] = useState(INIT_SHOW_PRODUCTS)

  const {
    sortByLowToHighPrice,
    sortByHighToLowPrice,
    sortByReleaseDate,
    sortByRating
  } = useSortProducts()

  const handleSorting = (value: string) => {
    const sortedProducts = [...products]
    switch (value) {
      case 'lowToHighPrice':
        setProducts(sortedProducts.sort(sortByLowToHighPrice))
        break
      case 'highToLowPrice':
        setProducts(sortedProducts.sort(sortByHighToLowPrice))
        break
      case 'releaseDate':
        setProducts(sortedProducts.sort(sortByReleaseDate))
        break
      case 'rating':
        setProducts(sortedProducts.sort(sortByRating))
        break
      default:
        setProducts(fetchedProducts)
    }
    setCurrentPage(1)
  }

  // Pagination logic
  const indexOfLastProduct = currentPage * showProducts
  const indexOfFirstProduct = indexOfLastProduct - showProducts

  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  )

  const totalPages = Math.ceil(products.length / showProducts)

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1)
    }
  }

  if (error || loading || products.length === 0) {
    return (
      <div className='lg:col-span-9'>
        <div className='grid grid-cols-1 justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-5'>
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
        </div>
      </div>
    )
  }

  return (
    <div className='lg:col-span-9'>
      <div className='mb-6 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between'>
        <h2 className='text-muted-foreground'>
          We found{' '}
          <span className='font-semibold text-green-0x'>{products.length}</span>{' '}
          {`${products.length === 1 ? 'item' : 'items'}`} for you!
        </h2>

        <div className='flex flex-col gap-2 sm:flex-row'>
          {/* Pages Showing */}
          <Select
            defaultValue={INIT_SHOW_PRODUCTS.toString()}
            onValueChange={value => setShowProducts(Number(value))}
          >
            <SelectTrigger className='w-[180px] rounded-full text-muted-foreground'>
              <CiGrid41 className='h-5 w-5' />
              <SelectValue placeholder='Show' />
            </SelectTrigger>
            <SelectContent className='bg-white'>
              <SelectItem
                className='cursor-pointer focus:bg-green-0x focus:text-white'
                value={'10'}
              >
                Show: 10
              </SelectItem>
              <SelectItem
                className='cursor-pointer focus:bg-green-0x focus:text-white'
                value={'20'}
              >
                Show: 20
              </SelectItem>
              <SelectItem
                className='cursor-pointer focus:bg-green-0x focus:text-white'
                value={'30'}
              >
                Show: 30
              </SelectItem>
              <SelectItem
                className='cursor-pointer focus:bg-green-0x focus:text-white'
                value={'50'}
              >
                Show: 50
              </SelectItem>
            </SelectContent>
          </Select>

          {/* Sorting */}
          <Select
            defaultValue='featured'
            onValueChange={value => handleSorting(value)}
          >
            <SelectTrigger className='w-[200px] rounded-full text-muted-foreground'>
              <CiGrid31 className='h-6 w-6' />
              <SelectValue placeholder='Sort by' />
            </SelectTrigger>
            <SelectContent className='bg-white'>
              <SelectItem
                className='cursor-pointer focus:bg-green-0x focus:text-white'
                value='featured'
              >
                Sort by: Featured
              </SelectItem>
              <SelectItem
                className='cursor-pointer focus:bg-green-0x focus:text-white'
                value='lowToHighPrice'
              >
                Sort by: Price: Low to High
              </SelectItem>
              <SelectItem
                className='cursor-pointer focus:bg-green-0x focus:text-white'
                value='highToLowPrice'
              >
                Sort by: Price: High to Low
              </SelectItem>
              <SelectItem
                className='cursor-pointer focus:bg-green-0x focus:text-white'
                value='releaseDate'
              >
                Sort by: Release Date
              </SelectItem>
              <SelectItem
                className='cursor-pointer focus:bg-green-0x focus:text-white'
                value='rating'
              >
                Sort by: Rating
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Products */}
      {products.length !== 0 && (
        <div className='grid grid-cols-1 justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-5'>
          {currentProducts.map((product: Product) => (
            <ProductCard key={product.productId} product={product} />
          ))}
        </div>
      )}

      {/* Pagination */}
      <Pagination className='my-12 text-sm'>
        <PaginationContent>
          {/* prev button */}
          {currentPage === 1 || (
            <PaginationItem>
              <Button size={'sm'} variant='bgGreen' onClick={handlePrevPage}>
                Prev
              </Button>
            </PaginationItem>
          )}
          {/* first number */}
          {currentPage !== 1 && (
            <PaginationItem className='hidden sm:block'>
              <Button
                size={'sm'}
                variant={'ghost'}
                onClick={() => setCurrentPage(1)}
              >
                {1}
              </Button>
            </PaginationItem>
          )}
          {/* first ellipsis */}
          {currentPage > 3 && (
            <PaginationItem className='hidden sm:block'>
              <PaginationEllipsis />
            </PaginationItem>
          )}
          {/* prev number of current */}
          {currentPage > 2 && (
            <PaginationItem>
              <Button
                size={'sm'}
                variant={'ghost'}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                {currentPage - 1}
              </Button>
            </PaginationItem>
          )}
          {/* current number */}
          <PaginationItem>
            <Button
              size={'sm'}
              variant={'bgGreen'}
              onClick={() => setCurrentPage(currentPage)}
            >
              {currentPage}
            </Button>
          </PaginationItem>
          {/* next number of current */}
          {currentPage < totalPages && (
            <PaginationItem>
              <Button
                size={'sm'}
                variant={'ghost'}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                {currentPage + 1}
              </Button>
            </PaginationItem>
          )}
          {/* last ellipsis */}
          {currentPage < totalPages - 2 && (
            <PaginationItem className='hidden sm:block'>
              <PaginationEllipsis />
            </PaginationItem>
          )}
          {/* last number */}
          {currentPage < totalPages - 1 && (
            <PaginationItem className='hidden sm:block'>
              <Button
                size={'sm'}
                variant={'ghost'}
                onClick={() => setCurrentPage(totalPages)}
              >
                {totalPages}
              </Button>
            </PaginationItem>
          )}
          {/* lase number */}
          {currentPage === totalPages || (
            <PaginationItem>
              <Button
                size={'sm'}
                variant='bgGreen'
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  )
}

export default ProductsInShop
