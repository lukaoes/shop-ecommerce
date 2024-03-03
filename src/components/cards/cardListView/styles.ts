import styled from 'styled-components'

export const CardListViewContainer = styled.div`
  max-width: 1298px;
  height: 290px;
  display: flex;
  gap: 30px;
`

export const CardListViewImg = styled.img`
  width: 298px;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
`

export const CardListViewInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;

  p {
    font-family: LufgaLight;
    font-size: 15px;
    line-height: 24px;
    margin-bottom: 25px;
  }
`

export const CardListViewTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;

  h1 {
    font-family: LufgaMedium;
    font-size: 20px;
    margin-bottom: 10px;
  }

  span {
    font-family: LufgaMedium;
    font-size: 14px;
  }
`

export const CardListViewReview = styled.div`
  div {
    display: flex;
    margin-bottom: 6px;
  }

  span {
    font-family: LufgaRegular;
    font-size: 13px;
    opacity: 0.7;
  }
`

export const CardListViewBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CardListViewApplied = styled.div`
  display: flex;
  gap: 40px;

  h2 {
    font-family: LufgaRegular;
    font-size: 14px;
    opacity: 0.7;
    margin-bottom: 10px;
  }

  p {
    font-family: LufgaMedium;
    font-size: 20px;
  }

  span {
    margin-top: 4px;
    display: inline-block;
    height: 15px;
    width: 15px;
    border-radius: 100%;
  }
`

export const CardListViewButtonContainer = styled.div`
  display: flex;
  gap: 10px;

  button {
    font-family: LufgaRegular;
    font-size: 16px;
    height: 44px;
    cursor: pointer;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;

    &:first-child {
      background-color: #000;
      color: #fff;
      padding: 12px 25px;
      border: 1px solid #000;

      &:hover {
        background-color: transparent;
        color: #000;
      }
    }

    &:last-child {
      border: 1px solid #000;
      background-color: transparent;
      color: #000;
      padding: 12px;

      &:hover {
        background-color: #ccc;
      }
    }
  }
`
