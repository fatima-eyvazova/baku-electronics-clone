import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import dataJson from '../../../../data/data.json';
import Link from "next/link";
import { AiOutlineStar } from "react-icons/ai";
import { HiOutlineArrowRight } from "react-icons/hi";
import Image from "next/image";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";


const CatalogProductPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredByBrand, setFilteredByBrand] = useState([]);
  const [brand, setBrand] = useState('');
  const router = useRouter();
  const { query } = router;
  const [toggle, setToggle] = useState(false)
  const [hideUsers, setHideUsers] = useState(false)
  const [product, setProduct] = useState();

  const [priceMin, setPriceMin] = useState(200);
  const [priceMax, setPriceMax] = useState(200);

  const onPriceChange = (values) => {
    setPriceMin(values[0]);
    setPriceMax(values[1]);
  }
  useEffect(() => {
    const selected = dataJson?.products?.[query.catalogProductType]?.[query.catalogProducts];
    setProducts(selected);
  }, [query.catalogProducts]);
  const starList = [1, 2, 3, 4, 5];

  const handleCheckbox = (e) => {
    if (brand === e.target.name) {
      setBrand('');
    } else {
      setBrand(e.target.name);
    }
  }

  useEffect(() => {
    setFilteredByBrand(products?.items?.filter(item => item?.characteristics?.brand === brand));
  }, [brand]);

  const list = !!brand ? filteredByBrand : products?.items;

  return (
    <>
      <div className="single">
        <aside className="sidebar">
          <form>
            <div className="sidebar-block">
              <div className="sidebar-title"> Brend</div>
              <div className="sidebar-bottom">
                <div className="form-row">
                  <input type="checkbox" id="samsung" name="Samsung" checked={brand === 'Samsung'} onChange={(e) => handleCheckbox(e)} />
                  <label for="samsung">Samsung</label>
                </div>
                <div className="form-row">
                  <input type="checkbox" id="XIAOMI" name="XIAOMI" checked={brand === 'XIAOMI'} onChange={(e) => handleCheckbox(e)} />
                  <label for="XIAOMI">XIAOMI</label>
                </div>
                <div className="form-row">
                  <input type="checkbox" id="INFINIX" name="INFINIX" checked={brand === 'INFINIX'} onChange={(e) => handleCheckbox(e)} />
                  <label for="INFINIX">INFINIX</label>
                </div>
                <div className="form-row">
                  <input type="checkbox" id="Apple" name="Apple" checked={brand === 'Apple'} onChange={(e) => handleCheckbox(e)} />
                  <label for="Apple">Apple</label>
                </div>
                <div className="form-row">
                  <input type="checkbox" id="HUAWEI" name="HUAWEI" checked={brand === 'HUAWEI'} onChange={(e) => handleCheckbox(e)} />
                  <label for="HUAWEI">HUAWEI</label>
                </div>

              </div>
            </div>
            <div className="sidebar-block">
              <div className="sidebar-title">Qiymәt</div>
              <div></div>
            </div>
          </form>
        </aside>
        <div className="right">
          <div className="top-share ">
            <div className="top-items">
              <div className="catagory-elements">
                <span className="catagory">Bütün kateqoriyalar</span>
                <span className="icon"><HiOutlineArrowNarrowRight /></span>
                <span className="catagory">{products?.subCategoryDescription}</span>
                <span className="icon"><HiOutlineArrowNarrowRight /></span>
                <span className="catagory">{products?.subCategoryTitle}</span>
                <span className="icon"><HiOutlineArrowNarrowRight /></span>
                {/* <span className="marka">{product?.title}</span> */}
              </div>

              <h1>{products?.subCategoryTitle}</h1>
            </div>
            <figure>
              <Image
                src={products?.subCategoryImage}
                width={260}
                height={220}
                alt="notebook"
              />
            </figure>
          </div>




          <ul className="catalog">
            {list?.map(item => (
              <li>
                <div className="products">
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
                        <div className="product-childe">
                          <div className="discount-childe-price">
                            <span className="icon">{item?.discountAmount}</span>
                            <span className="sale" onClick={() => handleClick()}>Nağd alışa ENDİRİM</span>
                          </div>
                        </div>
                      )}
                    </a>
                  </Link>
                  <div className="product-childe-rate">
                    <div className="icons">
                      {starList.map((star) => (
                        <span key={star}>
                          <AiOutlineStar />
                        </span>
                      ))}
                    </div>
                    <div className="comments">
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

              </li>

            ))}
          </ul>


        </div>

      </div>




    </>
  );
};

export default CatalogProductPage;
