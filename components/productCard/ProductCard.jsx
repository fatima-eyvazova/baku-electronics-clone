import Image from "next/image";
import Link from "next/link";
import { AiOutlineStar } from "react-icons/ai";
import { HiOutlineArrowRight } from "react-icons/hi";

const ProductCard = ({ item, handleClick }) => {
  const starList = [1, 2, 3, 4, 5];

  return (
    <li>
      <div className="product-cart">
        <Link
          href={`/catalog/${item?.category}/${item?.subCategory}/${item?.path}`}
        >
          <a>
            <Image
              src={item?.image}
              width={260}
              height={220}
              alt="notebook"
            />
            {item?.hasDiscount && (
              <div className="product-discount">
                <div className="discount-price">
                  <span className="icon">{item?.discountAmount}</span>
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
          <div className="product-price">{item?.price} </div>
        </div>
      </div>
      <div className="mobile">
        <Link href={`/catalog/${item?.category}/${item?.subCategory}`}>
          {item?.subCategory}
        </Link>
        <span className="icon-row">
          <HiOutlineArrowRight />
        </span>
      </div>
    </li>
  );
};

export default ProductCard;
