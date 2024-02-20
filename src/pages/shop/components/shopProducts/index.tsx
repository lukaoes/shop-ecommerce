import {
  ProductsTopFilter,
  ProductsTopRight,
  ShopProductsContainer,
} from './styled'
import ProductsFilterAds from '../../../../assets/images/ProductsFilterAds.png'
// import ProductsFilterAdsTwo from '../../../../assets/images/ProductsFilterAdsTwo.png'
import outputonlinepngtools from '../../../../assets/images/outputonlinepngtools.png'
import { useState } from 'react'
import CardListViewSection from './components/CardListViewSection'
import MostPopularProducts from 'pages/home/components/mostPopularProducts'

const ShopProducts = () => {
  const [activeImage, setActiveImage] = useState(1)

  const handleImageClick = (imageNumber: number) => {
    setActiveImage(imageNumber)
  }

  return (
    <ShopProductsContainer>
      <ProductsTopFilter>
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
    </ShopProductsContainer>
  )
}

export default ShopProducts
