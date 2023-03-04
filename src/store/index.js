import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./category/categorySlice.js";
import productReducer from "./product/productSlice.js";
import orderReducer, { localStorageMiddleware } from "./order/orderSlice.js";
import modalReducer from "./modalDelivery/modalDeliverySlice.js";
import formReducer from "./form/formSlice.js";

export const store = configureStore ({
    reducer: {
       category: categoryReducer,
       product: productReducer,
       order: orderReducer,
       modal: modalReducer,
       form: formReducer,
    },

    middleware: getDefaultMiddleware => 
    getDefaultMiddleware().concat(localStorageMiddleware)
});