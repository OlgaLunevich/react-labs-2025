import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Order {
    userId: string | null;
    products: { id: string; count: number }[];
    address: {
        street: string;
        house: string;
    };
    total: number;
    date: string;
}

interface OrderState {
    orders: Order[];
}

const initialState: OrderState = {
    orders: [],
};

const orderSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        placeOrder(state, action: PayloadAction<Order>) {
            state.orders.push(action.payload);
        },
    },
});

export const { placeOrder } = orderSlice.actions;
export default orderSlice.reducer;
