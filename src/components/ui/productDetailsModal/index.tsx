import { FC } from 'react'
import {
  ProductDetailsModalBg,
  ProductDetailsModalContainer,
  ProductDetailsModalImg,
  ProductDetailsModalLayout,
} from './styled'
import ProductDetailsModalInfoSection from './productDetailsModalInfo'

interface IProps {
  open: boolean
  onClose: () => void
}

const ProductDetailsModal: FC<IProps> = ({ open, onClose }) => {
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
          <ProductDetailsModalInfoSection />
        </ProductDetailsModalContainer>
      </div>
    </ProductDetailsModalBg>
  )
}

export default ProductDetailsModal
