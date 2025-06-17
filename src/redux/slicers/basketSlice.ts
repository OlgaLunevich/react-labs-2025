import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";

interface BasketState {
    basketMap: Record<string,number>,
    inputMap: Record<string,string>
}

const initialState: BasketState = {
    basketMap: {},
    inputMap: {}
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        setInputValue: (state, action: PayloadAction<{ productId: string; value: string }>) => {
            const { productId, value } = action.payload;
            state.inputMap[productId] = value;
        },

        updateProductCount: (state,action: PayloadAction<{ productId: string; count: number }>) => {
            const { productId, count } = action.payload;

            if (count <= 0) {
                delete state.basketMap[productId];
                delete state.inputMap[productId];
            } else {
                state.basketMap[productId] = count;
                state.inputMap[productId] = count.toString();
            }
        },

        removeProduct: (state, action: PayloadAction<string>) => {
            delete state.basketMap[action.payload];
            delete state.inputMap[action.payload];
        },
        // for future
        // clearBasket: (state) => {
        //     state.basketMap = {};
        //     state.inputMap = {};
        // },
    },
});

export const {
    updateProductCount,
    removeProduct,
    //clearBasket,
    setInputValue
} = basketSlice.actions;

export const selectBasketMap = (state: RootState) => state.basket.basketMap;
export const selectInputMap = (state: RootState) => state.basket.inputMap;
export const selectTotalCount = (state: RootState): number =>
    (Object.values(state.basket.basketMap) as number[]).reduce(
        (acc, count) => acc + count,
        0
    );

export default basketSlice.reducer;