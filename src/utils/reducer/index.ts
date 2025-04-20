import { combineReducers, Reducer } from "redux";
import userReducer from "./userInfo";
import { persistReducer } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";

const persistConfig:any = {
    key: "root",
    storage,
};

const rootReducer:any = combineReducers({ userReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false, 
      }),
});

export default store;

export type rootState = ReturnType<typeof rootReducer>

