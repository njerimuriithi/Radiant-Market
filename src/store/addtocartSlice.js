import { createSlice } from "@reduxjs/toolkit";
//import SolarProductList from "../ProductsList/LightingData";
import SolarProductList from "../ProductsList/LightingData";

const initialState ={
    ProductList:SolarProductList,  
 
totalQuantity: 0,
}

export const cartSlice =createSlice({
    name:"cart",
    initialState,

    reducers:{
        AddCart:(state,action)=>{

          //state.ProductList.push(action.payload)
          const ProductItems= state.ProductList.find((product) => product.id == action.payload.id)
          if(ProductItems)
          {
            ProductItems.totalQuantity++
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