import styled from 'styled-components'

export const SecondHeaderContainer = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
  background-image: radial-gradient(
    circle at 71% 50%,
    #fffae7,
    #fff4c8 15%,
    #feeb9d 38%,
    #feeb9d 100%
  );
`

export const LeftTopCornerImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
`

export const RightCornerImg = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
`

export const LeftCornerImg = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
`

export const SecondHeaderInfo = styled.div`
  max-width: 1190px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0 40px;
`

export const SecondHeaderPhotoLeaf = styled.img`
  position: absolute;
  right: -100px;
  bottom: 0;
  @media only screen and (max-width: 1490px) {
    display: none;
  }
`

export const SecondHeaderPhotoLeafTwo = styled.img`
  position: absolute;
  right: 78px;
  bottom: 0;
`

export const SecondHeaderLinks = styled.div`
  z-index: 1;
  h2 {
    font-family: LufgaSemiBold;
    font-size: 40px;
    margin-bottom: 16px;
  }

  div {
    display: flex;
    align-items: center;
  }

  a {
    text-decoration: none;
    font-family: LufgaRegular;
    font-size: 16px;
    color: #000;

    &:hover {
      color: #8d84b1;
    }
  }

  img {
    margin: 0px 15px;
  }
  @media only screen and (max-width: 550px) {
    margin: 0 auto;
  }
`

export const SecondHeaderInfoImage = styled.img`
  height: 100%;
  width: 285px;
  object-fit: cover;
  z-index: 1;
  @media only screen and (max-width: 550px) {
    display: none;
  }
`
