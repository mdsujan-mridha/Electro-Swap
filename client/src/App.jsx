
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./utils/Header"

// Import Swiper styles
import 'swiper/css';
import Footer from "./utils/Footer";
import Products from "./pages/Products";


function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
