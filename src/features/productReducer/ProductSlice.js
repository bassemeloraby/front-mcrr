import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ProductService from './ProductService';


// get products
export const getPro = createAsyncThunk('products/getPro', ProductService.getProducts);

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