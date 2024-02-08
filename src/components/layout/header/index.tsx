import {
  BurgerMenu,
  HeaderAuth,
  HeaderContent,
  HeaderIcons,
  HeaderLayout,
  HeaderOptions,
  Logo,
  LogoAndNavigation,
} from './styled'
import HeaderLogo from '../../../assets/images/HeaderLogo.png'
import NavigationStar from '../../../assets/images/NavigationStar.png'
import SearchIcon from '../../../assets/images/SearchIcon.png'
import HeartIcon from '../../../assets/images/HeartIcon.png'
import CartIcon from '../../../assets/images/CartIcon.png'

const Header = () => {
  return (
    <HeaderLayout>
      <HeaderContent>
        <LogoAndNavigation>
          <Logo src={HeaderLogo} alt="logo" />
          <div>
            <ul>
              <li>
                Home
                <img src={NavigationStar} alt="star" />
              </li>
              <li>
                Shop
                <img src={NavigationStar} alt="star" />
              </li>
              <li>
                Blog
                <img src={NavigationStar} alt="star" />
              </li>
              <li>
                Portfolio
                <img src={NavigationStar} alt="star" />
              </li>
              <li>
                Pages
                <img src={NavigationStar} alt="star" />
              </li>
            </ul>
          </div>
        </LogoAndNavigation>
        <HeaderOptions>
          <HeaderAuth>
            <a href="#">Login</a> / <a href="#">Register</a>
          </HeaderAuth>
          <HeaderIcons>
            <img src={SearchIcon} alt="search" />
            <img src={HeartIcon} alt="heart" />
            <img src={CartIcon} alt="cart" />
          </HeaderIcons>
          <BurgerMenu>
            <div></div>
            <div></div>
          </BurgerMenu>
        </HeaderOptions>
      </HeaderContent>
    </HeaderLayout>
  )
}

export default Header
