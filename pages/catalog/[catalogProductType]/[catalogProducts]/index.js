import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import dataJson from '../../../../data/data.json';
import Link from "next/link";
import { AiOutlineStar } from "react-icons/ai";
import Image from "next/image";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import CustomHead from "../../../../components/customHead/customHead";

const CatalogProductPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredByBrand, setFilteredByBrand] = useState([]);
  const [brand, setBrand] = useState('');

  const [filteredByColor, setFilteredByColor] = useState([]);
  const [color, setColor] = useState('');

  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    const selected = dataJson?.products?.[query.catalogProductType]?.[query.catalogProducts];
    if (selected) {
      setProducts(selected);
    }
  }, [query.catalogProducts]);
  const starList = [1, 2, 3, 4, 5];

  const [dataArray, setDataArray] = useState(dataJson);

  const hidehandler = (id) => {
    console.log("Hide Handler callled with ", dataArray[id]);

    const newDataArray = dataJson.map((image) => {
      if (image.id === id) {
        console.log("Id is", id);
        return { ...image, hide: false };
      } else {
        return { ...image, hide: true };
      }
    });

    setDataArray([...newDataArray]);
  };

  const handleCheckbox = (e) => {
    if (brand === e.target.name) {
      setBrand('');
    } else {
      setBrand(e.target.name);
    }
  }
  const handleCheckboxs = (e) => {
    if (color === e.target.name) {
      setColor('');
    } else {
      setColor(e.target.name);
    }
  }

  useEffect(() => {
    setFilteredByBrand(products?.items?.filter(item => item?.characteristics?.brand === brand));
  }, [brand]);

  useEffect(() => {
    setFilteredByColor(products?.items?.filter(item => item?.characteristics?.color === color));
  }, [color]);

  const list = products?.items;

  if (!!brand) {
    list = filteredByBrand;
  } else if (!!color) {
    list = filteredByColor;
  }

  return (
    <>
      <CustomHead title={`Baku Electronics Catalog ${query.catalogProducts}`} />
      <div className="single">
        <aside className="sidebar">
          <form>
            <div className="sidebar-block">
              <div className="sidebar-title"> Brend</div>
              <div className="sidebar-bottom">
                <div className="form-row">
                  <input type="checkbox" id={products?.brandS} name={products?.brandS} checked={brand === `${products?.brandS}`} onChange={(e) => handleCheckbox(e)} />
                  <label for={products?.brandS} >{products?.brandS}</label>
                </div>
                <div className="form-row">
                  <input type="checkbox" id={products?.brandX} name={products?.brandX} checked={brand === `${products?.brandX}`} onChange={(e) => handleCheckbox(e)} />
                  <label for={products?.brandX}>{products?.brandX}</label>
                </div>
                <div className="form-row">
                  <input type="checkbox" id={products?.brandI} name={products?.brandI} checked={brand === `${products?.brandI}`} onChange={(e) => handleCheckbox(e)} />
                  <label for={products?.brandI}>{products?.brandI}</label>
                </div>
                <div className="form-row">
                  <input type="checkbox" id={products?.brandA} name={products?.brandA} checked={brand === `${products?.brandA}`} onChange={(e) => handleCheckbox(e)} />
                  <label for={products?.brandA}>{products?.brandA}</label>
                </div>
                <div className="form-row">
                  <input type="checkbox" id={products?.brandH} name={products?.brandH} checked={brand === `${products?.brandH}`} onChange={(e) => handleCheckbox(e)} />
                  <label for={products?.brandH}>{products?.brandH}</label>
                </div>

              </div>
            </div>
            <div className="sidebar-block">
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
                <span >{products?.subCategoryTitle}</span>
              </div>

              <h1 className="title-category">{products?.subCategoryTitle}</h1>
            </div>
            <figure className="image-catalog">
              <span className="image-ctlg">
                <Image
                  src={products?.subCategoryImage}
                  width={288}
                  height={149}
                  alt="notebook"
                />
              </span>

            </figure>
          </div>

          <ul className="catalog">
            <>
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
            </>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CatalogProductPage;
