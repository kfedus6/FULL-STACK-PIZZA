import { TypeProduct } from '../../models/TypeProduct'
import { createSlice } from '@reduxjs/toolkit'

export interface TypeProductState {
    types: TypeProduct[],
    error: string
}

const initialState: TypeProductState = {
    types: [],
    error: ''
}

export const typeProductSlice = createSlice({
    name: 'typeProduct',
    initialState,
    reducers: {
        typeProductFetchingGet(state, action) {
            state.types = action.payload.typeProduct
        },

        typeProductFetchingError(state, action) {
            state.error = action.payload
        }
    }
})

export default typeProductSlice.reducer;