import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout'
import About from './Pages/About'
import ShopDetails from './Pages/ShopDetails/index';
import Home from './Pages/Home/index';
import Shop from './Pages/Shop'
import { ProductProvider } from './Context/Product';
import { BasketProvider } from './Context/Basket';
import { WishlistProvider } from './Context/Wishlist';
import FAQ from './Pages/FAQ';
import Reservation from './Pages/Reservation';
import ShopWishlist from './Pages/ShopWishlist';



function App() {


  return (
    <ProductProvider>
      <BasketProvider>
        <WishlistProvider>
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/about' element={<About/>}></Route>
              <Route path='/shop/details' element={<ShopDetails/>}></Route>
              <Route path='/shop' element={<Shop/>}></Route>
              <Route path='/faq' element={<FAQ/>}></Route>
              <Route path='/reservation' element={<Reservation/>}></Route>
              <Route path='/shop/wishlist' element={<ShopWishlist/>}></Route>
            </Route>
          </Routes>
          </BrowserRouter>
        </WishlistProvider>
      </BasketProvider>
    </ProductProvider>
  )
}

export default App
