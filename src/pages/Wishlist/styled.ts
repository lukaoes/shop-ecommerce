import styled from 'styled-components'

export const WishlistLayout = styled.div`
  max-width: 925px;
  margin: 92px auto;
`

export const WishlistHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;
  div {
    margin-left: auto;
    display: flex;
    justify-content: space-between;
    width: 142px;
  }
  .product {
    margin-left: 70px;
  }
  span {
    display: flex;
    font-family: LufgaMedium;
    font-size: 16px;
    display: inline-block;
    margin-bottom: 22px;
  }
`

export const WishlistProduct = styled.div`
  padding: 0 5px;
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
  @media only screen and (max-width: 720px) {
    margin-top: 20px;
    img {
      border-radius: 10px;
      width: 50px;
      height: 70px;
    }
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
  @media only screen and (max-width: 720px) {
    gap: 5px;
    p {
      font-size: 14px;
    }
  }
`

export const WishlistProductRight = styled.div`
  width: 350px;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  align-items: center;
  font-family: LufgaMedium;
  font-size: 16px;

  div {
    padding: 12px 24px;
    border-radius: 10px;
    border: 1px solid #000;
    background-color: #000;
    color: #fff;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      color: #000;
      background-color: #fff;
    }
  }
  @media only screen and (max-width: 570px) {
    font-size: 14px;
    max-width: 250px;
    div {
      padding: 6px 6px;
    }
  }
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
  @media only screen and (max-width: 720px) {
    width: 30px;
    height: 20px;
    div {
      height: 10px;
    }
  }
`
