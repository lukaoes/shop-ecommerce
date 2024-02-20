import {
  ContactInput,
  ContactMapContainer,
  ContactUsContainer,
  ContactUsInfo,
  ContactUsInputs,
} from './styles'
import ContactMap from '../../assets/images/ContactMap.png'

const ContactUs = () => {
  return (
    <ContactUsContainer>
      <ContactUsInfo>
        <h1>United States</h1>
        <p>Address: 3553 Brandywine Street Northwest, Washington AR 20008</p>
        <div>
          <div>
            <h4>Call Us</h4>
            <p>
              +971-4-576-6770 <br /> +971-55-983-7007
            </p>
          </div>
          <div>
            <h4>Email Us</h4>
            <p>help@MoonCart.com</p>
          </div>
        </div>
      </ContactUsInfo>
      <ContactUsInputs>
        <label htmlFor="name">
          <h2>Your Name</h2>
        </label>
        <ContactInput type="text" name="name" id="name" />
        <label htmlFor="email">
          <h2>Email Address</h2>
        </label>
        <ContactInput type="email" id="email" name="email" />
        <label htmlFor="phone">
          <h2>Phone Number</h2>
        </label>
        <ContactInput type="number" id="phone" name="phone" />
        <label htmlFor="message">
          <h2>Massage</h2>
        </label>
        <textarea id="message" name="message"></textarea>
      </ContactUsInputs>
      <ContactMapContainer>
        <img src={ContactMap} alt="contact map" />
        <h1>CONTAC</h1>
      </ContactMapContainer>
    </ContactUsContainer>
  )
}

export default ContactUs
