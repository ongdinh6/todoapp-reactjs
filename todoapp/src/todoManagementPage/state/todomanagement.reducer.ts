import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TodoState } from "./todomanagement.state";

const initialState: TodoState = {
    loading: false,
    data: [],
    error: null
};

export const todoManagementSlice = createSlice({
    name: "todoManage",
    initialState,
    reducers: {
        todoListLoading: (state) => ({ 
            ...state,
            loading: true
        }),
        todoListSuccess: (state, action: PayloadAction<any>) => ({
            ...state,
            loading: false,
            data: action.payload
        }),
        todoListFail: (state, action: PayloadAction<any>) => ({
            ...state,
            loading: false,
            error: {
                errorMessage: "Load Todo List Failed!"
            }
        }),
        todoCreateLoading: (state) => ({
            ...state,
            loading: true
        }),
        todoCreateSuccess: (state, action: PayloadAction<any>) => ({
            ...state,
            loading: false,
            data: action.payload
        }),
        todoCreateFail: (state, action: PayloadAction<any>) => ({
            ...state,
            loading: false,
            error: action.payload
        }),
    }
});

// Export actions from Redux Toolkit
export const {todoListLoading, todoListSuccess, todoListFail, todoCreateLoading, todoCreateSuccess, todoCreateFail} = todoManagementSlice.actions;

export default todoManagementSlice.reducer;
