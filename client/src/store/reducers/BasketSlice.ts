import { createSlice } from "@reduxjs/toolkit";
import { BasketProduct } from "../../models/BasketProduct";

export interface BasketProductState {
    basket: BasketProduct[],
    isLoading: boolean,
    error: string
}

const initialState: BasketProductState = {
    basket: [],
    isLoading: false,
    error: ''
}

export const basketSlice = createSlice({
    name: 'basketProduct',
    initialState,
    reducers: {
        //Loading and Error 
        basketProductFetchingLoading(state) {
            state.isLoading = true
        },
        basketProductFetchingError(state, action) {
            state.error = action.payload
        },

        //POST
        addBasketProductFetching(state, action) {
            state.basket = action.payload
            state.isLoading = false
            state.error = ''
        },

        //GET
        getBasketProductFetching(state, action) {
            state.isLoading = false
            state.error = ''
            state.basket = action.payload.basket
        }
        //DELETE
    }
})

export default basketSlice.reducer;