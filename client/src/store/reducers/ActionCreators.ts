import { $host } from "../../http";
import { Product } from "../../models/Product";
import { AppDispatch } from "../store";
import { productSlice } from "./ProductSlice";

export const fetchsProducts = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(productSlice.actions.productFetching)
        const response = await $host.get<Product[]>('pizza/product')
        dispatch(productSlice.actions.productFetchingSuccess(response.data))
    } catch (e: string | undefined | any) {
        dispatch(productSlice.actions.productFetchingError(e.message))
    }
}