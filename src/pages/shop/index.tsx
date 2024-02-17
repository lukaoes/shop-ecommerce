import ShopFilter from './components/shopFilter'
import { ShopContainer, ShopLayout, ShopProducts } from './styled'

const Shop = () => {
  return (
    <ShopContainer>
      <ShopLayout>
        <ShopFilter />
        <ShopProducts></ShopProducts>
      </ShopLayout>
    </ShopContainer>
  )
}

export default Shop
