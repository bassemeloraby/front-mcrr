import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { addPro } from '../../features/productReducer/ProductSlice';

function CreateProduct() {
  const [productName, setProductName] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productSubmit = (e) => {
    e.preventDefault();

    dispatch(addPro({ productName }));
    setProductName('');
    navigate('/')
  };

  return (
    <div>
      <Form onSubmit={productSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Product Name</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              value={productName}
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) => setProductName(e.target.value)}
            />
          </InputGroup>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default CreateProduct;
