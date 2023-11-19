import { RootState } from "../../state/app.store";

export const todoLoadingSelector = (state: RootState) => state.todoManage.loading;
export const todoListSelector = (state: RootState) => state.todoManage.data;
export const todoErrorSelector = (state: RootState) => state.todoManage.error;
