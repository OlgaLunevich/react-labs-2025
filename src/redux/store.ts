import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./slicers/basketSlice";
import authReducer from "./slicers/authSlice";
import orderReducer from "./slicers/orderSlice";




// for saving a data in basket when the page was reloaded

const loadBasketState = () => {
    try {
        const serializedState = localStorage.getItem("basketState");
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.error("Error when read the data from the localStorage:", err);
        return undefined;
    }
};

const preloadedBasket = loadBasketState();

const store = configureStore({
    reducer: {
        basket: basketReducer,
        auth: authReducer,
        orders: orderReducer,
    },
    preloadedState: {
        basket: preloadedBasket,
    },
});

store.subscribe(() => {
    try {
        const state = store.getState().basket;
        localStorage.setItem("basketState", JSON.stringify(state));
    } catch (err) {
        console.error("Error for saving basket to the localStorage:", err);
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;




// const store = configureStore({
//     reducer: {
//         basket: basketReducer,
//         auth: authReducer,
//         orders: orderReducer,
//     },
// });
//
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
//
// export default store;