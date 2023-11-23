import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoginState } from "./login.state";

const initialState: LoginState = {
    loading: false,
    payload: null,
    error: null
};

export const loginSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginLoading: (state) => ({
            ...state,
            loading: true
        }),
        loginSuccess: (state, action: PayloadAction<any>) => ({
            ...state, 
            loading: false,
            payload: action.payload,
            error: null
        }),
        loginFail: (state, action: PayloadAction<any>) => ({
            ...state,
            loading: false,
            error: action.payload
        })
    },
});


// Export actions using slice in @reduxjs/toolkit
export const { loginLoading, loginSuccess, loginFail } = loginSlice.actions;

export default loginSlice.reducer;