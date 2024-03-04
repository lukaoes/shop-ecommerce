import styled from 'styled-components'

export const CartTotalLayout = styled.div`
  h2 {
    font-family: LufgaMedium;
    font-size: 20px;
    margin-bottom: 22px;
  }
`

export const CartTotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: transparent;
  border: 1px solid #000;
  border-radius: 20px;
  padding: 35px 30px;
  max-width: 400px;
  min-width: 329px;

  h3 {
    font-family: LufgaMedium;
    font-size: 16px;

    span {
      display: block;
      font-family: LufgaRegular;
      font-size: 13px;
      margin-bottom: 7px;
    }
  }

  h4 {
    font-family: LufgaRegular;
    font-size: 16px;
  }

  p {
    font-family: LufgaLight;
    font-size: 14px;
    margin-top: 10px;
    max-width: 250px;
  }

  a {
    font-family: LufgaMedium;
    font-size: 16px;
    display: block;
    text-decoration: none;
    width: 100%;
    background-color: #000;
    border: 1px solid #000;
    color: #fff;
    transition: all 0.3s ease-in-out;
    border-radius: 10px;
    text-align: center;
    padding: 15px 0;
    &:hover {
      color: #000;
      background-color: #fff;
    }
  }
  @media only screen and (max-width: 500px) {
    padding: 35px 15px;
    max-width: 400px;
    min-width: 274px;
  }
`

export const CartTotalInside = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 20px 0;
`

export const CartTotalAmount = styled.div`
  div:first-child {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 13px 0;
    border-bottom: 1px solid #ccc;
  }

  div:last-child {
    padding: 13px 0 29px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h4 {
      font-family: LufgaMedium;
      font-size: 16px;
    }
    span {
      font-family: LufgaMedium;
      font-size: 24px;
    }
  }
`
