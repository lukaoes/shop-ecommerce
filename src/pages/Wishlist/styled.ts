import styled from 'styled-components'

export const WishlistLayout = styled.div`
  max-width: 925px;
  margin: 0 auto;
`

export const WishlistHeader = styled.div`
  border-bottom: 1px solid #ccc;
  span {
    display: flex;
    font-family: LufgaMedium;
    font-size: 16px;
    display: inline-block;
    margin-bottom: 22px;
  }
`

export const WishlistProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 30px;
  img {
    width: 100px;
    height: 100px;
    border-radius: 30px;
    object-fit: cover;
  }
`

export const WishlistProductLeft = styled.div`
  max-width: 400px;
  display: flex;
  align-items: center;
  gap: 25px;

  p {
    font-family: LufgaMedium;
    font-size: 18px;
    line-height: 150%;
    max-width: 160px;
  }
`

export const WishlistProductRight = styled.div`
  display: flex;
  justify-content: center;
`

export const WishlistXButton = styled.div`
  width: 41px;
  height: 41px;
  border-radius: 100%;
  background-color: #000;
  transition: all 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  cursor: pointer;
  transform: rotate(45deg);
  div {
    width: 2px;
    height: 20px;
    background-color: #fff;
  }

  div:first-child {
    transform: rotate(0deg);
  }

  div:last-child {
    position: relative;
    left: -2px;
    transform: rotate(90deg);
  }
  &:hover {
    div {
      background-color: #000;
    }
    background-color: #fff;
  }
`
