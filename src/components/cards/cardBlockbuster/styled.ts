import styled from 'styled-components'

export const CardBlockbusterLayout = styled.div`
  width: 300px;
  height: 298px;
  border-radius: 15px;
  box-shadow: 5px -40px 30px 0 rgba(82, 48, 0, 0.13);
  background-color: linear-gradient(
    to bottom,
    #fff 133%,
    rgba(255, 255, 255, 0)
  );
  position: relative;
  margin: 50px auto; //for display
`

export const CardBlockbusterImg = styled.img`
  width: 250px;
  height: 268px;
  object-fit: cover;
  position: absolute;
  top: -56px;
  left: 25px;
`
export const CardBlockbusterInfo = styled.div`
  width: 260px;
  display: flex;
  position: absolute;
  justify-content: space-between;
  bottom: 19px;
  left: 20px;
`
