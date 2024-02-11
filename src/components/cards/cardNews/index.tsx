import {
  CardNewsDate,
  CardNewsImg,
  CardNewsInfo,
  CardNewsLayout,
} from './styled'

const CardNews = () => {
  return (
    <CardNewsLayout>
      <CardNewsImg
        src="https://www.icolorpalette.com/download/solidcolorimage/666666_solid_color_background_icolorpalette.png"
        alt="lalalalal"
      />
      <CardNewsDate>17 MAY 2022</CardNewsDate>
      <CardNewsInfo>
        <h2>Uncovering The Beauty Benefits Of Plant</h2>
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17L17 7"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 7H17V17"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </CardNewsInfo>
    </CardNewsLayout>
  )
}

export default CardNews
