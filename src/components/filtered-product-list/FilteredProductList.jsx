import React from 'react';
import ProductCard from "../product-card/ProductCard.jsx";
import filterByField from "../../helpers/filter-by-field-function/FilterByField.js";



const FilteredProductList = ({ meals, activeCategory, visibleCount, updateBasketCount }) => {
    const filteredMeals = filterByField(meals, 'category', activeCategory);
    return(
        <>
            <div className='productsGridContainer'>
                {filteredMeals.slice(0, visibleCount).map((meal) => (
                    <ProductCard
                        key={meal.id}
                        product={{
                            id: meal.id,
                            name: meal.meal,
                            price: meal.price,
                            src: meal.img,
                            alt: meal.meal,
                            description: meal.instructions || "The instruction is not available",
                            category: meal.category,
                        }}
                        updateBasketCount={updateBasketCount}
                    />
                ))}
            </div>
        </>
    );
};

export default FilteredProductList;