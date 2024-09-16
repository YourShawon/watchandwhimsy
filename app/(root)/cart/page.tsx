import CartPage from '@/app/(root)/cart/_components/cart'
import CartMobileView from '@/app/(root)/cart/_components/cartMobile'

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
