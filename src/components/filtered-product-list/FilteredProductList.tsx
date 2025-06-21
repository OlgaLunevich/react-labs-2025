import React from 'react';
import ProductCard from "../product-card/ProductCard.jsx";
import {Product} from "../../shared/types/product.type.js";


interface IFilteredProductListProps {
    meals: Product[],
    visibleCount: number,
}

const FilteredProductList = ({ meals, visibleCount}: IFilteredProductListProps) => {
    return (
        <>
            <div className='productsGridContainer'>
                {meals.slice(0, visibleCount).map((meal) => (
                    <ProductCard
                        key={meal.id}
                        product={{
                            ...meal,
                            meal: meal.meal,
                            img: meal.img,
                            price: meal.price,
                            instructions: meal.instructions || "The instruction is not available",
                        }}
                    />
                ))}
            </div>
        </>
    );
};

export default FilteredProductList;




