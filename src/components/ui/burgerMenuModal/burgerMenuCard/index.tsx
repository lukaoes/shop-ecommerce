import { BurgerMenuCardLayout } from './styled'
// import Product1 from '../../../../assets/images/AboutCompanyLogoFour.jpg'
import { FC } from 'react'
// import Product2 from '../../../../assets/images/AboutCompanyLogoFive.jpg'

interface IProps {
  image: string
  title: string
  price: number
}

const BurgerMenuCard: FC<IProps> = ({ image, title, price }) => {
  return (
    <BurgerMenuCardLayout>
      <img src={image} alt="product" />
      <h2>{title}</h2>
      <span>${price}</span>
    </BurgerMenuCardLayout>
  )
}

export default BurgerMenuCard
