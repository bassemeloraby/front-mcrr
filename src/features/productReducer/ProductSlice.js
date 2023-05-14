import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://sore-lime-goat-tam.cyclic.app/api/products';

const getProducts = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

export const getPro = createAsyncThunk('products/getPro', getProducts);

const productSlice = createSlice({
  name: 'products',
  initialState: { products: [] },
  extraReducers: (builder) => {
    builder
      .addCase(getPro.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getPro.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getPro.rejected, (state, action) => {
        state.loading = false;
      })
  }
});

export default productSlice.reducer;