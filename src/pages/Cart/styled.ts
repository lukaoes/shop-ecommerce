import styled from 'styled-components'

export const CartContainer = styled.div`
  max-width: 1300px;
  margin: 92px auto;
  gap: 45px;
  display: flex;
  @media only screen and (max-width: 1310px) {
    align-items: center;
    flex-direction: column;
    gap: 100px;
  }
`
