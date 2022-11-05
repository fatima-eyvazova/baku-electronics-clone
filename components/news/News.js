import React, { useState } from 'react';
import ItemsCarousel from "react-items-carousel";
import { AiOutlineStar, AiOutlineShoppingCart } from "react-icons/ai";
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import New from "../../public/images/new1.jpeg"

const News = () => {
    const viewedProducts = useSelector(state => state.viewed.viewedProducts);
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    const starList = [1, 2, 3, 4, 5];

    return (
        <section className="new">
            <div className="container">
                <div className="cards">
                    <div className="swiper" style={{ padding: `0 ${chevronWidth}px`, background: 'red' }}>
                        <ItemsCarousel
                            requestToChangeActive={setActiveItemIndex}
                            activeItemIndex={activeItemIndex}
                            numberOfCards={3}
                            gutter={20}
                            leftChevron={<button className='icon-one'>
                                <img src='/imagesi/sl.svg' />
                            </button>}
                            rightChevron={<button className='icon-one'>
                                <img src='/imagesi/sl.svg' />
                            </button>}
                            outsideChevron
                            chevronWidth={chevronWidth}
                        >
                            <div className='slick-slide'>
                                {/* <Link href="/">
                                    <a className='new-card'>
                                        <div className='slider-card one'>


                                            <div className='news-about'>
                                                <span className='news'>Xəbərlər</span>
                                                <h3 className='about'>Sizin Adam kimdir?</h3>
                                            </div>


                                        </div>
                                    </a>
                                </Link> */}
                                <div className='slider-card-one '>
                                    <Link href="/">
                                        <a className='new-card'>
                                            <div className='news-about'>
                                                <span className='news'>Xəbərlər</span>
                                                <h3 className='about'>Sizin Adam kimdir?</h3>
                                            </div>
                                        </a>
                                    </Link>


                                </div>
                                <div className='slider-card-two '>
                                    <Link href="/">
                                        <a className='new-card'>
                                            <div className='news-about'>
                                                <span className='news'>Xəbərlər</span>
                                                <h3 className='about'>Sizin Adam kimdir?</h3>
                                            </div>
                                        </a>
                                    </Link>


                                </div>
                                <div className='slider-card-three '>
                                    <Link href="/">
                                        <a className='new-card'>
                                            <div className='news-about'>
                                                <span className='news'>Xəbərlər</span>
                                                <h3 className='about'>Sizin Adam kimdir?</h3>
                                            </div>
                                        </a>
                                    </Link>


                                </div>
                            </div>

                        </ItemsCarousel>
                    </div>
                </div>
            </div >

        </section >
    )
}

export default News;