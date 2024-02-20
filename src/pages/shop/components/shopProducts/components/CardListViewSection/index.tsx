import CardListView from 'components/cards/cardListView'
import { CardListViewSectionContainer } from './styled'

const CardListViewSection = () => {
  // https://d2fwbsa91kuigh.cloudfront.net/media/wysiwyg/2023-Q1-RAMADAN-FEEL-E-MUSK-PRODUCT-CT9_1__16.jpg
  const card1 = {
    image:
      'https://d2fwbsa91kuigh.cloudfront.net/media/wysiwyg/2023-Q1-Haircare-Spend-More-Save_more-CT10_2.jpg',
    title: 'Sophisticated Swagger Suit',
    category: 'Accessories',
    rating: 370,
    description: `It is a long established fact that a reader will be distracted by the
    readable content of a page when looking at its layout. The point of
    using Lorem Ipsum is that it has a more-or-less normal distribution of
    letters, as opposed to using &apos;Content here, content here&apos;,
    making it look like readable English.`,
    price: 40,
    color: '#000',
  }

  const card2 = {
    image:
      'https://d2fwbsa91kuigh.cloudfront.net/media/wysiwyg/2023-Q1-RAMADAN-FEEL-E-MUSK-PRODUCT-CT9_1__16.jpg',
    title: 'Product 2',
    category: 'Activewear',
    rating: 176,
    description: `It is a long established fact that a reader will be distracted by the
    readable content of a page when looking at its layout. The point of
    using Lorem Ipsum is that it has a more-or-less normal distribution of
    letters, as opposed to using &apos;Content here, content here&apos;,
    making it look like readable English.`,
    price: 159,
    color: '#ff7300',
  }

  return (
    <CardListViewSectionContainer>
      <CardListView {...card1} />
      <CardListView {...card2} />
      <CardListView {...card1} />
      <CardListView {...card2} />
      <CardListView {...card1} />
    </CardListViewSectionContainer>
  )
}

export default CardListViewSection
