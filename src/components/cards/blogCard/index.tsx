import { FC } from 'react'
import { BlogCardContainer, BlogCardInfo } from './styles'

export interface IBlogItem {
  image: string
  title: string
  date: string
  link: string
}

const BlogCard: FC<IBlogItem> = ({ image, title, date, link }) => {
  return (
    <BlogCardContainer>
      <img src={image} alt={title} />
      <BlogCardInfo>
        <span>{date}</span>
        <p>{title}</p>
        <a href={link}>Read More</a>
      </BlogCardInfo>
      {/* 'https://d2fwbsa91kuigh.cloudfront.net/media/wysiwyg/2023-Q1-RAMADAN-FEEL-E-MUSK-PRODUCT-CT9_1__16.jpg', */}
      {/* 'https://d2fwbsa91kuigh.cloudfront.net/media/wysiwyg/2023-Q1-Haircare-Spend-More-Save_more-CT10_2.jpg', */}
    </BlogCardContainer>
  )
}

export default BlogCard
