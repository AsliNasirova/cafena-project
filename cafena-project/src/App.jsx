import Home from './Pages/Home'
import { BrowserRouter } from "react-router-dom";
import './App.css'
import Navbar from './Layout/Navbar'
import { ProductProvider } from './Context/Product';
import { PositionProvider } from './Context/Position';
import { BasketProvider } from './Context/Basket';
import { WishlistProvider } from './Context/Wishlist';

function App() {


  return (
    <ProductProvider>
      <BasketProvider>
        <WishlistProvider>
          <BrowserRouter>
            <PositionProvider>
              <Navbar />
            </PositionProvider>
            <Home />
          </BrowserRouter>
        </WishlistProvider>
      </BasketProvider>
    </ProductProvider>
  )
}

export default App
