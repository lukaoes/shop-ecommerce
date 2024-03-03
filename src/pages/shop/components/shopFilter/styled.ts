import styled from 'styled-components'

export const ShopFilterContainer = styled.div`
  width: 328px;
  margin: 26px 0;
  @media only screen and (max-width: 770px) {
    max-height: 90%;
    overflow: auto;
  }
  @media only screen and (max-width: 400px) {
    max-width: 240px;
  }
`

export const ShopFilterTitle = styled.h2`
  font-family: LufgaMedium;
  font-size: 16px;
  margin-bottom: 20px;
`

export const ShopFilterIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: LufgaRegular;
  font-size: 16px;
  cursor: pointer;
  @media only screen and (min-width: 770px) {
    display: none;
  }
`

export const ShopFilterSearchContainer = styled.div`
  position: relative;

  img {
    position: absolute;
    top: 14px;
    right: 17px;
  }
`

export const ShopFilterSeach = styled.input`
  width: 328px;
  font-family: LufgaRegular;
  font-size: 15px;
  padding: 13px 40px 13px 23px;
  border-radius: 10px;
  border: solid 1px #000;
  background-color: #fffaf3;
  box-sizing: border-box;
  margin-bottom: 50px;

  &::placeholder {
    color: #000;
  }
  @media only screen and (max-width: 400px) {
    max-width: 240px;
  }
`

export const ShopFilterButton = styled.button`
  background-color: #000;
  border: none;
  border-radius: 10px;
  color: #fff;
  padding: 8px 15px;
  line-height: 1.71;
  font-family: LufgaSemiBold;
  font-size: 14px;
  cursor: pointer;
`
