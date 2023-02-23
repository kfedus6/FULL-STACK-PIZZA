import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/ProductSlice";
import userSlice from "./reducers/UserSlice"

const rootReducer = combineReducers({
    productSlice,
    userSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
