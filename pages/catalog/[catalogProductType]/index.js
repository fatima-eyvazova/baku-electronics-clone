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
    const [brand, setBrand] = useState('');
    const [color, setColor] = useState('');
    const [pageNumber, setPageNumber] = useState(1);
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

    let pageNumberArr;
    const limitOfThingsOnPage = 2;

    const handlePrev = () => {
        setPageNumber(pageNumber - 1);
    };

    const handleNext = () => {
        setPageNumber(pageNumber + 1);
    };

    return (
        <>
            <div className="single page-wrapper">
                <aside className="sidebar">
                    <form>
                        {/* <div className="sidebar-block">
                            <div className="sidebar-title"> Brend</div>
                            <div className="sidebar-bottom">
                                {brands.map((item) => (
                                    <div className="form-row">
                                        <input type="checkbox" id={item} name={item} checked={brand === item} onChange={(e) => handleCheckbox(e)} />
                                        <label for={item} >{item}</label>
                                    </div>
                                ))}
                            </div>
                        </div> */}
                        {/* <div className="sidebar-block">
                            <div className="sidebar-title"> Rəng</div>
                            <div className="sidebar-bottom">
                                <div className="form-row">
                                    <input type="checkbox" id={products?.colorOne} name={products?.colorOne} checked={color === `${products?.colorOne}`} onChange={(e) => handleCheckboxs(e)} />
                                    <label for={products?.colorOne} >{products?.colorOne}</label>
                                </div>
                                <div className="form-row">
                                    <input type="checkbox" id={products?.colorTwo} name={products?.colorTwo} checked={color === `${products?.colorTwo}`} onChange={(e) => handleCheckboxs(e)} />
                                    <label for={products?.colorTwo}>{products?.colorTwo}</label>
                                </div>
                                <div className="form-row">
                                    <input type="checkbox" id={products?.colorThree} name={products?.colorThree} checked={color === `${products?.colorThree}`} onChange={(e) => handleCheckboxs(e)} />
                                    <label for={products?.colorThree}>{products?.colorThree}</label>
                                </div>
                                <div className="form-row">
                                    <input type="checkbox" id={products?.colorFour} name={products?.colorFour} checked={color === `${products?.colorFour}`} onChange={(e) => handleCheckboxs(e)} />
                                    <label for={products?.colorFour}>{products?.colorFour}</label>
                                </div>
                                <div className="form-row">
                                    <input type="checkbox" id={products?.colorFive} name={products?.colorFive} checked={color === `${products?.colorFive}`} onChange={(e) => handleCheckboxs(e)} />
                                    <label for={products?.colorFive}>{products?.colorFive}</label>
                                </div>
                                <div className="form-row">
                                    <input type="checkbox" id={products?.colorSix} name={products?.colorSix} checked={color === `${products?.colorSix}`} onChange={(e) => handleCheckboxs(e)} />
                                    <label for={products?.colorSix}>{products?.colorSix}</label>
                                </div>
                                <div className="form-row">
                                    <input type="checkbox" id={products?.colorSeven} name={products?.colorSeven} checked={color === `${products?.colorSeven}`} onChange={(e) => handleCheckboxs(e)} />
                                    <label for={products?.colorSeven}>{products?.colorSeven}</label>
                                </div>


                            </div>
                        </div> */}
                        {/* <div className="sidebar-block">
                            <div className="sidebar-title">Qiymәt</div>
                            <div></div>
                        </div> */}
                    </form>
                </aside>
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

                    {/* <ul className="catalog"> */}
                    <ul className='product-wrap'>
                        {products?.map(item => (
                            <ProductCard key={item?.id} item={item} isViewed />

                        ))}
                    </ul>
                    <>
                        <button
                            className="prev-btn"
                            disabled={pageNumber === 1}
                            onClick={handlePrev}
                        >
                            Prev
                        </button>
                        {pageNumberArr?.map((item, idx) => {
                            return (
                                <ButtonPlay key={idx} onClick={() => setPageNumber(idx + 1)}>
                                    {item}
                                </ButtonPlay>
                            );
                        })}
                        <button
                            className="next-btn"
                            disabled={pageNumber === dataJson?.products?.length / limitOfThingsOnPage}
                            onClick={handleNext}
                        >
                            Next
                        </button>
                    </>
                    {/* </ul> */}


                </div>

            </div>
        </>

    );
}

export default CatalogProductTypePage;