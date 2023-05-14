import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Table from 'react-bootstrap/Table';
import { getPro } from '../features/productReducer/ProductSlice';
function Product() {
  const { products } = useSelector((state) => state.products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPro());
  }, [dispatch]);

  return (
    <div>
      {products.map((product) => (
        <h1>{product.productName}</h1>
      ))}
    </div>
  );
}

export default Product;
