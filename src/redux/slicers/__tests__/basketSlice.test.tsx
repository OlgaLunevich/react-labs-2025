import basketReducer, {
    BasketState,
    selectTotalCount,
    setInputValue,
    updateProductCount,
    removeProduct,
    clearBasket,
} from "../basketSlice";

describe("basketSlice reducer", () => {
    let initialState: BasketState;

    beforeEach(() => {
        initialState = {
            basketMap: {},
            inputMap: {},
        };
    });

    it("Should return the initial state when passed an empty action", () => {
        expect(basketReducer(undefined, { type: "" })).toEqual(initialState);
    });

    it("Should handle setInputValue", () => {
        const action = setInputValue({ productId: "p1", value: "5" });
        const nextState = basketReducer(initialState, action);

        expect(nextState.inputMap["p1"]).toBe("5");
    });

    it("Should handle updateProductCount with count > 0", () => {
        const action = updateProductCount({ productId: "p1", count: 3 });
        const nextState = basketReducer(initialState, action);

        expect(nextState.basketMap["p1"]).toBe(3);
        expect(nextState.inputMap["p1"]).toBe("3");
    });

    it("Should handle updateProductCount with count <= 0 (removes product)", () => {
        const stateWithProduct = {
            basketMap: { p1: 2 },
            inputMap: { p1: "2" },
        };

        const action = updateProductCount({ productId: "p1", count: 0 });
        const nextState = basketReducer(stateWithProduct, action);

        expect(nextState.basketMap["p1"]).toBeUndefined();
        expect(nextState.inputMap["p1"]).toBeUndefined();
    });

    it("Should handle removeProduct", () => {
        const stateWithProduct = {
            basketMap: { p1: 2 },
            inputMap: { p1: "2" },
        };

        const action = removeProduct("p1");
        const nextState = basketReducer(stateWithProduct, action);

        expect(nextState.basketMap["p1"]).toBeUndefined();
        expect(nextState.inputMap["p1"]).toBeUndefined();
    });

    it("Should handle clearBasket", () => {
        const stateWithProducts = {
            basketMap: { p1: 2, p2: 1 },
            inputMap: { p1: "2", p2: "1" },
        };

        const action = clearBasket();
        const nextState = basketReducer(stateWithProducts, action);

        expect(nextState.basketMap).toEqual({});
        expect(nextState.inputMap).toEqual({});
    });

    it("Should return 0 selectTotalCount if basketMap empty", () => {
        expect(selectTotalCount({ basket: { basketMap: {}, inputMap: {} } } as any)).toBe(0);
    });
});