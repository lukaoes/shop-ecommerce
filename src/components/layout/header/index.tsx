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
import { NavLink } from 'react-router-dom'

const Header = () => {
  const activeStyle = {
    opacity: '1',
  }

  return (
    <HeaderLayout>
      <HeaderContent>
        <LogoAndNavigation>
          <Logo src={HeaderLogo} alt="logo" />
          <div>
            <ul>
              <li>
                <NavLink
                  to="/"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Home
                  <img src={NavigationStar} alt="star" />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/shop"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Shop
                  <img src={NavigationStar} alt="star" />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Blog
                  <img src={NavigationStar} alt="star" />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Contact Us
                  <img src={NavigationStar} alt="star" />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/aboutus"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  About Us
                  <img src={NavigationStar} alt="star" />
                </NavLink>
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
