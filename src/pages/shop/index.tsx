import ShopFilter from './components/shopFilter'
import ShopProducts from './components/shopProducts'
import { ShopContainer, ShopLayout } from './styled'

const Shop = () => {
  return (
    <ShopContainer>
      <ShopLayout>
        <ShopFilter />
        <ShopProducts />
      </ShopLayout>
    </ShopContainer>
  )
}

export default Shop
