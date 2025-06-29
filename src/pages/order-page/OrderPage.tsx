import React, {useState} from "react";
import './orderPage.css';
import {useBasketProducts} from "../../components/useBasketProducts";
import OrderProductCard from "../../components/order-product-card/OrderProductCard";
import { useSelector } from "react-redux";
import {RootState} from "../../redux/store";
import { useDispatch } from "react-redux";
import {clearBasket} from "../../redux/slicers/basketSlice";
import { placeOrder } from "../../redux/slicers/orderSlice";


const OrderPage = () => {
    const { products, basketMap, loading, error } = useBasketProducts();
    const userId = useSelector((state: RootState) => state.auth.user);

    const [street, setStreet] = useState<string>("");
    const [house, setHouse] = useState<string>("");
    const [formError, setFormError] = useState<string>("");
    const [orderConfirmed, setOrderConfirmed] = useState<boolean>(false);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [emptyCartModal, setEmptyCartModal] = useState<boolean>(false);
    const dispatch = useDispatch();


    const handleOrderClick = () => {
        if (!street.trim() || !house.trim()) {
            setFormError("Both fields must be inputted (Street and House)");
            return;
        }
        if (products.length === 0) {
            setEmptyCartModal(true);
            return;
        }
        setFormError("");

        const total = products.reduce((sum, product) => {
            const count = basketMap[product.id] || 0;
            return sum + product.price * count;
        }, 0);

        const order = {
            userId: userId || "Anonymous",
            products: products.map(p => ({
                id: p.id,
                count: basketMap[p.id] || 0,
            })),
            address: {
                street,
                house,
            },
            total,
            date: new Date().toISOString(),
        };

        dispatch(placeOrder(order));
        dispatch(clearBasket());

        setTotalPrice(total);
        setOrderConfirmed(true);
    };

    const closeModal = () => {
        setOrderConfirmed(false);
        setStreet("");
        setHouse("");
    };

    const closeEmptyCartModal = () => {
        setEmptyCartModal(false);
    };

    return (
        <>
            <main>
                <div className='mainContainer'>
                    <div className='browseMenuTitle'>
                        Finish your order
                    </div>
                    <div className='userOrderCard'>
                        {loading && <p>Loading your order...</p>}
                        {error && <p>Error: {error}</p>}
                        {!loading && products.length === 0 && <p>Your cart is empty.</p>}
                        <div className='orderItems'>
                            {products.map(product => (
                                <OrderProductCard key={product.id} product={product}/>
                            ))}
                        </div>
                    </div>
                    <div className='deliveryData'>
                        <label>Street
                            <input type="text" value={street} onChange={e => setStreet(e.target.value)}/>
                        </label>
                        <label>House
                            <input type="text" value={house} onChange={e => setHouse(e.target.value)}/>
                        </label>
                    </div>
                    {formError && <p className="formErrorMessage">{formError}</p>}
                    <button className="orderButton" onClick={handleOrderClick}>Order</button>
                </div>
            </main>

            {orderConfirmed && (
                <div className="modalWindow">
                    <div className="modalContent">
                        <h3>Order confirmed!</h3>
                        <p>
                            Full price {totalPrice}$ <br/>
                            Delivery address: {street}, {house}.
                        </p>
                        <button className="modalButton" onClick={closeModal}>OK</button>
                    </div>
                </div>
            )}

            {emptyCartModal && (
                <div className="modalWindow">
                    <div className="modalContent">
                        <h3>The basket is empty</h3>
                        <p>Please, add products to your order.</p>
                        <button className="modalButton" onClick={closeEmptyCartModal}>OK</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default OrderPage;