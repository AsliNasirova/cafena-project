import Home from './Pages/Home'
import { BrowserRouter } from "react-router-dom";
import './App.css'
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer'
import Navbar from './Layout/Navbar'
import About from './Pages/About'
import Home from './Pages/Home'

function App() {


  return (
    <BrowserRouter>
      <Navbar />
    <Navbar/>
    {/* <Home/> */}
    <About/>
    {/* <Footer/> */}<Home />
    </BrowserRouter>
  )
}

export default App
