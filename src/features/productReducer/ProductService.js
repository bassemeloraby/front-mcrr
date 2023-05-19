import axios from 'axios';

const API_URL = 'https://sore-lime-goat-tam.cyclic.app/api/products';

const getProducts = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

const ProductService = {
  getProducts,
};

export default ProductService;
