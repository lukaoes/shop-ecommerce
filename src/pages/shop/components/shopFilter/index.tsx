import {
  ShopFilterButton,
  ShopFilterCategories,
  ShopFilterColor,
  ShopFilterColorContainer,
  ShopFilterContainer,
  ShopFilterIcon,
  ShopFilterSeach,
  ShopFilterSearchContainer,
  ShopFilterSize,
  ShopFilterSizeContainer,
  ShopFilterTags,
  ShopFilterTagsContainer,
  ShopFilterTitle,
} from './styled'
import SearchIcon from '../../../../assets/images/SearchIcon.png'
import FiltersIcon from '../../../../assets/images/FiltersIcon.png'
import { useState } from 'react'

const ShopFilter = () => {
  const filterColors = [
    '#000000',
    '#9bd1ff',
    '#21b290',
    '#fec4c4',
    '#ff7354',
    '#51edc8',
    '#b77cf3',
    '#ff4a76',
    '#3e68ff',
    '#7bef68',
  ]

  const [selectedColor, setSelectedColor] = useState<string>('')

  const filterColorClick = (color: string) => {
    setSelectedColor(color)
  }

  const filterSizes = [4, 6, 8, 10, 12, 14, 16, 18, 20]

  const [sizeClicked, setSizeClicked] = useState<boolean>(false)

  const sizeStyler = () => {
    setSizeClicked(!sizeClicked)
  }

  const filterCategories = [
    {
      name: 'Dresses',
      amount: 15,
    },
    {
      name: 'Tops',
      amount: 22,
    },
    {
      name: 'Outwear',
      amount: 10,
    },
    {
      name: 'Activewear',
      amount: 3,
    },
    {
      name: 'Swimwear',
      amount: 8,
    },
    {
      name: 'Footwear',
      amount: 2,
    },
    {
      name: 'Formal Wear',
      amount: 7,
    },
  ]

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
    <ShopFilterContainer>
      <ShopFilterIcon>
        <img src={FiltersIcon} alt="filter" />
        <span>Filters</span>
      </ShopFilterIcon>
      <ShopFilterSearchContainer>
        <ShopFilterSeach type="text" placeholder="Search Product" name="text" />
        <img src={SearchIcon} alt="search" />
      </ShopFilterSearchContainer>
      <ShopFilterTitle>Price</ShopFilterTitle>
      <ShopFilterTitle>Color</ShopFilterTitle>
      <ShopFilterColorContainer>
        {filterColors.map((item) => (
          <ShopFilterColor
            style={{
              background: item,
              outline: selectedColor === item ? '1px solid ' + item : 'none',
            }}
            key={item}
            onClick={() => filterColorClick(item)}
          ></ShopFilterColor>
        ))}
      </ShopFilterColorContainer>
      <ShopFilterTitle>Size</ShopFilterTitle>
      <ShopFilterSizeContainer>
        {filterSizes.map((item) => (
          <ShopFilterSize
            onClick={sizeStyler}
            style={{
              backgroundColor: sizeClicked ? '#000' : 'transparent',
              color: sizeClicked ? '#fff' : '#000',
            }}
            key={`shopfiltersize-${item}`}
          >
            <span>{item}</span>
          </ShopFilterSize>
        ))}
      </ShopFilterSizeContainer>
      <ShopFilterTitle>Category</ShopFilterTitle>
      <ShopFilterCategories>
        {filterCategories.map((item) => (
          <li key={`li-${item.amount}`}>
            <span>{item.name}</span>
            <span>({item.amount})</span>
          </li>
        ))}
      </ShopFilterCategories>
      <ShopFilterTitle>Tags</ShopFilterTitle>
      <ShopFilterTagsContainer>
        {filterTags.map((item) => (
          <ShopFilterTags key={`ShopFilterTags-${item}`}>{item}</ShopFilterTags>
        ))}
      </ShopFilterTagsContainer>
      <ShopFilterButton>RESET</ShopFilterButton>
    </ShopFilterContainer>
  )
}

export default ShopFilter
