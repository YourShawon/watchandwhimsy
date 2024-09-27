import Image from 'next/image'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { ArrowUp, Castle, CreditCard, RefreshCw } from 'lucide-react'
import Rating from '@/components/shared/rating-stars'
import { Button } from '@/components/ui/button'
import CategoryWidget from '@/components/shared/category-widget'
import NewProductWidget from '@/components/shared/new-products-widgets'
import FillByPriceWidget from '@/components/shared/fill-by-price-widget'
import { products } from '@/constants/product'
import RelatedProducts from '@/components/shared/related-products'
import AdditionalInfo from './_components/additional-info'
import DynamicBreadcrumb from '@/components/shared/dynamic-breadcrumb'

const product = products[0]

const applyDiscount = (prevPrice: number, discount: number): number => {
  const percentageOfPrice = 100 - discount
  const priceAfterDiscount = (prevPrice * percentageOfPrice) / 100
  return priceAfterDiscount
}

const ProductDetails = () => {
  const priceAfterDiscount = applyDiscount(product.price, product.discount)

  return (
    <div className='relative font-lato'>
      <div className='bg-white-2x'>
        <DynamicBreadcrumb />
      </div>

      <div className='mx-auto mt-[50px] w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px]'>
        <div className='flex flex-col px-3 lg:flex-row'>
          <div className='flex flex-col lg:w-3/4 lg:pr-3'>
            <div className='flex flex-col md:flex-row md:flex-wrap'>
              <div className='md:w-1/2'>
                <div>
                  <div className='md:mr-3'>
                    <Image
                      src={product.imgUrl[0]}
                      width={500}
                      height={500}
                      alt='Product Image'
                      className='w-full'
                    />
                  </div>
                </div>
                <div>{/* TODO: Image slider */}</div>

                <div className='mt-6 flex items-center gap-2'>
                  <p>Share this:</p>
                  <div></div>
                </div>
              </div>

              <div className='md:w-1/2 md:px-3'>
                <h2 className='font-spartan text-[30px] font-spartanSemiBold leading-[1.2] text-black-solid'>
                  {product.title}
                </h2>
                <div className='flex items-center justify-between py-4'>
                  <div className='text-slate-5x'>
                    Brand:
                    <Link href='/' className='ml-1 text-green-0x'>
                      {product.brand}
                    </Link>
                  </div>

                  <div className='flex items-center gap-2'>
                    <Rating
                      count={5}
                      size={24}
                      value={product.rating}
                      actionColor='#ffd700'
                    />
                    <span className='text-gray-3x'>
                      ({product.reviews} reviews)
                    </span>
                  </div>
                </div>

                <div className='my-4 border-y border-green-1x py-4'>
                  <ins className='no-underline'>
                    <span className='text-[30px] font-[600] leading-[30px] text-green-0x'>
                      ${priceAfterDiscount}
                    </span>
                  </ins>
                  <ins className='no-underline'>
                    <span className='ml-4 text-[16px] font-[500] text-gray-3x line-through'>
                      ${product.price}
                    </span>
                  </ins>
                  <span className='ml-4 text-[15px] leading-4 text-slate-5x'>
                    {product.discount}% Off
                  </span>
                </div>

                <div className=''>
                  <p className='leading-6 text-green-7x'>
                    {product.description}
                  </p>
                </div>

                <div className='my-8 text-[13px] leading-6 text-slate-5x'>
                  <ul className='space-y-[10px]'>
                    <li className='flex items-center gap-2'>
                      <Castle className='h-4 w-4 text-slate-5x' />
                      {product.warranty} Year Al Jazeera Brand Warranty
                    </li>
                    <li className='flex items-center gap-2'>
                      <RefreshCw className='h-4 w-4 text-slate-5x' />
                      30 Day Return Policy
                    </li>
                    <li className='flex items-center gap-2'>
                      <CreditCard className='h-4 w-4 text-slate-5x' />
                      Cash on Delivery available
                    </li>
                  </ul>
                </div>

                <div className='mb-5'>
                  {/* qty btn with add to cart btn */}
                  <div>{/* qty btn */}</div>
                  <div>
                    {/* add to cart btn */}
                    <Button variant='bgGreen'>Add to cart</Button>
                  </div>
                </div>

                <Separator />

                <div className='mt-5'>
                  {/* product meta data */}
                  {/* SKU, tags, availability: 8 items in stock */}
                  <ul className='space-y-1 text-[13px] font-[400] leading-6 text-slate-5x'>
                    <li>
                      SKU:{' '}
                      <span className='text-light-green'>{product.sku}</span>
                    </li>
                    <li>
                      Gender:{' '}
                      <span className='text-light-green'>{product.gender}</span>
                    </li>
                    <li>
                      Availability:{' '}
                      <span className='text-light-green'>
                        {product.stock} items In Stock
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='my-12'>
              <AdditionalInfo />
            </div>

            <RelatedProducts />
          </div>

          <div className='w-full lg:w-1/4'>
            {/* Right side widgets */}
            <CategoryWidget />
            <FillByPriceWidget />
            <NewProductWidget />
          </div>
        </div>
      </div>

      <Button variant='bgGreen' className='fixed bottom-2 right-2'>
        <ArrowUp />
      </Button>
    </div>
  )
}

export default ProductDetails
