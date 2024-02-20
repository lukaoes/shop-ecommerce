import { ShopFilterTitle } from '../../styled'
import { ShopFilterTags, ShopFilterTagsContainer } from './styled'

const ShopFilterTagsSection = () => {
  const filterTags = [
    'Vintage',
    'Wedding',
    'Cotton',
    'Linen',
    'Navy',
    'Urban',
    'Business Meeting',
    'Formal',
  ]

  return (
    <>
      <ShopFilterTitle>Tags</ShopFilterTitle>
      <ShopFilterTagsContainer>
        {filterTags.map((item) => (
          <ShopFilterTags key={`ShopFilterTags-${item}`}>{item}</ShopFilterTags>
        ))}
      </ShopFilterTagsContainer>
    </>
  )
}

export default ShopFilterTagsSection
