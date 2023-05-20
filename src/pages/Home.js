import React from 'react';
import Product from './Product';
import { Route, Routes } from 'react-router-dom'
import CreateProduct from '../components/product/CreateProduct';
import UpdateProduct from '../components/product/UpdateProduct';

function Home() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Product />}/>
      <Route path='/create-product' element={<CreateProduct/>}/>
      <Route path='/edit-product/:id' element={<UpdateProduct/>}/>
    </Routes>
      
    </div>
  );
}

export default Home;
