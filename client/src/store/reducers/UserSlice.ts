import { createSlice } from "@reduxjs/toolkit"

export interface UserState {
    is_admin: boolean,
    is_login: boolean,
    error: string | null,
    user: Object
}

const initialState: UserState = {
    user: {},
    is_admin: false,
    is_login: false,
    error: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userFetchingRegistration(state, action) {
            state = { ...action.payload }
        },

        userFetchingLogin(state, action) {
            state.is_login = action.payload.is_login
            state.is_admin = action.payload.is_admin
            state.user = action.payload.user
        },

        userFetchingAuthorization(state, action) {
            state.is_login = action.payload.is_login
            state.is_admin = action.payload.is_admin
            state.user = action.payload.user
        },

        userFetchingExit(state, action) {
            state.is_login = action.payload.is_login
            state.is_admin = action.payload.is_admin
            state.user = action.payload.user
        },

        userFetchingError(state, action) {
            state.error = action.payload
        }
    }
})

export default userSlice.reducer