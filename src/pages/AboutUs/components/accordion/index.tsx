import {
  AccordionAnswer,
  AccordionCeo,
  AccordionContainer,
  AccordionP,
  AccordionQuestion,
  AccordionTitle,
  InvestmentInfo,
} from './styles'
import CeoFace from '../../../../assets/images/CeoFace.jpg'
import { useState } from 'react'
import Minus from '../../../../assets/images/Minus.svg'
import Pluss from '../../../../assets/images/Pluss.svg'

const qna = [
  {
    question: 'How can I contact customer support?',
    answer: `If your order has not yet shipped, you can contact us to change your shipping address. If your order has already shipped, we may not be able to change`,
  },
  {
    question: 'Can I cancel my order?',
    answer: `Certainly! Yes, you can cancel your order. However, please note that cancellation policies may vary, and it's advisable to check the specific terms and conditions or contact customer support for assistance.`,
  },
  {
    question: 'Do you offer international shipping?',
    answer: `Absolutely! We do offer international shipping. Feel free to explore our shipping options during the checkout process for more details on delivery to your specific location.`,
  },
  {
    question: 'Can I track my order in real-time?',
    answer: `You can track your order in real-time. Once your order is shipped, you will receive a tracking number and instructions on how to monitor the status of your delivery.`,
  },
  {
    question: 'How do I know if a product is in stock?',
    answer: `To check product availability, simply visit the product page, and if the item is in stock, you'll see an "Add to Cart" button. In case of any changes or updates, our website will reflect real-time stock information.`,
  },
]

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const accordionShow = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
  }
  return (
    <AccordionContainer>
      <AccordionTitle>
        Untouch Your Style, Quality, Individuality - Redefining Fashion
        Together.
      </AccordionTitle>
      <AccordionP>
        At Untouch, we are on a mission to redefine fashion by blending style,
        quality, and individuality into every garment we offer. We believe that
        what you wear is an extension of your unique personality, and it should
        reflect your values and aspirations.
      </AccordionP>
      <AccordionCeo>
        <img src={CeoFace} alt="ceo" />
        <div>
          <h2>Kenneth Fong</h2>
          <p>Ceo and founder</p>
        </div>
      </AccordionCeo>
      {qna.map((item, index) => (
        <>
          <AccordionQuestion
            key={`qna-accord-${index}`}
            onClick={() => accordionShow(index)}
          >
            <span key={`accordion-answer-${index}`}>{item.question}</span>
            <div key={`plus-minus-div-${index}`}>
              <img
                key={`plus-minus-${index}`}
                src={activeIndex === index ? Pluss : Minus}
                alt={`${index}`}
              />
            </div>
          </AccordionQuestion>
          {activeIndex === index && (
            <AccordionAnswer key={`plus-minus-${index}`} className="active">
              {item.answer}
            </AccordionAnswer>
          )}
        </>
      ))}
      <InvestmentInfo>
        <div>
          <h3>50+</h3>
          <span>Items Sale</span>
        </div>
        <div>
          <h3>400%</h3>
          <span>Return on investment</span>
        </div>
      </InvestmentInfo>
    </AccordionContainer>
  )
}

export default Accordion
