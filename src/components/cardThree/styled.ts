import styled from 'styled-components'

export const CardThreeLayout = styled.div`
  width: 300px;
  height: 320px;
  position: relative;
  background-color: #666;
  border-radius: 10px;
  margin: 50px auto; // for display
`

export const SvgLayout = styled.div`
  position: absolute;
  top: -40px;
  right: -40px;

  p {
    position: absolute;
    top: 32px;
    right: 34px;
    line-height: 1.28;
    font-family: LufgaMedium;
    font-size: 18px;
    width: 38px;
    height: 46px;
  }
`

export const CardThreeImage = styled.img`
  width: 300px;
  height: 320px;
  border-radius: 10px;
  object-fit: cover;
`

export const CardThreeInfo = styled.div`
  position: absolute;
  margin: 0 10px;
  bottom: 16px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  width: 250px;
  padding: 10px 15px;
  border-radius: 12px;
  backdrop-filter: blur(40px);
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.15);
  border: solid 1px #000;
  background-color: rgba(255, 255, 255, 0.95);
`
