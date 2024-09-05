import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Products from './pages/Products';
import About from './pages/About';
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail.jsx";
import SignIn from './components/signin.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route exact path="/" element={<Products/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />      
        <Route path="/about" element = {<About/>} />
        <Route path='/signin' element = {<SignIn/>} />
       
      
        </Routes>
    </BrowserRouter>
  );
}

export default App;
