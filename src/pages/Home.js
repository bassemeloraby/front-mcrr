import React from 'react';
import Product from './Product';
import { Route, Routes } from 'react-router-dom'
import CreateProduct from '../components/product/CreateProduct';

function Home() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Product />}/>
      <Route path='/create-product' element={<CreateProduct/>}/>
    </Routes>
      
    </div>
  );
}

export default Home;
