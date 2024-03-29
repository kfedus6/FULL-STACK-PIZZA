import { productSlice } from "./ProductSlice";
import { userSlice } from "./UserSlice";
import { Product } from "../../models/Product";
import { AppDispatch } from "../store";
import { $host, $authHost } from "../../http";
import jwt_decode from 'jwt-decode'
import { User } from "../../models/User";
import { typeProductSlice } from "./TypeProductSlice";
import { TypeProduct } from "../../models/TypeProduct";
import { basketSlice } from "./BasketSlice";
import { orderSlice } from "./OrderSlice";
import axios from "axios";

//Fetch User

export const fetchUserRegistration = (objUser: User) => async (dispatch: AppDispatch) => {
    try {
        const response = await $host.post<any>('pizza/user/registration', objUser)
        localStorage.setItem('token', response.data.userData.tokens.accessToken)
        dispatch(userSlice.actions.userFetchingRegistration({ is_admin: response.data.userData.user.admin, user: response.data.userData.user, is_login: true }))
    } catch (e: any) {
        dispatch(userSlice.actions.userFetchingError(e.message))
    }
}

export const fetchUserLogin = (objUser: User) => async (dispatch: AppDispatch) => {
    try {
        const response = await $host.post('pizza/user/login', objUser)
        localStorage.setItem('token', response.data.userData.tokens.accessToken)
        dispatch(userSlice.actions.userFetchingLogin({ is_admin: response.data.userData.user.admin, user: response.data.userData.user, is_login: true }))
    } catch (e: any) {
        dispatch(userSlice.actions.userFetchingError(e.message))
    }
}

export const fetchUserAuthorization = () => async (dispatch: AppDispatch) => {
    try {
        //const response = await $host.get('pizza/user/refresh', { withCredentials: true })
        //localStorage.setItem('token', response.data.userData.tokens.accessToken)
        dispatch(userSlice.actions.userFetchingAuthorization({ is_admin: true, user: {}, is_login: true }))
    } catch (e: any) {
        dispatch(userSlice.actions.userFetchingError(e.message))
    }
}

export const fetchUserExit = () => async (dispatch: AppDispatch) => {
    const response = await $authHost.post('pizza/user/logout')
    localStorage.removeItem('token')
    dispatch(userSlice.actions.userFetchingLogin({ is_admin: false, user: {}, is_login: false }))
}

// Fetch Product

export const fetchProducts = (data: any = {}) => async (dispatch: AppDispatch) => {
    try {
        dispatch(productSlice.actions.productFetchingLoading)
        const response = await $host.get<Product[]>('pizza/product', {
            params: {
                ...data
            }
        })
        dispatch(productSlice.actions.productFetchingSuccess(response.data))
    } catch (e: string | undefined | any) {
        dispatch(productSlice.actions.productFetchingError(e.message))
    }
}

export const fetchCreateProduct = (objProduct: any) => async (dispatch: AppDispatch) => {
    try {
        dispatch(productSlice.actions.productFetchingLoading)
        const response = await $authHost.post('pizza/product', objProduct)
        dispatch(productSlice.actions.productCreateFetching(response.data))
    } catch (e: string | undefined | any) {
        dispatch(productSlice.actions.productFetchingError(e.message))
    }
}

export const fetchDeleteProduct = (id: any) => async (dispatch: AppDispatch) => {
    try {
        dispatch(productSlice.actions.productFetchingLoading)
        const response = await $authHost.delete(`pizza/product/${id}`)
        dispatch(productSlice.actions.productDeleteFetching(response.data))
    } catch (e: string | undefined | any) {
        dispatch(productSlice.actions.productFetchingError(e.message))
    }
}

export const fetchUpdateProduct = (id: any, objProduct: any) => async (dispatch: AppDispatch) => {
    try {
        dispatch(productSlice.actions.productFetchingLoading)
        const response = await $authHost.put(`pizza/product/${id}`, objProduct)
        dispatch(productSlice.actions.productCreateFetching(response.data))
    } catch (e: string | undefined | any) {
        dispatch(productSlice.actions.productFetchingError(e.message))
    }
}

//Fetch typeProduct

export const fetchTypesProduct = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(typeProductSlice.actions.typeProductFetchingLoading)
        const response = await $host.get<TypeProduct[]>('pizza/typeProduct')
        dispatch(typeProductSlice.actions.typeProductFetchingGet(response.data))
    } catch (e: string | undefined | any) {
        dispatch(typeProductSlice.actions.typeProductFetchingError(e.message))
    }
}

export const fetchTypeProduct = (type: any) => async (dispatch: AppDispatch) => {
    try {
        dispatch(typeProductSlice.actions.typeProductFetchingLoading)
        const response = await $authHost.post('pizza/typeProduct', { type })
        dispatch(typeProductSlice.actions.typeProductFetchingPost(response.data))
    } catch (e: string | undefined | any) {
        dispatch(typeProductSlice.actions.typeProductFetchingError(e.message))
    }
}

//Fetch Basket Product

export const fetchBasketProduct = (id: any, userId: any, changePrice: any, changeWeight: any, changeSize: any, img: any, title: any) => async (dispatch: AppDispatch) => {
    try {
        dispatch(basketSlice.actions.basketProductFetchingLoading)
        const response = await $host.post(`pizza/basket/${id}`, { userId, changePrice, changeWeight, changeSize, img, title })
        dispatch(basketSlice.actions.addBasketProductFetching(response.data))
    } catch (e: string | undefined | any) {
        dispatch(basketSlice.actions.basketProductFetchingError(e.message))
    }
}

export const fetchGetBasketProduct = (id: any,) => async (dispatch: AppDispatch) => {
    try {
        dispatch(basketSlice.actions.basketProductFetchingLoading)
        const response = await $host.get(`pizza/basket/${id}`,)
        dispatch(basketSlice.actions.getBasketProductFetching(response.data))
    } catch (e: string | undefined | any) {
        dispatch(basketSlice.actions.basketProductFetchingError(e.message))
    }
}

export const fetchDeleteBasketProduct = (id: any,) => async (dispatch: AppDispatch) => {
    try {
        dispatch(basketSlice.actions.basketProductFetchingLoading)
        const response = await $host.delete(`pizza/basket/${id}`,)
        dispatch(basketSlice.actions.deleteBasketProductFetching(response.data))
    } catch (e: string | undefined | any) {
        dispatch(basketSlice.actions.basketProductFetchingError(e.message))
    }
}

export const fetchDeleteAllBasketProduct = (id: any,) => async (dispatch: AppDispatch) => {
    try {
        dispatch(basketSlice.actions.basketProductFetchingLoading)
        const response = await $host.delete(`pizza/basket/products/${id}`,)
        dispatch(basketSlice.actions.deleteBasketProductFetching(response.data))
    } catch (e: string | undefined | any) {
        dispatch(basketSlice.actions.basketProductFetchingError(e.message))
    }
}

//Fetch Order

export const fetchOrderPost = (order: any) => async (dispatch: AppDispatch) => {
    console.log(order)
    try {
        dispatch(orderSlice.actions.orderFetchingLoading)
        const response = await $host.post('pizza/order/', order)
        dispatch(orderSlice.actions.orderFetchingCreate(response.data))
    } catch (e: string | undefined | any) {
        dispatch(orderSlice.actions.orderFetchingError(e.message))
    }
}

