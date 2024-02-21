import SecondHeader from 'components/layout/secondHeader'
import ContactHeader from '../../assets/images/ContactHeader.jpg'
import { AboutUsLayout } from './styles'
import Accordion from './components/accordion'
import ImagesSection from './components/imagesSection'
import AboutUsClients from './components/aboutUsClients'
import AboutCompanies from './components/companies'

const secondHeaderInfo = {
  title: 'About Us',
  link: '/aboutus',
  image: `${ContactHeader}`,
}

const AboutUs = () => {
  return (
    <>
      <SecondHeader {...secondHeaderInfo} />
      <AboutUsLayout>
        <Accordion />
        <ImagesSection />
      </AboutUsLayout>
      <AboutUsClients />
      <AboutCompanies />
    </>
  )
}

export default AboutUs
