import { createSlice } from "@reduxjs/toolkit";
//import SolarProductList from "../ProductsList/LightingData";
import SolarProductList from "../ProductsList/LightingData";

const initialState ={
    SolarProductList:SolarProductList,  
totalQuantity: 0,
}

export const cartSlice =createSlice({
    name:"cart",
    initialState,

    reducer:{
        AddCart:(state,action)=>{
          const productIndex =  state.SolarProductList.findIndex((product) => product.id === action.payload);
          if(productIndex>=0)
          {
            state.SolarProductList[productIndex].totalQuantity += 1
          }else
          {
            const AddProduct = {...action.payload , totalQuantity:1};
            state.SolarProductList.push(AddProduct)
          }
        },
    }
})

export const {AddCart} = cartSlice.actions;
export default cartSlice.reducer;