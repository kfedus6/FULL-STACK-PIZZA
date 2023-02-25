import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/ProductSlice";
import userSlice from "./reducers/UserSlice";
import TypeProductSlice from "./reducers/TypeProductSlice";

const rootReducer = combineReducers({
    productSlice,
    userSlice,
    TypeProductSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
