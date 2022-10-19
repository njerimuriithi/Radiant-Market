import { createSlice } from "@reduxjs/toolkit";
//import SolarProductList from "../ProductsList/LightingData";
import SolarProductList from "../ProductsList/LightingData";

const initialState ={
    ProductList:[],  
    //SolarProductList:[],
 
totalQuantity: 0,
itemQuantity:0,
}

export const cartSlice =createSlice({
    name:"cart",
    initialState,

    reducers:{
        AddCart:(state,action)=>{

          //state.ProductList.push(action.payload)
          const ProductItems = state.ProductList.findIndex(item => item.id === action.payload.id);
          //const ProductItems= state.ProductList.find((product) => product.id == action.payload.id)
          if(ProductItems >=0)
          {
           state.ProductList[ProductItems].totalQuantity+=1;
           //ProductItems.totalQuantity++
          }else{
            state.ProductList.push({...action.payload, totalQuantity :1})
          }
          
        },
        //Remove item
        RemoveFromCart:(state,action)=>{
          const removeItem = state.ProductList.filter((item) => item.id !== action.payload);
          state.ProductList = removeItem;
          state.totalQuantity = removeItem;
        },
        DecreaseQuantitityItem:(state,action)=>{
          const ProductItems = state.ProductList.findIndex((item) => item.id === action.payload.id);
          ProductItems.totalQuantity = ProductItems.totalQuantity -1; 
        
          
        
        },
        IncreaseQuantityItem:(state,action)=>{
          const ProductItems = state.ProductItems.find((item) => item.id === action.payload);
          ProductItems.totalQuantity++;

        },
       //ShowItemQuantity
       ShowItemQuantity:(state)=>
       {
        state.totalQuantity +=1
       }
        
    }
})

export const {AddCart,ShowItemQuantity,RemoveFromCart,IncreaseQuantityItem,DecreaseQuantitityItem} = cartSlice.actions;
export default cartSlice.reducer;