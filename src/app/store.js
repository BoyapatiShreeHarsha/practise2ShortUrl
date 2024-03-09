import { configureStore } from "@reduxjs/toolkit";
import urlReducer from './urlSlice'
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";


const persistConfig ={
    key:"root",
    version:1,
    storage,
};

const persistedReducer = persistReducer(persistConfig,urlReducer);

export const store = configureStore({
    reducer: persistedReducer
});

