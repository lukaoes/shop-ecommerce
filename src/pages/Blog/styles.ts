import styled from 'styled-components'

export const BlogLayout = styled.div`
  margin: 120px 0;
`

export const BlogContainer = styled.div`
  max-width: 1290px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin: 0 auto 60px auto;
  @media only screen and (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }
`

export const BlogButtonDiv = styled.div`
  width: 146px;
  margin: 0 auto;
`

export const LoadMoreButton = styled.button`
  font-family: LufgaMedium;
  font-size: 16px;
  padding: 13px 30px;
  cursor: pointer;
  width: 146px;
  margin: 0 auto;
  background-color: #000;
  border: 1px solid #000;
  color: #fff;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`
