import WishlistItems from './_components/wishlist'

function Wishlist() {
  return (
    <div className='py-10'>
      <div className='hidden sm:block'>
        <WishlistItems large={true} />
      </div>
      <div className='sm:hidden'>
        <WishlistItems large={false} />
      </div>
    </div>
  )
}

export default Wishlist
