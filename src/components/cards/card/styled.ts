import styled from 'styled-components'

export const CardLayout = styled.div`
  width: 300px;
  height: 474px;
  font-family: LufgaMedium;

  h1 {
    display: inline-block;
    width: 176px;
    height: 54px;
    font-size: 18px;
    line-height: 27px;
    overflow: hidden;
    cursor: pointer;
  }

  span {
    font-size: 18px;
  }
`

export const CardInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ImageContainer = styled.div`
  position: relative;
`

export const CardImage = styled.img`
  width: 300px;
  height: 385px;
  object-fit: cover;
  border-radius: 20px;
  background-color: #666;
  margin-bottom: 35px;
`

export const QuickView = styled.button`
  font-family: LufgaMedium;
  font-size: 14px;
  background-color: #000;
  color: #fff;
  padding: 12px 30px;
  border-radius: 40px;
  border: solid 4px #fffaf3;
  position: absolute;
  bottom: 12px;
  left: 75px;
  cursor: pointer;
`

export const SaleTag = styled.div`
  padding: 5px 15px;
  border-radius: 30px;
  background-color: #fff;
  color: #000;
  position: absolute;
  font-family: LufgaSemiBold;
  font-size: 12px;
  top: 10px;
  left: 10px;
`

export const CardIconContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  div {
    gap: 5px;
    width: 45px;
    height: 45px;
    margin: 0 0 5px;
    border-radius: 32px;
    box-shadow: 0 15px 15px 0 rgba(0, 0, 0, 0.05);
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: rgba(0, 0, 0, 1);
    }

    .CardCartIcon {
      padding: 11px;
    }
  }

  img {
    padding: 15px 13px;
    cursor: pointer;
  }
`
