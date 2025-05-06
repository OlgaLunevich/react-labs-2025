import React from 'react';
import ProductCard from "../product-card/ProductCard.jsx";

const FilteredProductList = ({ meals, visibleCount, updateBasketCount }) => {
    return (
        <>
            <div className='productsGridContainer'>
                {meals.slice(0, visibleCount).map((meal) => (
                    <ProductCard
                        key={meal.id}
                        product={{
                            ...meal,
                            name: meal.meal,
                            src: meal.img,
                            price: meal.price,
                            description: meal.instructions || "The instruction is not available",
                        }}
                        updateBasketCount={updateBasketCount}
                    />
                ))}
            </div>
        </>
    );
};

export default FilteredProductList;