import { CheckoutLeftContainer } from '../styles'

const CheckoutLeft = () => {
  return (
    <CheckoutLeftContainer>
      <h1>Billing Details</h1>
      <form action="/">
        <div>
          <div>
            <h2>First Name</h2>
            <input type="text" name="text" />
          </div>
          <div>
            <h2>Last Name</h2>
            <input type="text" name="text" />
          </div>
        </div>
        <h2>Country / Region</h2>
        <input type="text" name="text" />
        <h2>City Name</h2>
        <input type="text" name="text" />
        <h2>Street Address</h2>
        <input type="text" name="text" />
        <h2>Postal / ZIP Code</h2>
        <input type="number" name="number" />
        <h2>Phone</h2>
        <input type="number" name="number" />
        <h2>Email Address</h2>
        <input type="mail" name="mail" />
        <h2>Order Notes (optional)</h2>
        <textarea placeholder="Notes about your order, e.g. special notes for delivery." />
      </form>
    </CheckoutLeftContainer>
  )
}

export default CheckoutLeft
