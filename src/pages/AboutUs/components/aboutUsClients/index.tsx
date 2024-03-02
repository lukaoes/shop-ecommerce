import {
  AboutUsClientCardLayout,
  ClientChange,
  ClientsBackground,
  ClientsCard,
  ClientsCardChoose,
  ClientsCardChooseName,
  ClientsCardTitle,
  ClientsLayoutBg,
  ClinetsLayout,
  MainClientImg,
  SatisfiedUser,
  SatisfiedUserImgs,
} from './styled'
import AboutBgOver from '../../../../assets/images/AboutBgOver.png'
import ClientMainPhoto from '../../../../assets/images/ClientMainPhoto.jpg'
import AboutUsClientOne from '../../../../assets/images/AboutUsClientOne.jpg'
import AboutUsClientTwo from '../../../../assets/images/AboutUsClientTwo.jpg'
import AboutUsClientThree from '../../../../assets/images/AboutUsClientThree.jpg'
import { useState } from 'react'

const AboutUsClients = () => {
  const clients = [
    {
      name: 'Kenneth Fong',
      role: 'Postgraduate Student',
      image: AboutUsClientOne,
      interview: `It is a long established fact that a reader will be distracted
      by the readable content of a page when looking at its layout.
      The point of using Lorem Ipsum is that it has a more-or-less
      normal distribution of letters, as opposed to using
      'Content here, content here', making it look like
      readable English.`,
    },
    {
      name: 'Shamila Marneulski',
      role: 'Potato Expert',
      image: AboutUsClientTwo,
      interview: `Potatoes are a versatile and beloved vegetable. They can be mashed, baked, fried, or boiled.
      Their delicious flavor and fluffy texture make them a perfect addition to any meal. Whether as crispy fries,
      creamy mashed potatoes, or a hearty potato soup, these tubers never fail to satisfy the taste buds.`,
    },
    {
      name: 'Misune Takoshi',
      role: 'Sushi Expert',
      image: AboutUsClientThree,
      interview: `Sushi is a culinary delight that captivates the senses. The artful combination of fresh fish,
      vinegared rice, and seaweed creates a symphony of flavors that transports the palate to new heights. 
      The experience of savoring sushi is akin to a journey, where each bite unveils a unique harmony of tastes and textures.
      `,
    },
  ]

  const [currentClient, setCurrentClient] = useState(0)

  const handleNextClient = () => {
    setCurrentClient((prevClient) => (prevClient + 1) % clients.length)
  }
  return (
    <>
      <ClientsLayoutBg>
        <ClinetsLayout>
          <MainClientImg src={ClientMainPhoto} alt="client" />
          <SatisfiedUser>
            <h2>Our Satisfied Users</h2>
            <SatisfiedUserImgs>
              <img src={AboutUsClientOne} alt="one client" />
              <img src={AboutUsClientTwo} alt="one client" className="second" />
              <span>12K+</span>
            </SatisfiedUserImgs>
          </SatisfiedUser>
          <AboutUsClientCardLayout>
            <ClientsCardTitle>What our clients say about us</ClientsCardTitle>
            <ClientsCard>
              <p>{clients[currentClient].interview}</p>
              <ClientsCardChoose>
                <div className="flex">
                  <img src={clients[currentClient].image} alt="one client" />
                  <ClientsCardChooseName>
                    <h4>{clients[currentClient].name}</h4>
                    <span>{clients[currentClient].role}</span>
                  </ClientsCardChooseName>
                </div>
                <ClientChange>
                  <div onClick={handleNextClient}>
                    <svg
                      width="10"
                      height="16"
                      viewBox="0 0 10 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.75 15.5L1.25 8L8.75 0.5"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div onClick={handleNextClient}>
                    <svg
                      className="right-arrow"
                      width="10"
                      height="16"
                      viewBox="0 0 10 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.75 15.5L1.25 8L8.75 0.5"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </ClientChange>
              </ClientsCardChoose>
            </ClientsCard>
          </AboutUsClientCardLayout>
        </ClinetsLayout>
        <ClientsBackground src={AboutBgOver} alt="background" />
      </ClientsLayoutBg>
    </>
  )
}

export default AboutUsClients
