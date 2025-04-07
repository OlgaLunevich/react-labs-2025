import './productCard.css';

function ProductCard ({product}) {
    return (
        <div className='productCardContainer'>
            <div className='productCard'>
                <div className='productPhoto'>
                    <img src={product.src} alt={product.alt}/>
                </div>
                <div className='infoProduct'>
                    <div className='cardFirstRow'>
                        <div className='productName'>{product.name}</div>
                        <div className='price'>
                            {product.currency_symbol} {product.currency} {product.price}
                        </div>
                    </div>
                    <div className='productDescription'>
                        {product.description}
                    </div>
                    <div className='productCardButtons'>
                        <div className='countButton'>
                            <button>0</button>
                        </div>
                        <div className='addProductButton'>
                            <button>Add to card</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;