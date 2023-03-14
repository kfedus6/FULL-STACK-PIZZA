import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/ProductSlice";
import userSlice from "./reducers/UserSlice";
import TypeProductSlice from "./reducers/TypeProductSlice";
import basketProduct from "./reducers/BasketSlice";

const rootReducer = combineReducers({
    productSlice,
    userSlice,
    TypeProductSlice,
    basketProduct
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
