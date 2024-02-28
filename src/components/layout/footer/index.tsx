import {
  FooterBottom,
  FooterCategories,
  FooterLayoutTop,
  FooterTopLine,
} from './styled'
import FooterContactContainer from './components/footerContact'
import FooterRecentPosts from './components/footerRecentPosts'
import FooterMenu, { IFooterMenu } from './components/footerMenu'
import FooterAccept from '../../../assets/images/FooterAccept.png'

const Footer = () => {
  const storeLocations: IFooterMenu[] = [
    {
      name: 'New York',
      url: '/ny',
    },
    {
      name: 'London SF',
      url: '/ny',
    },
    {
      name: 'Edinburgh',
      url: '/ny',
    },
    {
      name: 'Los Angeles',
      url: '/ny',
    },
    {
      name: 'Chicago',
      url: '/ny',
    },
    {
      name: 'Las Vegas',
      url: '/ny',
    },
  ]

  const usefulLinks: IFooterMenu[] = [
    {
      name: 'Privacy Policy',
      url: '/ny',
    },
    {
      name: 'Returns',
      url: '/ny',
    },
    {
      name: 'Terms & Conditions',
      url: '/ny',
    },
    {
      name: 'Contact Us',
      url: '/ny',
    },
    {
      name: 'Latest News',
      url: '/ny',
    },
    {
      name: 'Our Sitemap',
      url: '/ny',
    },
  ]

  const footerMenu: IFooterMenu[] = [
    {
      name: 'Instagram profile',
      url: '/ny',
    },
    {
      name: 'New Collection',
      url: '/ny',
    },
    {
      name: 'Woman Dress',
      url: '/ny',
    },
    {
      name: 'Contact Us',
      url: '/ny',
    },
    {
      name: 'Latest News',
      url: '/ny',
    },
  ]

  return (
    <>
      <FooterTopLine></FooterTopLine>
      <FooterLayoutTop>
        <FooterContactContainer />
        <FooterCategories>
          <FooterRecentPosts />
          <FooterMenu menu={storeLocations} title="Our Stores" />
          <FooterMenu menu={usefulLinks} title="Useful Links" />
          <FooterMenu menu={footerMenu} title="Footer Menu" />
        </FooterCategories>
      </FooterLayoutTop>
      <FooterBottom>
        <span>© 2023 DexignZone Theme. All Rights Reserved.</span>
        <span>
          We Accept:
          <img src={FooterAccept} alt="accept" />
        </span>
      </FooterBottom>
    </>
  )
}

export default Footer
