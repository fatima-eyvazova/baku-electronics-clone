import Link from "next/link";
import Image from "next/image";
import { IoAddSharp, IoRemove } from "react-icons/io5";
import { CiCircleRemove } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { addToBasketAction } from "../../store/actions/actions";

const BasketItem = ({ item }) => {
    const basketProducts = useSelector(state => state.basket.basketProducts);
    const dispatch = useDispatch();
    const findedItem = basketProducts?.find((pr) => item.product.id === pr?.product?.id && item.product.title === pr?.product?.title);

    const handleAddToBasket = () => {
        if (findedItem) {
            const filteredProducts = basketProducts?.filter((pr) => item.product.title !== pr?.product?.title);
            dispatch(
                addToBasketAction([
                    ...filteredProducts,
                    { product: item?.product, count: findedItem.count + 1 },
                ])
            );
        }
    };

    const handleRemoveFromBasket = () => {
        if (findedItem) {
            const filteredProducts = basketProducts?.filter((pr) => item.product.id !== pr?.product?.id &&
                item.product.title !== pr?.product?.title
            );
            if (findedItem.count - 1 === 0) {
                dispatch(
                    addToBasketAction([
                        ...filteredProducts,
                    ])
                );
            } else {
                dispatch(
                    addToBasketAction([
                        ...filteredProducts,
                        { product: item?.product, count: findedItem.count - 1 },
                    ])
                );
            }
        }
    };

    const handleRemoveItemFromBasket = () => {
        if (findedItem) {
            const filteredProducts = basketProducts?.filter((pr) => item.product.id !== pr?.product?.id &&
                item.product.title !== pr?.product?.title
            );
            dispatch(
                addToBasketAction([
                    ...filteredProducts,
                ])
            );
        }
    };

    return (
        <div className="basket-item-left">
            <div className="basket-item">
                <div className="order-card">
                    <div className="order-card-left">
                        <div className="card-left-child">
                            <span className="image-title">
                                <figure className="order-image">
                                    <Link href={`/catalog/${item?.product?.category}/${item?.product?.subCategory}/${item?.product?.path}`}>
                                        <Image
                                            src={item?.product?.image}
                                            width={191}
                                            height={127}
                                        />
                                    </Link>
                                </figure>
                                <div className="order-title">
                                    <Link href={`/catalog/${item?.product?.category}/${item?.product?.subCategory}/${item?.product?.path}`}>
                                        {item?.product?.title}
                                    </Link>
                                    <span className="product-code">
                                        Məhsul kodu: {item?.product?.code}
                                    </span>
                                </div>
                            </span>

                            <span className="counter-price">
                                <div className="order-counter">
                                    <form>
                                        <div className="counter">
                                            <button onClick={handleRemoveFromBasket}><IoRemove /></button>
                                            <span className="count">{item?.count}</span>
                                            <button onClick={handleAddToBasket}><IoAddSharp /></button>
                                        </div>
                                    </form>
                                </div>
                                <div className="order-price">
                                    <div className="price">
                                        <div className="product-price-cur">
                                            <span>
                                                {item?.product?.price}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </span>
                        </div>

                    </div>


                    <div className="order-close">
                        <button onClick={handleRemoveItemFromBasket}><CiCircleRemove /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasketItem;