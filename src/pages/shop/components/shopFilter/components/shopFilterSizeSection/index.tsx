import { FC, useEffect, useState } from 'react'
import { ShopFilterTitle } from '../../styled'
import { ShopFilterSize, ShopFilterSizeContainer } from './styled'

interface IProps {
  onChange: (value: string) => void
}

const ShopFilterSizeSection: FC<IProps> = ({ onChange }) => {
  const filterSizes = [4, 6, 8, 10, 12, 14, 16, 18, 20]

  const [active, setActive] = useState<number[]>([])

  const generateFilterUrl = (choosenArr: number[]) => {
    const originUrl = window.location.origin + window.location.pathname
    let finalUrl = ''

    if (choosenArr) {
      const sizeString = choosenArr.toString()
      onChange(sizeString)
      finalUrl = `${originUrl}?size=${sizeString}`
    } else {
      finalUrl = originUrl
    }

    window.history.pushState('', '', finalUrl)
  }

  const chooseSize = (size: number) => {
    let activeCopy = [...active]
    if (activeCopy.indexOf(size) < 0) {
      activeCopy.push(size)
    } else {
      activeCopy = activeCopy.filter((item) => {
        return item !== size
      })
    }
    generateFilterUrl(activeCopy)
    setActive(activeCopy)
  }

  useEffect(() => {
    // const queryString = window.location.search
    // const size = queryString.replace('?size=', '')
    const url = new URL(window.location.href)
    const size = url.searchParams.get('size')
    if (size) {
      onChange(size)
      const arr: string[] = size.split(',')
      const arrNum = arr.map((item) => Number(item))
      setActive(arrNum)
    }
  }, [])

  return (
    <>
      <ShopFilterTitle>Size</ShopFilterTitle>
      <ShopFilterSizeContainer>
        {filterSizes.map((item) => (
          <ShopFilterSize
            className={active.includes(item) ? 'active' : ''}
            onClick={() => chooseSize(item)}
            key={`shopfiltersize-${item}`}
          >
            <span>{item}</span>
          </ShopFilterSize>
        ))}
      </ShopFilterSizeContainer>
    </>
  )
}

export default ShopFilterSizeSection
