import styled from 'styled-components'

export const MobileNav = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;

    li {
      font-size: 20px;
      a {
        display: flex;
        gap: 5px;
        opacity: 0.5;
        padding: 10px 0;
        transition: all 0.3s ease-in-out;
        &:hover {
          opacity: 1;
        }
      }

      img {
        height: 12px;
      }
    }
  }
`
