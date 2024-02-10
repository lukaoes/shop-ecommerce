import { CardTwoInfoLeft, CardTwoInfoRight } from 'components/cardTwo/styled'
import {
  CardThreeImage,
  CardThreeInfo,
  CardThreeLayout,
  SvgLayout,
} from './styled'

const CardThree = () => {
  return (
    <CardThreeLayout>
      <CardThreeImage
        src="https://www.icolorpalette.com/download/solidcolorimage/666666_solid_color_background_icolorpalette.png"
        alt="asdas"
      />
      <CardThreeInfo>
        <CardTwoInfoLeft>
          <h5>Up to 40% Off</h5>
          <p>Bluebell Hand Block..</p>
        </CardTwoInfoLeft>
        <CardTwoInfoRight>
          <h5>$80</h5>
          <span>$95</span>
        </CardTwoInfoRight>
      </CardThreeInfo>
      <SvgLayout>
        <svg
          width="109"
          height="106"
          viewBox="0 0 109 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M53.125 1.40468C53.6485 0.204007 55.3515 0.204007 55.875 1.40467L64.6074 21.433C65.179 22.744 66.7318 23.3092 68.0123 22.6723L87.5757 12.9428C88.7485 12.3595 90.0531 13.4542 89.6823 14.7105L83.4977 35.6661C83.0929 37.0378 83.9192 38.4689 85.3095 38.8041L106.55 43.926C107.823 44.233 108.119 45.9102 107.027 46.6342L88.8197 58.7118C87.628 59.5024 87.341 61.1297 88.1905 62.2802L101.169 79.8569C101.947 80.9106 101.096 82.3854 99.7944 82.2384L78.0831 79.7868C76.662 79.6263 75.3962 80.6885 75.3074 82.1158L73.9517 103.923C73.8705 105.23 72.2702 105.813 71.3676 104.864L56.3117 89.0297C55.3262 87.9933 53.6738 87.9933 52.6883 89.0297L37.6324 104.864C36.7298 105.813 35.1295 105.23 35.0483 103.923L33.6926 82.1158C33.6038 80.6885 32.338 79.6263 30.9169 79.7868L9.2056 82.2384C7.90404 82.3854 7.05255 80.9106 7.83061 79.8569L20.8095 62.2802C21.659 61.1297 21.372 59.5024 20.1803 58.7118L1.97255 46.6342C0.881025 45.9102 1.17675 44.233 2.45008 43.926L23.6905 38.8041C25.0808 38.4689 25.907 37.0378 25.5022 35.6661L19.3177 14.7105C18.9469 13.4542 20.2515 12.3595 21.4243 12.9428L40.9877 22.6723C42.2682 23.3092 43.821 22.744 44.3926 21.433L53.125 1.40468Z"
            fill="#FFD69D"
            stroke="black"
          />
        </svg>
        <p>50% Sale</p>
      </SvgLayout>
    </CardThreeLayout>
  )
}

export default CardThree
