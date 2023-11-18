import { RootState } from "../../state/app.store";

// Export selectors from login state
export const selectLoading = (state: RootState) => state.auth.loading;
export const selectPayload = (state: RootState) => state.auth.payload;
export const selectError = (state: RootState) => state.auth.error;
