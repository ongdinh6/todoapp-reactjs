import { combineReducers, configureStore } from "@reduxjs/toolkit"
import loginReducer from "../loginPage/state/login.reducer";
import storage from "redux-persist/lib/storage";
import storageSession from "reduxjs-toolkit-persist/lib/storage/session";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import todomanagementReducer from "../todoManagementPage/state/todomanagement.reducer";

const rootPersistConfig = {
    key: "root",
    storage: storage,
};

const userPersistConfig = {
    key: "auth",
    storage: storageSession,
};

const rootReducer = combineReducers({
    auth: persistReducer(userPersistConfig, loginReducer),
    todoManage: todomanagementReducer
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);


const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: [thunk]
})

export { store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
