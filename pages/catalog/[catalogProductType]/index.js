import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ProductCard from '../../../components/productCard/ProductCard';
import dataJson from "../../../data/data.json";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Image from 'next/image';

const CatalogProductTypePage = () => {
    const router = useRouter();
    const { query } = router;
    const [products, setProducts] = useState([]);
    const [selected, setSelected] = useState({});

    useEffect(() => {
        const selected = dataJson?.products?.[query.catalogProductType];
        if (selected) {
            setSelected(selected);
            const categoryProducts = [];
            Object.values(selected).forEach((obj) => {
                categoryProducts.push(...obj.items);
            });
            setProducts(categoryProducts);
        }
    }, [query.catalogProductType]);

    return (
        <>
            <div className="single">
                <div className="right">
                    <div className="top-share ">
                        <div className="top-items">
                            <div className="catagory-elements">
                                <span className="catagory">Bütün kateqoriyalar</span>
                                <span className="icon"><HiOutlineArrowNarrowRight /></span>
                                <span className="catagory">{query.catalogProductType}</span>
                            </div>

                            <h1 className="title-category">{products?.subCategoryTitle}</h1>
                        </div>
                        <figure className="image-catalog">
                            <span className="image-ctlg">
                                <Image
                                    src={Object?.values(selected)?.[0]?.subCategoryImage || ''}
                                    width={288}
                                    height={149}
                                    alt="notebook"
                                />
                            </span>

                        </figure>
                    </div>
                    <ul className='product-wrap'>
                        {products?.map(item => (
                            <ProductCard key={item?.id} item={item} isViewed />

                        ))}
                    </ul>
                </div>
            </div>
        </>

    );
}

export default CatalogProductTypePage;