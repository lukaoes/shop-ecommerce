import styled from 'styled-components'

export const AccordionContainer = styled.div`
  max-width: 630px;
  margin-top: 130px;
  .active {
    height: auto;
  }
`

export const AccordionTitle = styled.h1`
  max-width: 630px;
  font-family: LufgaBold;
  font-size: 40px;
  line-height: 60px;
  margin-bottom: 30px;
`

export const AccordionP = styled.p`
  font-family: LufgaLight;
  font-size: 16px;
  line-height: 24px;
`

export const AccordionCeo = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin: 20px 0 55px 0;
  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 100%;
  }

  div {
    h2 {
      font-family: LufgaBold;
      font-size: 22px;
      margin-bottom: 16px;
    }

    p {
      font-family: LufgaRegular;
      font-size: 16px;
    }
  }
`

export const AccordionQuestion = styled.div`
  width: calc(100% - 40px);
  height: 60px;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #000;
  cursor: pointer;
  margin-bottom: 20px;
  span {
    font-family: LufgaRegular;
    font-size: 18px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 29px;
    height: 29px;
    border-radius: 100%;
    background-color: #000;
  }
`

export const AccordionAnswer = styled.div`
  font-family: LufgaLight;
  font-size: 16px;
  line-height: 28px;
  margin: 19px 0 35px 0;
  height: 0;
  overflow: hidden;
`

export const InvestmentInfo = styled.div`
  gap: 80px;
  display: flex;
  margin: 73px 0 98px 0;
  h3 {
    font-family: LufgaMedium;
    font-size: 80px;
    margin-bottom: 25px;
  }
  span {
    font-family: LufgaRegular;
    font-size: 20px;
  }
`
