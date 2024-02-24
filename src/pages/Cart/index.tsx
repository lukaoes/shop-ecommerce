import SecondHeader from 'components/layout/secondHeader'
import CartHeader from '../../assets/images/CartHeader.jpg'
import { CartContainer } from './styled'
import CartTotalSection from './components/cartTotalSection'
import CartProdsList from './components/cartProdsList'

const Cart = () => {
  const secondHeaderInfo = {
    title: 'Cart',
    link: '/cart',
    image: `${CartHeader}`,
  }
  return (
    <>
      <SecondHeader {...secondHeaderInfo} />
      <CartContainer>
        <CartProdsList />
        <CartTotalSection />
      </CartContainer>
    </>
  )
}

export default Cart
