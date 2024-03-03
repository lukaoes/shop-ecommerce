import { Container } from 'components/layout/header/styled'
import ShopFilter from './components/shopFilter'
import ShopProducts from './components/shopProducts'
import { ShopContainer, ShopLayout } from './styled'
import SecondHeader from 'components/layout/secondHeader'
import ShopHeader from '../../assets/images/ShopHeader.jpg'

const secondHeaderInfo = {
  title: 'Shop',
  link: '/shop',
  image: `${ShopHeader}`,
}

const Shop = () => {
  return (
    <>
      <SecondHeader {...secondHeaderInfo} />
      <Container>
        <ShopContainer>
          <ShopLayout>
            <div className="remove-filter">
              <ShopFilter />
            </div>
            <ShopProducts />
          </ShopLayout>
        </ShopContainer>
      </Container>
    </>
  )
}

export default Shop
