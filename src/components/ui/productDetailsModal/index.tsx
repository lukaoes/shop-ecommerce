import { FC, useState } from 'react'
import { CartModalProductButton, CartModalStock } from '../CartModal/styled'
import {
  AddToWlistBtn,
  ProductDetailsModalBg,
  ProductDetailsModalBottom,
  ProductDetailsModalButtons,
  ProductDetailsModalContainer,
  ProductDetailsModalImg,
  ProductDetailsModalInfo,
  ProductDetailsModalLayout,
  ProductDetailsModalMiddle,
  ProductDetailsModalTop,
} from './styled'
import { WishlistProductRight } from 'pages/Wishlist/styled'

interface IProps {
  open: boolean
  onClose: () => void
}

const ProductDetailsModal: FC<IProps> = ({ open, onClose }) => {
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
    <ProductDetailsModalBg className={open ? 'open' : ''}>
      <ProductDetailsModalLayout
        onClick={() => onClose()}
      ></ProductDetailsModalLayout>
      <div className={open ? 'open details' : 'details'}>
        <ProductDetailsModalContainer>
          <ProductDetailsModalImg
            src="https://d2fwbsa91kuigh.cloudfront.net/media/wysiwyg/2023-Q1-RAMADAN-FEEL-E-MUSK-PRODUCT-CT9_1__16.jpg"
            alt="product image"
          />
          <ProductDetailsModalInfo>
            <ProductDetailsModalTop>
              <span>SALE 20% OFF</span>
              <h1>Cozy Knit Cardigan Sweater</h1>
              <div>
                <div>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="1"
                      d="M7 0.824219L8.97496 5.10592L13.6574 5.6611L10.1955 8.86252L11.1145 13.4873L7 11.1842L2.8855 13.4873L3.80445 8.86252L0.342604 5.6611L5.02504 5.10592L7 0.824219Z"
                      fill="#FF8A00"
                    />
                  </svg>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="1"
                      d="M7 0.824219L8.97496 5.10592L13.6574 5.6611L10.1955 8.86252L11.1145 13.4873L7 11.1842L2.8855 13.4873L3.80445 8.86252L0.342604 5.6611L5.02504 5.10592L7 0.824219Z"
                      fill="#FF8A00"
                    />
                  </svg>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="1"
                      d="M7 0.824219L8.97496 5.10592L13.6574 5.6611L10.1955 8.86252L11.1145 13.4873L7 11.1842L2.8855 13.4873L3.80445 8.86252L0.342604 5.6611L5.02504 5.10592L7 0.824219Z"
                      fill="#FF8A00"
                    />
                  </svg>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.2"
                      d="M7 0.824219L8.97496 5.10592L13.6574 5.6611L10.1955 8.86252L11.1145 13.4873L7 11.1842L2.8855 13.4873L3.80445 8.86252L0.342604 5.6611L5.02504 5.10592L7 0.824219Z"
                      fill="#5E626F"
                    />
                  </svg>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.2"
                      d="M7 0.824219L8.97496 5.10592L13.6574 5.6611L10.1955 8.86252L11.1145 13.4873L7 11.1842L2.8855 13.4873L3.80445 8.86252L0.342604 5.6611L5.02504 5.10592L7 0.824219Z"
                      fill="#5E626F"
                    />
                  </svg>
                </div>
                <h5>4.7 Rating</h5>
                <h5>(5 customer reviews)</h5>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has. Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum has.
              </p>
            </ProductDetailsModalTop>
            <ProductDetailsModalMiddle>
              <div>
                <h2>Price</h2>
                <h1>
                  $125 <span>$112</span>
                </h1>
              </div>
              <div>
                <h2>Quantity</h2>
                <CartModalStock>
                  <CartModalProductButton onClick={() => change(true)}>
                    -
                  </CartModalProductButton>
                  <span>{number}</span>
                  <CartModalProductButton onClick={() => change(false)}>
                    +
                  </CartModalProductButton>
                </CartModalStock>
              </div>
            </ProductDetailsModalMiddle>
            <ProductDetailsModalButtons>
              <WishlistProductRight>
                <div>Add To Cart</div>
                <AddToWlistBtn>Add To Wishlist</AddToWlistBtn>
              </WishlistProductRight>
            </ProductDetailsModalButtons>
            <ProductDetailsModalBottom>
              <div>
                <h5>SKU:</h5>
                <span>PRT584E63A</span>
              </div>
              <div>
                <h5>Category:</h5>
                <span>Dresses,</span>
                <span>Jeans,</span>
                <span>Swimwear, </span>
                <span>Summer,</span>
                <span>Clothing,</span>
              </div>
              <div>
                <h5>Tags:</h5>
                <span>Casual,</span>
                <span>Athletic,</span>
                <span>Workwear, </span>
                <span>Accessories, </span>
              </div>
            </ProductDetailsModalBottom>
          </ProductDetailsModalInfo>
        </ProductDetailsModalContainer>
      </div>
    </ProductDetailsModalBg>
  )
}

export default ProductDetailsModal
