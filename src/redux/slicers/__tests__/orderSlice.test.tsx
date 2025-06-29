import orderReducer, { placeOrder, OrderState, Order } from "../orderSlice";

describe("orderSlice", () => {
    let initialState: OrderState;

    beforeEach(() => {
        initialState = {
            orders: [],
        };
    });

    it("Should return initial state by default", () => {
        expect(orderReducer(undefined, { type: "" })).toEqual({ orders: [] });
    });

    it("Should add order correctly", () => {
        const order: Order = {
            userId: "user-1",
            products: [
                { id: "p1", count: 2 },
                { id: "p2", count: 1 },
            ],
            address: {
                street: "Main",
                house: "12B",
            },
            total: 100,
            date: new Date().toISOString(),
        };

        const nextState = orderReducer(initialState, placeOrder(order));

        expect(nextState.orders).toHaveLength(1);
        expect(nextState.orders[0]).toEqual(order);
    });

    it("Should add few orders", () => {
        const order1: Order = {
            userId: "user-1",
            products: [{ id: "p1", count: 2 }],
            address: { street: "Main", house: "1" },
            total: 50,
            date: new Date().toISOString(),
        };

        const order2: Order = {
            userId: "user-2",
            products: [{ id: "p2", count: 3 }],
            address: { street: "Second", house: "22A" },
            total: 75,
            date: new Date().toISOString(),
        };

        let state = orderReducer(initialState, placeOrder(order1));
        state = orderReducer(state, placeOrder(order2));

        expect(state.orders).toHaveLength(2);
        expect(state.orders[0]).toEqual(order1);
        expect(state.orders[1]).toEqual(order2);
    });
});