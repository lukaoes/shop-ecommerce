import Card, { ICardProps } from 'components/cards/card'
import { MostPopularProductsContainer } from './styled'
import { shuffleArray } from 'helpers/Utilis'
import { useEffect, useState } from 'react'

const MostPopularProducts = () => {
  const [products, setProducts] = useState<ICardProps[]>([])

  useEffect(() => {
    const Item = {
      title: 'Bluebell Hand Block Tiered Dress',
      image:
        'https://d2fwbsa91kuigh.cloudfront.net/media/wysiwyg/2023-Q1-RAMADAN-FEEL-E-MUSK-PRODUCT-CT9_1__16.jpg',
      sale: 20,
      price: 80,
    }

    const Item2 = {
      title: 'Block Tiered Hand Bluebell Dress',
      image:
        'https://d2fwbsa91kuigh.cloudfront.net/media/wysiwyg/2023-Q1-Haircare-Spend-More-Save_more-CT10_2.jpg',
      price: 159,
    }

    const data: ICardProps[] = shuffleArray([
      ...Array(4).fill(Item),
      ...Array(4).fill(Item2),
    ])
    setProducts(data)
  }, [])

  return (
    <MostPopularProductsContainer>
      {products.map((item) => (
        <Card key={item.title} {...item} />
      ))}
    </MostPopularProductsContainer>
  )
}

export default MostPopularProducts
