import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout'
import About from './Pages/About'
import ShopDetails from './Pages/ShopDetails/index';
import { ProductProvider } from './Context/product'
import { BasketProvider } from './Context/basket'
import { WishlistProvider } from './Context/Wishlist'
import Home from './Pages/Home/index';



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
              <Route path='/shop' element={<ShopDetails/>}></Route>


            </Route>
          </Routes>
          </BrowserRouter>
        </WishlistProvider>
      </BasketProvider>
    </ProductProvider>
  )
}

export default App
