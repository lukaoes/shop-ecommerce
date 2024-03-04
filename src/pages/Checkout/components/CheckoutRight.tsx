import {
  CheckoutButton,
  CheckoutPayment,
  CheckoutPrivacy,
  CheckoutProduct,
  CheckoutRightContainer,
  CheckoutShippingType,
  CheckoutSubtotal,
  CheckoutTotal,
} from '../styles'
import paypalCheckout from '../../../assets/images/paypalCheckout.png'

const CheckoutRight = () => {
  return (
    <CheckoutRightContainer>
      <CheckoutProduct>
        <div>
          <img
            src="https://d2fwbsa91kuigh.cloudfront.net/media/wysiwyg/2023-Q1-Haircare-Spend-More-Save_more-CT10_2.jpg"
            alt="product"
          />
          <span>Wooden Water Bottles</span>
        </div>
        <h3>$40</h3>
      </CheckoutProduct>
      <CheckoutProduct>
        <div>
          <img
            src="https://d2fwbsa91kuigh.cloudfront.net/media/wysiwyg/2023-Q1-RAMADAN-FEEL-E-MUSK-PRODUCT-CT9_1__16.jpg"
            alt="product"
          />
          <span>Wooden Cup</span>
        </div>
        <h3>$40</h3>
      </CheckoutProduct>
      <CheckoutSubtotal>
        <h3>Subtotal</h3>
        <h3>$100</h3>
      </CheckoutSubtotal>
      <CheckoutShippingType>
        <h3>Shipping</h3>
        <div>
          <input
            type="radio"
            id="FreeShipping"
            name="shipping"
            value="FreeShipping"
            checked
          />
          <label htmlFor="FreeShipping">Free shipping</label>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="FlatRate"
              name="shipping"
              value="FlatRate"
            />
            <label htmlFor="FlatRate">Flat Rate:</label>
          </div>
          <span>$25.75</span>
        </div>
      </CheckoutShippingType>
      <CheckoutTotal>
        <h3>Total</h3>
        <span>$125.75</span>
      </CheckoutTotal>
      <CheckoutPayment>
        <div>
          <input
            type="radio"
            id="banktransfer"
            name="payment"
            value="banktransfer"
            checked
          />
          <label htmlFor="banktransfer">
            <h3>Direct bank transfer</h3>
          </label>
        </div>
        <div>
          <input type="radio" id="cash" name="payment" value="cash" />
          <label htmlFor="cash">
            <h3>Cash on delivery</h3>
          </label>
        </div>
        <div>
          <input type="radio" id="paypal" name="payment" value="cash" />
          <label htmlFor="paypal" className="paypal-payment">
            <h3>Paypal</h3> <img src={paypalCheckout} alt="paypal" />
          </label>
        </div>
      </CheckoutPayment>
      <CheckoutPrivacy>
        <p>
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our privacy policy.
        </p>
        <div>
          <input type="checkbox" id="agree" name="agree" value="agree" />
          <label htmlFor="agree">
            I have read and agree to the website terms and conditions
          </label>
        </div>
      </CheckoutPrivacy>
      <CheckoutButton>PLACE ORDER</CheckoutButton>
    </CheckoutRightContainer>
  )
}

export default CheckoutRight
