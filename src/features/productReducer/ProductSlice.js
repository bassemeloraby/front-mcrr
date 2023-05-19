import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ProductService from './ProductService';

// get products
export const getPro = createAsyncThunk(
  'products/getPro',
  ProductService.getProducts
);


//add product
export const addPro = createAsyncThunk(
  'products/addPro',
  async (productName, thunkAPI) => {
    try {
      return await ProductService.addProduct(productName);
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

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
      .addCase(addPro.pending, (state) => {
        state.loading = true;
      })
      .addCase(addPro.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload);
      })
      .addCase(addPro.rejected, (state, action) => {
        state.loading = false;
        state.message = action.payload;
      });
  },
});

export default productSlice.reducer;
