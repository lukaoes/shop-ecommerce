import { useState } from 'react'
import {
  CardProdCode,
  CardProdLeft,
  CardProdRight,
  CartProd,
  CartProdsListHeader,
  CartProdsListLayout,
} from './styled'
import {
  CartModalProductButton,
  CartModalStock,
} from 'components/ui/CartModal/styled'
import { WishlistXButton } from 'pages/Wishlist/styled'

const products = [
  {
    image:
      'https://d2fwbsa91kuigh.cloudfront.net/media/wysiwyg/2023-Q1-Haircare-Spend-More-Save_more-CT10_2.jpg',
    title: 'Shot Slad Curly Woman Striped Pants Purple',
    price: 40,
  },
  {
    image:
      'https://d2fwbsa91kuigh.cloudfront.net/media/wysiwyg/2023-Q1-RAMADAN-FEEL-E-MUSK-PRODUCT-CT9_1__16.jpg',
    title: 'Curly Girl Beautiful Dress',
    price: 129,
  },
  {
    image:
      'https://d2fwbsa91kuigh.cloudfront.net/media/wysiwyg/2023-Q1-Haircare-Spend-More-Save_more-CT10_2.jpg',
    title: 'Shot Slad Curly Woman Striped Pants Purple',
    price: 40,
  },
  {
    image:
      'https://d2fwbsa91kuigh.cloudfront.net/media/wysiwyg/2023-Q1-RAMADAN-FEEL-E-MUSK-PRODUCT-CT9_1__16.jpg',
    title: 'Curly Girl Beautiful Dress',
    price: 129,
  },
]

const CartProdsList = () => {
  const [number, setNumber] = useState<number>(1)

  const change = (minus: boolean) => {
    if (minus && number > 1) {
      setNumber(number - 1)
    }
    if (!minus) {
      setNumber(number + 1)
    }
  }
  return (
    <CartProdsListLayout>
      <CartProdsListHeader>
        <span>Product</span>
        <div>
          <span>Price</span>
          <span>Quantity</span>
          <span>Subtotal</span>
        </div>
      </CartProdsListHeader>
      {products.map((item, index) => (
        <CartProd key={`card-prods-list-generate-${index}`}>
          <CardProdLeft>
            <img src={item.image} alt="prod" />
            <h2>{item.title}</h2>
          </CardProdLeft>
          <CardProdRight>
            <h5>${item.price}</h5>
            <CartModalStock>
              <CartModalProductButton onClick={() => change(true)}>
                -
              </CartModalProductButton>
              <span>{number}</span>
              <CartModalProductButton onClick={() => change(false)}>
                +
              </CartModalProductButton>
            </CartModalStock>
            <h5>${item.price * number}</h5>
            <WishlistXButton>
              <div></div>
              <div></div>
            </WishlistXButton>
          </CardProdRight>
        </CartProd>
      ))}
      <CardProdCode>
        <div>
          <input type="text" name="text" placeholder="Coupon Code" />
          <span>Apply Coupon</span>
        </div>
        <button>UPDATE CART</button>
      </CardProdCode>
    </CartProdsListLayout>
  )
}

export default CartProdsList
