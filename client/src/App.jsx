
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./utils/Header"

// Import Swiper styles
import 'swiper/css';
import Footer from "./utils/Footer";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import 'react-tabs/style/react-tabs.css';
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";


function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
