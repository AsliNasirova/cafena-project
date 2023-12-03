import Home from './Pages/Home'
import { BrowserRouter } from "react-router-dom";
import './App.css'
import Navbar from './Layout/Navbar'
import { ProductProvider } from './Context/Product';
import { PositionProvider } from './Context/Position';

function App() {


  return (
    <ProductProvider>
    <BrowserRouter>
      <PositionProvider>
      <Navbar />
      </PositionProvider>
      <Home />
    </BrowserRouter>
    </ProductProvider>
  )
}

export default App
