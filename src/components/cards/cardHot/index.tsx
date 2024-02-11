import { CardHotImage, CardHotInfo, CardHotLayout } from './styled'

const CardHot = () => {
  return (
    <CardHotLayout>
      <CardHotImage
        src="https://www.icolorpalette.com/download/solidcolorimage/666666_solid_color_background_icolorpalette.png"
        alt="asdas"
      />
      <CardHotInfo>
        <h5>Bluebell Hand Block..</h5>
        <span>Up To 90% Off</span>
      </CardHotInfo>
    </CardHotLayout>
  )
}

export default CardHot
