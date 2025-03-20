import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';

const App = () => {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
          {/* <Route path="/checkout" element={<Checkout />} /> */}
        </Routes>
    </Router>
  );
};

export default App;
