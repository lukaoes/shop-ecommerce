import styled from 'styled-components'

export const Page404Layout = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: linear-gradient(to right, #000 50%, #fffaf3 50%);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const Page404MainText = styled.h1`
  font-size: 290px;
  font-family: LufgaExtraBold;
  background: linear-gradient(to bottom, #000 50%, #fffaf3 50%);
  background-clip: text;
  color: transparent;
  rotate: 90deg;
`

export const BackToMainContainer = styled.div`
  position: absolute;
  right: 150px;
  h2 {
    font-family: LufgaSamiBold;
    font-size: 110px;
    margin-bottom: 35px;
  }

  p {
    font-family: LufgaMedium;
    font-size: 30px;
    margin-bottom: 60px;
  }

  a {
    text-decoration: none;
    font-family: LufgaMedium;
    font-size: 16px;
    border-radius: 10px;
    background-color: #000;
    border: 1px solid #000;
    color: #fff;
    padding: 15px 35px;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #fff;
      color: #000;
    }
  }

  @media only screen and (max-width: 1500px) {
    right: 100px;
    h2 {
      font-size: 60px;
    }

    p {
      font-size: 15px;
    }
  }

  @media only screen and (max-width: 900px) {
    background-color: #fff;
    right: 0;
    width: 100vw;
    height: 180px;
    z-index: 10;
    h2 {
      font-size: 60px;
      width: 170px;
      margin: 15px auto;
    }

    p {
      width: 235px;
      font-size: 15px;
      margin-bottom: 30px;
    }

    a {
      padding: 15px 43px;
      width: 100%;
    }

    div {
      width: 235px;
      margin: 0 auto;
    }
  }
`

export const TopRightImg = styled.img`
  position: absolute;
  top: 0px;
  right: 0px;
`

export const BottomLeftImg = styled.img`
  position: absolute;
  bottom: 0px;
  left: 0px;
`

export const Logo404 = styled.img`
  position: absolute;
  left: 50px;
  top: 50px;
`
