import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import store from './redux/store';
import Navbar from './components/Navbar';
import HamburgerMenu from './components/HamburgerMenu';
import Banner from './components/Banner';
import Login from './components/Login';
import Register from './components/Register';
import Packages  from './components/Packages';
import Bestselling from './components/Bestselling';
import Products from './components/Products';
import ErrorPage from './error-page';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <HamburgerMenu />
        <Routes>
          <Route path='/' element={<Banner />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/bestselling' element={<Bestselling />} />
          <Route path='/products' element={<Products />} />
          <Route path='/packages' element={<Packages />} />
          <Route path='/notfound' element={<ErrorPage />} />
          <Route path='/*' element={<Navigate to='/notfound'/>} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
