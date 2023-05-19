import axios from 'axios';

const API_URL = 'https://sore-lime-goat-tam.cyclic.app/api/products';

const getProducts = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

// Create new product
const addProduct = async (productName) => {
  const response = await axios.post(API_URL, productName);

  return response.data;
};

const ProductService = {
  getProducts,
  addProduct
};

export default ProductService;
