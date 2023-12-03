import Home from './Pages/Home'
import { BrowserRouter } from "react-router-dom";
import './App.css'
import Navbar from './Layout/Navbar'
import { ProductProvider } from './Context/Product';

function App() {


  return (
    <ProductProvider>
    <BrowserRouter>
      <Navbar />
      <Home />
    </BrowserRouter>
    </ProductProvider>
  )
}

export default App
