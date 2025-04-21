import React, {Component} from 'react';
import './productCard.css';


class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    handleAddProduct = () => {
        this.setState((prevState) => ({
                count: prevState.count + 1
        }));
        this.props.increaseBasketCount();
    };

    render() {
        const { product } = this.props;
        const { count } = this.state;

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
                                <button disabled>{count}</button>
                            </div>
                            <div className='addProductButton'>
                                <button onClick={this.handleAddProduct}>Add to card</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductCard;