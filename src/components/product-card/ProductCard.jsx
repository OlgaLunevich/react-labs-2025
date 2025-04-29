import React, {Component} from 'react';
import './productCard.css';


class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            inputValue: '',
        };
    }

    handleInputChange = (e) => {
        this.setState({ inputValue: e.target.value });

    }

    handleAddProduct = () => {
        const { inputValue } = this.state;
        const countToAdd = parseInt(inputValue, 10);

        if (!isNaN(countToAdd) && countToAdd >= 0) {
            this.setState({ count: countToAdd });
            this.props.updateBasketCount(this.props.product.id, countToAdd);
        }
    };

    render() {
        const { product } = this.props;
        const { inputValue } = this.state;

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
                                       onChange={this.handleInputChange}
                                       placeholder='0'
                                />
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