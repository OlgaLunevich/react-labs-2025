import React, {useState} from 'react';
import './productCard.css';


const ProductCard = ({product, updateBasketCount}) => {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
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
                    <img src={product.src} alt={product.name} />
                </div>
                <div className='infoProduct'>
                    <div className='cardFirstRow'>
                        <div className='productName'>{product.name}</div>
                        <div className='price'>
                            {product.price} $
                        </div>
                    </div>
                    <div className='productDescription'>
                        {product.description}
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