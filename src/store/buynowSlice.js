import { createSlice } from '@reduxjs/toolkit'



const initialState = {
  value: 0,
  checkoutPageValue:false,
}

export const buynowSlice =createSlice ({
name:'buynow',
initialState,
reducers:{
  showCheckoutPage:(state)=>{

    state.checkoutPageValue=true;

  },
}
})

//export the actions
export const {showCheckoutPage} = buynowSlice.actions;
export default buynowSlice.reducer;