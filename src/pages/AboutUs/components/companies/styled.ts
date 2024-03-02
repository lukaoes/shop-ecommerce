import styled from 'styled-components'

export const AboutCompaniesContainer = styled.div`
  max-width: 1290px;
  margin: 80px auto 100px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-family: LufgaMedium;
    font-size: 28px;
    line-height: 40px;
    letter-spacing: -0.42px;
    margin-bottom: 20px;
    max-width: 250px;
  }

  p {
    font-family: LufgaLight;
    font-size: 16px;
    max-width: 336px;
  }
  @media only screen and (max-width: 1124px) {
    margin: 40px auto 50px auto;
    flex-direction: column;
    h1 {
      text-align: center;
      max-width: 850px;
    }
    p {
      text-align: center;
      margin: 0 auto 30px auto;
      max-width: 850px;
    }
  }
`

export const AboutCompaniesImages = styled.div`
  max-width: 850px;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  img {
    height: 100px;
    width: 189px;
    object-fit: cover;
  }
  @media only screen and (max-width: 1124px) {
    justify-content: center;
  }
`
