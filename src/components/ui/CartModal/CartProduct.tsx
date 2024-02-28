import { FC, useState } from 'react'
import {
  CartModalProductButton,
  CartModalProductContainer,
  CartModalStock,
} from './styled'

export interface ICartProduct {
  title: string
  img: string
  price: number
}

const CartProduct: FC<ICartProduct> = ({ img, title }) => {
  const [number, setNumber] = useState<number>(1)

  const change = (minus: boolean) => {
    if (minus && number > 1) {
      setNumber(number - 1)
    }
    if (!minus) {
      setNumber(number + 1)
    }
  }

  return (
    <CartModalProductContainer>
      <img src={img} alt={title} />
      <div>
        <h3>{title}</h3>
        <CartModalStock>
          <div>
            <CartModalProductButton onClick={() => change(true)}>
              -
            </CartModalProductButton>
            <span>{number}</span>
            <CartModalProductButton onClick={() => change(false)}>
              +
            </CartModalProductButton>
          </div>
          <h5>$40.00</h5>
        </CartModalStock>
      </div>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.5">
          <path
            d="M21 7L7 21"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 7L21 21"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </CartModalProductContainer>
  )
}

export default CartProduct
