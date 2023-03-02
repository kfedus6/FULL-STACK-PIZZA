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
        //Loading and Error
        productFetchingLoading(state) {
            state.isLoading = true
        },
        productFetchingError(state, action) {
            state.isLoading = false
            state.error = action.payload
        },

        //GET
        productFetchingSuccess(state, action) {
            state.isLoading = false
            state.error = ''
            state.products = action.payload.products
            state.count = action.payload.count
        },

        //POST
        productCreateFetching(state, action) {
            state.products = action.payload
            state.isLoading = false
            state.error = ''
        },

        //DELETE
        productDeleteFetching(state) {
            state.isLoading = false
            state.error = ''
        },
        //PUT
        productPutFetching(state) {
            state.isLoading = false
            state.error = ''
        }
    }
})

export default productSlice.reducer;