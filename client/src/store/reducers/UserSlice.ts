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
        //Error 
        userFetchingError(state, action) {
            state.error = action.payload
        },

        //Registration,Login and Authorization
        userFetchingRegistration(state, action) {
            state.error = ''
            state = { ...action.payload }
        },
        userFetchingLogin(state, action) {
            state.error = ''
            state.is_login = action.payload.is_login
            state.is_admin = action.payload.is_admin
            state.user = action.payload.user
        },
        userFetchingAuthorization(state, action) {
            state.error = ''
            state.is_login = action.payload.is_login
            state.is_admin = action.payload.is_admin
            state.user = action.payload.user
        },
        //Exit
        userFetchingExit(state, action) {
            state.error = ''
            state.is_login = action.payload.is_login
            state.is_admin = action.payload.is_admin
            state.user = action.payload.user
        }
    }
})

export default userSlice.reducer