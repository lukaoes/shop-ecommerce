import Layout from 'components/layout'
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
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes
