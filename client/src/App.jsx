
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./utils/Header"

// Import Swiper styles
import 'swiper/css';
import Footer from "./utils/Footer";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import 'react-tabs/style/react-tabs.css';


function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
