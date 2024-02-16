// import CardBlockbuster from 'components/cards/cardBlockbuster'
// import CardFeatured from 'components/cards/cardFeatured'
// import CardHot from 'components/cards/cardHot'
// import CardNews from 'components/cards/cardNews'
// import CardThree from 'components/cards/cardThree'
// import CardTwo from 'components/cards/cardTwo'
import Footer from 'components/layout/footer'
import Header from 'components/layout/header'
import MostPopularProducts from 'pages/home/components/mostPopularProducts'

function App() {
  return (
    <>
      <Header />
      <MostPopularProducts />
      {/* <CardTwo />
      <CardThree />
      <CardHot />
      <CardBlockbuster />
      <CardFeatured />
      <CardNews /> */}
      <Footer />
    </>
  )
}

export default App
