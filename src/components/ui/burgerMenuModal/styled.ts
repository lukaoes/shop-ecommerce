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
    background: #fff;
    z-index: 17;
    transition: top 1s ease-in-out;

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
  width: 100%;
  max-width: 1305px;
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
    width: calc(100% - 70px);
    outline: none;
    padding: 0 35px;

    &::placeholder {
      color: #000;
    }
  }

  img {
    right: 10px;
    top: 12px;
    position: absolute;
  }
`

export const BurgerMenuSearchBottom = styled.div`
  margin-top: 22px;
  a {
    text-decoration: none;
    margin: 0 15px;
  }
`

export const BurgerMenuMayLike = styled.div`
  display: flex;
  gap: 25px;
`
