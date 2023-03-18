import { Order } from "../../models/Order"
import { createSlice } from "@reduxjs/toolkit"

export interface OrderState {
    order: Order[];
    isLoading: boolean;
    error: string;
}

const initialState: OrderState = {
    order: [],
    isLoading: false,
    error: ''
}

export const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        //Loadnig and Error
        orderFetchingLoading(state) {
            state.isLoading = true
        },
        orderFetchingError(state, action) {
            state.isLoading = false
            state.error = action.payload
        },

        //POST
        orderFetchingCreate(state, action) {
            state.isLoading = false
            state.error = ''
            state.order = action.payload.order
        }
    }
})

export default orderSlice.reducer