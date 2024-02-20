import styled from 'styled-components'

export const ContactUsContainer = styled.div`
  margin: 125px 0px 85px 315px;
`

export const ContactUsInfo = styled.div`
  width: 520px;
  margin-bottom: 75px;
  h1 {
    font-family: LufgaSemiBold;
    font-size: 40px;
    line-height: 28px;
    margin-bottom: 40px;
  }

  p {
    font-family: LufgaRegular;
    font-size: 30px;
    line-height: 48px;
    margin-bottom: 50px;
  }

  > div {
    display: flex;
    justify-content: space-between;

    h4 {
      font-family: LufgaSemiBold;
      font-size: 24px;
      margin-bottom: 26px;
    }

    p {
      font-family: LufgaRegular;
      font-size: 18px;
      line-height: 28px;
    }
  }
`

export const ContactUsInputs = styled.div`
  width: 520px;
  background: #000;
  border-radius: 20px;
  padding: 75px 55px 65px 55px;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  label h2 {
    color: #fff;
    font-family: LufgaMedium;
    font-size: 16px;
    margin-bottom: 13px;
    cursor: pointer;
  }

  textarea {
    font-family: LufgaRegular;
    font-size: 16px;
    width: calc(100% - 40px);
    padding: 20px 20px;
    height: 100px;
    border: 1px solid #fff;
    color: #fff;
    background-color: #000;
    border-radius: 10px;
  }
`

export const ContactInput = styled.input`
  font-family: LufgaRegular;
  font-size: 16px;
  width: calc(100% - 40px);
  padding: 0 20px;
  height: 50px;
  border: 1px solid #fff;
  color: #fff;
  background-color: #000;
  border-radius: 10px;
  margin-bottom: 20px;
`

export const ContactMapContainer = styled.div`
  position: absolute;
  right: 0;
  top: 195px;
  width: 945px;
  img {
    margin-bottom: 90px;
  }

  h1 {
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #ccc;
    left: 122px;
    margin-bottom: 40px;
    position: absolute;
    font-family: LufgaBold;
    color: transparent;
    font-size: 200px;
  }
`
