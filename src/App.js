import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import store from './redux/store';
import WithProducts from './components/WithProducts';
import WithoutProducts from './components/WithoutProducts';
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
          <Route element={<WithProducts />}>
            <Route path='/' element={<Banner />} />
          </Route>
          <Route element={<WithoutProducts />}>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/bestselling' element={<Bestselling />} />
            <Route path='/packages' element={<Packages />} />
            <Route path='/products' element={<Products />} />
          </Route>
          <Route path='/notfound' element={<ErrorPage />} />
          <Route path='/*' element={<Navigate to='/notfound'/>} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
