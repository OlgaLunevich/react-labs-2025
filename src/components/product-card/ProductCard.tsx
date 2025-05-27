import React, {ChangeEvent, useState} from 'react';
import './productCard.css';
import {Product} from "../../shared/types/product.type";

interface IProductCardProps {
    product: Product;
    updateBasketCount: (id: string, value: number) => void;
}

const ProductCard = ({product, updateBasketCount}: IProductCardProps) => {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleAddProduct = () => {
        const countToAdd = parseInt(inputValue,10);
        if (!isNaN(countToAdd) && countToAdd >= 0) {
            setCount(countToAdd);
            updateBasketCount(product.id, countToAdd);
        }
    };

    return (
        <div className='productCardContainer'>
            <div className='productCard'>
                <div className='productPhoto'>
                    <img src={product.img} alt={product.meal} />
                </div>
                <div className='infoProduct'>
                    <div className='cardFirstRow'>
                        <div className='productName'>{product.meal}</div>
                        <div className='price'>
                            {product.price} $
                        </div>
                    </div>
                    <div className='productDescription'>
                        {product.instructions}
                    </div>
                    <div className='productCardButtons'>
                        <div className='countButton'>
                            <input className='desiredCount'
                                   type='number'
                                   min='0'
                                   value={inputValue}
                                   onChange={handleInputChange}
                                   placeholder='0'
                            />
                        </div>
                        <div className='addProductButton'>
                            <button onClick={handleAddProduct}>Add to card</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;