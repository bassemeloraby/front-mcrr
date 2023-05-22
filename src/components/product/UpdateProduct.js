import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updatePro } from '../../features/productReducer/ProductSlice';

function UpdateProduct() {
  const { id } = useParams();
  const { products, loading } = useSelector((state) => state.products);
  const [uproductName, setuProductName] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    const existingProduct = products.filter((f) => f._id === id);
    console.log(existingProduct);

    const oneData = existingProduct[0];
    console.log(oneData);
    console.log(oneData.productName);
    setuProductName(oneData.productName);
  }, [id, products]);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updatePro({
        id: id,
        productName: uproductName,
      })
    );
    navigate('/');
  };

  return (
    <div>
      <h2>update user</h2>
      <Form onSubmit={handleUpdate}>
        <Form.Group className="mb-3">
          <Form.Label>Product Name</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              value={uproductName}
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) => setuProductName(e.target.value)}
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

export default UpdateProduct;
