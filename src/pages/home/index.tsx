import { Container } from 'components/layout/header/styled'
import MostPopularProducts from './components/mostPopularProducts'
import { HomeTitle, MostPopularFilterContainer } from './styles'
import { useState } from 'react'

const Home = () => {
  const categories = ['Chairs', 'Sofas', 'Decor', 'Lighting', 'Tables']
  const [activeCategory, setActiveCategory] = useState(categories[0])

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category)
  }

  return (
    <Container>
      <MostPopularFilterContainer>
        <HomeTitle>Most Popular Products</HomeTitle>
        <div>
          {categories.map((category) => (
            <span
              key={`category-main-page-${category}`}
              className={category === activeCategory ? 'active' : ''}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </span>
          ))}
        </div>
      </MostPopularFilterContainer>
      <MostPopularProducts />
    </Container>
  )
}

export default Home
