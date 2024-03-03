import Layout from 'components/layout'
import AboutUs from 'pages/AboutUs'
import Blog from 'pages/Blog'
import BlogDetails from 'pages/BlogDetails'
import Cart from 'pages/Cart'
import Checkout from 'pages/Checkout'
import ContactUs from 'pages/ContactUs'
import LoginRegister from 'pages/LoginRegister'
import Login from 'pages/LoginRegister/login'
import Register from 'pages/LoginRegister/register'
import Page404 from 'pages/Page404'
import ProductDetail from 'pages/ProductDetail'
import Wishlist from 'pages/Wishlist'
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
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/auth" element={<LoginRegister />}>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
          </Route>
          <Route path="/product/id" element={<ProductDetail />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes
