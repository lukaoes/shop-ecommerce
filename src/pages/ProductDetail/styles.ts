import styled from 'styled-components'

export const ProductDetailContainer = styled.div`
  padding: 0 80px;
  @media only screen and (max-width: 535px) {
    padding: 0 10px;
  }
`

export const ProductDetaiTop = styled.div`
  display: flex;
  justify-content: center;
  gap: 33px;
  margin-bottom: 90px;
  flex-wrap: wrap;

  div.product-info-price {
    display: flex;
    gap: 33px;
  }
  @media only screen and (max-width: 855px) {
    div.product-info-price {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`

export const ProductDetaiTopImg = styled.div`
  height: 737px;
  max-width: 566px;
  position: relative;
  margin: 50px 0 0 0;

  .main-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 30px;
  }
  @media only screen and (max-width: 535px) {
    height: 500px;
  }
`

export const ProductDetailImgSlide = styled.div`
  display: flex;
  gap: 20px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);

  img {
    cursor: pointer;
    height: 80px;
    width: 80px;
    border: 2px solid #000;
    border-radius: 10px;
    object-fit: cover;
    transition: all 0.3s ease-in-out;
    &:hover {
      border: 2px solid #fff;
    }
  }
  @media only screen and (max-width: 535px) {
    img {
      width: 50px;
      height: 50px;
    }
  }
`

export const ProdDetailInfo = styled.div`
  max-width: 730px;
  margin: 75px 0 0 0;
`

export const ProdDetailPriceLayout = styled.div`
  padding: 50px 0 0 0;
`

export const ProdDetailWishBtn = styled.div`
  padding: 15px 0;
  text-align: center;
  width: 100%;
  border: 1px solid #000;
  background-color: transparent;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  font-family: LufgaMedium;
  font-size: 16px;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`

export const ProdDetailLine = styled.div`
  padding-top: 20px;
  border-top: 1px solid #ccc;
`

export const ProdDetailColor = styled.div`
  height: 16px;
  width: 16px;
  margin-top: 20px;
  border-radius: 100%;
`

export const ProductDetailBottom = styled.div`
  max-width: 1290px;
  margin: 0 auto;
`

export const ProductDetailBottomHeader = styled.div`
  width: 100%;
  border-bottom: 1px solid #ccc;
  margin-bottom: 65px;
  h1 {
    padding-bottom: 15px;
    text-align: center;
    font-family: LufgaMedium;
    font-size: 16px;
    border-bottom: 2px solid #000;
    width: 10%;
    margin: 0 auto;
  }
`

export const ProductDetailBottomDesc = styled.div`
  margin-bottom: 60px;
  h1 {
    font-family: LufgaMedium;
    font-size: 18px;
    text-align: center;
    margin-bottom: 15px;
  }

  p {
    font-family: LufgaLight;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    margin-bottom: 40px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 46px;
    flex-wrap: wrap;
    div {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  span {
    font-family: LufgaRegular;
    font-size: 18px;
  }
`

export const ProdDetailBottomImgs = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 70px;
  gap: 45px;
  img {
    width: 400px;
    height: 375px;
    object-fit: cover;
    border-radius: 20px;
  }
`

export const ProdDetailSimilar = styled.div`
  width: 100%;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 35px;
    span {
      font-family: LufgaSemiBold;
      font-size: 28px;
    }
    a {
      color: #000;
      text-decoration: none;
      font-family: LufgaRegular;
      font-size: 14px;
      transition: all 0.3s ease-in-out;

      &:hover {
        border-bottom: 1px solid #ccc;
      }
    }
  }
`

export const ProdDetailSimilarCards = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
`
