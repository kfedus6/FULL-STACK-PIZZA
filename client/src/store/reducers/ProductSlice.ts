import { Product } from "../../models/Product";
import { createSlice } from "@reduxjs/toolkit"

export interface ProductState {
    products: Product[];
    isLoading: boolean;
    error: string;
    count: number;
}

const initialState: ProductState = {
    products: [],
    isLoading: false,
    error: '',
    count: 0
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        //Product
        //GET
        productFetching(state) {
            state.isLoading = true
        },
        productFetchingSuccess(state, action) {
            state.isLoading = false
            state.error = ''
            state.products = action.payload.products
            state.count = action.payload.count
        },
        productFetchingError(state, action) {
            state.isLoading = false
            state.error = action.payload
        },

        //POST
        productCreateFetching(state, action) {
            state.products = action.payload
        },

        productCreateFetchingError(state, action) {
            state.isLoading = false
            state.error = action.payload
        },

        //DELETE
        productDeleteFetching(state, action) {

        }
    }
})

export default productSlice.reducer;