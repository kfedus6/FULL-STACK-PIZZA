import { TypeProduct } from '../../models/TypeProduct'
import { createSlice } from '@reduxjs/toolkit'

export interface TypeProductState {
    types: TypeProduct[],
    error: string,
    isLoading: boolean
}

const initialState: TypeProductState = {
    types: [],
    error: '',
    isLoading: false
}

export const typeProductSlice = createSlice({
    name: 'typeProduct',
    initialState,
    reducers: {
        //Loading and Error 
        typeProductFetchingLoading(state) {
            state.isLoading = true
        },
        typeProductFetchingError(state, action) {
            state.error = action.payload
        },

        //GET
        typeProductFetchingGet(state, action) {
            state.isLoading = false
            state.error = ''
            state.types = action.payload.typeProduct
        },

        //POST
        typeProductFetchingPost(state, action) {
            state.isLoading = false
            state.error = ''
            state.types = action.payload
        }
    }
})

export default typeProductSlice.reducer;