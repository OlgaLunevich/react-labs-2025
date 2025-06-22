import { useSelector } from 'react-redux';
import { selectBasketMap } from '../redux/slicers/basketSlice';
import useFetch from '../components/custom-hooks';
import { Product } from '../shared/types/product.type';

export const useBasketProducts = () => {
    const basketMap = useSelector(selectBasketMap);
    const productIds = Object.keys(basketMap);
    const trigger = true;

    const { data, loading, error } = useFetch<Product>({
        url: `https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals`,
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