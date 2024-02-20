import { FC } from 'react'
import { BlogCardContainer, BlogCardInfo } from './styles'

interface IProps {
  image: string
  description: string
  date: string
  link: string
}

const BlogCard: FC<IProps> = ({ image, description, date, link }) => {
  return (
    <BlogCardContainer>
      <img src={image} alt={description} />
      <BlogCardInfo>
        <span>{date}</span>
        <p>{description}</p>
        <a href={link}>Read More</a>
      </BlogCardInfo>
      {/* 'https://d2fwbsa91kuigh.cloudfront.net/media/wysiwyg/2023-Q1-RAMADAN-FEEL-E-MUSK-PRODUCT-CT9_1__16.jpg', */}
      {/* 'https://d2fwbsa91kuigh.cloudfront.net/media/wysiwyg/2023-Q1-Haircare-Spend-More-Save_more-CT10_2.jpg', */}
    </BlogCardContainer>
  )
}

export default BlogCard
