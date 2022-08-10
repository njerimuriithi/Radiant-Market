import { createSlice } from "@reduxjs/toolkit";
import SolarProductList from "../ProductsList/LightingData";


const detailsSlice = createSlice({
    name:'productdetails',
    initialState:{
        SolarProductList:[],
        showDescription:false
    },

    reducers:{
        loadItem(state,action){
         const newProduct = action.payload;

        },
        setShowDescription(state){
            state.showDescription =true;
        }
    }
})

export const detailActions = detailsSlice.actions;

export default detailsSlice