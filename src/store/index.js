import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import detailsSlice from "./details-slice"; 

const store = configureStore({
    reducer:{
        productdetails:detailsSlice.reducer
    },
});

export default store;