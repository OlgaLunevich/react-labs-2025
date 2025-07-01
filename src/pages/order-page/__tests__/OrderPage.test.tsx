import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import OrderPage from "../OrderPage";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import orderReducer, { placeOrder } from "../../../redux/slicers/orderSlice";
import basketReducer from "../../../redux/slicers/basketSlice";
import authReducer from "../../../redux/slicers/authSlice";
import { RootState } from "../../../redux/store";

const mockUseBasketProducts = jest.fn();
jest.mock("../../../components/useBasketProducts", () => ({
    useBasketProducts: () => mockUseBasketProducts(),
}));

const renderWithStore = (preloadedState?: Partial<RootState>) => {
    const store = configureStore({
        reducer: {
            orders: orderReducer,
            basket: basketReducer,
            auth: authReducer,
        },
        preloadedState: preloadedState as RootState,
    });

    jest.spyOn(store, "dispatch");

    const utils = render(
        <Provider store={store}>
            <OrderPage />
        </Provider>
    );

    return { store, ...utils };
};

describe("OrderPage: unit tests", () => {
    beforeEach(() => {
        jest.clearAllMocks();
        cleanup();
    });

    it("Should show loading for order", () => {
        mockUseBasketProducts.mockReturnValue({
            products: [],
            basketMap: {},
            loading: true,
            error: null,
        });

        renderWithStore();
        expect(screen.getByText(/Loading your order/i)).toBeInTheDocument();
    });

    it("Should show error, when error for loading occurs", () => {
        mockUseBasketProducts.mockReturnValue({
            products: [],
            basketMap: {},
            loading: false,
            error: "Failed to load",
        });

        renderWithStore();
        expect(screen.getByText(/Error: Failed to load/i)).toBeInTheDocument();
    });

    it("Should render page and show selected product", () => {
        mockUseBasketProducts.mockReturnValue({
            products: [{ id: "1", meal: "Pizza", price: 10 }],
            basketMap: { "1": 2 },
            loading: false,
            error: null,
        });

        renderWithStore({
            auth: { user: "test-user", isAuthenticated: true, loading: false },
            basket: { basketMap: { "1": 2 }, inputMap: {} },
            orders: { orders: [] },
        });

        expect(screen.getByText(/Finish your order/i)).toBeInTheDocument();
        expect(screen.getByText(/Pizza/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Street/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/House/i)).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /Order/i })).toBeInTheDocument();
    });

    it("Should update product amount when input is changed", () => {
        mockUseBasketProducts.mockReturnValue({
            products: [{ id: "1", meal: "Pizza", price: 10 }],
            basketMap: { "1": 2 },
            loading: false,
            error: null,
        });

        const { store } = renderWithStore({
            auth: { user: "test-user", isAuthenticated: true, loading: false },
            basket: { basketMap: { "1": 2 }, inputMap: {} },
            orders: { orders: [] },
        });

        const productName = screen.getByText("Pizza");
        const productCard = productName.closest(".orderProductCard");
        const input = productCard?.querySelector('input.desiredCount') as HTMLInputElement;

        expect(input).toBeTruthy();
        expect(input.value).toBe("2");

        fireEvent.change(input, { target: { value: "5" } });
        const calls = (store.dispatch as jest.Mock).mock.calls;
        expect(calls.some(call => call[0].type === "basket/setInputValue")).toBe(true);
        expect(calls.some(call => call[0].type === "basket/updateProductCount")).toBe(true);
    });

    it("Should delete product after delete button clicked", () => {
        mockUseBasketProducts.mockReturnValue({
            products: [{ id: "1", meal: "Pizza", price: 10 }],
            basketMap: { "1": 2 },
            loading: false,
            error: null,
        });

        const { store } = renderWithStore({
            auth: { user: "test-user", isAuthenticated: true, loading: false },
            basket: { basketMap: { "1": 2 }, inputMap: {} },
            orders: { orders: [] },
        });

        fireEvent.click(screen.getByRole("button", { name: /X/i }));

        const calls = (store.dispatch as jest.Mock).mock.calls;
        expect(calls.some(call => call[0].type === "basket/removeProduct")).toBe(true);
    });

    it("Should display error when the address isn't inputted", () => {
        mockUseBasketProducts.mockReturnValue({
            products: [{ id: "1", meal: "Pizza", price: 10 }],
            basketMap: { "1": 2 },
            loading: false,
            error: null,
        });

        renderWithStore({
            auth: { user: "test-user", isAuthenticated: true, loading: false },
            basket: { basketMap: { "1": 2 }, inputMap: {} },
            orders: { orders: [] },
        });

        fireEvent.click(screen.getByRole("button", { name: /Order/i }));
        expect(screen.getByText(/Both fields must be inputted/i)).toBeInTheDocument();
    });

    it("Should process placeOrder and clearBasket when input is correct", () => {
        mockUseBasketProducts.mockReturnValue({
            products: [{ id: "1", meal: "Pizza", price: 10 }],
            basketMap: { "1": 2 },
            loading: false,
            error: null,
        });

        const { store } = renderWithStore({
            auth: { user: "test-user", isAuthenticated: true, loading: false },
            basket: { basketMap: { "1": 2 }, inputMap: {} },
            orders: { orders: [] },
        });

        fireEvent.change(screen.getByLabelText(/Street/i), { target: { value: "Main" } });
        fireEvent.change(screen.getByLabelText(/House/i), { target: { value: "1A" } });
        fireEvent.click(screen.getByRole("button", { name: /Order/i }));

        const calls = (store.dispatch as jest.Mock).mock.calls;

        expect(calls.some(call => call[0].type === placeOrder.type)).toBe(true);
        expect(calls.some(call => call[0].type === "basket/clearBasket")).toBe(true);

        expect(screen.getByText(/Order confirmed!/i)).toBeInTheDocument();
        expect(screen.getByText(/Delivery address/i)).toHaveTextContent(/Main, 1A/i);
    });

    it("Should not process placeOrder and clearBasket when input is incorrect", () => {
        mockUseBasketProducts.mockReturnValue({
            products: [{ id: "1", meal: "Pizza", price: 10 }],
            basketMap: { "1": 2 },
            loading: false,
            error: null,
        });

        const { store } = renderWithStore({
            auth: { user: "test-user", isAuthenticated: true, loading: false },
            basket: { basketMap: { "1": 2 }, inputMap: {} },
            orders: { orders: [] },
        });

        fireEvent.change(screen.getByLabelText(/Street/i), { target: { value: "" } });
        fireEvent.change(screen.getByLabelText(/House/i), { target: { value: "" } });
        fireEvent.click(screen.getByRole("button", { name: /Order/i }));

        const calls = (store.dispatch as jest.Mock).mock.calls;
        expect(calls.some(call => call[0].type === placeOrder.type)).toBe(false);
        expect(calls.some(call => call[0].type === "basket/clearBasket")).toBe(false);
        expect(screen.getByText(/Both fields must be inputted/i)).toBeInTheDocument();
        expect(screen.queryByText(/Order confirmed!/i)).not.toBeInTheDocument();
    });

    it("Should close order-confirmation modal window after order was confirmed", () => {
        mockUseBasketProducts.mockReturnValue({
            products: [{ id: "1", meal: "Pizza", price: 10 }],
            basketMap: { "1": 2 },
            loading: false,
            error: null,
        });

        const { store } = renderWithStore({
            auth: { user: "test-user", isAuthenticated: true, loading: false },
            basket: { basketMap: { "1": 2 }, inputMap: {} },
            orders: { orders: [] },
        });

        fireEvent.change(screen.getByLabelText(/Street/i), { target: { value: "Main" } });
        fireEvent.change(screen.getByLabelText(/House/i), { target: { value: "1A" } });
        fireEvent.click(screen.getByRole("button", { name: /Order/i }));

        expect(screen.getByText(/Order confirmed!/i)).toBeInTheDocument();
        fireEvent.click(screen.getByRole("button", { name: /OK/i }));
        expect(screen.queryByText(/Order confirmed!/i)).not.toBeInTheDocument();
    });
});


describe("OrderPage: snapshot tests", () => {
    beforeEach(() => {
        jest.clearAllMocks();
        cleanup();
    });

    it("Should make snapshot: loading state", () => {
        mockUseBasketProducts.mockReturnValue({
            products: [],
            basketMap: {},
            loading: true,
            error: null,
        });

        const { asFragment } = renderWithStore();
        expect(asFragment()).toMatchSnapshot();
    });

    it("Should make snapshot: error state", () => {
        mockUseBasketProducts.mockReturnValue({
            products: [],
            basketMap: {},
            loading: false,
            error: "Failed to load",
        });

        const { asFragment } = renderWithStore();
        expect(asFragment()).toMatchSnapshot();
    });

    it("Should make snapshot: with products and filled state", () => {
        mockUseBasketProducts.mockReturnValue({
            products: [{ id: "1", meal: "Pizza", price: 10 }],
            basketMap: { "1": 2 },
            loading: false,
            error: null,
        });

        const { asFragment } = renderWithStore({
            auth: { user: "test-user", isAuthenticated: true, loading: false },
            basket: { basketMap: { "1": 2 }, inputMap: {} },
            orders: { orders: [] },
        });

        expect(asFragment()).toMatchSnapshot();
    });
});

