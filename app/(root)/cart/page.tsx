import CartPage from '@/components/shared/cart/cart'
import CartMobileView from '@/components/shared/cart/cartMobile'
import { idGenerator } from '@/lib/utils'
import image from '@/public/uploads/6.png'


function Cart() {
  return (
    <div>
      <div className='hidden sm:block'>
        <CartPage />
      </div>
      <div className='sm:hidden'>
        <CartMobileView />
      </div>
    </div>
  )
}

export default Cart
