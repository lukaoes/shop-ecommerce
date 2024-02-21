import { AboutCompaniesContainer, AboutCompaniesImages } from './styled'
import AboutCompanyLogoOne from '../../../../assets/images/AboutCompanyLogoOne.jpg'
import AboutCompanyLogoTwo from '../../../../assets/images/AboutCompanyLogoTwo.jpg'
import AboutCompanyLogoThree from '../../../../assets/images/AboutCompanyLogoThree.jpg'
import AboutCompanyLogoFour from '../../../../assets/images/AboutCompanyLogoFour.jpg'
import AboutCompanyLogoFive from '../../../../assets/images/AboutCompanyLogoFive.jpg'
import AboutCompanyLogoSix from '../../../../assets/images/AboutCompanyLogoSix.jpg'
import AboutCompanyLogoSeven from '../../../../assets/images/AboutCompanyLogoSeven.jpg'
import AboutCompanyLogoEight from '../../../../assets/images/AboutCompanyLogoEight.jpg'

const AboutCompanies = () => {
  return (
    <AboutCompaniesContainer>
      <div>
        <h1>We’re just keep growing with 6.3k trusted companies</h1>
        <p>
          Nullam nec ipsum luctus, vehicula massa in, dictum sapien. Aenean quis
          luctus ert nulla quam augue.
        </p>
      </div>
      <AboutCompaniesImages>
        <img src={AboutCompanyLogoOne} />
        <img src={AboutCompanyLogoTwo} />
        <img src={AboutCompanyLogoThree} />
        <img src={AboutCompanyLogoFour} />
        <img src={AboutCompanyLogoFive} />
        <img src={AboutCompanyLogoSix} />
        <img src={AboutCompanyLogoSeven} />
        <img src={AboutCompanyLogoEight} />
      </AboutCompaniesImages>
    </AboutCompaniesContainer>
  )
}

export default AboutCompanies
