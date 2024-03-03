import {
  BlogDetailsBottom,
  BlogDetailsChecklist,
  BlogDetailsHeader,
  BlogDetailsImages,
  BlogDetailsLayout,
  BlogDetailsMainImg,
  BlogDetailsParagraph,
  BlogDetailsQuote,
} from './styled'
import personBlack from '../../assets/images/personBlack.svg'
import commentIcon from '../../assets/images/commentIcon.svg'
import Quotemarks from '../../assets/images/Quotemarks.svg'
import BlogCheck from '../../assets/images/BlogCheck.svg'
import { useParams } from 'react-router-dom'

const BlogDetails = () => {
  const { id } = useParams()
  return (
    <>
      <BlogDetailsLayout>
        <BlogDetailsHeader>
          <h1>The Sustainable Wardrobe A Greener Approach to Fashion</h1>
          <div>
            <span>17 May 2022</span>
            <span>
              <img src={personBlack} alt={id} />
              By Kk Sharma
            </span>
            <span>
              <img src={commentIcon} alt="commentIcon" />
              24 Comments
            </span>
          </div>
        </BlogDetailsHeader>
      </BlogDetailsLayout>
      <BlogDetailsMainImg
        src="https://photographylife.com/wp-content/uploads/2020/03/Ultra-Wide-Angle-Panoramas-1.jpg"
        alt="mountain one"
      />
      <BlogDetailsLayout>
        <BlogDetailsParagraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </BlogDetailsParagraph>
        <BlogDetailsQuote>
          <div>
            <p>
              Unlocking the Secrets of Sustainable Fashion: Eco-Friendly Choices
              for a Stylish and Responsible Wardrobe
            </p>
            <span>- Ronald M. Spino</span>
          </div>
          <img src={Quotemarks} alt="quote" />
        </BlogDetailsQuote>
        <BlogDetailsParagraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including.
        </BlogDetailsParagraph>
      </BlogDetailsLayout>
      <BlogDetailsImages>
        <div>
          <img
            src="https://media.architecturaldigest.com/photos/57e2dba0f2e2598d338a04fe/16:9/w_2560%2Cc_limit/torres-del-paine-national-park.jpg"
            alt="patagonia"
          />
          <img
            src="https://i0.wp.com/voyagerclub.com.br/wp-content/uploads/2023/09/Imagens-Stripo-Nacionais-3.jpg?fit=1024%2C576&ssl=1"
            alt="patagonia mountain"
          />
        </div>
        <div>
          <img
            src="https://www.muchbetteradventures.com/magazine/content/images/2021/07/Torres-del-Paine.jpg"
            alt="patagonia another"
          />
          <img
            src="https://www.backroads.com/sites/default/files/styles/new_trip_page_hero/public/2023/WARI_RRI_ST_23_020_2.jpg.webp?itok=ExO5hjBU"
            alt="patagonia"
          />
          <img
            src="https://www.wildernesstravel.com/wp-content/uploads/2023/06/10-INPAT-sunset-lake-reflection-clouds-patagonia-torres-del-paine-national-park-scaled.jpg"
            alt="patagonia"
          />
        </div>
      </BlogDetailsImages>
      <BlogDetailsLayout>
        <BlogDetailsParagraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including.
        </BlogDetailsParagraph>
      </BlogDetailsLayout>
      <BlogDetailsMainImg
        src="https://www.breathingcolor.ca/wp-content/uploads/2016/07/BC-panoramic-camera-COVER.jpg"
        alt="mountain one"
      />
      <BlogDetailsLayout>
        <BlogDetailsBottom>
          <h2>Additional information</h2>
          <BlogDetailsParagraph>
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </BlogDetailsParagraph>
          <BlogDetailsChecklist>
            <div>
              <p>
                <img src={BlogCheck} alt="check" />
                <span>Sustainable Materials and Eco-Friendly Fabrics</span>
              </p>
              <p>
                <img src={BlogCheck} alt="check" />
                <span>Capsule Wardrobes Curating Timeless Style</span>
              </p>
              <p>
                <img src={BlogCheck} alt="check" />
                <span>Promoting Fair Labor Practices in Fashion</span>
              </p>
            </div>
            <div>
              <p>
                <img src={BlogCheck} alt="check" />
                <span>Transparency in Fashion Supply Chains</span>
              </p>
              <p>
                <img src={BlogCheck} alt="check" />
                <span>The Three Rs in Sustainable Fashion</span>
              </p>
              <p>
                <img src={BlogCheck} alt="check" />
                <span>Vegan and Cruelty-Free Fashion Alternatives</span>
              </p>
            </div>
          </BlogDetailsChecklist>
          <BlogDetailsParagraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </BlogDetailsParagraph>
        </BlogDetailsBottom>
      </BlogDetailsLayout>
    </>
  )
}

export default BlogDetails
