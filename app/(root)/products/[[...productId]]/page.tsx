import DynamicBreadcrumb from './_components/dynamic-breadcrumb'
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

const product = products[0];

const applyDiscount = (prevPrice: number, discount: number): number => {
  const percentageOfPrice = 100 - discount;
  const priceAfterDiscount = (prevPrice * percentageOfPrice) / 100;
  return priceAfterDiscount;
}

const ProductDetails = () => {
  const priceAfterDiscount = applyDiscount(product.price, product.discount);

  return (
    <div className='font-lato relative'>
      <nav className='flex items-center justify-center p-5 bg-emerald-100 border-b-2 border-b-emerald-500'>
        Navbar
      </nav>

      <div className='bg-white-2x'>
        <DynamicBreadcrumb />
      </div>

      <div className=' mx-auto w-full mt-[50px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px]'>
        <div className='flex flex-col px-3 lg:flex-row'>
          <div className='flex flex-col lg:pr-3 lg:w-3/4'>
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
                <div>
                  {/* TODO: Image slider */}
                </div>

                <div className='mt-6 flex items-center gap-2'>
                  <p>Share this:</p>
                  <div>
                  </div>
                </div>
              </div>

              <div className='md:px-3 md:w-1/2 '>
                <h2 className='font-spartan font-spartanSemiBold text-black-solid leading-[1.2] text-[30px]'>
                  {product.title}
                </h2>
                <div className='flex justify-between items-center py-4'>
                  <div className='text-slate-5x'>
                    Brand:  
                    <Link href="/" className='ml-1 text-green'>{product.brand}</Link>
                  </div>

                  <div className='flex gap-2 items-center'>
                    <Rating 
                      count={5}
                      size={24}
                      value={product.rating}
                      actionColor='#ffd700'
                    />
                    <span className='text-gray-3x'>({product.reviews} reviews)</span>
                  </div>
                </div>

                <div className='py-4 border-y border-green-1x my-4'>
                  <ins className='no-underline'>
                    <span className='text-green font-[600] text-[30px] leading-[30px]'>${priceAfterDiscount}</span>
                  </ins>
                  <ins className='no-underline'>
                    <span className='font-[500] text-gray-3x text-[16px] ml-4 line-through'>${product.price}</span>
                  </ins>
                  <span className='ml-4 text-[15px] leading-4 text-slate-5x'>{product.discount}% Off</span>
                </div>

                <div className=''>
                  <p className='leading-6 text-green-7x'>{product.description}</p>
                </div>

                <div className='my-8 text-[13px] leading-6 text-slate-5x'>
                  <ul className='space-y-[10px]'>
                    <li className='flex gap-2 items-center'>
                      <Castle className='text-slate-5x w-4 h-4'/>
                      {product.warranty} Year Al Jazeera Brand Warranty
                    </li>
                    <li className='flex gap-2 items-center'>
                      <RefreshCw className='text-slate-5x w-4 h-4'/>
                      30 Day Return Policy
                    </li>
                    <li className='flex gap-2 items-center'>
                      <CreditCard className='text-slate-5x w-4 h-4'/>
                      Cash on Delivery available
                    </li>
                  </ul>
                </div>

                <div className='mb-5'>
                  {/* qty btn with add to cart btn */}
                  <div>
                    {/* qty btn */}
                  </div>
                  <div>
                    {/* add to cart btn */}
                    <Button variant="bgGreen">
                      Add to cart
                    </Button>
                  </div>
                </div>

                <Separator />

                <div className='mt-5'>
                  {/* product meta data */}
                  {/* SKU, tags, availability: 8 items in stock */}
                  <ul className='space-y-1 text-[13px] leading-6 font-[400] text-slate-5x'>
                    <li>SKU: <span className='text-light-green'>{product.sku}</span></li>
                    <li>Gender: <span className='text-light-green'>{product.gender}</span></li>
                    <li>Availability: <span className='text-light-green'>{product.stock} items In Stock</span></li>
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


      <Button variant="bgGreen" className='bottom-2 right-2 fixed'>
        <ArrowUp />
      </Button>
    </div>
  )
}

export default ProductDetails