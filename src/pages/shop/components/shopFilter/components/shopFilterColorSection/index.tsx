import { FC, useEffect, useState } from 'react'
import { ShopFilterTitle } from '../../styled'
import { ShopFilterColor, ShopFilterColorContainer } from './styled'

interface IProps {
  onChange: (val: string) => void
}

const ShopFilterColorSection: FC<IProps> = ({ onChange }) => {
  const [active, setActive] = useState<string>('')

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

  // const hash = window.location.hash
  // useEffect(() => {
  //   setTimeout(() => {
  //     onChange(hash)
  //   }, 1)
  // }, [hash])

  const urlChange = (val: string) => {
    onChange(val)
    const originUrl = window.location.origin + window.location.pathname
    const queryString = window.location.search
    let finalUrl = ''

    if (queryString) {
      if (queryString.indexOf('&color') > -1) {
        const colorAdress = queryString.substring(
          0,
          queryString.indexOf('color='),
        )
        finalUrl = `${originUrl}${colorAdress}color=${val}`
      } else {
        finalUrl = `${originUrl}${queryString}&color=${val}`
      }
    } else {
      finalUrl = `${originUrl}?color=${val}`
    }

    window.history.pushState('', '', finalUrl)
  }

  const onColorChange = (val: string) => {
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
    const color = url.searchParams.get('color')
    if (color) {
      setActive(color)
      onChange(color)
    }
  }, [])

  return (
    <>
      <ShopFilterTitle>Color</ShopFilterTitle>
      <ShopFilterColorContainer>
        {filterColors.map((item) => (
          <ShopFilterColor
            style={{
              background: item,
              // outline: active === item ? '1px solid ' + item : 'none',
              outline:
                window.location.hash === item
                  ? '1px solid' + window.location.hash
                  : '',
            }}
            key={item}
            onClick={() => onColorChange(item)}
          ></ShopFilterColor>
        ))}
      </ShopFilterColorContainer>
    </>
  )
}

export default ShopFilterColorSection
