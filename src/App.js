import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import store from './redux/store';
import Navbar from './components/Navbar';
import Details from './components/Details';
import HamburgerMenu from './components/HamburgerMenu';
import Banner from './components/Banner';
import Slider from './components/Slider';
import ShopCart from './components/ShopCart';
import Login from './components/Login';
import Register from './components/Register';
import Packages  from './components/Packages';
import Bestselling from './components/Bestselling';
import Products from './components/Products';
import ErrorPage from './error-page';
import Footer from './components/Footer';
import Toggle from './components/shared/Toggle';
import ScrollToTop from './components/shared/ScrollToTop';
import Category from './components/Category';
import Dress from './components/categories/Dress';
import Electronics from './components/categories/Electronics';
import MensWear from './components/categories/Menswear';
import Jewellery from './components/categories/Jewellery';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Toggle />
        <Navbar />
        <HamburgerMenu />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Banner />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/bestselling' element={<Bestselling />} />
            <Route path='/packages' element={<Packages />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:id' element={<Details />} />
            <Route path="/products/categories/women's clothing" element={<Dress />} />
            <Route path='/products/categories/electronics' element={<Electronics />} />
            <Route path='/products/categories/menclothing' element={<MensWear />} />
            <Route path='/products/categories/jewelery' element={<Jewellery />} />
            <Route path='/cart' element={<ShopCart />} />      
          <Route path='/notfound' element={<ErrorPage />} />
          <Route path='/*' element={<Navigate to='/notfound'/>} />
        </Routes>
        <Category />
        <Routes>
          <Route path='/' element={<Slider />} />
        </Routes>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
