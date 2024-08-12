import { createSlice } from '@reduxjs/toolkit';
import { PRODUCTS } from '../constants';

// const initialState = {
//   products: [],
//   searchText: '',
//   filteredProducts: [],
// };

const productSlice = createSlice({
  name: 'product',
  initialState:{
  items:PRODUCTS,
  },
  reducers: {
    searchProduct: (state, action) => {
      if(action.payload===""){
        state.items=PRODUCTS;
      }else{
        state.items=PRODUCTS.filter((item)=>
        item.brand.includes(action.payload)
    );
      }
    },
},
});

export const { setProducts, searchProduct } = productSlice.actions;

export default productSlice.reducer;
