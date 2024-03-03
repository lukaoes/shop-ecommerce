import styled from 'styled-components'

export const ShopContainer = styled.div``

export const ShopLayout = styled.div`
  gap: 30px;
  display: flex;
  width: 95%;
  margin: 0 auto;

  .remove-filter {
    @media only screen and (max-width: 770px) {
      display: none;
    }
  }
`
