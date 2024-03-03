import styled from 'styled-components'

export const HeaderLayout = styled.header`
  width: 100%;
  height: 76px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e6e1db;
  background: #fff;
`

export const Container = styled.div`
  padding: 0 80px;
  @media only screen and (max-width: 530px) {
    padding: 0;
  }
`

export const HeaderContent = styled.div`
  width: 1920px;
  height: 44px;
  padding: 0 80px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-family: LufgaRegular;

  a {
    color: #000;
    text-decoration: none;
  }

  @media only screen and (max-width: 545px) {
    padding: 0 30px;
  }
  @media only screen and (max-width: 350px) {
    padding: 0 20px;
  }
`

export const Logo = styled.img`
  height: 44px;
  width: 144px;

  @media only screen and (max-width: 470px) {
    width: 100px;
    height: auto;
  }
`

export const LogoAndNavigation = styled.div`
  display: flex;
  align-items: center;
  gap: 91px;

  div ul {
    display: flex;
    gap: 40px;

    li {
      a {
        display: flex;
        gap: 5px;
        opacity: 0.5;
        padding: 10px 0;
      }

      img {
        height: 12px;
      }
    }
  }
  @media only screen and (max-width: 1240px) {
    div ul {
      display: none;
    }
  }

  @media only screen and (max-width: 610px) {
    gap: 0;
    justify-content: space-between;
  }
`

export const HeaderOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 51px;
  @media only screen and (max-width: 610px) {
    gap: 30px;
  }
  @media only screen and (max-width: 350px) {
    gap: 20px;
  }
`

export const HeaderAuth = styled.div`
  border-bottom: 1px solid #b3afab;
  margin: 0;
  height: 19px;

  @media only screen and (max-width: 770px) {
    display: none;
  }
`

export const HeaderIcons = styled.div`
  display: flex;
  gap: 30px;

  img {
    max-height: 20px;
  }

  img:hover {
    cursor: pointer;
  }
  @media only screen and (max-width: 610px) {
    gap: 25px;
    img {
      max-height: 20px;
    }
  }
`

export const BurgerMenu = styled.div`
  height: 13px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    background-color: #000;
    width: 30px;
    height: 2px;
  }

  @media only screen and (min-width: 1241px) {
    display: none;
  }
`
