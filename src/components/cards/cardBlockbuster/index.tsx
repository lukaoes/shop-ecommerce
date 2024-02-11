import {
  CardTwoInfoLeft,
  CardTwoInfoRight,
} from 'components/cards/cardTwo/styled'
import {
  CardBlockbusterImg,
  CardBlockbusterInfo,
  CardBlockbusterLayout,
} from './styled'

const CardBlockbuster = () => {
  return (
    <CardBlockbusterLayout>
      <CardBlockbusterImg
        src="https://www.icolorpalette.com/download/solidcolorimage/666666_solid_color_background_icolorpalette.png"
        alt="asdas"
      />
      <CardBlockbusterInfo>
        <CardTwoInfoLeft>
          <h5>Up to 40% Off</h5>
          <p>Bluebell Hand Block..</p>
        </CardTwoInfoLeft>
        <CardTwoInfoRight>
          <h5>$80</h5>
          <span>$95</span>
        </CardTwoInfoRight>
      </CardBlockbusterInfo>
    </CardBlockbusterLayout>
  )
}

export default CardBlockbuster
