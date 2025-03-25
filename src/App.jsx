import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Cart from './pages/cart';
import Checkout from './pages/checkout';
import ContactUs from './pages/contactus.jsx';
import Footer from './components/footer.jsx';
import { CartProvider } from './context/CartContext.jsx';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <CartProvider>
    <Router>
      <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        <Footer />
    </Router>
    </CartProvider>
  );
};

export default App;
