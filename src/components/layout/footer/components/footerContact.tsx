import { FooterContact, FooterNewsteller } from '../styled'
import FooterLogo from '../../../../assets/images/FooterLogo.png'
import ArrowRight from '../../../../assets/images/ArrowRight.png'

const FooterContactContainer = () => {
  return (
    <FooterContact>
      <img src={FooterLogo} alt="logo" />
      <p>
        <span>Address : 451 Wall Street, UK, London</span>
        <span>E-mail : example@info.com</span>
        <span>Phone: (064) 332-1233</span>
      </p>
      <h5>Subscribe To Our Newsteller</h5>
      <FooterNewsteller>
        <input type="text" name="text" placeholder="Your Email Adress" />
        <img src={ArrowRight} alt="arrow" />
      </FooterNewsteller>
    </FooterContact>
  )
}

export default FooterContactContainer
