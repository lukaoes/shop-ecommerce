import styled from 'styled-components'

export const HomeTitle = styled.h1`
  font-family: LufgaMedium;
  font-size: 35px;
  padding: 33px 0;
  line-height: 1.29;
`
export const MostPopularFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1290px;
  margin: 0 auto;

  div {
    /* width: 480px; */
    border-radius: 40px;
    padding: 6px;
    border: 1px solid #000;

    span {
      display: inline-block;
      padding: 6px 20px;
      font-family: LufgaRegular;
      font-size: 16px;
      border-radius: 60px;
      cursor: pointer;

      &.active {
        background-color: #000;
        color: #fff;
      }
    }
  }
`
