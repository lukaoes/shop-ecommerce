import SecondHeader from 'components/layout/secondHeader'
import CheckoutBg from '../../assets/images/CheckoutBg.jpg'
import { CheckoutLayout } from './styles'
import CheckoutLeft from './components/CheckoutLeft'
import CheckoutRight from './components/CheckoutRight'

const Checkout = () => {
  const secondHeaderInfo = {
    image: `${CheckoutBg}`,
    title: 'Checkout',
    link: '/checkout',
  }
  return (
    <>
      <SecondHeader {...secondHeaderInfo} />
      <CheckoutLayout>
        <CheckoutLeft />
        <CheckoutRight />
      </CheckoutLayout>
    </>
  )
}

export default Checkout
