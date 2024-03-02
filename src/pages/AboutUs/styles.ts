import styled from 'styled-components'

export const AboutUsLayout = styled.div`
  width: 1290px;
  display: flex;
  gap: 30px;
  margin: 0 auto;
  margin-bottom: 95px;
  @media only screen and (max-width: 1310px) {
    width: 630px;
    flex-direction: column;
    margin: 0 auto;
  }
  @media only screen and (max-width: 655px) {
    width: 480px;
  }
  @media only screen and (max-width: 500px) {
    width: 310px;
  }
`
