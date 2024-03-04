import styled from 'styled-components'

export const ProductDetailsModalBg = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 5;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease-in-out;

  .details {
    background-color: #ffedd4;
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    background: #fffaf3;
    z-index: 7;
  }

  &.open {
    opacity: 1;
    pointer-events: all;
  }
`

export const ProductDetailsModalLayout = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 6;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.8);
`

export const ProductDetailsModalContainer = styled.div`
  position: absolute;
  display: flex;
  width: 1070px;
  height: 620px;
  border-radius: 20px;
  background-color: #fffaf3;
  z-index: 17;
`

export const ProductDetailsModalImg = styled.img`
  width: 535px;
  height: 100%;
  border-radius: 20px 0 0 20px;
  object-fit: cover;
`

export const ProductDetailsModalInfo = styled.div`
  width: 455px;
  padding: 50px 40px;
`

export const ProductDetailsModalTop = styled.div`
  span {
    background-color: #000;
    color: #fff;
    border-radius: 4px;
    padding: 5px 7px;
    display: inline-block;
    margin-bottom: 10px;
    font-family: LufgaMedium;
    font-size: 11px;
  }
  h1 {
    font-family: LufgaSemiBold;
    font-size: 28px;
    margin-bottom: 10px;
  }
  div:first-child {
    gap: 0;
  }
  div {
    display: flex;
    gap: 11px;
    align-items: center;

    h5 {
      display: inline-block;
      font-family: LufgaRegular;
      font-size: 14px;
    }
  }
  p {
    margin: 24px 0 40px 0;
    font-family: LufgaLight;
    font-size: 15px;
    line-height: 24px;
    height: 96px;
    overflow: hidden;
  }
`

export const ProductDetailsModalMiddle = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  h2 {
    font-family: LufgaSemiBold;
    font-size: 15px;
    margin-bottom: 15px;
  }
  h1 {
    font-family: LufgaMedium;
    font-size: 24px;

    span {
      text-decoration: line-through;
      font-family: LufgaRegular;
      font-size: 18px;
      color: #5e626f;
      border: none;
    }
  }
  span {
    font-family: LufgaMedium;
    display: inline-block;
    background-color: transparent;
    border: 1px solid #000;
    text-align: center;
    width: 31px;
    height: 31px;
    border-radius: 100%;
    line-height: 31px;
  }
  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
`

export const AddToWlistBtn = styled.div`
  background-color: transparent !important;
  color: #000 !important;

  &:hover {
    background-color: #000 !important;
    color: #fff !important;
  }
`

export const ProductDetailsModalButtons = styled.div`
  margin: 30px 0 0 0;
  padding: 0 0 27px 0;
  border-bottom: 1px solid #ccc;
`

export const ProductDetailsModalBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;

  h5 {
    display: inline-block;
    font-size: 15px;
    font-family: LufgaMedium;
  }

  div {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;

    span {
      font-family: LufgaRegular;
      font-size: 14px;
    }
  }
`
