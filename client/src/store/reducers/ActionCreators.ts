import { productSlice } from "./ProductSlice";
import { userSlice } from "./UserSlice";
import { Product } from "../../models/Product";
import { AppDispatch } from "../store";
import { $host, $authHost } from "../../http";
import jwt_decode from 'jwt-decode'
import { User } from "../../models/User";
import { typeProductSlice } from "./TypeProductSlice";
import { TypeProduct } from "../../models/TypeProduct";

//Fetch User

export const fetchUserRegistration = (objUser: User) => async (dispatch: AppDispatch) => {
    try {
        const { data } = await $host.post<User>('pizza/user/registration', objUser)
        localStorage.setItem('token', data.token)
        const user: any = jwt_decode(data.token)
        dispatch(userSlice.actions.userFetchingRegistration({ is_admin: user.admin, user: user, is_login: true }))
    } catch (e: any) {
        dispatch(userSlice.actions.userFetchingError(e.message))
    }
}

export const fetchUserLogin = (objUser: User) => async (dispatch: AppDispatch) => {
    try {
        const { data } = await $host.post('pizza/user/login', objUser)
        localStorage.setItem('token', data.token)
        const user: any = jwt_decode(data.token)
        dispatch(userSlice.actions.userFetchingLogin({ is_admin: user.admin, user: user, is_login: true }))
    } catch (e: any) {
        dispatch(userSlice.actions.userFetchingError(e.message))
    }
}

export const fetchUserAuthorization = () => async (dispatch: AppDispatch) => {
    try {
        const { data } = await $authHost.get('pizza/user/authorization')
        const user: any = jwt_decode(data.token)
        dispatch(userSlice.actions.userFetchingAuthorization({ is_admin: user.admin, user: user, is_login: true }))
    } catch (e: any) {
        dispatch(userSlice.actions.userFetchingAuthorization({ is_admin: false, user: {}, is_login: false }))
    }
}

export const fetchUserExit = () => async (dispatch: AppDispatch) => {
    localStorage.removeItem('token')
    dispatch(userSlice.actions.userFetchingLogin({ is_admin: false, user: {}, is_login: false }))
}

// Fetch Product

export const fetchProducts = (data: any = {}) => async (dispatch: AppDispatch) => {
    try {
        dispatch(productSlice.actions.productFetching)
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
        const response = await $authHost.post('pizza/product', objProduct)
        dispatch(productSlice.actions.productCreateFetching(response.data))
    } catch (e: string | undefined | any) {
        dispatch(productSlice.actions.productCreateFetchingError(e.message))
    }
}

export const fetchDeleteProduct = (id: any) => async (dispatch: AppDispatch) => {
    try {
        const response = await $authHost.delete(`pizza/product/${id}`)
        dispatch(productSlice.actions.productDeleteFetching(response.data))
    } catch (e: string | undefined | any) {
        dispatch(productSlice.actions.productCreateFetchingError(e.message))
    }
}

//Fetch typeProduct

export const fetchTypesProduct = () => async (dispatch: AppDispatch) => {
    try {
        const response = await $host.get<TypeProduct[]>('pizza/typeProduct')
        dispatch(typeProductSlice.actions.typeProductFetchingGet(response.data))
    } catch (e: string | undefined | any) {
        dispatch(typeProductSlice.actions.typeProductFetchingError(e.message))
    }
}

export const fetchTypeProduct = (type: any) => async (dispatch: AppDispatch) => {
    try {
        const response = await $authHost.post('pizza/typeProduct', { type })
        dispatch(typeProductSlice.actions.typeProductFetchingPost(response.data))
    } catch (e: string | undefined | any) {
        dispatch(typeProductSlice.actions.typeProductFetchingError(e.message))
    }
}