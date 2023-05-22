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

//delete product
export const deletePro = createAsyncThunk(
  'products/deletePro',
  async (_id, thunkAPI) => {
    try {
      return await ProductService.deleteProduct(_id);
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

//update product
export const updatePro = createAsyncThunk(
  'products/updatePro',
  async ({ id, productName }, thunkAPI) => {
    try {
      return await ProductService.updateProduct({ id, productName });
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: { products: [], loading: false },
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
      })
      .addCase(deletePro.pending, (state) => {
        state.loading = true;
      })
      .addCase(deletePro.fulfilled, (state, action) => {
        state.loading = false;
        state.products = state.products.filter(
          (goal) => goal._id !== action.payload.id
        );
      })
      .addCase(deletePro.rejected, (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase(updatePro.pending, (state) => {
        state.loading = true;
      })
      .addCase(updatePro.fulfilled, (state, action) => {
        state.loading = false;
        const { productName, id } = action.payload;

        const uu = state.products.find((goal) => goal._id === id);
        if (uu) {
          uu.productName = productName;
        }
        return state;
      })
      .addCase(updatePro.rejected, (state, action) => {
        state.loading = false;
        state.message = action.payload;
      });
  },
});

export default productSlice.reducer;
