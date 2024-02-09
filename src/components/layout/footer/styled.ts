import styled from 'styled-components'

export const FooterLayoutTop = styled.div`
  width: 1291px;
  margin: 0 auto;
  display: flex;
  padding: 89px 0;
  border-bottom: 1px solid #e6e1db;
`

export const FooterContact = styled.div`
  margin-right: 30px;

  img {
    width: 144px;
    height: 44px;
  }

  p {
    width: 273px;
    height: 90px;
    margin: 14.8px 26px 46.3px 0;
    font-family: LufgaRegular;
    font-size: 15px;
    line-height: 2;

    span {
      display: block;
    }
  }

  h5 {
    font-size: 16px;
    font-family: LufgaMedium;
    margin-bottom: 6px;
  }
`
export const FooterNewsteller = styled.div`
  width: 264px;
  height: 20px;
  padding: 12.5px 18px 12.5px 17px;
  border-radius: 10px;
  background-color: #feeb9d;
  display: flex;

  input {
    height: 100%;
    width: 90%;
    border: none;
    background-color: transparent;
    font-family: LufgaRegular;
    font-size: 14px;
    color: #000;

    &::placeholder {
      color: #000;
    }

    &:focus {
      outline: none;
    }
  }

  img {
    margin-left: auto;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`

export const FooterCategories = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  h1 {
    font-family: LufgaSemiBold;
    font-size: 20px;
    margin-bottom: 24px;
  }
`

export const RecentPostContainer = styled.div`
  height: 223px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 15px;
`

export const FooterRecentPost = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  color: #000;

  img {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    object-fit: contain;
    background-color: #666;
  }

  p {
    font-family: LufgaMedium;
    font-size: 16px;
    margin: 0 0 6px 0;
  }

  span {
    display: block;
    font-family: LufgaRegular;
    font-size: 13px;
    opacity: 0.6;
  }
`

export const FooterList = styled.ul`
  font-family: LufgaRegular;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  gap: 17px;

  a {
    text-decoration: none;
    color: #000;
  }

  li {
    height: 22px;
    line-height: 22px;
  }
`

export const FooterBottom = styled.div`
  width: 1291px;
  margin: 22px auto 30px auto;
  display: flex;
  justify-content: space-between;
  font-family: LufgaRegular;
  font-size: 15px;
  width: 1;

  div {
    display: inline-block;
    width: 222px;
    height: 19px;
    margin: 0 0 0 24px;
    background-color: #666;
  }
`
