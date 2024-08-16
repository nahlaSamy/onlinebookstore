import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

// Define a type for the slice state
interface CartState {
    book:string,

  quantity: number;
}

// Define the initial state using that type
const initialState: CartState = {
    book:"",
  quantity: 0,
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    incrementCart: (state ,action) => {
      console.log("🚀 ~ action:", action)
      state.quantity += 1;
    },
    // If you want to add more reducers in the future, you can uncomment and use them
    // decrement: (state) => {
    //   state.quantity -= 1;
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.quantity += action.payload;
    // },
  },
});

export const { incrementCart } = CartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectQuantity = (state: RootState) => state.cart.quantity;

export default CartSlice.reducer;
