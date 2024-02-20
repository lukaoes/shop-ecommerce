import { Container } from 'components/layout/header/styled'
import ShopFilter from './components/shopFilter'
import ShopProducts from './components/shopProducts'
import { ShopContainer, ShopLayout } from './styled'

const Shop = () => {
  return (
    <Container>
      <ShopContainer>
        <ShopLayout>
          <ShopFilter />
          <ShopProducts />
        </ShopLayout>
      </ShopContainer>
    </Container>
  )
}

export default Shop
