import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ProductCard from '../../../components/productCard/ProductCard';
import dataJson from "../../../data/data.json";

const CatalogProductTypePage = () => {
    const router = useRouter();
    const { query } = router;
    const [products, setProducts] = useState([]);

    console.log(query);

    useEffect(() => {
        const selected = dataJson?.products?.[query.catalogProductType];
        const categoryProducts = [];
        if (selected) {
            Object.values(selected).forEach(obj => categoryProducts.push(...obj.items));
            setProducts(categoryProducts);
        }
    }, [query.catalogProducts]);



    return (
        <ul className='product-wrap'>
            {products.map(item => (
                <ProductCard key={item?.id} item={item} isViewed />
            ))}
        </ul>
    );
}

export default CatalogProductTypePage;