import CartPage from '@/app/(root)/cart/_components/large/cart'
import CartMobileView from '@/app/(root)/cart/_components/small/cartMobile'

function Cart() {
  return (
    <>
      <div className='hidden text-[#222] sm:block'>
        <CartPage />
      </div>
      <div className='text-[#222] sm:hidden'>
        <CartMobileView />
      </div>
    </>
  )
}

export default Cart
