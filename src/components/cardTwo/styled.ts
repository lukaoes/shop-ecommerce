import styled from 'styled-components'

export const CardTwoImageLayout = styled.div`
  width: 240px; // for display
  margin: 10px auto; // for display
`

export const CardTwoImage = styled.img`
  width: 240px;
  height: 250px;
  object-fit: cover;
  background-color: #666;
  margin: 0 0 10px 0;
  border-radius: 20px;
`

export const CardTwoInfo = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`

export const CardTwoInfoLeft = styled.div`
  font-family: LufgaBold;

  h5 {
    color: #cc0d39;
    font-size: 13px;
    height: 20px;
    line-height: 20px;
  }

  p {
    font-size: 14px;
    height: 24px;
    line-height: 24px;
    width: 141px;
    overflow: hidden;
  }
`

export const CardTwoInfoRight = styled.div`
  h5 {
    font-family: LufgaBold;
    font-size: 16px;
    height: 24px;
    line-height: 24px;
  }

  span {
    font-family: LufgaMedium;
    height: 18px;
    width: 100%;
    line-height: 18px;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.7);
    text-decoration: line-through;
    margin-left: 8px;
  }
`
