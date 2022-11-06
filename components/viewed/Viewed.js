import React, { useState } from 'react';
import ItemsCarousel from "react-items-carousel";
import { AiOutlineStar, AiOutlineShoppingCart } from "react-icons/ai";
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Viewed = () => {
    const viewedProducts = useSelector(state => state.viewed.viewedProducts);
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    const starList = [1, 2, 3, 4, 5];

    if (viewedProducts?.length === 0) {
        return;
    }

    return (
        <section className="history">
            <div className="container">
                <div className="history-number">
                    <h1 className="history-product">Baxdıqlarınız</h1>
                    <span className="product-number">{viewedProducts?.length} mehsul</span>
                </div>
                <div className="cards">
                    <div style={{ padding: `0 ${chevronWidth}px` }}>
                        <ItemsCarousel
                            requestToChangeActive={setActiveItemIndex}
                            activeItemIndex={activeItemIndex}
                            numberOfCards={3}
                            gutter={20}
                            leftChevron={<button>{"<"}</button>}
                            rightChevron={<button>{">"}</button>}
                            outsideChevron
                            chevronWidth={chevronWidth}
                        >
                            {viewedProducts?.map(item => (
                                <div className="card">
                                    <div className="product-card-two">
                                        <div className="card-top">
                                            <Link
                                                href={`/catalog/${item?.category}/${item?.subCategory}/${item?.path}`}
                                            >
                                                <a>
                                                    <Image
                                                        src={item?.image}
                                                        width={320}
                                                        height={274}
                                                        alt="notebook"
                                                    />
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="product-diss">
                                            {item?.hasDiscount && (
                                                <div className="product-discount">
                                                    <div className="discount-price">
                                                        <span className="icon">{item?.discountAmount}</span>
                                                        <span className="sale" onClick={() => handleClick()}>Nağd alışa ENDİRİM</span>
                                                    </div>
                                                </div>
                                            )}
                                            <div className="product-rate">
                                                <div className="icons">
                                                    {starList.map((star) => (
                                                        <span key={star}>
                                                            <AiOutlineStar />
                                                        </span>
                                                    ))}
                                                </div>
                                                <div className="comment">
                                                    <Link
                                                        href={`/catalog/${item?.category}/${item?.subCategory}/${item?.path}`}
                                                    >
                                                        {`${item?.reviewCount} rəy`}
                                                    </Link>
                                                </div>
                                            </div>

                                            <Link
                                                href={`/catalog/${item?.category}/${item?.subCategory}/${item?.path}`}
                                            >
                                                {item?.title}
                                            </Link>
                                            <div className="product-value">
                                                <span className="span-price-item">Qiymet</span>
                                                <div className="price-tocart">
                                                    <div className="product-price">{item?.price} </div>
                                                    <div className="add-to-cart">
                                                        <button>
                                                            <AiOutlineShoppingCart />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </ItemsCarousel>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Viewed;