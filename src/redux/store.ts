import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./slicers/basketSlice";
import authReducer from "./slicers/authSlice";

const store = configureStore({
    reducer: {
        basket: basketReducer,
        auth: authReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;