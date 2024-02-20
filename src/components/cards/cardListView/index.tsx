import {
  CardListViewApplied,
  CardListViewBottom,
  CardListViewButtonContainer,
  CardListViewContainer,
  CardListViewImg,
  CardListViewInfo,
  CardListViewReview,
  CardListViewTop,
} from './styles'
import ReviewStarChoosen from '../../../assets/images/ReviewStarChoosen.png'
import ReviewStarNotChoosen from '../../../assets/images/ReviewStarNotChoosen.png'
import HeartIcon from '../../../assets/images/HeartIcon.png'
import { FC } from 'react'

interface IProps {
  image: string
  title: string
  category: string
  rating: number
  description: string
  price: number
  color: string
}

const CardListView: FC<IProps> = ({
  image,
  title,
  category,
  rating,
  description,
  price,
  color,
}) => {
  return (
    <CardListViewContainer>
      <CardListViewImg src={image} alt={title} />
      <CardListViewInfo>
        <CardListViewTop>
          <div>
            <h1>{title}</h1>
            <span>{category}</span>
          </div>
          <CardListViewReview>
            <div>
              <img src={ReviewStarChoosen} alt="star" />
              <img src={ReviewStarChoosen} alt="star" />
              <img src={ReviewStarChoosen} alt="star" />
              <img src={ReviewStarNotChoosen} alt="star" />
              <img src={ReviewStarNotChoosen} alt="star" />
            </div>
            <span>{rating} Reviews</span>
          </CardListViewReview>
        </CardListViewTop>
        <p>{description}</p>
        <CardListViewBottom>
          <CardListViewApplied>
            <div>
              <h2>Price</h2>
              <p>$ {price}</p>
            </div>
            <div>
              <h2>Color</h2>
              <span style={{ background: color }}></span>
            </div>
          </CardListViewApplied>
          <CardListViewButtonContainer>
            <button>Add To Cart</button>
            <button>
              <img src={HeartIcon} alt="heart" />
            </button>
          </CardListViewButtonContainer>
        </CardListViewBottom>
      </CardListViewInfo>
    </CardListViewContainer>
  )
}

export default CardListView
