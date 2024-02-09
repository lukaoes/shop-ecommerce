import {
  FooterBottom,
  FooterCategories,
  FooterContact,
  FooterLayoutTop,
  FooterList,
  FooterNewsteller,
  FooterRecentPost,
  RecentPostContainer,
} from './styled'
import FooterLogo from '../../../assets/images/FooterLogo.png'
import ArrowRight from '../../../assets/images/ArrowRight.png'

const Footer = () => {
  return (
    <>
      <FooterLayoutTop>
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
        <FooterCategories>
          <div>
            <h1>Recent Posts</h1>
            <RecentPostContainer>
              <FooterRecentPost>
                <img src="alala" alt="bottle" />
                <div>
                  <p>Wooden Water Bottles</p>
                  <span>July 23, 2003</span>
                </div>
              </FooterRecentPost>
              <FooterRecentPost>
                <img src="alala" alt="bags" />
                <div>
                  <p>Eco friendly bags</p>
                  <span>July 23, 2003</span>
                </div>
              </FooterRecentPost>
              <FooterRecentPost>
                <img src="alala" alt="toothbrushes" />
                <div>
                  <p>Bamboo toothbrushes</p>
                  <span>July 23, 2003</span>
                </div>
              </FooterRecentPost>
            </RecentPostContainer>
          </div>
          <div>
            <h1>Our Stores</h1>
            <FooterList>
              <a href="#">
                <li>New York</li>
              </a>
              <a href="#">
                <li>London SF</li>
              </a>
              <a href="#">
                <li>Edinburgh</li>
              </a>
              <a href="#">
                <li>Los Angeles</li>
              </a>
              <a href="#">
                <li>Chicago</li>
              </a>
              <a href="#">
                <li>Las Vegas</li>
              </a>
            </FooterList>
          </div>
          <div>
            <h1>Useful Links</h1>
            <FooterList>
              <a href="#">
                <li>Privacy Policy</li>
              </a>
              <a href="#">
                <li>Returns</li>
              </a>
              <a href="#">
                <li>Terms & Conditions</li>
              </a>
              <a href="#">
                <li>Contact Us</li>
              </a>
              <a href="#">
                <li>Latest News</li>
              </a>
              <a href="#">
                <li>Our Sitemap</li>
              </a>
            </FooterList>
          </div>
          <div>
            <h1>Footer Menu</h1>
            <FooterList>
              <a href="#">
                <li>Instagram profile</li>
              </a>
              <a href="#">
                <li>New Collection</li>
              </a>
              <a href="#">
                <li>Woman Dress</li>
              </a>
              <a href="#">
                <li>Contact Us</li>
              </a>
              <a href="#">
                <li>Latest News</li>
              </a>
            </FooterList>
          </div>
        </FooterCategories>
      </FooterLayoutTop>
      <FooterBottom>
        <span>© 2023 DexignZone Theme. All Rights Reserved.</span>
        <span>
          We Accept:
          <div></div>
        </span>
      </FooterBottom>
    </>
  )
}

export default Footer
