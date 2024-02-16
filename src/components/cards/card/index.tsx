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
import { FC } from 'react'

export interface ICardProps {
  image: string
  title: string
  price: number
  sale?: number
}

const Card: FC<ICardProps> = ({ image, title, price, sale }) => {
  return (
    <CardLayout>
      <ImageContainer>
        <CardImage src={image} alt={title} />
        {sale && <SaleTag>GET {sale}% OFF</SaleTag>}
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
        <h1>{title}</h1>
        <span>${price}</span>
      </CardInfoContainer>
    </CardLayout>
  )
}

export default Card
