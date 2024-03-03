import styled from 'styled-components'

export const AuthLayout = styled.div`
  display: flex;
`

export const AuthLeft = styled.div`
  width: 50vw;
  height: 900px;
  position: relative;
  background-color: #ffedd4;
  @media only screen and (max-width: 1180px) {
    display: none;
  }
`

export const AuthRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  @media only screen and (max-width: 1180px) {
    margin: 60px auto;
    width: 100%;
  }
`

export const AuthDoor = styled.div`
  position: absolute;
  bottom: 0;
  left: 155px;
  height: 650px;
  width: 485px;
  border-radius: 50% 50% 0% 0%;
  background-color: #fffaf3;
  @media only screen and (max-width: 1180px) {
    display: none;
  }
`

export const AuthImg = styled.img`
  border-radius: 50% 50% 0% 0%;
  position: absolute;
  bottom: 0;
  right: 125px;
  width: 549px;
  height: 775px;
  object-fit: cover;
  @media only screen and (max-width: 960px) {
    display: none;
  }
`

export const AuthH1 = styled.h1`
  font-size: 28px;
  font-family: LufgaSemiBold;
  text-align: center;

  a {
    display: block;
    text-decoration: none;

    &:visited {
      text-decoration: none;
    }
  }
`

export const AuthContainer = styled.div`
  padding: 80px;
  background-color: transparent;
  border: 1px solid #000;
  border-radius: 30px;
  @media only screen and (max-width: 450px) {
    padding: 20px;
  }
`

export const AuthInside = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  h2 {
    margin: 0 auto;
    text-align: center;
    font-family: LufgaSemiBold;
    font-size: 28px;
    margin-bottom: 20px;
  }
  p {
    text-align: center;
    font-family: LufgaLight;
    font-size: 16px;
  }
`

export const AuthInput = styled.div`
  h3 {
    font-family: LufgaMedium;
    font-size: 16px;
    margin-bottom: 10px;
  }

  input {
    width: calc(100% - 50px);
    font-family: LufgaRegular;
    font-size: 15px;
    padding: 13px 24px;
    background-color: transparent;
    border-radius: 10px;
    border: 1px solid #000;

    &::placeholder {
      color: #000;
    }
  }
`

export const AuthRemember = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
  font-family: LufgaRegular;
  font-size: 15px;

  div {
    display: flex;
    align-items: center;
  }

  label {
    white-space: nowrap;
    margin-left: 10px;
  }
`

export const AuthButtons = styled.div`
  font-family: LufgaMedium;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  div {
    padding: 15px 35px;
    display: inline-block;
    border: 1px solid #000;
    background-color: #000;
    color: #fff;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: transparent;
      color: #000;
    }
  }

  a {
    text-decoration: none;
    padding: 15px 35px;
    display: inline-block;
    border: 1px solid #000;
    background-color: transparent;
    color: #000;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: #000;
      color: #fff;
    }
  }
`

export const AuthPath = styled.div`
  position: absolute;
  top: 137px;
  left: 80px;
  h1 {
    font-family: LufgaSemiBold;
    font-size: 40px;
    margin-bottom: 15px;
  }

  div {
    font-size: 16px;
    font-family: LufgaRegular;
    a {
      text-decoration: none;
      color: #000;
    }
    display: flex;
    gap: 10px;
    align-items: center;
  }
  @media only screen and (max-width: 960px) {
    display: none;
  }
`
