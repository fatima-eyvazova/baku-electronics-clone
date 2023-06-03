import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ProductCard from '../../../components/productCard/ProductCard';
import CustomHead from "../../../components/customHead/customHead";
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
            <CustomHead title={`Baku Electronics Catalog ${query?.catalogProductType}`} />
            <div className="catalog-section">
                <div className="catalog-right">
                    <div className="top-catalog ">
                        <div className="catalogs-items">
                            <div className="catalogs-elements">
                                <span className="catagory-span">Bütün kateqoriyalar</span>
                                <span className="icon-span"><HiOutlineArrowNarrowRight /></span>
                                <span className="catagory-span">{query?.catalogProductType}</span>
                            </div>

                            <h1 className="title-catalog">{products?.subCategoryTitle}</h1>
                        </div>
                        <figure className="image-teg">
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
                    <ul className='product-card-item'>
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