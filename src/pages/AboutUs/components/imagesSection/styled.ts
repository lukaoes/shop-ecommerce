import styled from 'styled-components'

export const ImagesSectionLayout = styled.div`
  width: 630px;
  display: flex;
  margin-top: 130px;
  flex-direction: column;
  gap: 30px;
  img {
    border-radius: 20px;
    object-fit: cover;
  }

  div {
    display: flex;
    gap: 30px;
    height: 261px;

    img:first-child {
      width: 411px;
    }

    img:nth-child(2) {
      width: 190px;
    }
  }

  img:nth-child(2) {
    object-fit: cover;
    width: 100%;
    height: 544px;
  }

  img:last-child {
    width: 100%;
    height: 271px;
  }
  @media only screen and (max-width: 1310px) {
    margin: 40px auto;
  }
  @media only screen and (max-width: 655px) {
    display: none;
  }
`
