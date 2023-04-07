import React from 'react';
import Home from './Home';
import Footer from './Footer';
import Header from './Header';
import Store from './Store';
import ProductList from './ProductList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Form1 from './Form1';
import {BrowserRouter} from 'react-router-dom';
import {Routes,Route} from 'react-router-dom';  

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
        <Routes>
          
          <Route  path="/" element={<Home/>} />
          <Route  path="/Store" element={<Store/>} />
          <Route  path="/ProductList" element={<ProductList/>} />
          <Route  path="/Form1" element={<Form1/>} />

          </Routes>
          
          </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
