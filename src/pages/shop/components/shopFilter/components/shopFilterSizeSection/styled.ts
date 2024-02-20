import styled from 'styled-components'

export const ShopFilterSizeContainer = styled.div`
  display: flex;
  gap: 7px;
  flex-wrap: wrap;
  margin-bottom: 55px;

  .active {
    background-color: #000;
    color: #fff;
  }
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

  &:hover {
    background-color: #000;
    color: #fff;
  }

  span {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
  }
`
