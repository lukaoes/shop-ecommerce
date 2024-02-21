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
`
