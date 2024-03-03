import BlogCard, { IBlogItem } from 'components/cards/blogCard'
import {
  BlogButtonDiv,
  BlogContainer,
  BlogLayout,
  LoadMoreButton,
} from './styles'
import SecondHeader from 'components/layout/secondHeader'
import BlogHeader from '../../assets/images/BlogHeader.jpg'
import { useEffect, useState } from 'react'

const blogOne = {
  image:
    'https://d2fwbsa91kuigh.cloudfront.net/media/wysiwyg/2023-Q1-RAMADAN-FEEL-E-MUSK-PRODUCT-CT9_1__16.jpg',
  title: 'Uncovering the Beauty Benefits of Plant-Based Skincare',
  date: '17 MAY 2022',
  link: 'blog/uncovering',
}

const blogTwo = {
  image:
    'https://d2fwbsa91kuigh.cloudfront.net/media/wysiwyg/2023-Q1-Haircare-Spend-More-Save_more-CT10_2.jpg',
  title: 'Fashion Diversity: Celebrating Style for All Body Types',
  date: '28 MAR 2023',
  link: 'blog/fashion',
}

const secondHeaderInfo = {
  title: 'Blog Post',
  link: '/blog',
  image: `${BlogHeader}`,
}

const Blog = () => {
  const [full, setFull] = useState(true)
  const [newDataType, setNewDataType] = useState(false)
  const [data, setData] = useState<IBlogItem[]>([])

  useEffect(() => {
    setData([blogOne, blogTwo, blogOne, blogTwo])
  }, [])

  const loadMore = () => {
    const newData = newDataType ? [blogOne, blogTwo] : [blogTwo, blogOne]
    setData([...data, ...newData])
    setNewDataType(!newDataType)
    if (data.length === 12) {
      setFull(false)
    }
  }

  return (
    <>
      <SecondHeader {...secondHeaderInfo} />
      <BlogLayout>
        <BlogContainer>
          {data.map((item) => (
            <BlogCard key={item.title} {...item} />
          ))}
        </BlogContainer>
        {full && (
          <BlogButtonDiv>
            <LoadMoreButton onClick={() => loadMore()}>
              Load More
            </LoadMoreButton>
          </BlogButtonDiv>
        )}
      </BlogLayout>
    </>
  )
}

export default Blog
