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
import { FC, useState } from 'react'
import ProductDetailsModal from 'components/ui/productDetailsModal'

export interface ICardProps {
  image: string
  title: string
  price: number
  sale?: number
}

const Card: FC<ICardProps> = ({ image, title, price, sale }) => {
  const [open, setOpen] = useState(false)

  const setBodyFixed = () => {
    document.body.classList.toggle('fixed')
  }

  const setFavorite = (id: number) => {
    const currentFavorites = localStorage.getItem('shop-favorite')
    if (!currentFavorites) {
      const favArr = JSON.stringify([id])
      localStorage.setItem('shop-favorite', favArr)
    } else {
      let favArr = JSON.parse(currentFavorites)
      if (favArr.includes(id)) {
        favArr = favArr.filter((item: number) => item !== id)
      } else {
        favArr.push(id)
      }
      favArr = JSON.stringify(favArr)
      localStorage.setItem('shop-favorite', favArr)
    }
  }

  return (
    <>
      <CardLayout>
        <ImageContainer>
          <CardImage src={image} alt={title} />
          {sale && <SaleTag>GET {sale}% OFF</SaleTag>}
          <CardIconContainer>
            <div onClick={() => setFavorite(13)}>
              <img src={CardHeartIcon} alt="heart" />
            </div>
            <div>
              <img src={CardCartIcon} alt="cart" className="CardCartIcon" />
            </div>
          </CardIconContainer>
          <QuickView
            onClick={() => {
              setOpen(true)
              setBodyFixed()
            }}
          >
            QUICK VIEW
          </QuickView>
        </ImageContainer>
        <CardInfoContainer>
          <h1>{title}</h1>
          <span>${price}</span>
        </CardInfoContainer>
      </CardLayout>
      <ProductDetailsModal
        open={open}
        onClose={() => {
          setOpen(false)
          setBodyFixed()
        }}
      />
    </>
  )
}

export default Card
