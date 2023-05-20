import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { getPro, deletePro } from '../features/productReducer/ProductSlice';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Product() {
  const { products } = useSelector((state) => state.products);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPro());
  }, [dispatch,products]);

  return (
    <div>
      <section className="mb-1 mt-1">
        <Button variant="success" onClick={() => navigate('/create-product')}>
          Create +
        </Button>{' '}
      </section>
      <section>
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
                  <Button
                    variant="danger"
                    className="ms-2"
                    onClick={() => dispatch(deletePro(product._id))}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </section>
    </div>
  );
}

export default Product;
