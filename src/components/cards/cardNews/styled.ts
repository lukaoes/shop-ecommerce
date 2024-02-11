import styled from 'styled-components'

export const CardNewsLayout = styled.div`
  margin: 40px auto; //for display
  width: 400px;
  height: 450px;
  border-radius: 30px;
  background-color: #666;
  position: relative;
`
export const CardNewsImg = styled.img`
  width: 400px;
  height: 450px;
  border-radius: 30px;
  object-fit: cover;
  background-color: #666;
`

export const CardNewsDate = styled.div`
  padding: 5px 10px;
  background-color: #fff;
  color: #000;
  font-family: LufgaSemiBold;
  font-size: 13px;
  border-radius: 6px;
  position: absolute;
  left: 30px;
  top: 30px;
`

export const CardNewsInfo = styled.div`
  position: absolute;
  bottom: 22px;
  left: 29px;
  display: flex;
  align-items: center;
  gap: 10px;

  h2 {
    width: 281px;
    height: 70px;
    font-family: LufgaMedium;
    font-size: 24px;
    line-height: 1.46;
    color: #fff;
    text-shadow: 0 0 30px #000;
  }

  div {
    background-color: #fff;
    height: 50px;
    width: 50px;
    border-radius: 100%;

    svg {
      padding: 13px;
    }
  }
`
