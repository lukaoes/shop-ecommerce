import styled from 'styled-components'

export const ShopFilterContainer = styled.div`
  width: 328px;
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
  margin-bottom: 35px;
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
  width: 100%;
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
`

export const ShopFilterColorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`

export const ShopFilterColor = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 100%;
  border: 4px solid #fffaf3;
  cursor: pointer;
`

export const ShopFilterSizeContainer = styled.div`
  display: flex;
  gap: 7px;
  flex-wrap: wrap;
  margin-bottom: 55px;
`

export const ShopFilterSize = styled.span`
  width: 34px;
  height: 34px;
  font-size: 15px;
  font-family: LufgaRegular;
  line-height: 1.2;
  border-radius: 100%;
  border: solid 1px #000;
  background-color: transparent;
  cursor: pointer;

  span {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const ShopFilterCategories = styled.ul`
  margin-bottom: 50px;

  li {
    display: flex;
    justify-content: space-between;
    cursor: pointer;

    span {
      font-family: LufgaRegular;
      font-size: 15px;
      line-height: 2.33;
    }
  }
`

export const ShopFilterTagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 60px;
`

export const ShopFilterTags = styled.span`
  padding: 4px 15px;
  line-height: 1.71;
  border-radius: 8px;
  border: solid 1px #000;
  font-family: LufgaRegular;
  font-size: 14px;
  cursor: pointer;
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
