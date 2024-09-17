import WishlistLarge from './_components/large/wishlistItems'
import WishlistSmall from './_components/small/wishlistItems'

function Wishlist() {
  return (
    <div className='py-10'>
      <div className='hidden sm:block'>
        <WishlistLarge />
      </div>
      <div className='sm:hidden'>
        <WishlistSmall />
      </div>
    </div>
  )
}

export default Wishlist
