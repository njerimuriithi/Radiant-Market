//import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import { configureStore } from '@reduxjs/toolkit'
import detailsSlice from "./details-slice"; 
import buynowSlice from './buynowSlice';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import cartReducer from './addtocartSlice';

export const store = configureStore({
    reducer:{
       // productdetails:detailsSlice.reducer,
       // buynow:buynowSlice.reducer,
        cart:cartReducer,

    },
});

//export default store;