import styled from 'styled-components'

export const CheckoutLayout = styled.div`
  max-width: 1280px;
  margin: 90px auto;
  display: flex;
  gap: 30px;
  padding: 0 10px;
  @media only screen and (max-width: 800px) {
    max-width: 400px;
    flex-wrap: wrap;
  }
`

export const CheckoutLeftContainer = styled.div`
  width: 850px;
  h1 {
    font-family: LufgaMedium;
    font-size: 20px;
    margin-bottom: 22px;
  }
  h2 {
    font-family: LufgaMedium;
    font-size: 16px;
    margin-bottom: 10px;
  }
  form input {
    box-sizing: border-box;
    width: 100%;
    padding: 15px 20px;
    border: 1px solid #000;
    border-radius: 10px;
    font-family: LufgaRegular;
    font-size: 14px;
    margin-bottom: 25px;
    background-color: transparent;
  }
  form > div {
    display: flex;
    gap: 30px;
    width: 100%;
    div {
      width: 100%;
    }
    input {
      width: 100%;
    }
  }
  textarea {
    box-sizing: border-box;
    width: 100%;
    height: 150px;
    padding: 15px 20px;
    border: 1px solid #000;
    border-radius: 10px;
    font-family: LufgaRegular;
    font-size: 14px;
    margin-bottom: 25px;
    background-color: transparent;
  }
`

export const CheckoutRightContainer = styled.div`
  max-width: 400px;
  box-sizing: border-box;
  padding: 30px;
  border: 1px solid #000;
  border-radius: 25px;
  /* h1 {
    font-family: LufgaMedium;
    font-size: 20px;
    margin-bottom: 22px;
  } */
  h3 {
    font-family: LufgaMedium;
    font-size: 16px;
  }
`

export const CheckoutProduct = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 16px 0;
  margin: 0 0 16px 0;
  border-bottom: 1px solid #ccc;
  img {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    object-fit: cover;
  }
  span {
    font-family: LufgaMedium;
    font-size: 15px;
  }
  div {
    display: flex;
    align-items: center;
    gap: 15px;
  }
`

export const CheckoutSubtotal = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
`

export const CheckoutShippingType = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 24px;
  label {
    font-family: LufgaMedium;
    font-size: 14px;
    line-height: 30px;
    margin-left: 10px;
    cursor: pointer;
  }
  h3 {
    margin-bottom: 10px;
  }
  div:last-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  span {
    font-family: LufgaMedium;
    font-size: 15px;
  }
`

export const CheckoutTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;
  span {
    font-family: LufgaMedium;
    font-size: 24px;
    line-height: 20px;
  }
`

export const CheckoutPayment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 15px;
  .paypal-payment {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  div {
    display: flex;
    gap: 10px;
  }
  label {
    cursor: pointer;
  }
`

export const CheckoutPrivacy = styled.div`
  margin-bottom: 15px;
  p {
    font-family: LufgaLight;
    font-size: 12px;
    line-height: 20px;
    margin-bottom: 15px;
  }
  input {
    display: block;
  }
  label {
    font-family: LufgaRegular;
    font-size: 13px;
    line-height: 20px;
    max-width: 275px;
    margin-left: 10px;
    cursor: pointer;
  }
  div {
    display: flex;
  }
`

export const CheckoutButton = styled.button`
  padding: 15px 0;
  font-family: LufgaMedium;
  font-size: 16px;
  color: #fff;
  background-color: #000;
  border-radius: 10px;
  border: 1px solid #000;
  transition: all 0.3s ease-in-out;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: transparent;
    color: #000;
  }
`
