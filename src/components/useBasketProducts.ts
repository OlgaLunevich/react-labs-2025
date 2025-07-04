import { useSelector } from 'react-redux';
import { selectBasketMap } from '../redux/slicers/basketSlice';
import useFetch from '../components/custom-hooks';
import { Product } from '../shared/types/product.type';

export const useBasketProducts = () => {
    const basketMap = useSelector(selectBasketMap);
    const productIds = Object.keys(basketMap);
    const trigger = true;

    const apiMealsUrl = import.meta.env.VITE_API_MEALS_URL;

    const { data, loading, error } = useFetch<Product>({
        url: apiMealsUrl,
        trigger,
    });

    const filteredProducts = data.filter(product =>
        productIds.includes(String(product.id))
    );
    console.log('basketMap', basketMap);
    console.log('all data', data.length, data);
    console.log('filteredProducts', filteredProducts);

    return { products: filteredProducts, basketMap, loading, error };
};

export default useBasketProducts;