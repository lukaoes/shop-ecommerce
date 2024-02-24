import styled from 'styled-components'

export const CartProdsListLayout = styled.div``

export const CartProdsListHeader = styled.div`
  font-family: LufgaMedium;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  padding: 0 0 20px 0;
  border-bottom: 1px solid #ccc;
  span {
    display: inline-block;
  }
  div {
    span:first-child {
      width: 95px;
    }
    span:nth-child(2) {
      width: 172px;
    }
    span:last-child {
      width: 140px;
    }
  }
`

export const CartProd = styled.div`
  display: flex;
  gap: 100px;
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
  img {
    height: 80px;
    width: 80px;
    border-radius: 30px;
    object-fit: cover;
  }
  h2 {
    font-family: LufgaMedium;
    font-size: 18px;
    width: 260px;
    max-height: 46px;
  }
`

export const CardProdLeft = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`

export const CardProdRight = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  h5 {
    width: 53px;
    text-align: center;
    font-family: LufgaMedium;
    font-size: 16px;
  }
  h5:first-child {
    opacity: 0.5;
  }
  span {
    font-family: LufgaRegular;
    font-size: 15px;
    display: inline-block;
    width: 31px;
    height: 31px;
    border: 1px solid #000;
    border-radius: 100%;
    line-height: 31px;
  }
`

export const CardProdCode = styled.div`
  margin-top: 32px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 50px;
  div {
    position: relative;
    input {
      font-family: LufgaRegular;
      font-size: 15px;
      padding-left: 20px;
      border: 1px solid #000;
      border-radius: 10px;
      background-color: transparent;
      width: 400px;
      height: 46px;
    }
    span {
      font-family: LufgaMedium;
      font-size: 15px;
      position: absolute;
      right: 23px;
      top: 17px;
      cursor: pointer;
    }
  }

  button {
    font-family: LufgaMedium;
    font-size: 16px;
    background-color: #000;
    color: #fff;
    padding: 0 35px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    border-radius: 10px;

    &:hover {
      background-color: #fff;
      color: #000;
    }
  }
`
