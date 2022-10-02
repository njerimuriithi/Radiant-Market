import { createSlice } from "@reduxjs/toolkit";

const initialState ={
value:1,
}

export const cartSlice =createSlice({
    name:"cart",
    initialState,

    reducer:{
        increment:(state)=>{
            state.value +=1;
        },
    }
})

export const {increment} = cartSlice.actions;
export default cartSlice.reducer;