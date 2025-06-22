import {Product} from "../../shared/types/product.type";
import React, {ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    removeProduct,
    selectBasketMap,
    selectInputMap,
    setInputValue,
    updateProductCount
} from "../../redux/slicers/basketSlice";
import './orderProductCard.css';

interface IOrderProductCard {
    product: Product;
}

const OrderProductCard: React.FC<IOrderProductCard> = ({product}: IOrderProductCard) => {
    const dispatch = useDispatch();
    const basketMap = useSelector(selectBasketMap);
    const inputMap = useSelector(selectInputMap);
    const count = basketMap[product.id] || 0;
    const inputValue = inputMap[product.id] ?? count.toString();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        if (/^\d*$/.test(value)) {
            dispatch(setInputValue({ productId: product.id, value }));

            const numericValue = parseInt(value, 10);
            if (!isNaN(numericValue)) {
                dispatch(updateProductCount({ productId: product.id, count: numericValue }));
            }
        }
    };

    const handleRemoveProduct = () => {
        dispatch(removeProduct(product.id));
    };

    return (
        <div className="orderProductCardContainer">
            <div className="orderProductCard">
                <div className="orderProductInfo">
                    <div className="orderProductPhoto">
                        <img src={product.img} alt={product.meal} />
                    </div>
                    <div className="orderProductName">{product.meal}</div>
                </div>
                <div className="OrderProductCount">
                    <div className="price">$ {product.price * count} </div>
                    <div className="orderProductCardButtons">
                        <input
                            className="desiredCount"
                            type="number"
                            min="0"
                            value={inputValue}
                            onChange={handleInputChange}
                        />
                        <button className="deleteFromOrderButton" onClick={handleRemoveProduct}>X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderProductCard;


//Mocks
// const handleUpdateCount = () => {
//     const countToSet = parseInt(inputValue, 10);
//     if (!isNaN(countToSet)) {
//         dispatch(updateProductCount({ productId: product.id, count: countToSet }));
//     }
// };