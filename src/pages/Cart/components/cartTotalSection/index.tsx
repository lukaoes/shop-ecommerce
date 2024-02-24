import { Link } from 'react-router-dom'
import {
  CartTotalAmount,
  CartTotalContainer,
  CartTotalInside,
  CartTotalLayout,
} from './styled'
import AirPlane from '../../../../assets/images/AirPlane.svg'
import BoxTick from '../../../../assets/images/BoxTick.svg'
import CheckCircle from '../../../../assets/images/CheckCircle.svg'

const CartTotalSection = () => {
  return (
    <CartTotalLayout>
      <h2>Cart Total</h2>
      <CartTotalContainer>
        <CartTotalInside>
          <h4>Bank Offer 5% Cashback</h4>
        </CartTotalInside>
        <CartTotalInside>
          <img src={AirPlane} alt="airplane" />
          <h3>
            <span>Free</span> Shipping
          </h3>
        </CartTotalInside>
        <CartTotalInside>
          <img src={BoxTick} alt="box-tick" />
          <div>
            <h3>Enjoy The Product</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
          </div>
        </CartTotalInside>
        <CartTotalAmount>
          <div>
            <img src={CheckCircle} alt="check" />
            <h3>You will save $102 on this order</h3>
          </div>
          <div>
            <h4>Total Amount</h4>
            <span>$125</span>
          </div>
        </CartTotalAmount>
        <Link to="/checkout">PLACE ORDER</Link>
      </CartTotalContainer>
    </CartTotalLayout>
  )
}

export default CartTotalSection
