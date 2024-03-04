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
import HeartIcon from '../../../assets/images/HeartIcon.png'
import CartIcon from '../../../assets/images/CartIcon.png'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import CartModal from 'components/ui/CartModal/Cart'
import SearchModal from 'components/ui/burgerMenuModal'
import SeachIcon from '../../../assets/images/SearchIcon.png'
import MobileMenu from 'components/ui/mobileMenuModal'

const Header = () => {
  const activeStyle = {
    opacity: '1',
  }

  const [open, setOpen] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)
  const [openMobile, setOpenMobile] = useState(false)

  const setBodyFixed = () => {
    document.body.classList.toggle('fixed')
  }

  return (
    <HeaderLayout>
      <HeaderContent>
        <LogoAndNavigation>
          <Link to="/">
            <Logo src={HeaderLogo} alt="logo" />
          </Link>
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
                  to="/aboutus"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  About Us
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
            </ul>
          </div>
        </LogoAndNavigation>
        <HeaderOptions>
          <HeaderAuth>
            <Link to="/auth/login">Login</Link> /{' '}
            <Link to="/auth/register">Register</Link>
          </HeaderAuth>
          <HeaderIcons>
            <Link to="/wishlist">
              <img src={HeartIcon} alt="heart" />
            </Link>
            <img
              onClick={() => {
                setOpenSearch(true)
                setBodyFixed()
              }}
              src={SeachIcon}
              alt="search"
            />
            <img
              onClick={() => {
                setOpen(true)
                setBodyFixed()
              }}
              src={CartIcon}
              alt="cart"
            />
          </HeaderIcons>
          <BurgerMenu
            onClick={() => {
              setOpenMobile(true)
              setBodyFixed()
            }}
          >
            <div></div>
            <div></div>
          </BurgerMenu>
        </HeaderOptions>
        <SearchModal
          open={openSearch}
          onClose={() => {
            setOpenSearch(false)
            setBodyFixed()
          }}
        />
        <CartModal
          open={open}
          onClose={() => {
            setOpen(false)
            setBodyFixed()
          }}
        />
        <MobileMenu
          open={openMobile}
          onClose={() => {
            setOpenMobile(false)
            setBodyFixed()
          }}
        />
      </HeaderContent>
    </HeaderLayout>
  )
}

export default Header
