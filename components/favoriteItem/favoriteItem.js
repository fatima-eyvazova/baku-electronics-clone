import Image from "next/image";
import Link from "next/link";
import { AiOutlineStar } from "react-icons/ai";
import { HiOutlineArrowRight } from "react-icons/hi";
const FavoriteItem = ({ product }) => {
    const starList = [1, 2, 3, 4, 5];

    return (
        // <li>
        //     <h1>{product?.title}</h1>
        // </li>
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
        </li>

    )
}

export default FavoriteItem;