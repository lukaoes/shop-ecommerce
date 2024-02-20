import BlogCard from 'components/cards/blogCard'
import {
  BlogButtonDiv,
  BlogContainer,
  BlogLayout,
  LoadMoreButton,
} from './styles'

const blogOne = {
  image:
    'https://d2fwbsa91kuigh.cloudfront.net/media/wysiwyg/2023-Q1-RAMADAN-FEEL-E-MUSK-PRODUCT-CT9_1__16.jpg',
  description: 'Uncovering the Beauty Benefits of Plant-Based Skincare',
  date: '17 MAY 2022',
  link: '#',
}

const blogTwo = {
  image:
    'https://d2fwbsa91kuigh.cloudfront.net/media/wysiwyg/2023-Q1-Haircare-Spend-More-Save_more-CT10_2.jpg',
  description: 'Fashion Diversity: Celebrating Style for All Body Types',
  date: '28 MAR 2023',
  link: '#',
}

const Blog = () => {
  return (
    <BlogLayout>
      <BlogContainer>
        <BlogCard {...blogOne} />
        <BlogCard {...blogTwo} />
        <BlogCard {...blogTwo} />
        <BlogCard {...blogOne} />
      </BlogContainer>
      <BlogButtonDiv>
        <LoadMoreButton>Load More</LoadMoreButton>
      </BlogButtonDiv>
    </BlogLayout>
  )
}

export default Blog
