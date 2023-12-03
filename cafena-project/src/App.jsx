import Home from './Pages/Home'
import { BrowserRouter } from "react-router-dom";
import './App.css'
import Navbar from './Layout/Navbar'
import { ProductProvider } from './Context/Product';
import { PositionProvider } from './Context/Position';
import { BasketProvider } from './Context/Basket';

function App() {


  return (
    <ProductProvider>
      <BasketProvider>
        <BrowserRouter>
          <PositionProvider>
            <Navbar />
          </PositionProvider>
          <Home />
        </BrowserRouter>
      </BasketProvider>
    </ProductProvider>
  )
}

export default App
