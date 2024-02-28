import { FC } from 'react'
import {
  BurgerMenuBackground,
  BurgerMenuCenter,
  BurgerMenuMayLike,
  BurgerMenuModalBg,
  BurgerMenuModalLayout,
  BurgerMenuSearch,
  BurgerMenuSearchBottom,
} from './styled'
import SearchIcon from '../../../assets/images/SearchIcon.png'
import { Link } from 'react-router-dom'
import BurgerMenuCard from './burgerMenuCard'
import Product1 from '../../../assets/images/ImageSectionFour.jpg'
import Product2 from '../../../assets/images/ImageSectionThree.jpg'

interface IProps {
  open: boolean
  onClose: () => void
}

const categories = ['Dress', 'Sportswear', 'Trousers']

const products = [
  {
    image: `${Product1}`,
    title: 'ComfyLeggings',
    price: 39,
  },
  {
    image: `${Product2}`,
    title: 'DenimDream Jeans',
    price: 53,
  },
  {
    image: `${Product1}`,
    title: 'ComfyLeggings',
    price: 40,
  },
  {
    image: `${Product2}`,
    title: 'DenimDream Jeans',
    price: 53,
  },
  {
    image: `${Product1}`,
    title: 'ComfyLeggings',
    price: 39,
  },
  {
    image: `${Product2}`,
    title: 'DenimDream Jeans',
    price: 53,
  },
  {
    image: `${Product1}`,
    title: 'ComfyLeggings',
    price: 40,
  },
]

const SearchModal: FC<IProps> = ({ open, onClose }) => {
  return (
    <BurgerMenuModalBg className={open ? 'open' : ''}>
      <BurgerMenuBackground onClick={() => onClose()}></BurgerMenuBackground>
      <BurgerMenuModalLayout className={open ? 'open search' : 'search'}>
        <BurgerMenuCenter>
          <BurgerMenuSearch>
            <div>
              <select name="categories" id="categories">
                <option value="volvo">All Categories</option>
                {categories.map((item) => (
                  <option key={`select-cate-${item}`} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <input type="text" name="text" placeholder="Search Product" />
            <img src={SearchIcon} alt="search" />
          </BurgerMenuSearch>
          <BurgerMenuSearchBottom>
            <span>Quick Search:</span>
            <Link to="/shop?category=Outwear">Outwear</Link>
            <Link to="/shop?category=Dresses">Dresses</Link>
            <Link to="/shop?category=Footwear">Footwear</Link>
            <Link to="/shop?category=Activewear">Activewear</Link>
          </BurgerMenuSearchBottom>
        </BurgerMenuCenter>
        <BurgerMenuCenter>
          <h1>You May Also Like</h1>
          <BurgerMenuMayLike>
            {products.map((item) => (
              <BurgerMenuCard key={`search-may-like${item}`} {...item} />
            ))}
          </BurgerMenuMayLike>
        </BurgerMenuCenter>
      </BurgerMenuModalLayout>
    </BurgerMenuModalBg>
  )
}

export default SearchModal
