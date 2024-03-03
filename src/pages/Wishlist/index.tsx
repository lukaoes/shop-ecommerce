import SecondHeader from 'components/layout/secondHeader'
import {
  WishlistHeader,
  WishlistLayout,
  WishlistProduct,
  WishlistProductLeft,
  WishlistProductRight,
  WishlistXButton,
} from './styled'
import WishlistLogo from '../../assets/images/WishlistLogo.jpg'

const wishlistProducts = [
  {
    image:
      'https://d2fwbsa91kuigh.cloudfront.net/media/wysiwyg/2023-Q1-Haircare-Spend-More-Save_more-CT10_2.jpg',
    title: 'Distressed Denim..',
    price: 40.0,
    stock: true,
  },
  {
    image:
      'https://d2fwbsa91kuigh.cloudfront.net/media/wysiwyg/2023-Q1-RAMADAN-FEEL-E-MUSK-PRODUCT-CT9_1__16.jpg',
    title: 'Floral Dress..',
    price: 97.3,
    stock: false,
  },
  {
    image:
      'https://d2fwbsa91kuigh.cloudfront.net/media/wysiwyg/2023-Q1-Haircare-Spend-More-Save_more-CT10_2.jpg',
    title: 'Distressed Denim..',
    price: 40.0,
    stock: true,
  },
  {
    image:
      'https://d2fwbsa91kuigh.cloudfront.net/media/wysiwyg/2023-Q1-RAMADAN-FEEL-E-MUSK-PRODUCT-CT9_1__16.jpg',
    title: 'Floral Dress..',
    price: 97.3,
    stock: false,
  },
]

const Wishlist = () => {
  const secondHeaderInfo = {
    title: 'Wishlist',
    link: '/wishlist',
    image: `${WishlistLogo}`,
  }
  return (
    <>
      <SecondHeader {...secondHeaderInfo} />
      <WishlistLayout>
        <WishlistHeader>
          <span className="product">Products</span>
          <div>
            <span>Price</span>
          </div>
        </WishlistHeader>
        {wishlistProducts.map((item, index) => (
          <WishlistProduct key={`wishlist-product-${index}`}>
            <WishlistProductLeft>
              <WishlistXButton>
                <div></div>
                <div></div>
              </WishlistXButton>
              <img src={item.image} alt="product" />
              <p>{item.title}</p>
            </WishlistProductLeft>
            <WishlistProductRight>
              <span>${item.price}</span>
              <div>Add To Cart</div>
            </WishlistProductRight>
          </WishlistProduct>
        ))}
      </WishlistLayout>
    </>
  )
}

export default Wishlist
