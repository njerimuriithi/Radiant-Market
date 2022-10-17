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

    reducers:{
        AddCart:(state,action)=>{
          const ProductList = state.SolarProductList.find((product) => product.id == action.payload.id)
          if(ProductList)
          {
            ProductList.totalQuantity++
          }else{
            state.cart.push({...action.payload, totalQuantity :1})
          }
          
        },
       //ShowItemQuantity
       ShowItemQuantity:(state)=>
       {
        state.totalQuantity +=1
       }
    }
})

export const {AddCart,ShowItemQuantity} = cartSlice.actions;
export default cartSlice.reducer;