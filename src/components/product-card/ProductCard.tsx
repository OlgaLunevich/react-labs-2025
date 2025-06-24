import React, {ChangeEvent} from 'react';
import './productCard.css';
import {Product} from "../../shared/types/product.type";
import {useDispatch, useSelector} from 'react-redux';
import {
    selectBasketMap,
    selectInputMap,
    updateProductCount,
    removeProduct,
    setInputValue
} from "../../redux/slicers/basketSlice";


interface IProductCardProps {
    product: Product;
}

const ProductCard: React.FC<IProductCardProps> = ({product}: IProductCardProps) => {
    const dispatch = useDispatch();
    const basketMap = useSelector(selectBasketMap);
    const inputMap = useSelector(selectInputMap);
    const count = basketMap[product.id] || 0;
    const inputValue = inputMap[product.id] ?? count.toString();

    const handleAddProduct = () => {
        const countToAdd = parseInt(inputValue,10);
        if (!isNaN(countToAdd)) {
            if (countToAdd === 0) {
                dispatch(removeProduct(product.id));
            } else {
                dispatch(updateProductCount({ productId: product.id, count: countToAdd }));
            }
        }
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            dispatch(setInputValue({ productId: product.id, value }));
        }
    };

    return (
        <div className="productCardContainer">
            <div className="productCard">
                <div className="productPhoto">
                    <img src={product.img} alt={product.meal} />
                </div>
                <div className="infoProduct">
                    <div className="cardFirstRow">
                        <div className="productName">{product.meal}</div>
                        <div className="price">{product.price} $</div>
                    </div>
                    <div className="productDescription">{product.instructions}</div>
                    <div className="productCardButtons">
                        <div className="countButton">
                            <input
                                className="desiredCount"
                                type="number"
                                min="0"
                                value={inputValue}
                                onChange={handleInputChange}
                                placeholder="0"
                            />
                        </div>
                        <div className="addProductButton">
                            <button onClick={handleAddProduct}>Add to card</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

