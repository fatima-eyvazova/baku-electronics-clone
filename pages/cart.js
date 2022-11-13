import React from "react";
import { useSelector } from "react-redux";
import BasketItem from "../components/basketItem/BasketItem";
import CustomHead from '../components/customHead/customHead';

const BasketPage = () => {
    const basketProducts = useSelector(state => state.basket.basketProducts);

    const getProductTotalCount = () => {
        let totalCount = 0;

        basketProducts?.forEach((item) => {
            totalCount += item?.count;
        });

        return totalCount;
    }

    const getDiscountTotal = () => {
        let totalDiscount = 0;

        basketProducts?.forEach((item) => {
            totalDiscount += +item?.product?.discountAmount?.replace(' ₼', '') * item?.count;
        });

        return totalDiscount;
    }

    const getTotalPrice = () => {
        let totalPrice = 0;

        basketProducts?.forEach((item) => {
            totalPrice += +item?.product?.price?.replace(' ₼', '') * item?.count;
        });

        return +totalPrice?.toFixed(2);
    }

    const totalPrice = getTotalPrice();
    const totalDiscount = getDiscountTotal();

    return (
        <>
            <CustomHead title='Basket' />
            <article>
                {basketProducts.length > 0 ? (
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: "space-around", margin: "20px 0" }}>
                        <div style={{ display: "flex", flexDirection: 'column', gap: 20 }}>
                            {basketProducts?.map((item) => (
                                item?.count > 0 && <BasketItem key={item?.product?.title} item={item} />
                            ))}
                        </div>
                        <div className="yellow-basket">
                            <div className="yellow-basket-item">
                                <div className="paragraph-childe">
                                    <p className="paragraph-one">
                                        <span>{getProductTotalCount()} mehsul: </span>
                                        <span>{totalPrice} ₼</span>
                                    </p>
                                    <p className="paragraph-one">
                                        <span>Endirim: </span>
                                        <span>{totalDiscount} ₼</span>
                                    </p>
                                </div>

                                <p className="paragraph-three">
                                    <span>Cemi: </span>
                                    <span>{totalPrice - totalDiscount} ₼</span>
                                </p>
                                <div className="button-get">
                                    <button className="red-button">Sifarişi rәsmilәşdir</button>
                                </div>
                            </div>

                        </div>
                    </div>
                ) : (
                    <h1>Sebetiniz bosdur</h1>
                )
                }
            </article >
        </>

    );
};

export default BasketPage;