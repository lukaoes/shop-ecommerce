import styled from 'styled-components'

export const BlogCardContainer = styled.div`
  width: 630px;
  height: 610px;
  background-color: #666666;
  border-radius: 20px;
  position: relative;
  img {
    width: 630px;
    height: 610px;
    object-fit: cover;
    border-radius: 20px;
  }
  @media only screen and (max-width: 650px) {
    width: 300px;
    img {
      width: 300px;
    }
  }
`

export const BlogCardInfo = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  padding-left: 28px;
  font-family: LufgaMedium;
  background-color: #000;
  height: 147px;
  padding: 40px 28px 28px 28px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 370px;
  span {
    padding: 5px 10px;
    background-color: #fff;
    color: #000;
    font-size: 13px;
    border-radius: 5px;
  }

  p {
    font-size: 24px;
    line-height: 35px;
    color: #fff;
    margin: 17px 0;
  }

  a {
    text-decoration: underline;
    color: #fff;
    font-size: 14px;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #fff;
      color: #000;
      text-decoration: none;
    }
  }
  @media only screen and (max-width: 650px) {
    width: 200px;
    height: 155px;
    p {
      font-size: 18px;
      line-height: 25px;
    }
  }
`
