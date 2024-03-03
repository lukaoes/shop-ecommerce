import styled from 'styled-components'

export const BlogDetailsLayout = styled.div`
  max-width: 850px;
  margin: 0 auto;
`

export const BlogDetailsHeader = styled.div`
  margin-top: 68px;
  h1 {
    font-family: LufgaMedium;
    text-align: center;
    font-size: 40px;
    line-height: 50px;
    margin-bottom: 15px;
  }

  div {
    justify-content: center;
    display: flex;
    gap: 25px;
    align-items: center;
    margin-bottom: 25px;
    span {
      font-family: LufgaRegular;
      font-size: 14px;
      display: flex;
      gap: 5px;
      align-items: center;
    }

    span:first-child {
      font-size: 13px;
      padding: 5px 10px;
      background-color: #fff;
      color: #000;
      border-radius: 5px;
    }
  }
  @media only screen and (max-width: 500px) {
    h1 {
      font-size: 25px;
      line-height: 35px;
    }
  }
`

export const BlogDetailsMainImg = styled.img`
  width: 100%;
  height: 550px;
  object-fit: cover;
  margin-bottom: 40px;
`

export const BlogDetailsParagraph = styled.p`
  font-family: LufgaLight;
  font-size: 18px;
  line-height: 30px;
  margin-bottom: 35px;
`

export const BlogDetailsQuote = styled.blockquote`
  border: 1px solid #000;
  border-radius: 15px;
  padding: 20px 25px;
  margin-bottom: 35px;
  display: flex;
  justify-content: space-between;
  div {
    max-width: 710px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  p {
    font-family: LufgaRegular;
    font-size: 22px;
    line-height: 35px;
    margin-bottom: 20px;
  }
  span {
    display: block;
    font-family: LufgaMedium;
    font-size: 15px;
  }
  img {
    margin-top: auto;
  }
  @media only screen and (max-width: 380px) {
    p {
      font-size: 18px;
    }
  }
`

export const BlogDetailsImages = styled.div`
  margin: 0 auto;
  margin-bottom: 35px;
  max-width: 1290px;
  div:first-child {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    img {
      width: 630px;
      height: 418px;
      object-fit: cover;
      border-radius: 20px;
    }
  }
  div:last-child {
    display: flex;
    justify-content: space-between;
    img {
      width: 410px;
      height: 314px;
      object-fit: cover;
      border-radius: 20px;
    }
  }
  @media only screen and (max-width: 1300px) {
    div:first-child {
      gap: 16px;
      justify-content: center;
      flex-wrap: wrap;
    }
    div:last-child {
      gap: 16px;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
  @media only screen and (max-width: 650px) {
    div:first-child {
      img {
        width: 310px;
      }
    }
    div:last-child {
      img {
        width: 310px;
      }
    }
  }
`

export const BlogDetailsBottom = styled.div`
  h2 {
    font-family: LufgaSemiBold;
    font-size: 24px;
    margin-bottom: 10px;
  }
`

export const BlogDetailsChecklist = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 22px;
  gap: 18px;
  div {
    display: flex;
    gap: 18px;
    flex-direction: column;
  }
  p {
    display: flex;
    align-items: center;
    gap: 10px;

    span {
      font-family: LufgaMedium;
      font-size: 16px;
    }
  }
`
