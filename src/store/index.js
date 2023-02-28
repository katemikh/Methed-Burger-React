import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./category/categorySlice.js";
 
export const store = configureStore ({
    reducer: {
       category: categoryReducer,
    },
});