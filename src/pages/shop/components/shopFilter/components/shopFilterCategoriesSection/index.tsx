import { FC, useEffect, useState } from 'react'
import { ShopFilterTitle } from '../../styled'
import { ShopFilterCategories } from './styled'

interface IProps {
  onChange: (val: string) => void
}

const ShopFilterCategoriesSection: FC<IProps> = ({ onChange }) => {
  const [active, setActive] = useState<string>('')

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

  const urlChange = (val: string) => {
    const originUrl = window.location.origin + window.location.pathname
    const queryString = window.location.search
    let finalUrl = ''

    if (queryString) {
      onChange(val)
      if (queryString.indexOf('&category') > -1) {
        const categoryAdress = queryString.substring(
          0,
          queryString.indexOf('category='),
        )
        finalUrl = `${originUrl}${categoryAdress}category=${val}`
      } else {
        finalUrl = `${originUrl}${queryString}&category=${val}`
      }
    } else {
      finalUrl = `${originUrl}?category=${val}`
    }

    window.history.pushState('', '', finalUrl)
  }

  const onCateChange = (val: string) => {
    if (val === active) {
      setActive('')
      urlChange('')
    } else {
      setActive(val)
      urlChange(val)
    }
  }

  useEffect(() => {
    const url = new URL(window.location.href)
    const cate = url.searchParams.get('category')
    if (cate) {
      setActive(cate)
      onChange(cate)
    }
  }, [])

  return (
    <>
      <ShopFilterTitle>Category</ShopFilterTitle>
      <ShopFilterCategories>
        {filterCategories.map((item) => (
          <li
            key={`li-${item.amount}`}
            onClick={() => onCateChange(item.name)}
            style={{
              color: active === item.name ? '#2eb495' : '#000',
            }}
          >
            <span>{item.name}</span>
            <span>({item.amount})</span>
          </li>
        ))}
      </ShopFilterCategories>
    </>
  )
}

export default ShopFilterCategoriesSection
