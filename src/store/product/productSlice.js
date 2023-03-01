import { API_URI, POSTFIX } from "../../const";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    products: [],
    error: "",
};

export const productRequestAsync = createAsyncThunk(
"product/fetch", (category) => 
    fetch(`${API_URI}${POSTFIX}?category=${category}`)
    .then(req => req.jason())
    .catch(error => ({error}))
);

const productSlice = createSlice({
    name: "product",
    initialState,
    extraReducers: builder => {
        builder
        .addCase(productRequestAsync.pending, state => {
            state.error = ""
        })
        .addCase(productRequestAsync.fulfilled, (state, action) => {
            state.error = "";
            state.products = action.payload;
        })
        .addCase(productRequestAsync.rejected, (state, action) => {
            state.error = action.payload.error
        })
       /*  .addCase(productRequestAsync.pending.type, state => {
            state.error = ""
        })
        .addCase(productRequestAsync.fulfilled.type, (state, action) => {
            state.error = "";
            state.products = action.payload;
        })
        .addCase(productRequestAsync.rejected.type, (state, action) => {
            state.error = action.payload.error
        }) */
    }
});

export default productSlice.reducer;
