import { Link } from 'react-router-dom'
import {
  BackToMainContainer,
  BottomLeftImg,
  Logo404,
  Page404Layout,
  Page404MainText,
  TopRightImg,
} from './styled'
import TopRight404 from '../../assets/images/TopRight404.png'
import BottomLeft404 from '../../assets/images/BottomLeft404.png'
import HeaderLogo from '../../assets/images/HeaderLogo.png'

const Page404 = () => {
  return (
    <Page404Layout>
      <Link to="/">
        <Logo404 src={HeaderLogo} alt="logo" />
      </Link>
      <Page404MainText>404</Page404MainText>
      <BackToMainContainer>
        <div>
          <h2>OOPS!</h2>
          <p>Oh, no! This page does not exist.</p>
          <Link to="/">GO TO MAIN PAGE</Link>
        </div>
      </BackToMainContainer>
      <TopRightImg src={TopRight404} alt="decor" />
      <BottomLeftImg src={BottomLeft404} alt="decor" />
    </Page404Layout>
  )
}

export default Page404
