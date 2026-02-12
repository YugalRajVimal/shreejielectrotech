import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import AboutSection from './Components/About'
import Navbar from './Components/NavBar'
import Footer from './Components/Footer'
import About from './Pages/About'
import Products from './Pages/Products'
import ContactUs from './Pages/ContactUs'



const NotFound = () => <div>404 - Not Found</div>

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<ContactUs />} />


        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App