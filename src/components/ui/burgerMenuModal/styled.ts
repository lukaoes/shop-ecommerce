import styled from 'styled-components'

export const BurgerMenuModalBg = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  z-index: 15;
  top: 0;
  left: 0;

  .search {
    top: -700px;
    background-color: #ffedd4;
    position: absolute;
    height: 100vh;
    background: #fffaf3;
    z-index: 17;
    transition: top 0.4s ease-in-out;

    &.open {
      top: 0;
    }
  }

  &.open {
    opacity: 1;
    pointer-events: all;
  }
`

export const BurgerMenuBackground = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 4;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.8);
`

export const BurgerMenuCenter = styled.div`
  margin: 0 auto;
  width: calc(100% - 40px);
  max-width: 1305px;
  padding: 0 20px;
  @media only screen and (max-width: 396px) {
    h1 {
      display: none;
    }
  }
`

export const BurgerMenuModalLayout = styled.div`
  padding: 75px 0;
  background-color: #fffaf3;
  z-index: 10;
  display: flex;
  max-height: 485px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: space-between;
  gap: 85px;
  width: 100%;
  h1 {
    font-size: 20px;
    font-family: LufgaMedium;
    margin-bottom: 30px;
  }

  @media only screen and (max-width: 980px) {
    padding: 30px 0;
    max-height: 400px;
    gap: 30px;

    h1 {
      margin-bottom: 16px;
    }
  }
  @media only screen and (max-width: 396px) {
    max-height: 35px;
  }
`

export const BurgerMenuSearch = styled.div`
  display: flex;
  position: relative;
  padding-bottom: 18px;
  border-bottom: 2px solid #000;
  div {
    padding-right: 35px;
    border-right: 1px solid #ccc;
  }
  select {
    width: 238px;
    border: none;
    font-family: LufgaRegular;
    font-size: 20px;
    background-color: transparent;
    padding: 4px 0;
  }

  input {
    border: none;
    font-family: LufgaRegular;
    font-size: 20px;
    background-color: transparent;
    /* width: calc(100% - 70px); */
    outline: none;
    padding: 0 35px;

    &::placeholder {
      color: #000;
    }
  }

  img {
    right: 10px;
    top: 7px;
    position: absolute;
  }
  @media only screen and (max-width: 668px) {
    select {
      width: auto;
      font-size: 16px;
    }

    input {
      font-size: 16px;
    }
  }
  @media only screen and (max-width: 420px) {
    select,
    div {
      display: none;
    }
  }
`

export const BurgerMenuSearchBottom = styled.div`
  margin-top: 22px;
  max-height: 32px;
  overflow: hidden;
  a {
    text-decoration: none;
    margin: 0 15px;
  }
  @media only screen and (max-width: 668px) {
    display: none;
  }
`

export const BurgerMenuMayLike = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  gap: 25px;
  justify-content: space-between;
  height: 232px;
  overflow: hidden;
  flex-wrap: wrap;
  @media only screen and (max-width: 396px) {
    display: none;
  }
`
