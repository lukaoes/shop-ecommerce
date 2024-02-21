import { ImagesSectionLayout } from './styled'
import ImagesSectionOne from '../../../../assets/images/ImagesSectionOne.jpg'
import ImagesSectionTwo from '../../../../assets/images/ImagesSectionTwo.jpg'
import ImagesSectionThree from '../../../../assets/images/ImageSectionThree.jpg'
import imageSectionFour from '../../../../assets/images/ImageSectionFour.jpg'

const ImagesSection = () => {
  return (
    <ImagesSectionLayout>
      <div>
        <img src={ImagesSectionOne} alt="fashion" />
        <img src={ImagesSectionTwo} alt="fashion" />
      </div>
      <img src={ImagesSectionThree} alt="garderobe" />
      <img src={imageSectionFour} alt="garderobe" />
    </ImagesSectionLayout>
  )
}

export default ImagesSection
