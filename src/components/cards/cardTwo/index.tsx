import {
  CardTwoImage,
  CardTwoImageLayout,
  CardTwoInfo,
  CardTwoInfoLeft,
  CardTwoInfoRight,
} from './styled'

const CardTwo = () => {
  return (
    <CardTwoImageLayout>
      <CardTwoImage
        src="https://www.icolorpalette.com/download/solidcolorimage/666666_solid_color_background_icolorpalette.png"
        alt="asdas"
      />
      <CardTwoInfo>
        <CardTwoInfoLeft>
          <h5>Up to 40% Off</h5>
          <p>Bluebell Hand Block..</p>
        </CardTwoInfoLeft>
        <CardTwoInfoRight>
          <h5>$80</h5>
          <span>$95</span>
        </CardTwoInfoRight>
      </CardTwoInfo>
    </CardTwoImageLayout>
  )
}

export default CardTwo
