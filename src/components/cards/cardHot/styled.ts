import styled from 'styled-components'

export const CardHotLayout = styled.div`
  width: 190px;
  height: 260px;
  margin: 20px auto; // for display
  border-radius: 15px;
  overflow: hidden;
  background-color: #fff;
`

export const CardHotImage = styled.img`
  width: 190px;
  height: 190px;
  background-color: #666;
`

export const CardHotInfo = styled.div`
  font-family: LufgaMedium;
  margin: 12px 10px 9px 10px;

  h5 {
    font-size: 16px;
    margin-bottom: 5px;
  }

  span {
    font-size: 15px;
    color: #159e42;
  }
`
