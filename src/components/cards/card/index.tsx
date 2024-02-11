import {
  CardIconContainer,
  CardImage,
  CardInfoContainer,
  CardLayout,
  ImageContainer,
  QuickView,
  SaleTag,
} from './styled'
import CardHeartIcon from '../../../assets/images/CardHeartIcon.png'
import CardCartIcon from '../../../assets/images/CardCartIcon.png'

const Card = () => {
  return (
    <CardLayout>
      <ImageContainer>
        <CardImage
          src="https://www.icolorpalette.com/download/solidcolorimage/666666_solid_color_background_icolorpalette.png"
          alt="lalalalal"
        />
        <SaleTag>GET 20% OFF</SaleTag>
        <CardIconContainer>
          <div>
            <img src={CardHeartIcon} alt="heart" />
          </div>
          <div>
            <img src={CardCartIcon} alt="cart" className="CardCartIcon" />
          </div>
        </CardIconContainer>
        <QuickView>QUICK VIEW</QuickView>
      </ImageContainer>
      <CardInfoContainer>
        <h1>Bluebell Hand Block Tiered Dress</h1>
        <span>$80</span>
      </CardInfoContainer>
    </CardLayout>
  )
}

export default Card
