import styled from 'styled-components'

export const ShopProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProductsTopFilter = styled.div`
  display: flex;
  max-width: 1290px;
  justify-content: space-between;
  margin: 26px 0 20px 0;
  font-size: 15px;
  font-family: LufgaRegular;
  line-height: 35px;
  @media only screen and (max-width: 850px) {
    div:nth-child(2) {
      display: none;
    }
  }
`

export const ProductsTopRight = styled.div`
  display: flex;

  .active {
    opacity: 1 !important;
  }

  div:last-child {
    border: none;
    display: flex;
    gap: 24px;
    align-items: center;

    img {
      height: 20px;
      width: 20px;
      cursor: pointer;
      opacity: 0.4;
    }
  }

  div {
    border-right: 1px solid #ccc;
    height: 35px;
    line-height: 35px;
    padding: 0 20px;
  }
  @media only screen and (max-width: 1150px) {
    div:first-child,
    div:nth-child(2) {
      display: none;
    }
  }

  @media only screen and (max-width: 750px) {
    div {
      padding: 0;
    }
  }
`
