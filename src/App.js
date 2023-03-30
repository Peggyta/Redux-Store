import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import store from './redux/store';
import WithProducts from './components/WithProducts';
import WithoutProducts from './components/WithoutProducts';
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
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Toggle />
        <Navbar />
        <HamburgerMenu />
        <Routes>
          <Route path='/' element={<Banner />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/bestselling' element={<Bestselling />} />
            <Route path='/packages' element={<Packages />} />
            <Route path='//products' element={<Products />} />
            <Route path='/products/:id' element={<Details />} />
            <Route path='/cart' element={<ShopCart />} />
         
          <Route path='/notfound' element={<ErrorPage />} />
          <Route path='/*' element={<Navigate to='/notfound'/>} />
        </Routes>
        <Routes>
          <Route path='/' element={<Slider />} />
        </Routes>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
