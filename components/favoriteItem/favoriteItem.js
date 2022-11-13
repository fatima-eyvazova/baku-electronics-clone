import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineStar, AiOutlineShoppingCart } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavoritesAction } from "../../store/actions/actions";

const FavoriteItem = ({ product }) => {
    const [update, setUpdate] = useState(false);
    const favs = useSelector(state => state.favorites.favoriteProducts);
    const dispatch = useDispatch();
    const starList = [1, 2, 3, 4, 5];

    const handleClickOnHeart = (product) => {
        if (product) {
            const findedItem = favs?.find(item => item.id === product?.id && item.title === product?.title);
            if (findedItem) {
                setUpdate(prev => !prev);
                dispatch(removeFromFavoritesAction(product));
            }
        }
    }

    return (
        <li>
            <div className="product-cart">
                <Link
                    href={`/catalog/${product?.category}/${product?.subCategory}/${product?.path}`}
                >
                    <a>
                        <Image
                            src={product?.image}
                            width={260}
                            height={220}
                            alt="notebook"
                        />
                        {product?.hasDiscount && (
                            <div className="product-discount">
                                <div className="discount-price">
                                    <span className="icon">{product?.discountAmount}</span>
                                    <span className="sale" onClick={() => handleClick()}>Nağd alışa ENDİRİM</span>
                                </div>
                            </div>
                        )}
                    </a>
                </Link>
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
                            href={`/catalog/${product?.category}/${product?.subCategory}/${product?.path}`}
                        >
                            {`${product?.reviewCount} rəy`}
                        </Link>
                    </div>
                </div>

                <Link
                    href={`/catalog/${product?.category}/${product?.subCategory}/${product?.path}`}
                >
                    {product?.title}
                </Link>
                <div className="product-value">
                    <div className="product-price">{product?.price} </div>
                    <div className="icons-heart-basket">
                        <button className="basket-icon">
                            <AiOutlineShoppingCart />
                        </button>
                        <div className="heart" onClick={() => handleClickOnHeart(product)}>
                            <button>
                                <span className="heart-icon" style={{ color: 'red' }}>
                                    <BiHeart />
                                </span>
                            </button>
                        </div>


                    </div >
                </div>
            </div>
            {/* <div className="mobile">
                <Link href={`/catalog/${product?.category}/${product?.subCategory}`}>
                    {product?.subCategory}
                </Link>
                <span className="icon-row">
                    <HiOutlineArrowRight />
                </span>
            </div> */}
        </li >

    )
}

export default FavoriteItem;