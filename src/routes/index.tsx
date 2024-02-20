import Layout from 'components/layout'
import ContactUs from 'pages/ContactUs'
import Page404 from 'pages/Page404'
import Home from 'pages/home'
import Shop from 'pages/shop'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<ContactUs />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes
