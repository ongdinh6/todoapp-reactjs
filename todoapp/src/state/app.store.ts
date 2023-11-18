import { configureStore } from "@reduxjs/toolkit"
import loginReducer from "../loginPage/state/login.reducer";

const store = configureStore({
    reducer: {
        auth: loginReducer
    },
})

export { store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
