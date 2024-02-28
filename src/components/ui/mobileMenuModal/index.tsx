import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import NavigationStar from '../../../assets/images/NavigationStar.png'
import {
  CartModalContainer,
  CartModalInsideContainer,
  CartModalLayout,
} from '../CartModal/styled'
import { MobileNav } from './styled'

interface IProps {
  open: boolean
  onClose: () => void
}

const MobileMenu: FC<IProps> = ({ open, onClose }) => {
  const activeStyle = {
    opacity: '1',
  }
  return (
    <CartModalContainer className={open ? 'open' : ''}>
      <CartModalLayout onClick={() => onClose()}></CartModalLayout>
      <div className={open ? 'open cart' : 'cart'}>
        <CartModalInsideContainer>
          <MobileNav>
            <ul>
              <li>
                <NavLink
                  onClick={() => onClose()}
                  to="/"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <img src={NavigationStar} alt="star" />
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => onClose()}
                  to="/shop"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <img src={NavigationStar} alt="star" />
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => onClose()}
                  to="/blog"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <img src={NavigationStar} alt="star" />
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => onClose()}
                  to="/aboutus"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <img src={NavigationStar} alt="star" />
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => onClose()}
                  to="/contact"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <img src={NavigationStar} alt="star" />
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </MobileNav>
        </CartModalInsideContainer>
      </div>
    </CartModalContainer>
  )
}

export default MobileMenu
