import {
  ProdDetailBottomImgs,
  ProdDetailSimilar,
  ProdDetailSimilarCards,
  ProductDetaiTop,
  ProductDetaiTopImg,
  ProductDetailBottom,
  ProductDetailBottomDesc,
  ProductDetailBottomHeader,
  ProductDetailContainer,
  ProductDetailImgSlide,
} from './styles'
import ProductDetailInfo from './productDetailInfo'
import ProductDetailPrice from './productDetailPrice'
import ProdCheck from '../../assets/images/ProdCheck.svg'
import { Link } from 'react-router-dom'
import CardBlockbuster from 'components/cards/cardBlockbuster'

const ProductDetail = () => {
  return (
    <ProductDetailContainer>
      <ProductDetaiTop>
        <ProductDetaiTopImg>
          <img
            className="main-img"
            src="https://d2fwbsa91kuigh.cloudfront.net/media/wysiwyg/2023-Q1-RAMADAN-FEEL-E-MUSK-PRODUCT-CT9_1__16.jpg"
            alt="product"
          />
          <ProductDetailImgSlide>
            <img
              src="https://d2fwbsa91kuigh.cloudfront.net/media/wysiwyg/2023-Q1-RAMADAN-FEEL-E-MUSK-PRODUCT-CT9_1__16.jpg"
              alt="product"
            />
            <img
              src="https://d2fwbsa91kuigh.cloudfront.net/media/wysiwyg/2023-Q1-RAMADAN-FEEL-E-MUSK-PRODUCT-CT9_1__16.jpg"
              alt="product"
            />
            <img
              src="https://d2fwbsa91kuigh.cloudfront.net/media/wysiwyg/2023-Q1-RAMADAN-FEEL-E-MUSK-PRODUCT-CT9_1__16.jpg"
              alt="product"
            />
          </ProductDetailImgSlide>
        </ProductDetaiTopImg>
        <div className="product-info-price">
          <ProductDetailInfo />
          <ProductDetailPrice />
        </div>
      </ProductDetaiTop>
      <ProductDetailBottom>
        <ProductDetailBottomHeader>
          <h1>Description</h1>
        </ProductDetailBottomHeader>
        <ProductDetailBottomDesc>
          <h1>Curly Girl Beautiful Dress</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <div>
            <div>
              <img src={ProdCheck} alt="check" />
              <span>Versatile, enduring style for all occasions</span>
            </div>
            <div>
              <img src={ProdCheck} alt="check" />
              <span>Handcrafted Elegance, Comfort</span>
            </div>
            <div>
              <img src={ProdCheck} alt="check" />
              <span>Versatile, enduring style for all occasions</span>
            </div>
          </div>
        </ProductDetailBottomDesc>
        <ProdDetailBottomImgs>
          <img
            src="https://d2fwbsa91kuigh.cloudfront.net/media/wysiwyg/2023-Q1-RAMADAN-FEEL-E-MUSK-PRODUCT-CT9_1__16.jpg"
            alt="product"
          />
          <img
            src="https://d2fwbsa91kuigh.cloudfront.net/media/wysiwyg/2023-Q1-RAMADAN-FEEL-E-MUSK-PRODUCT-CT9_1__16.jpg"
            alt="product"
          />
          <img
            src="https://d2fwbsa91kuigh.cloudfront.net/media/wysiwyg/2023-Q1-RAMADAN-FEEL-E-MUSK-PRODUCT-CT9_1__16.jpg"
            alt="product"
          />
        </ProdDetailBottomImgs>
        <ProdDetailSimilar>
          <div>
            <span>Related Products</span>
            <Link to="../../shop">See All Products</Link>
          </div>
        </ProdDetailSimilar>
        <ProdDetailSimilarCards>
          <CardBlockbuster />
          <CardBlockbuster />
          <CardBlockbuster />
          <CardBlockbuster />
        </ProdDetailSimilarCards>
      </ProductDetailBottom>
    </ProductDetailContainer>
  )
}

export default ProductDetail
