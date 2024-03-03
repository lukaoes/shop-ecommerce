import {
  ShopFilterButton,
  ShopFilterContainer,
  ShopFilterSeach,
  ShopFilterSearchContainer,
  ShopFilterTitle,
} from './styled'
import SearchIcon from '../../../../assets/images/SearchIcon.png'
import ShopFilterColorSection from './components/shopFilterColorSection'
import ShopFilterSizeSection from './components/shopFilterSizeSection'
import ShopFilterCategoriesSection from './components/shopFilterCategoriesSection'
import ShopFilterTagsSection from './components/shopFilterTagsSection'
import { useState } from 'react'

interface IFilters {
  search: string
  color: string
  size: string
  category: string
}

const ShopFilter = () => {
  const [filters, setFilter] = useState({
    search: '',
    color: '',
    size: '',
    category: '',
  })

  const updateFilter = (key: keyof IFilters, value: string) => {
    const filterCopy = filters
    filterCopy[key] = value
    console.log('filtercopy', filterCopy)
    setFilter(filterCopy)
  }

  const reset = () => {
    setFilter({
      search: '',
      color: '',
      size: '',
      category: '',
    })

    const resetUrl = window.location.origin + window.location.pathname
    window.history.pushState('', '', resetUrl)
  }

  return (
    <ShopFilterContainer>
      <ShopFilterSearchContainer>
        <ShopFilterSeach
          value={filters.search}
          onChange={(e) => updateFilter('search', e.target.value)}
          type="text"
          placeholder="Search Product"
          name="text"
        />
        <img src={SearchIcon} alt="search" />
      </ShopFilterSearchContainer>
      <ShopFilterTitle>Price</ShopFilterTitle>
      <ShopFilterColorSection
        onChange={(value: string) => updateFilter('color', value)}
      />
      <ShopFilterSizeSection
        onChange={(value: string) => updateFilter('size', value)}
      />
      <ShopFilterCategoriesSection
        onChange={(value: string) => updateFilter('category', value)}
      />
      <ShopFilterTagsSection />
      <ShopFilterButton onClick={reset}>RESET</ShopFilterButton>
    </ShopFilterContainer>
  )
}

export default ShopFilter
