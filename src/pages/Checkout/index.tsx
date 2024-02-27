import SecondHeader from 'components/layout/secondHeader'
import CheckoutBg from '../../assets/images/CheckoutBg.jpg'

const Checkout = () => {
  const secondHeaderInfo = {
    image: `${CheckoutBg}`,
    title: 'Checkout',
    link: '/checkout',
  }
  return (
    <>
      <SecondHeader {...secondHeaderInfo} />
      <div>
        <div>1</div>
      </div>
    </>
  )
}

export default Checkout
