import styled from 'styled-components'

export const CardFeaturedLayout = styled.div`
  margin: 40px auto; // for display
  width: 409px;
  height: 195px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  /* padding: 15px; */
  border-radius: 15px;
  box-shadow: 5px 15px 30px 0 rgba(82, 48, 0, 0.13);
  border: solid 1px #000;
  background-color: #fffaf3;
`

export const CardFeaturedImg = styled.img`
  width: 150px;
  height: 165px;
  border-radius: 15px;
  background-color: #666;
`

export const CardFeaturedInfo = styled.div`
  width: 205px;
  height: 113px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
  padding: 0;

  h5 {
    width: 190px;
    height: 52px;
    font-family: LufgaMedium;
    font-size: 20px;
    line-height: 26px;
  }

  span {
    display: block;
    height: 21px;
    line-height: 21px;
    font-family: LufgaMedium;
    font-size: 14px;
    color: #cc0d39;
  }
`

export const CardFeaturedPrice = styled.div`
  display: flex;
  align-items: center;

  h5 {
    height: auto;
    width: auto;
    display: inline;
    font-family: LufgaSemiBold;
    font-size: 20px;
    margin-right: 4px;
  }

  span,
  p {
    font-family: LufgaRegular;
    font-size: 14px;
  }

  span {
    color: rgba(0, 0, 0, 0.7);
    margin-right: 9px;
    text-decoration: line-through;
  }

  p {
    margin-left: 5px;
    color: rgba(0, 0, 0, 0.5);
  }
`
