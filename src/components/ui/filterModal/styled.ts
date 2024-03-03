import styled from 'styled-components'

export const FilterModalContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 5;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease-in-out;

  .filter {
    background-color: #ffedd4;
    position: absolute;
    left: -500px;
    top: 0;
    height: 100vh;
    background: #fffaf3;
    z-index: 7;
    max-width: 485px;
    transition: left 0.3s ease-in-out;

    &.open {
      left: 0;
      padding: 10px;
    }
  }

  &.open {
    opacity: 1;
    pointer-events: all;
  }
`
