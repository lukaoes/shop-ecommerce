import {
  WishlistHeader,
  WishlistLayout,
  WishlistProduct,
  WishlistProductLeft,
  WishlistXButton,
} from './styled'

const Wishlist = () => {
  return (
    <WishlistLayout>
      <WishlistHeader>
        <span>Products</span>
        <span>Price</span>
        <span>Stock</span>
      </WishlistHeader>
      <WishlistProduct>
        <WishlistProductLeft>
          <WishlistXButton>
            <div></div>
            <div></div>
          </WishlistXButton>
          <img
            src="https://d2fwbsa91kuigh.cloudfront.net/media/wysiwyg/2023-Q1-Haircare-Spend-More-Save_more-CT10_2.jpg"
            alt="product"
          />
          <p>Distressed Denim..</p>
        </WishlistProductLeft>
      </WishlistProduct>
    </WishlistLayout>
  )
}

export default Wishlist
