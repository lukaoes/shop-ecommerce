import Card from 'components/cards/card'
import CardBlockbuster from 'components/cards/cardBlockbuster'
import CardHot from 'components/cards/cardHot'
import CardThree from 'components/cards/cardThree'
import CardTwo from 'components/cards/cardTwo'
import Footer from 'components/layout/footer'
import Header from 'components/layout/header'

function App() {
  return (
    <>
      <Header />
      <Card />
      <CardTwo />
      <CardThree />
      <CardHot />
      <CardBlockbuster />
      <Footer />
    </>
  )
}

export default App
