import { Outlet } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import { Container } from './header/styled'

const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  )
}

export default Layout
