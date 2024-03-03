import {
  ProductsTopFilter,
  ProductsTopRight,
  ShopProductsContainer,
} from './styled'
import ProductsFilterAds from '../../../../assets/images/ProductsFilterAds.png'
// import ProductsFilterAdsTwo from '../../../../assets/images/ProductsFilterAdsTwo.png'
import FiltersIcon from '../../../../assets/images/FiltersIcon.png'
import outputonlinepngtools from '../../../../assets/images/outputonlinepngtools.png'
import { useState } from 'react'
import CardListViewSection from './components/CardListViewSection'
import MostPopularProducts from 'pages/home/components/mostPopularProducts'
import { ShopFilterIcon } from '../shopFilter/styled'
import FilterModal from 'components/ui/filterModal'

const ShopProducts = () => {
  const [activeImage, setActiveImage] = useState(1)
  const [open, setOpen] = useState(false)

  const setBodyFixed = () => {
    document.body.classList.toggle('fixed')
  }

  const handleImageClick = (imageNumber: number) => {
    setActiveImage(imageNumber)
  }

  return (
    <ShopProductsContainer>
      <ProductsTopFilter>
        <ShopFilterIcon
          onClick={() => {
            setOpen(true)
            setBodyFixed()
          }}
        >
          <img src={FiltersIcon} alt="filter" />
          <span>Filters</span>
        </ShopFilterIcon>
        <div>Showing 1–5 Of 50 Results</div>
        <ProductsTopRight>
          <div>Default Sorting</div>
          <div>Categories</div>
          <div>
            <img
              src={ProductsFilterAds}
              alt="list"
              className={activeImage === 1 ? 'active' : ''}
              onClick={() => handleImageClick(1)}
            />
            <img
              src={outputonlinepngtools}
              alt="list"
              className={activeImage === 2 ? 'active' : ''}
              onClick={() => handleImageClick(2)}
            />
          </div>
        </ProductsTopRight>
      </ProductsTopFilter>
      {activeImage === 1 ? <MostPopularProducts /> : <CardListViewSection />}
      <FilterModal
        open={open}
        onClose={() => {
          setOpen(false)
          setBodyFixed()
        }}
      />
    </ShopProductsContainer>
  )
}

export default ShopProducts
