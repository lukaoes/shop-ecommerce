import styled from 'styled-components'

export const ClinetsLayout = styled.div`
  max-width: 1290px;
  margin: 0 auto;
  color: #000;
  z-index: 1022;
  position: relative;
  display: flex;
`

export const ClientsLayoutBg = styled.div`
  width: 100%;
  position: relative;
  height: auto;
  height: 620px;
`

export const ClientsBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`

export const MainClientImg = styled.img`
  width: 514px;
  height: 679px;
  position: relative;
  bottom: 59px;
  object-fit: cover;
  margin-right: 160px;
`

export const SatisfiedUser = styled.div`
  padding: 15px 20px;
  border-radius: 10px;
  background-color: #fff;
  position: absolute;
  max-width: 156px;
  top: 370px;
  left: 375px;
  h2 {
    font-family: LufgaSemiBold;
    font-size: 16px;
    line-height: 28px;
    margin-bottom: 6px;
  }
`

export const SatisfiedUserImgs = styled.div`
  margin: 0 auto;
  display: flex;
  img {
    height: 48px;
    width: 48px;
    border: 2px solid #fff;
    border-radius: 100%;
    object-fit: cover;
  }

  .second {
    z-index: 2;
    position: relative;
    left: -10px;
  }

  span {
    border: 2px solid #fff;
    position: relative;
    left: -20px;
    z-index: 3;
    background-color: #fffaf3;
    border-radius: 100%;
    display: inline-block;
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: LufgaMedium;
    font-size: 14px;
  }
`

export const ClientsCardTitle = styled.h1`
  max-width: 461px;
  font-family: LufgaSemiBold;
  font-size: 45px;
  margin: 70px 0 30px 0;
`

export const ClientsCard = styled.div`
  padding: 45px 40px 38px 40px;
  max-width: 630px;
  height: calc(327px - 83px);
  background-color: #fff;
  border-radius: 30px;
  p {
    font-family: LufgaRegular;
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 30px;
  }
`

export const ClientsCardChoose = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .flex {
    display: flex;
    align-items: center;
  }

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 100%;
    margin-right: 20px;
  }
`

export const ClientsCardChooseName = styled.div`
  h4 {
    font-family: LufgaSemiBold;
    font-size: 22px;
    line-height: 28px;
    margin-bottom: 5px;
  }

  span {
    font-family: LufgaRegular;
    font-size: 14px;
    color: #5e626f;
  }
`

export const ClientChange = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  div {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background-color: #000;
    transition: all 0.3s ease-in-out;

    .right-arrow {
      rotate: 180deg;
    }

    &:hover {
      background-color: #ffedd4;

      svg {
        fill: #000;
      }
    }
  }
`
