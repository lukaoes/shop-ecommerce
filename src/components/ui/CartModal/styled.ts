import styled from 'styled-components'

export const CartModalContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 5;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease-in-out;

  .cart {
    background-color: #ffedd4;
    position: absolute;
    right: -500px;
    top: 0;
    height: 100vh;
    background: #fffaf3;
    z-index: 7;
    max-width: 485px;
    transition: right 0.3s ease-in-out;

    &.open {
      right: 0;
    }
  }

  &.open {
    opacity: 1;
    pointer-events: all;
  }
`

export const CartModalLayout = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 6;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.9);
`

export const CartModalInsideContainer = styled.div`
  padding: 50px 80px;
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 770px) {
    padding: 50px 30px;
  }
`

export const CartModalProductsHolder = styled.div`
  max-height: 485px;
  margin-bottom: 20px;
  overflow: auto;
`

export const CartModalHeader = styled.div`
  position: relative;
  border-bottom: 3px solid #000;
  margin-bottom: 20px;
  padding-bottom: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    max-width: 115px;
    font-family: LufgaRegular;
    font-size: 16px;
  }

  div {
    width: 24px;
    height: 24px;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 9px;
    border-radius: 100%;
    span {
      font-family: LufgaMedium;
      font-size: 14px;
      color: #fff;
    }
  }

  svg {
    position: absolute;
    top: -20px;
    right: 420px;
    cursor: pointer;
  }
  @media only screen and (max-width: 540px) {
    svg {
      display: none;
    }
  }
`

export const CartModalFooter = styled.div`
  margin-top: auto;
  margin: auto auto 0 auto;
  font-family: LufgaRegular;
  font-size: 16px;
  div:first-child {
    display: flex;
    gap: 20px;
    h5 {
      max-width: 225px;
      margin-bottom: 2px;
    }
  }

  a {
    text-align: center;
    display: block;
    text-decoration: none;
    border-radius: 10px;
    cursor: pointer;
    border: 1px solid #000;
    width: 100%;
    padding: 18px 0;
    transition: all 0.3s ease-in-out;
    font-family: LufgaRegular;
    font-size: 16px;
  }

  a:first-child {
    background-color: transparent;
    margin: 40px 0 20px 0;
    &:hover {
      background-color: #000;
      color: #fff;
    }
  }
  a:last-child {
    background-color: #000;
    color: #fff;

    &:hover {
      background-color: transparent;
      color: #000;
    }
  }

  @media only screen and (max-width: 460px) {
    margin: 0;
    margin-top: 10px;
    div:first-child {
      svg,
      img {
        display: none;
      }
    }
    a:first-child {
      background-color: transparent;
      margin: 10px 0 10px 0;
    }
  }
`

export const CardModalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: LufgaMedium;
  font-size: 18px;
  margin-bottom: 10px;
`

export const CartModalProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
  img {
    border-radius: 10px;
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  h3 {
    overflow: hidden;
    max-width: 162px;
    font-family: LufgaRegular;
    font-size: 16px;
    line-height: 150%;
  }

  svg {
    cursor: pointer;
  }

  @media only screen and (max-width: 360px) {
    h3 {
      width: 100px;
      text-align: center;
    }
  }
`

export const CartModalStock = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  span {
    width: 16px;
    text-align: center;
  }

  h5 {
    font-family: LufgaMedium;
    font-size: 16px;
    display: inline-block;
  }

  @media only screen and (max-width: 380px) {
    flex-direction: column;
    gap: 2px;
  }
`

export const CartModalProductButton = styled.div`
  background-color: #000;
  user-select: none;
  color: #fff;
  height: 30px;
  width: 30px;
  text-align: center;
  border-radius: 100%;
  border: 1px solid #000;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  font-size: 26px;
  display: inline-block;
  &:hover {
    color: #000;
    background-color: transparent;
  }
  @media only screen and (max-width: 630px) {
    height: 20px;
    width: 20px;
  }
`
