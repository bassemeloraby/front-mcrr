import React from 'react';
import Product from './Product';
import { Route, Routes } from 'react-router-dom'

function Home() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Product />}/>
    </Routes>
      
    </div>
  );
}

export default Home;
