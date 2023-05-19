import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { getPro } from '../features/productReducer/ProductSlice';
import Button from 'react-bootstrap/Button';


function Product() {
  const { products } = useSelector((state) => state.products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPro());
  }, [dispatch]);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr style={{ backgroundColor: 'orange' }}>
            <th>Product</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.productName}</td>
              <td>
                <Button>Edit</Button>
                <Button variant="danger" className='ms-2'>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Product;
