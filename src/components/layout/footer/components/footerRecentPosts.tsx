import { FooterRecentPost, RecentPostContainer } from '../styled'

const FooterRecentPosts = () => {
  return (
    <div>
      <h1>Recent Posts</h1>
      <RecentPostContainer>
        <FooterRecentPost>
          <img src="alala" alt="bottle" />
          <div>
            <p>Wooden Water Bottles</p>
            <span>July 23, 2003</span>
          </div>
        </FooterRecentPost>
        <FooterRecentPost>
          <img src="alala" alt="bags" />
          <div>
            <p>Eco friendly bags</p>
            <span>July 23, 2003</span>
          </div>
        </FooterRecentPost>
        <FooterRecentPost>
          <img src="alala" alt="toothbrushes" />
          <div>
            <p>Bamboo toothbrushes</p>
            <span>July 23, 2003</span>
          </div>
        </FooterRecentPost>
      </RecentPostContainer>
    </div>
  )
}

export default FooterRecentPosts
