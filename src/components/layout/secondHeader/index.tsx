import {
  LeftCornerImg,
  LeftTopCornerImg,
  RightCornerImg,
  SecondHeaderContainer,
  SecondHeaderInfo,
  SecondHeaderInfoImage,
  SecondHeaderLinks,
  SecondHeaderPhotoLeaf,
  SecondHeaderPhotoLeafTwo,
} from './styled'
import SecondHeaderOne from '../../../assets/images/SecondHeaderOne.svg'
import SecondHeaderTwo from '../../../assets/images/SecondHeaderTwo.svg'
import SecondHeaderThree from '../../../assets/images/SecondHeaderThree.svg'
import SecondHeaderFour from '../../../assets/images/SecondHeaderFour.svg'
import SecondHeaderFive from '../../../assets/images/SecondHeaderFive.png'
import SecondHeaderArrow from '../../../assets/images/SecondHeaderArrow.png'
import SecondHeaderLoaf from '../../../assets/images/SecondHeaderLeaf.png'
import SecondHeaderLeafTwo from '../../../assets/images/SecondHeaderLeafTwo.png'
import { Link } from 'react-router-dom'
import { FC } from 'react'

interface IProps {
  title: string
  link: string
  image: string
}

export const SecondHeader: FC<IProps> = ({ title, link, image }) => {
  return (
    <SecondHeaderContainer>
      <LeftTopCornerImg src={SecondHeaderOne} alt="corner" />
      <RightCornerImg src={SecondHeaderTwo} alt="corner" />
      <RightCornerImg src={SecondHeaderThree} alt="corner" />
      <LeftCornerImg src={SecondHeaderFive} alt="flower" />
      <LeftCornerImg src={SecondHeaderFour} alt="flower" />
      <SecondHeaderInfo>
        <SecondHeaderLinks>
          <h2>{title}</h2>
          <div>
            <Link to="/">Home</Link>
            <img src={SecondHeaderArrow} alt="arrow" />
            <Link to={link}>{title}</Link>
          </div>
        </SecondHeaderLinks>
        <SecondHeaderPhotoLeaf src={SecondHeaderLoaf} alt="flower" />
        <SecondHeaderPhotoLeafTwo src={SecondHeaderLeafTwo} alt="flower" />
        <SecondHeaderInfoImage src={image} alt={title} />
      </SecondHeaderInfo>
    </SecondHeaderContainer>
  )
}

export default SecondHeader
