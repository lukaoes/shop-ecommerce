import styled from 'styled-components'

export const HeaderLayout = styled.div`
  width: 100%;
  height: 76px;
  background-color: #fffaf3;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e6e1db;
`

export const HeaderContent = styled.div`
  width: 1920px;
  height: 44px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

export const Logo = styled.img`
  height: 44px;
  width: 144px;
`

export const LogoAndNavigation = styled.div`
  display: flex;
  gap: 50px;

  div ul {
    display: flex;
    gap: 40px;

    li {
      list-style: none;
      display: flex;
      gap: 5px;
      align-items: center;

      img {
        height: 12px;
      }
    }
  }
`

export const HeaderOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`

export const HeaderAuth = styled.div`
  border-bottom: 1px solid #b3afab;
  margin: 0;
  height: 19px;

  a {
    text-decoration: none;
  }
`

export const HeaderIcons = styled.div`
  display: flex;
  gap: 30px;

  img:hover {
    cursor: pointer;
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
`
