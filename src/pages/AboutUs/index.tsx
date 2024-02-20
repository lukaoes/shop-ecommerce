import SecondHeader from 'components/layout/secondHeader'
import ContactHeader from '../../assets/images/ContactHeader.jpg'

const secondHeaderInfo = {
  title: 'About Us',
  link: '/aboutus',
  image: `${ContactHeader}`,
}

const AboutUs = () => {
  return (
    <div>
      <SecondHeader {...secondHeaderInfo} />
    </div>
  )
}

export default AboutUs
