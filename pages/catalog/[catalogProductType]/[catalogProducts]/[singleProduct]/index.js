import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import dataJson from "../../../../../data/data.json";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { BiHeart } from "react-icons/bi"
import { AiOutlineStar, AiOutlinePieChart } from "react-icons/ai"
import { CgTimer } from "react-icons/cg"
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addToBasketAction, addToFavoritesAction, addToViewedAction, removeFromFavoritesAction } from "../../../../../store/actions/actions";
import Viewed from "../../../../../components/viewed/Viewed";
import CustomHead from "../../../../../components/customHead/customHead";
import chevronDown from '../../../../../public/icons/chevronDown.svg';

const SingleProductPage = () => {
  const boolList = new Array(4).fill(false);
  const [showDropDown, setShowDropdown] = useState(boolList);
  const toggleDropdown = (index) => {
    setShowDropdown(prev => ([...prev, prev[index] = !prev[index]]));
  }

  const [product, setProduct] = useState();
  const favs = useSelector(state => state.favorites.favoriteProducts);
  const viewedProducts = useSelector(state => state.viewed.viewedProducts);
  const basketProducts = useSelector(state => state.basket.basketProducts);
  const [heartColor, setHeartColor] = useState('black');
  const dispatch = useDispatch();
  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    const selected = dataJson?.products?.[query.catalogProductType]?.[query.catalogProducts]?.items?.find(
      (item) => item?.path === query.singleProduct
    );

    if (selected && favs) {
      const findedItem = favs?.find(item => item.id === selected?.id && item.title === selected?.title);
      setHeartColor(findedItem ? 'red' : 'black');
    }
    setProduct(selected);
  }, [query.catalogProducts, query.singleProduct, favs]);

  useEffect(() => {
    const viewedItem = viewedProducts?.find(item => item?.id === product?.id && item?.title === product?.title);
    if (!viewedItem && product) {
      dispatch(addToViewedAction(product));
    }
  }, [product, viewedProducts]);

  const starList = [1, 2, 3, 4, 5];

  const handleClickOnHeart = (product) => {
    if (product) {
      const findedItem = favs?.find(item => item.id === product?.id && item.title === product?.title);
      if (findedItem) {
        setHeartColor('black');
        dispatch(removeFromFavoritesAction(product));
      } else {
        setHeartColor('red');
        dispatch(addToFavoritesAction(product));
      }
    }
  }

  const handleAddToBasket = () => {
    const findedItem = basketProducts?.find((item) => item.product.title === product?.title);

    if (findedItem == undefined) {
      dispatch(
        addToBasketAction([...basketProducts, { product: product, count: 1 }])
      );
    } else {
      const filteredProducts = basketProducts?.filter((item) =>
        item.product.title !== product?.title
      );
      dispatch(
        addToBasketAction([
          ...filteredProducts,
          { product: product, count: findedItem.count + 1 },
        ])
      );
    }
  };

  return (
    <>
      <CustomHead title={`Baku Electronics Catalog ${query.singleProduct}`} />
      <div>
        <div className="container">
          <div className="catagorys">
            <span className="catagory">B??t??n kateqoriyalar</span>
            <span className="icon"><HiOutlineArrowNarrowRight /></span>
            <span className="catagory">{product?.category}</span>
            <span className="icon"><HiOutlineArrowNarrowRight /></span>
            <span className="catagory">{product?.subCategory}</span>
            <span className="icon"><HiOutlineArrowNarrowRight /></span>
            <span className="marka">{product?.title}</span>
          </div>
          {/* section one */}
          <section className="top">
            <div className="container">
              <div></div>
              <div className="refrigerator">
                <div className="images-refrigerator">
                  <Image
                    src={product?.image}
                    alt={product?.title}
                    width={109}
                    height={90}
                  />

                  <Image
                    src={product?.characteristics?.imageRefregeritor}
                    alt={product?.title}
                    width={109}
                    height={97}
                  />

                  <Image
                    src={product?.characteristics?.share}
                    alt={product?.title}
                    width={109}
                    height={90}
                  />

                </div>
                {product?.hasDiscount && (
                  <div className="product-discount">
                    <div className="discount-price">
                      <span className="icon">{product?.discountAmount}</span>
                      <span className="sale">Na??d al????a END??R??M</span>
                    </div>
                  </div>
                )}
                <div className="img-refrigerator">
                  <Image
                    src={product?.image || ""}
                    alt={product?.title}
                    width={352}
                    height={280}
                  />
                </div>

              </div>
              <div className="discount">
                <div className="discount-one">
                  <p>{product?.title}</p>
                  <div className="stars">
                    <div className="star">
                      {starList.map((star) => (
                        <span key={star}>
                          <AiOutlineStar />
                        </span>
                      ))}
                    </div>
                    <span className="commet">0 r??y</span>
                    <span className="code">M??hsul kodu:{product?.code}</span>
                  </div>
                </div>

                <div className="discount-two">
                  <span className="price-item">Qiym??t</span>
                  <div className="price-right">
                    <span className="pricee">{product?.price}</span>
                    <button className="get" onClick={handleAddToBasket} >Almaq</button>
                    <div className="heart" onClick={() => handleClickOnHeart(product)}>
                      <button>
                        <span className="heart-icon" style={{ color: heartColor }}>
                          <BiHeart />
                        </span>
                      </button>
                    </div >
                  </div>
                </div>
                <div className="discount-three">
                  <button className="order">
                    <span className="icon"><CgTimer /></span>
                    <div className="add">
                      <span>Bir klik?? al</span>
                      <span>S??r??tli sifari??</span>
                    </div>
                  </button>
                  <button className="order">
                    <span className="icon"><AiOutlinePieChart /></span>

                    <div className="add">
                      <span>Hiss??-hiss?? ??d??</span>
                      <span>12 ay, ayda {product?.characteristics?.credit}</span>
                    </div>
                  </button>
                </div>
              </div>
              <div className="options">
                <div className="options-childe">
                  <p>??d??ni??</p>
                  <ul>
                    <li>Na??d</li>
                    <li>Visa/Mastercard</li>
                    <li>Taksit kartlar</li>
                    <li>Nisy?? al????</li>
                  </ul>
                </div>
                <div className="options-childe">
                  <p>??atd??r??lma</p>
                  <ul>
                    <li>Ma??azadan g??t??r</li>
                    <li>Kuryerl?? ??atd??r??lma</li>
                    <li>S??r??tli ??atd??r??lma</li>
                  </ul>
                </div>
                <div className="options-childe">
                  <p>Z??man??t v?? servis</p>
                  <ul>
                    <li>R??smi zaman??t.</li>
                    <li>14 g??n ??rzind?? m??hsulun</li>
                    <li>d??yi??dirilm??si v?? ya qaytar??lmas??.</li>
                    <li>R??smi servis xidm??ti.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="two-three">
              <div className="discount-two">
                <span className="price-item">Qiym??t</span>
                <div className="price-right">
                  <span className="pricee">{product?.price}</span>
                  <button className="get" onClick={handleAddToBasket} >Almaq</button>
                  <div className="heart" onClick={() => handleClickOnHeart(product)}>
                    <button>
                      <span className="heart-icon" style={{ color: heartColor }}>
                        <BiHeart />
                      </span>
                    </button>
                  </div >
                </div>
              </div>
              <div className="discount-three">
                <button className="order">
                  <span className="icon"><CgTimer /></span>
                  <div className="add">
                    <span>Bir klik?? al</span>
                    <span>S??r??tli sifari??</span>
                  </div>
                </button>
                <button className="order">
                  <span className="icon"><AiOutlinePieChart /></span>

                  <div className="add">
                    <span>Hiss??-hiss?? ??d??</span>
                    <span>12 ay, ayda {product?.characteristics?.credit}</span>
                  </div>
                </button>
              </div>
            </div>
            <div className="product-options">
              <div className="product-options-child">
                <div className="product-options-block">
                  <div className="options-block">
                    <div onClick={() => toggleDropdown(0)} className="options-title">??d??ni??
                      <span className="down-icon">
                        <Image src={chevronDown}
                          width={18}
                          height={18}
                          alt="icon"
                          className={showDropDown[0] ? 'image-icon' : "image-icon-down"}
                        />
                      </span>
                    </div>
                    {showDropDown[0] && <div className={`option-lists`}>
                      <ul className="product-options-list">
                        <li className="product-options-item">Na??d</li>
                        <li className="product-options-item">Visa/Mastercard</li>
                        <li className="product-options-item">Taksit kartlar</li>
                        <li className="product-options-item">Nisy?? al????</li>
                      </ul>
                    </div>}
                  </div>
                </div>
                <div className="product-options-block">
                  <div className="options-block">
                    <div onClick={() => toggleDropdown(1)} className="options-title">??atd??r??lma
                      <span className="down-icon">
                        <Image src={chevronDown}
                          width={18}
                          height={18}
                          alt="icon"
                          className={showDropDown[1] ? 'image-icon' : "image-icon-down"}
                        />
                      </span>
                    </div>
                    {showDropDown[1] && <div className={`option-lists`}>
                      <ul className="product-options-list">
                        <li className="product-options-item">Ma??azadan g??t??r</li>
                        <li className="product-options-item">Kuryerl?? ??atd??r??lma</li>
                        <li className="product-options-item">S??r??tli ??atd??r??lma</li>
                      </ul>

                    </div>}
                  </div>
                </div>
                <div className="product-options-block">
                  <div className="options-block">
                    <div onClick={() => toggleDropdown(2)} className="options-title">Z??man??t v?? servis
                      <span className="down-icon">
                        <Image src={chevronDown}
                          width={18}
                          height={18}
                          alt="icon"
                          className={showDropDown[2] ? 'image-icon' : "image-icon-down"}
                        />
                      </span>
                    </div>
                    {showDropDown[2] && <div className={`option-lists`}>
                      <ul className="product-options-list">
                        <li className="product-options-item">14 g??n ??rzind?? m??hsulun <br />d??yi??dirilm??si v?? ya qaytar??lmas??.</li>
                      </ul>

                    </div>}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* section two */}
          <section className="two">
            <div className="two-left">
              <div className="links">
                <span><Link href="/">X??susiyy??tl??r</Link></span>
                <span><Link href="/">Ox??ar m??hsullar</Link></span>
                <span><Link href="/">R??yl??r (0)</Link></span>

                <span className="question">
                  Sual - cavab
                  ({product?.characteristics?.number})
                </span>
              </div>
              <h1>{product?.title}</h1>
              <span className="features">X??susiyy??tl??r</span>
              <ul className="lists">
                <li>
                  <span>Brend: </span>
                  <span>{product?.characteristics?.brand}</span>
                </li>
                {product?.subCategory === 'smartphones' && (
                  <>
                    <li>
                      <span>M??hsul tipi: </span>
                      <span>{product?.characteristics?.smarthponesType}</span>
                    </li>
                    <li>
                      <span>????b??k??:</span>
                      <span>{product?.characteristics?.network}</span>
                    </li>
                    <li>
                      <span>SIM-kart say??:</span>
                      <span>{product?.characteristics?.simcardN}</span>
                    </li>
                    <li>
                      <span>SIM-kart ??l????s??:</span>
                      <span>{product?.characteristics?.simSize}</span>
                    </li>
                    <li>
                      <span> Ekran icaz??si: </span>
                      <span>{product?.characteristics?.screenWarning}</span>
                    </li>

                    <li>
                      <span>Ekran ??l????s??: </span>
                      <span>{product?.characteristics?.screenSize}</span>
                    </li>
                    <li>
                      <span>Matris tipi:</span>
                      <span>{product?.characteristics?.matrixType}</span>
                    </li>
                    <li>
                      <span>Operativ yadda??:</span>
                      <span>{product?.characteristics?.memory}</span>
                    </li>
                    <li>
                      <span>Qura??d??r??lm???? yadda??:</span>
                      <span>{product?.characteristics?.memoryB}</span>
                    </li>
                    <li>
                      <span>Yadda?? kart?? d??st??yi:</span>
                      <span>{product?.characteristics?.cardSupport}</span>
                    </li>
                    <li>
                      <span>Prosessor tipi:</span>
                      <span>{product?.characteristics?.processorType}</span>
                    </li>
                    <li>
                      <span>N??v??l??rin say??:</span>
                      <span>{product?.characteristics?.numberCores}</span>
                    </li>
                    <li>
                      <span>Prosessor tezliyi:</span>
                      <span>{product?.characteristics?.processorFrequency}</span>
                    </li>
                    <li>
                      <span>??m??liyyat sistemi:</span>
                      <span>{product?.characteristics?.operatingSystem}</span>
                    </li>
                    <li>
                      <span>??sas kamera:</span>
                      <span>{product?.characteristics?.mainCamera}</span>
                    </li>
                    <li>
                      <span>Diafraqma:</span>
                      <span>{product?.characteristics?.diaphragm}</span>
                    </li>
                    <li>
                      <span>Avtofokus:</span>
                      <span>{product?.characteristics?.autofocus}</span>
                    </li>
                    <li>
                      <span>Led fl????:</span>
                      <span>{product?.characteristics?.ledFlash}</span>
                    </li>
                    <li>
                      <span>Video ????kili??:</span>
                      <span>{product?.characteristics?.videoShooting}</span>
                    </li>
                    <li>
                      <span>Frontal kamera:</span>
                      <span>{product?.characteristics?.frontCamera}</span>
                    </li>
                    <li>
                      <span>Akkumulyatorun h??cmi:</span>
                      <span>{product?.characteristics?.batteryCapacity}</span>
                    </li>
                    <li>
                      <span>??arj ba??lay??c??s??:</span>
                      <span>{product?.characteristics?.chargingConnector}</span>
                    </li>
                    <li>
                      <span>Wi-Fi:</span>
                      <span>{product?.characteristics?.wifi}</span>
                    </li>
                    <li>
                      <span>Bluetooth:</span>
                      <span>{product?.characteristics?.bluetooth}</span>
                    </li>
                    <li>
                      <span>NFC:</span>
                      <span>{product?.characteristics?.nfc}</span>
                    </li>
                    <li>
                      <span>Naviqasiya sistemi:</span>
                      <span>{product?.characteristics?.navigation}</span>
                    </li>
                    <li>
                      <span>Sudan v?? tozdan qorunma:</span>
                      <span>{product?.characteristics?.protection}</span>
                    </li>
                    <li>
                      <span>Barmaq izi skaneri:</span>
                      <span>{product?.characteristics?.scanner}</span>
                    </li>
                    <li>
                      <span>Korpus Material??:</span>
                      <span>{product?.characteristics?.material}</span>
                    </li>
                    <li>
                      <span>??l????l??r: H??nd??rl??y?? / Eni / D??rinliyi:</span>
                      <span>{product?.characteristics?.dimensions}</span>
                    </li>
                    <li>
                      <span>????ki:</span>
                      <span>{product?.characteristics?.weight}</span>
                    </li>
                    <li>
                      <span>R??ng:</span>
                      <span>{product?.characteristics?.color}</span>
                    </li>
                    <li>
                      <span>Qabla??d??rmaya daxildir:</span>
                      <span>{product?.characteristics?.includes}</span>
                    </li>
                    <li>
                      <span>Z??man??t:</span>
                      <span>{product?.characteristics?.garranty}</span>
                    </li>
                  </>
                )}

                {product?.subCategory === 'watches' && (
                  <>
                    <li>
                      <span>Ekran??n ??l????s??: </span>
                      <span>{product?.characteristics?.screenSize}</span>
                    </li>
                    <li>
                      <span>Ekran icaz??si:</span>
                      <span>{product?.characteristics?.displayPermission}</span>
                    </li>
                    <li>
                      <span>Matris tipi:</span>
                      <span>{product?.characteristics?.matrixType}</span>
                    </li>
                    <li>
                      <span>Prosessor tipi:</span>
                      <span>{product?.characteristics?.processorType}</span>
                    </li>
                    <li>
                      <span>??m??liyyat sistemi:</span>
                      <span>{product?.characteristics?.operatingSystem}</span>
                    </li>
                    <li>
                      <span>Akkumulyatorun h??cmi:</span>
                      <span>{product?.characteristics?.batteryCapacity}</span>
                    </li>
                    <li>
                      <span> Simsiz ??arj imkan??: </span>
                      <span>{product?.characteristics?.wirelessCharging}</span>
                    </li>

                    <li>
                      <span> Wi-Fi:</span>
                      <span>{product?.characteristics?.wifi}</span>
                    </li>

                    <li>
                      <span>Bluetooth: </span>
                      <span>{product?.characteristics?.bluetooth}</span>
                    </li>
                    <li>
                      <span>Sudan v?? tozdan qorunma:</span>
                      <span>{product?.characteristics?.protection}</span>
                    </li>
                    <li>
                      <span>D??yi??il??n bil??rzik:</span>
                      <span>{product?.characteristics?.interchangeableBracelet}</span>
                    </li>
                    <li>
                      <span>Bildiri??l??r:</span>
                      <span>{product?.characteristics?.notices}</span>
                    </li>
                    <li>
                      <span>Bil??rzik material??:</span>
                      <span>{product?.characteristics?.braceletMaterial}</span>
                    </li>
                    <li>
                      <span>Korpus Material??:</span>
                      <span>{product?.characteristics?.caseMaterial}</span>
                    </li>
                    <li>
                      <span>??l????l??r: H??nd??rl??y?? / Eni / D??rinliyi:</span>
                      <span>{product?.characteristics?.dimensions}</span>
                    </li>
                    <li>
                      <span>Korpusun r??ngi:</span>
                      <span>{product?.characteristics?.bodyColor}</span>
                    </li>
                    <li>
                      <span>Bil??rziyin r??ngi:</span>
                      <span>{product?.characteristics?.color}</span>
                    </li>
                    <li>
                      <span>Qabla??d??rmaya daxildir:</span>
                      <span>{product?.characteristics?.packagingIncludes}</span>
                    </li>
                    <li>
                      <span>Z??man??t:</span>
                      <span>{product?.characteristics?.garranty}</span>
                    </li>
                  </>
                )}

                {product?.subCategory === 'notebooks' && (
                  <>

                    <li>
                      <span>??m??liyyat sistemi:</span>
                      <span>{product?.characteristics?.operatingSystem}</span>
                    </li>
                    <li>
                      <span>Prosessorun kodu:</span>
                      <span>{product?.characteristics?.processorCode}</span>
                    </li>
                    <li>
                      <span>Prosessor tipi:</span>
                      <span>{product?.characteristics?.processorType}</span>
                    </li>
                    <li>
                      <span>N??v??l??rin say??:</span>
                      <span>{product?.characteristics?.coreAmount}</span>
                    </li>
                    <li>
                      <span>Prosessor tezliyi:</span>
                      <span>{product?.characteristics?.processorFrequency}</span>
                    </li>
                    <li>
                      <span>Operativ yadda??:</span>
                      <span>{product?.characteristics?.RAM}</span>
                    </li>
                    <li>
                      <span>Qura??d??r??lm???? yadda??:</span>
                      <span>{product?.characteristics?.memoryType}</span>
                    </li>
                    <li>
                      <span>Ekran??n ??l????s??:</span>
                      <span>{product?.characteristics?.screenSize}</span>
                    </li>
                    <li>
                      <span>Ekran icaz??si:</span>
                      <span>{product?.characteristics?.displayPermission}</span>
                    </li>
                    <li>
                      <span>Sensor ekran:</span>
                      <span>{product?.characteristics?.touchScreen}</span>
                    </li>
                    <li>
                      <span>Ekran ??rt??y??n??n n??v??:</span>
                      <span>{product?.characteristics?.screenCover}</span>
                    </li>
                    <li>
                      <span>Videokart modeli:</span>
                      <span>{product?.characteristics?.videoCard}</span>
                    </li>
                    <li>
                      <span>HDMI:</span>
                      <span>{product?.characteristics?.hdmi}</span>
                    </li>
                    <li>
                      <span>3,5 mm audio ????x????:</span>
                      <span>{product?.characteristics?.audioOutput}</span>
                    </li>
                    <li>
                      <span>Wi-Fi:</span>
                      <span>{product?.characteristics?.wifi}</span>
                    </li>
                    <li>
                      <span>Bluetooth:</span>
                      <span>{product?.characteristics?.bluetooth}</span>
                    </li>
                    <li>
                      <span>Veb-kamera:</span>
                      <span>{product?.characteristics?.webcam}</span>
                    </li>
                    <li>
                      <span>Qura??d??r??lm???? mikrofon:</span>
                      <span>{product?.characteristics?.michropone}</span>
                    </li>
                    <li>
                      <span>Dinamikl??r??n say??:</span>
                      <span>{product?.characteristics?.numberSpeakers}</span>
                    </li>
                    <li>
                      <span>??l????l??r: H??nd??rl??y?? / Eni / D??rinliyi:</span>
                      <span>{product?.characteristics?.dimensions}</span>
                    </li>
                    <li>
                      <span>????ki:</span>
                      <span>{product?.characteristics?.weight}</span>
                    </li>
                    <li>
                      <span>R??ng:</span>
                      <span>{product?.characteristics?.color}</span>
                    </li>
                    <li>
                      <span>Qabla??d??rmaya daxildir:</span>
                      <span>{product?.characteristics?.packagingIncludes}</span>
                    </li>
                    <li>
                      <span>Z??man??t:</span>
                      <span>{product?.characteristics?.warranty}</span>
                    </li>
                  </>
                )}

                {product?.subCategory === 'refrigerators' && (
                  <>
                    <li>
                      <span>Soyuducu n??v??: </span>
                      <span>{product?.characteristics?.refrigeratorType}</span>
                    </li>

                    <li>
                      <span>Enerji s??rfiyyat?? sinfi:</span>
                      <span>{product?.characteristics?.energyConsumption}</span>
                    </li>

                    <li>
                      <span>Kompressor tipi:</span>
                      <span>{product?.characteristics?.compressorType}</span>
                    </li>
                    <li>
                      <span>Kompressor say??:</span>
                      <span>{product?.characteristics?.numberCompressors}</span>
                    </li>
                    <li>
                      <span>Soyuducu kameran??n yararl?? h??cmi: </span>
                      <span>{product?.characteristics?.refrigerantVolume}</span>
                    </li>
                    <li>
                      <span>Dondurucu kameran??n yararl?? h??cmi: </span>
                      <span>{product?.characteristics?.freezerVolume}</span>
                    </li>
                    <li>
                      <span>Toplam h??cm:</span>
                      <span>{product?.characteristics?.maxSpace}</span>
                    </li>
                    <li>
                      <span>Soyuducu kameran??n donunun a????lmas??:</span>
                      <span>{product?.characteristics?.refrigeratorCompartment}</span>
                    </li>
                    <li>
                      <span>Dondurucu kameran??n b??lm??l??rin say??:</span>
                      <span>{product?.characteristics?.compartmentsFreezer}</span>
                    </li>
                    <li>
                      <span>Qap?? r??fi:</span>
                      <span>{product?.characteristics?.doorShelf}</span>
                    </li>
                    <li>
                      <span>Daxili i??l??qland??rma dondurucu kamera:</span>
                      <span>{product?.characteristics?.lightingFreezer}</span>
                    </li>
                    <li>
                      <span>Daxili i????qland??rma soyuducu kamera:</span>
                      <span>{product?.characteristics?.lightingCooling}</span>
                    </li>
                    <li>
                      <span>Dondurucu kameran??n donun a????lmas??:</span>
                      <span>{product?.characteristics?.defrostingFreezer}</span>
                    </li>
                    <li>
                      <span>Soyuducu kameran??n b??lm??l??rinin say??:</span>
                      <span>{product?.characteristics?.refrigeratingChamber}</span>
                    </li>
                    <li>
                      <span>Dondurucu kameran??n yerl????dirilm??si:</span>
                      <span>{product?.characteristics?.placementFreeze}</span>
                    </li>
                    <li>
                      <span>D??yi????bil??n qap?? y??n??:</span>
                      <span>{product?.characteristics?.reversibleDoor}</span>
                    </li>
                    <li>
                      <span>Qap?? a????q olark??n siqnal verm??:</span>
                      <span>{product?.characteristics?.signal}</span>
                    </li>
                    <li>
                      <span>Buz haz??rlayan:</span>
                      <span>{product?.characteristics?.iceMaker}</span>
                    </li>
                    <li>
                      <span>??l????l??r: H??nd??rl??y?? / Eni / D??rinliyi:</span>
                      <span>{product?.characteristics?.dimensions}</span>
                    </li>
                    <li>
                      <span>????ki:</span>
                      <span>{product?.characteristics?.weight}</span>
                    </li>
                    <li>
                      <span>R??ng:</span>
                      <span>{product?.characteristics?.color}</span>
                    </li>

                    <li>
                      <span>??stehsal???? ??lk??:</span>
                      <span>{product?.characteristics?.producingCountry}</span>
                    </li>
                    <li>
                      <span>Z??man??t:</span>
                      <span>{product?.characteristics?.garranty}</span>
                    </li>

                  </>
                )}

                {product?.subCategory === 'tv' && (
                  <>
                    <li>
                      <span>Televizor n??v??: </span>
                      <span>{product?.characteristics?.tvType}</span>
                    </li>

                    <li>
                      <span>Smart TV:</span>
                      <span>{product?.characteristics?.smartTv}</span>
                    </li>

                    <li>
                      <span>??m??liyyat sistemi:</span>
                      <span>{product?.characteristics?.operatingSystem}</span>
                    </li>
                    <li>
                      <span>Ekran??n ??l????s??:</span>
                      <span>{product?.characteristics?.screenSize}</span>
                    </li>
                    <li>
                      <span>Texnologiya </span>
                      <span>{product?.characteristics?.technology}</span>
                    </li>
                    <li>
                      <span>??????qland??rma n??v??: </span>
                      <span>{product?.characteristics?.lightingType}</span>
                    </li>
                    <li>
                      <span>Ekran format??:</span>
                      <span>{product?.characteristics?.screenFormat}</span>
                    </li>
                    <li>
                      <span>Ekran icaz??si:</span>
                      <span>{product?.characteristics?.displayPermission}</span>
                    </li>
                    <li>
                      <span>Dinamikl??r??n say??:</span>
                      <span>{product?.characteristics?.numberSpeakers}</span>
                    </li>
                    <li>
                      <span>S??s g??c??:</span>
                      <span>{product?.characteristics?.volume}</span>
                    </li>
                    <li>
                      <span>Kompozit giri??:</span>
                      <span>{product?.characteristics?.compositEntry}</span>
                    </li>
                    <li>
                      <span>3,5 mm audio ????x????:</span>
                      <span>{product?.characteristics?.audiOutput}</span>
                    </li>
                    <li>
                      <span>HDMI:</span>
                      <span>{product?.characteristics?.hdmi}</span>
                    </li>
                    <li>
                      <span>Optik ????x????:</span>
                      <span>{product?.characteristics?.opticalOutput}</span>
                    </li>
                    <li>
                      <span>USB:</span>
                      <span>{product?.characteristics?.usb}</span>
                    </li>
                    <li>
                      <span>Ethernet (LAN):</span>
                      <span>{product?.characteristics?.ethernet}</span>
                    </li>
                    <li>
                      <span>Wi-Fi:</span>
                      <span>{product?.characteristics?.wifi}</span>
                    </li>
                    <li>
                      <span>CAM modul:</span>
                      <span>{product?.characteristics?.modul}</span>
                    </li>
                    <li>
                      <span>VESA standart??:</span>
                      <span>{product?.characteristics?.vesa}</span>
                    </li>
                    <li>
                      <span>R??ng:</span>
                      <span>{product?.characteristics?.color}</span>
                    </li>
                    <li>
                      <span>Qabla??d??rmaya daxildir:</span>
                      <span>{product?.characteristics?.packagingIncludes}</span>
                    </li>
                    <li>
                      <span>Z??man??t:</span>
                      <span>{product?.characteristics?.garranty}</span>
                    </li>

                  </>
                )}

                {product?.subCategory === 'washingMachine' && (
                  <>
                    <li>
                      <span>M??hsul tipi: </span>
                      <span>{product?.characteristics?.productType}</span>
                    </li>

                    <li>
                      <span>Paltaryuyan n??v??:</span>
                      <span>{product?.characteristics?.washingType}</span>
                    </li>

                    <li>
                      <span>Y??kl??m?? tipi:</span>
                      <span>{product?.characteristics?.downloadType}</span>
                    </li>
                    <li>
                      <span>Maksimal y??kl??m??:</span>
                      <span>{product?.characteristics?.maximumDownload}</span>
                    </li>
                    <li>
                      <span>M??h??rrik tipi:</span>
                      <span>{product?.characteristics?.engineType}</span>
                    </li>
                    <li>
                      <span>Enerji s??rfiyyat?? sinfi: </span>
                      <span>{product?.characteristics?.energyConsumption}</span>
                    </li>
                    <li>
                      <span>Su s??rfiyyat??:</span>
                      <span>{product?.characteristics?.waterConsumption}</span>
                    </li>
                    <li>
                      <span>Yuyulma sinfi:</span>
                      <span>{product?.characteristics?.washingClass}</span>
                    </li>
                    <li>
                      <span>S??x??lma sinfi:</span>
                      <span>{product?.characteristics?.compressionClass}</span>
                    </li>
                    <li>
                      <span>F??rlanma s??r??ti, d??vr/d??q:</span>
                      <span>{product?.characteristics?.rotationSpeed}</span>
                    </li>
                    <li>
                      <span>Yuma zaman?? s??s s??viyy??si:</span>
                      <span>{product?.characteristics?.duringWashing}</span>
                    </li>
                    <li>
                      <span>S??x??lma zaman?? s??s s??viyy??si:</span>
                      <span>{product?.characteristics?.duringCompression}</span>
                    </li>
                    <li>
                      <span>Proqramlar??n say??:</span>
                      <span>{product?.characteristics?.numberPrograms}</span>
                    </li>
                    <li>
                      <span>VarioPerfect:</span>
                      <span>{product?.characteristics?.varioPerfect}</span>
                    </li>
                    <li>
                      <span>Disbalans??n kontrol edilm??si:</span>
                      <span>{product?.characteristics?.controllingImbalance}</span>
                    </li>
                    <li>
                      <span>S??zmadan m??dafi??:</span>
                      <span>{product?.characteristics?.leakProtection}</span>
                    </li>
                    <li>
                      <span>U??aq kilidi:</span>
                      <span>{product?.characteristics?.childLock}</span>
                    </li>
                    <li>
                      <span>????ki:</span>
                      <span>{product?.characteristics?.weight}</span>
                    </li>
                    <li>
                      <span>R??ng:</span>
                      <span>{product?.characteristics?.color}</span>
                    </li>
                    <li>
                      <span>??l????l??r: H??nd??rl??y?? / Eni / D??rinliyi:</span>
                      <span>{product?.characteristics?.dimensions}</span>
                    </li>

                    <li>
                      <span>Qabla??d??rmaya daxildir:</span>
                      <span>{product?.characteristics?.packagingIncludes}</span>
                    </li>
                    <li>
                      <span>??stehsal???? ??lk??:</span>
                      <span>{product?.characteristics?.producingCountry}</span>
                    </li>
                    <li>
                      <span>Z??man??t:</span>
                      <span>{product?.characteristics?.garranty}</span>
                    </li>

                  </>
                )}

                {product?.subCategory === 'tablets' && (
                  <>
                    <li>
                      <span>M??hsul tipi:</span>
                      <span>{product?.characteristics?.productType}</span>
                    </li>
                    <li>
                      <span>????b??k??:</span>
                      <span>{product?.characteristics?.network}</span>
                    </li>
                    <li>
                      <span>SIM-kart say??:</span>
                      <span>{product?.characteristics?.simNumber}</span>
                    </li>
                    <li>
                      <span>SIM-kart ??l????s??:</span>
                      <span>{product?.characteristics?.simSize}</span>
                    </li>
                    <li>
                      <span>Ekran??n ??l????s??:</span>
                      <span>{product?.characteristics?.screenSize}</span>
                    </li>
                    <li>
                      <span>Ekran icaz??si:</span>
                      <span>{product?.characteristics?.displayPermission}</span>
                    </li>
                    <li>
                      <span>Matris tipi:</span>
                      <span>{product?.characteristics?.matrixType}</span>
                    </li>
                    <li>
                      <span>Operativ yadda??:</span>
                      <span>{product?.characteristics?.operatingMemory}</span>
                    </li>
                    <li>
                      <span>Qura??d??r??lm???? yadda??:</span>
                      <span>{product?.characteristics?.builtMemory}</span>
                    </li>
                    <li>
                      <span>Prosessor tipi:</span>
                      <span>{product?.characteristics?.processorType}</span>
                    </li>
                    <li>
                      <span>N??v??l??rin say??:</span>
                      <span>{product?.characteristics?.numberCores}</span>
                    </li>
                    <li>
                      <span>Prosessor tezliyi:</span>
                      <span>{product?.characteristics?.processorFrequency}</span>
                    </li>
                    <li>
                      <span>??m??liyyat sistemi:</span>
                      <span>{product?.characteristics?.operatingSystem}</span>
                    </li>
                    <li>
                      <span>??sas kamera:</span>
                      <span>{product?.characteristics?.mainCamera}</span>
                    </li>
                    <li>
                      <span>Diafraqma:</span>
                      <span>{product?.characteristics?.diaphragm}</span>
                    </li>
                    <li>
                      <span>Optik zoom:</span>
                      <span>{product?.characteristics?.opticalZoom}</span>
                    </li>
                    <li>
                      <span>Led fl????:</span>
                      <span>{product?.characteristics?.ledFlash}</span>
                    </li>
                    <li>
                      <span>Video ????kili??:</span>
                      <span>{product?.characteristics?.videoShooting}</span>
                    </li>
                    <li>
                      <span>Frontal kamera:</span>
                      <span>{product?.characteristics?.frontCamera}</span>
                    </li>
                    <li>
                      <span>Akkumulyatorun h??cmi:</span>
                      <span>{product?.characteristics?.batteryCapacity}</span>
                    </li>
                    <li>
                      <span>??arj ba??lay??c??s??:</span>
                      <span>{product?.characteristics?.chargingConnector}</span>
                    </li>
                    <li>
                      <span>Wi-Fi:</span>
                      <span>{product?.characteristics?.wifi}</span>
                    </li>
                    <li>
                      <span>Bluetooth:</span>
                      <span>{product?.characteristics?.bluetooth}</span>
                    </li>
                    <li>
                      <span>Naviqasiya sistemi:</span>
                      <span>{product?.characteristics?.navigationSYstem}</span>
                    </li>
                    <li>
                      <span>Sudan v?? tozdan qorunma:</span>
                      <span>{product?.characteristics?.protection}</span>
                    </li>
                    <li>
                      <span>Barmaq izi skaneri:</span>
                      <span>{product?.characteristics?.scanner}</span>
                    </li>
                    <li>
                      <span>Korpus Material??:</span>
                      <span>{product?.characteristics?.bodyMaterial}</span>
                    </li>
                    <li>
                      <span>??l????l??r: H??nd??rl??y?? / Eni / D??rinliyi:</span>
                      <span>{product?.characteristics?.size}</span>
                    </li>
                    <li>
                      <span>????ki:</span>
                      <span>{product?.characteristics?.weight}</span>
                    </li>
                    <li>
                      <span>R??ng:</span>
                      <span>{product?.characteristics?.color}</span>
                    </li>
                    <li>
                      <span>Z??man??t:</span>
                      <span>{product?.characteristics?.garranty}</span>
                    </li>
                  </>


                )}
              </ul>
              <div className="specs-table">
                <div className="specs-table-child">
                  <div onClick={() => toggleDropdown(3)} className="specs-table-title">X??susiyy??tl??r
                    <span className="down-icon">
                      <Image src={chevronDown}
                        width={18}
                        height={18}
                        alt="icon"
                        className={showDropDown[3] ? 'image-icon' : "image-icon-down"}
                      />
                    </span>
                  </div>
                  {showDropDown[3] && <div className={`specs-lists`}>
                    <ul className="specs-table-set">
                      <li>
                        <span>Brend: </span>
                        <span>{product?.characteristics?.brand}</span>
                      </li>
                      {product?.subCategory === 'smartphones' && (
                        <>
                          <li>
                            <span>M??hsul tipi: </span>
                            <span>{product?.characteristics?.smarthponesType}</span>
                          </li>
                          <li>
                            <span>????b??k??:</span>
                            <span>{product?.characteristics?.network}</span>
                          </li>
                          <li>
                            <span>SIM-kart say??:</span>
                            <span>{product?.characteristics?.simcardN}</span>
                          </li>
                          <li>
                            <span>SIM-kart ??l????s??:</span>
                            <span>{product?.characteristics?.simSize}</span>
                          </li>
                          <li>
                            <span> Ekran icaz??si: </span>
                            <span>{product?.characteristics?.screenWarning}</span>
                          </li>

                          <li>
                            <span>Ekran ??l????s??: </span>
                            <span>{product?.characteristics?.screenSize}</span>
                          </li>
                          <li>
                            <span>Matris tipi:</span>
                            <span>{product?.characteristics?.matrixType}</span>
                          </li>
                          <li>
                            <span>Operativ yadda??:</span>
                            <span>{product?.characteristics?.memory}</span>
                          </li>
                          <li>
                            <span>Qura??d??r??lm???? yadda??:</span>
                            <span>{product?.characteristics?.memoryB}</span>
                          </li>
                          <li>
                            <span>Yadda?? kart?? d??st??yi:</span>
                            <span>{product?.characteristics?.cardSupport}</span>
                          </li>
                          <li>
                            <span>Prosessor tipi:</span>
                            <span>{product?.characteristics?.processorType}</span>
                          </li>
                          <li>
                            <span>N??v??l??rin say??:</span>
                            <span>{product?.characteristics?.numberCores}</span>
                          </li>
                          <li>
                            <span>Prosessor tezliyi:</span>
                            <span>{product?.characteristics?.processorFrequency}</span>
                          </li>
                          <li>
                            <span>??m??liyyat sistemi:</span>
                            <span>{product?.characteristics?.operatingSystem}</span>
                          </li>
                          <li>
                            <span>??sas kamera:</span>
                            <span>{product?.characteristics?.mainCamera}</span>
                          </li>
                          <li>
                            <span>Diafraqma:</span>
                            <span>{product?.characteristics?.diaphragm}</span>
                          </li>
                          <li>
                            <span>Avtofokus:</span>
                            <span>{product?.characteristics?.autofocus}</span>
                          </li>
                          <li>
                            <span>Led fl????:</span>
                            <span>{product?.characteristics?.ledFlash}</span>
                          </li>
                          <li>
                            <span>Video ????kili??:</span>
                            <span>{product?.characteristics?.videoShooting}</span>
                          </li>
                          <li>
                            <span>Frontal kamera:</span>
                            <span>{product?.characteristics?.frontCamera}</span>
                          </li>
                          <li>
                            <span>Akkumulyatorun h??cmi:</span>
                            <span>{product?.characteristics?.batteryCapacity}</span>
                          </li>
                          <li>
                            <span>??arj ba??lay??c??s??:</span>
                            <span>{product?.characteristics?.chargingConnector}</span>
                          </li>
                          <li>
                            <span>Wi-Fi:</span>
                            <span>{product?.characteristics?.wifi}</span>
                          </li>
                          <li>
                            <span>Bluetooth:</span>
                            <span>{product?.characteristics?.bluetooth}</span>
                          </li>
                          <li>
                            <span>NFC:</span>
                            <span>{product?.characteristics?.nfc}</span>
                          </li>
                          <li>
                            <span>Naviqasiya sistemi:</span>
                            <span>{product?.characteristics?.navigation}</span>
                          </li>
                          <li>
                            <span>Sudan v?? tozdan qorunma:</span>
                            <span>{product?.characteristics?.protection}</span>
                          </li>
                          <li>
                            <span>Barmaq izi skaneri:</span>
                            <span>{product?.characteristics?.scanner}</span>
                          </li>
                          <li>
                            <span>Korpus Material??:</span>
                            <span>{product?.characteristics?.material}</span>
                          </li>
                          <li>
                            <span>??l????l??r: H??nd??rl??y?? / Eni / D??rinliyi:</span>
                            <span>{product?.characteristics?.dimensions}</span>
                          </li>
                          <li>
                            <span>????ki:</span>
                            <span>{product?.characteristics?.weight}</span>
                          </li>
                          <li>
                            <span>R??ng:</span>
                            <span>{product?.characteristics?.color}</span>
                          </li>
                          <li>
                            <span>Qabla??d??rmaya daxildir:</span>
                            <span>{product?.characteristics?.includes}</span>
                          </li>
                          <li>
                            <span>Z??man??t:</span>
                            <span>{product?.characteristics?.garranty}</span>
                          </li>
                        </>
                      )}

                      {product?.subCategory === 'watches' && (
                        <>
                          <li>
                            <span>Ekran??n ??l????s??: </span>
                            <span>{product?.characteristics?.screenSize}</span>
                          </li>
                          <li>
                            <span>Ekran icaz??si:</span>
                            <span>{product?.characteristics?.displayPermission}</span>
                          </li>
                          <li>
                            <span>Matris tipi:</span>
                            <span>{product?.characteristics?.matrixType}</span>
                          </li>
                          <li>
                            <span>Prosessor tipi:</span>
                            <span>{product?.characteristics?.processorType}</span>
                          </li>
                          <li>
                            <span>??m??liyyat sistemi:</span>
                            <span>{product?.characteristics?.operatingSystem}</span>
                          </li>
                          <li>
                            <span>Akkumulyatorun h??cmi:</span>
                            <span>{product?.characteristics?.batteryCapacity}</span>
                          </li>
                          <li>
                            <span> Simsiz ??arj imkan??: </span>
                            <span>{product?.characteristics?.wirelessCharging}</span>
                          </li>

                          <li>
                            <span> Wi-Fi:</span>
                            <span>{product?.characteristics?.wifi}</span>
                          </li>

                          <li>
                            <span>Bluetooth: </span>
                            <span>{product?.characteristics?.bluetooth}</span>
                          </li>
                          <li>
                            <span>Sudan v?? tozdan qorunma:</span>
                            <span>{product?.characteristics?.protection}</span>
                          </li>
                          <li>
                            <span>D??yi??il??n bil??rzik:</span>
                            <span>{product?.characteristics?.interchangeableBracelet}</span>
                          </li>
                          <li>
                            <span>Bildiri??l??r:</span>
                            <span>{product?.characteristics?.notices}</span>
                          </li>
                          <li>
                            <span>Bil??rzik material??:</span>
                            <span>{product?.characteristics?.braceletMaterial}</span>
                          </li>
                          <li>
                            <span>Korpus Material??:</span>
                            <span>{product?.characteristics?.caseMaterial}</span>
                          </li>
                          <li>
                            <span>??l????l??r: H??nd??rl??y?? / Eni / D??rinliyi:</span>
                            <span>{product?.characteristics?.dimensions}</span>
                          </li>
                          <li>
                            <span>????ki:</span>
                            <span>{product?.characteristics?.weight}</span>
                          </li>
                          <li>
                            <span>Korpusun r??ngi:</span>
                            <span>{product?.characteristics?.bodyColor}</span>
                          </li>
                          <li>
                            <span>Bil??rziyin r??ngi:</span>
                            <span>{product?.characteristics?.braceletColor}</span>
                          </li>
                          <li>
                            <span>Qabla??d??rmaya daxildir:</span>
                            <span>{product?.characteristics?.packagingIncludes}</span>
                          </li>
                          <li>
                            <span>Z??man??t:</span>
                            <span>{product?.characteristics?.garranty}</span>
                          </li>
                        </>
                      )}

                      {product?.subCategory === 'notebooks' && (
                        <>

                          <li>
                            <span>??m??liyyat sistemi:</span>
                            <span>{product?.characteristics?.operatingSystem}</span>
                          </li>
                          <li>
                            <span>Prosessorun kodu:</span>
                            <span>{product?.characteristics?.processorCode}</span>
                          </li>
                          <li>
                            <span>Prosessor tipi:</span>
                            <span>{product?.characteristics?.processorType}</span>
                          </li>
                          <li>
                            <span>N??v??l??rin say??:</span>
                            <span>{product?.characteristics?.coreAmount}</span>
                          </li>
                          <li>
                            <span>Prosessor tezliyi:</span>
                            <span>{product?.characteristics?.processorFrequency}</span>
                          </li>
                          <li>
                            <span>Operativ yadda??:</span>
                            <span>{product?.characteristics?.RAM}</span>
                          </li>
                          <li>
                            <span>Qura??d??r??lm???? yadda??:</span>
                            <span>{product?.characteristics?.memoryType}</span>
                          </li>
                          <li>
                            <span>Ekran??n ??l????s??:</span>
                            <span>{product?.characteristics?.screenSize}</span>
                          </li>
                          <li>
                            <span>Ekran icaz??si:</span>
                            <span>{product?.characteristics?.displayPermission}</span>
                          </li>
                          <li>
                            <span>Sensor ekran:</span>
                            <span>{product?.characteristics?.touchScreen}</span>
                          </li>
                          <li>
                            <span>Ekran ??rt??y??n??n n??v??:</span>
                            <span>{product?.characteristics?.screenCover}</span>
                          </li>
                          <li>
                            <span>Videokart modeli:</span>
                            <span>{product?.characteristics?.videoCard}</span>
                          </li>
                          <li>
                            <span>HDMI:</span>
                            <span>{product?.characteristics?.hdmi}</span>
                          </li>
                          <li>
                            <span>3,5 mm audio ????x????:</span>
                            <span>{product?.characteristics?.audioOutput}</span>
                          </li>
                          <li>
                            <span>Wi-Fi:</span>
                            <span>{product?.characteristics?.wifi}</span>
                          </li>
                          <li>
                            <span>Bluetooth:</span>
                            <span>{product?.characteristics?.bluetooth}</span>
                          </li>
                          <li>
                            <span>Veb-kamera:</span>
                            <span>{product?.characteristics?.webcam}</span>
                          </li>
                          <li>
                            <span>Qura??d??r??lm???? mikrofon:</span>
                            <span>{product?.characteristics?.michropone}</span>
                          </li>
                          <li>
                            <span>Dinamikl??r??n say??:</span>
                            <span>{product?.characteristics?.numberSpeakers}</span>
                          </li>
                          <li>
                            <span>??l????l??r: H??nd??rl??y?? / Eni / D??rinliyi:</span>
                            <span>{product?.characteristics?.dimensions}</span>
                          </li>
                          <li>
                            <span>????ki:</span>
                            <span>{product?.characteristics?.weight}</span>
                          </li>
                          <li>
                            <span>R??ng:</span>
                            <span>{product?.characteristics?.color}</span>
                          </li>
                          <li>
                            <span>Qabla??d??rmaya daxildir:</span>
                            <span>{product?.characteristics?.packagingIncludes}</span>
                          </li>
                          <li>
                            <span>Z??man??t:</span>
                            <span>{product?.characteristics?.warranty}</span>
                          </li>
                        </>
                      )}

                      {product?.subCategory === 'refrigerators' && (
                        <>
                          <li>
                            <span>Soyuducu n??v??: </span>
                            <span>{product?.characteristics?.refrigeratorType}</span>
                          </li>

                          <li>
                            <span>Enerji s??rfiyyat?? sinfi:</span>
                            <span>{product?.characteristics?.energyConsumption}</span>
                          </li>

                          <li>
                            <span>Kompressor tipi:</span>
                            <span>{product?.characteristics?.compressorType}</span>
                          </li>
                          <li>
                            <span>Kompressor say??:</span>
                            <span>{product?.characteristics?.numberCompressors}</span>
                          </li>
                          <li>
                            <span>Soyuducu kameran??n yararl?? h??cmi: </span>
                            <span>{product?.characteristics?.refrigerantVolume}</span>
                          </li>
                          <li>
                            <span>Dondurucu kameran??n yararl?? h??cmi: </span>
                            <span>{product?.characteristics?.freezerVolume}</span>
                          </li>
                          <li>
                            <span>Toplam h??cm:</span>
                            <span>{product?.characteristics?.maxSpace}</span>
                          </li>
                          <li>
                            <span>Soyuducu kameran??n donunun a????lmas??:</span>
                            <span>{product?.characteristics?.refrigeratorCompartment}</span>
                          </li>
                          <li>
                            <span>Dondurucu kameran??n b??lm??l??rin say??:</span>
                            <span>{product?.characteristics?.compartmentsFreezer}</span>
                          </li>
                          <li>
                            <span>Qap?? r??fi:</span>
                            <span>{product?.characteristics?.doorShelf}</span>
                          </li>
                          <li>
                            <span>Daxili i??l??qland??rma dondurucu kamera:</span>
                            <span>{product?.characteristics?.lightingFreezer}</span>
                          </li>
                          <li>
                            <span>Daxili i????qland??rma soyuducu kamera:</span>
                            <span>{product?.characteristics?.lightingCooling}</span>
                          </li>
                          <li>
                            <span>Dondurucu kameran??n donun a????lmas??:</span>
                            <span>{product?.characteristics?.defrostingFreezer}</span>
                          </li>
                          <li>
                            <span>Soyuducu kameran??n b??lm??l??rinin say??:</span>
                            <span>{product?.characteristics?.refrigeratingChamber}</span>
                          </li>
                          <li>
                            <span>Dondurucu kameran??n yerl????dirilm??si:</span>
                            <span>{product?.characteristics?.placementFreeze}</span>
                          </li>
                          <li>
                            <span>D??yi????bil??n qap?? y??n??:</span>
                            <span>{product?.characteristics?.reversibleDoor}</span>
                          </li>
                          <li>
                            <span>Qap?? a????q olark??n siqnal verm??:</span>
                            <span>{product?.characteristics?.signal}</span>
                          </li>
                          <li>
                            <span>Buz haz??rlayan:</span>
                            <span>{product?.characteristics?.iceMaker}</span>
                          </li>
                          <li>
                            <span>??l????l??r: H??nd??rl??y?? / Eni / D??rinliyi:</span>
                            <span>{product?.characteristics?.dimensions}</span>
                          </li>
                          <li>
                            <span>????ki:</span>
                            <span>{product?.characteristics?.weight}</span>
                          </li>
                          <li>
                            <span>R??ng:</span>
                            <span>{product?.characteristics?.color}</span>
                          </li>

                          <li>
                            <span>??stehsal???? ??lk??:</span>
                            <span>{product?.characteristics?.producingCountry}</span>
                          </li>
                          <li>
                            <span>Z??man??t:</span>
                            <span>{product?.characteristics?.garranty}</span>
                          </li>

                        </>
                      )}

                      {product?.subCategory === 'tv' && (
                        <>
                          <li>
                            <span>Televizor n??v??: </span>
                            <span>{product?.characteristics?.tvType}</span>
                          </li>

                          <li>
                            <span>Smart TV:</span>
                            <span>{product?.characteristics?.smartTv}</span>
                          </li>

                          <li>
                            <span>??m??liyyat sistemi:</span>
                            <span>{product?.characteristics?.operatingSystem}</span>
                          </li>
                          <li>
                            <span>Ekran??n ??l????s??:</span>
                            <span>{product?.characteristics?.screenSize}</span>
                          </li>
                          <li>
                            <span>Texnologiya </span>
                            <span>{product?.characteristics?.technology}</span>
                          </li>
                          <li>
                            <span>??????qland??rma n??v??: </span>
                            <span>{product?.characteristics?.lightingType}</span>
                          </li>
                          <li>
                            <span>Ekran format??:</span>
                            <span>{product?.characteristics?.screenFormat}</span>
                          </li>
                          <li>
                            <span>Ekran icaz??si:</span>
                            <span>{product?.characteristics?.displayPermission}</span>
                          </li>
                          <li>
                            <span>Dinamikl??r??n say??:</span>
                            <span>{product?.characteristics?.numberSpeakers}</span>
                          </li>
                          <li>
                            <span>S??s g??c??:</span>
                            <span>{product?.characteristics?.volume}</span>
                          </li>
                          <li>
                            <span>Kompozit giri??:</span>
                            <span>{product?.characteristics?.compositEntry}</span>
                          </li>
                          <li>
                            <span>3,5 mm audio ????x????:</span>
                            <span>{product?.characteristics?.audiOutput}</span>
                          </li>
                          <li>
                            <span>HDMI:</span>
                            <span>{product?.characteristics?.hdmi}</span>
                          </li>
                          <li>
                            <span>Optik ????x????:</span>
                            <span>{product?.characteristics?.opticalOutput}</span>
                          </li>
                          <li>
                            <span>USB:</span>
                            <span>{product?.characteristics?.usb}</span>
                          </li>
                          <li>
                            <span>Ethernet (LAN):</span>
                            <span>{product?.characteristics?.ethernet}</span>
                          </li>
                          <li>
                            <span>Wi-Fi:</span>
                            <span>{product?.characteristics?.wifi}</span>
                          </li>
                          <li>
                            <span>CAM modul:</span>
                            <span>{product?.characteristics?.modul}</span>
                          </li>
                          <li>
                            <span>VESA standart??:</span>
                            <span>{product?.characteristics?.vesa}</span>
                          </li>
                          <li>
                            <span>R??ng:</span>
                            <span>{product?.characteristics?.color}</span>
                          </li>
                          <li>
                            <span>Qabla??d??rmaya daxildir:</span>
                            <span>{product?.characteristics?.packagingIncludes}</span>
                          </li>
                          <li>
                            <span>Z??man??t:</span>
                            <span>{product?.characteristics?.garranty}</span>
                          </li>

                        </>
                      )}

                      {product?.subCategory === 'washingMachine' && (
                        <>
                          <li>
                            <span>M??hsul tipi: </span>
                            <span>{product?.characteristics?.productType}</span>
                          </li>

                          <li>
                            <span>Paltaryuyan n??v??:</span>
                            <span>{product?.characteristics?.washingType}</span>
                          </li>

                          <li>
                            <span>Y??kl??m?? tipi:</span>
                            <span>{product?.characteristics?.downloadType}</span>
                          </li>
                          <li>
                            <span>Maksimal y??kl??m??:</span>
                            <span>{product?.characteristics?.maximumDownload}</span>
                          </li>
                          <li>
                            <span>M??h??rrik tipi:</span>
                            <span>{product?.characteristics?.engineType}</span>
                          </li>
                          <li>
                            <span>Enerji s??rfiyyat?? sinfi: </span>
                            <span>{product?.characteristics?.energyConsumption}</span>
                          </li>
                          <li>
                            <span>Su s??rfiyyat??:</span>
                            <span>{product?.characteristics?.waterConsumption}</span>
                          </li>
                          <li>
                            <span>Yuyulma sinfi:</span>
                            <span>{product?.characteristics?.washingClass}</span>
                          </li>
                          <li>
                            <span>S??x??lma sinfi:</span>
                            <span>{product?.characteristics?.compressionClass}</span>
                          </li>
                          <li>
                            <span>F??rlanma s??r??ti, d??vr/d??q:</span>
                            <span>{product?.characteristics?.rotationSpeed}</span>
                          </li>
                          <li>
                            <span>Yuma zaman?? s??s s??viyy??si:</span>
                            <span>{product?.characteristics?.duringWashing}</span>
                          </li>
                          <li>
                            <span>S??x??lma zaman?? s??s s??viyy??si:</span>
                            <span>{product?.characteristics?.duringCompression}</span>
                          </li>
                          <li>
                            <span>Proqramlar??n say??:</span>
                            <span>{product?.characteristics?.numberPrograms}</span>
                          </li>
                          <li>
                            <span>VarioPerfect:</span>
                            <span>{product?.characteristics?.varioPerfect}</span>
                          </li>
                          <li>
                            <span>Disbalans??n kontrol edilm??si:</span>
                            <span>{product?.characteristics?.controllingImbalance}</span>
                          </li>
                          <li>
                            <span>S??zmadan m??dafi??:</span>
                            <span>{product?.characteristics?.leakProtection}</span>
                          </li>
                          <li>
                            <span>U??aq kilidi:</span>
                            <span>{product?.characteristics?.childLock}</span>
                          </li>
                          <li>
                            <span>????ki:</span>
                            <span>{product?.characteristics?.weight}</span>
                          </li>
                          <li>
                            <span>R??ng:</span>
                            <span>{product?.characteristics?.color}</span>
                          </li>
                          <li>
                            <span>??l????l??r: H??nd??rl??y?? / Eni / D??rinliyi:</span>
                            <span>{product?.characteristics?.dimensions}</span>
                          </li>

                          <li>
                            <span>Qabla??d??rmaya daxildir:</span>
                            <span>{product?.characteristics?.packagingIncludes}</span>
                          </li>
                          <li>
                            <span>??stehsal???? ??lk??:</span>
                            <span>{product?.characteristics?.producingCountry}</span>
                          </li>
                          <li>
                            <span>Z??man??t:</span>
                            <span>{product?.characteristics?.garranty}</span>
                          </li>

                        </>
                      )}

                      {product?.subCategory === 'tablets' && (
                        <>
                          <li>
                            <span>M??hsul tipi:</span>
                            <span>{product?.characteristics?.productType}</span>
                          </li>
                          <li>
                            <span>????b??k??:</span>
                            <span>{product?.characteristics?.network}</span>
                          </li>
                          <li>
                            <span>SIM-kart say??:</span>
                            <span>{product?.characteristics?.simNumber}</span>
                          </li>
                          <li>
                            <span>SIM-kart ??l????s??:</span>
                            <span>{product?.characteristics?.simSize}</span>
                          </li>
                          <li>
                            <span>Ekran??n ??l????s??:</span>
                            <span>{product?.characteristics?.screenSize}</span>
                          </li>
                          <li>
                            <span>Ekran icaz??si:</span>
                            <span>{product?.characteristics?.displayPermission}</span>
                          </li>
                          <li>
                            <span>Matris tipi:</span>
                            <span>{product?.characteristics?.matrixType}</span>
                          </li>
                          <li>
                            <span>Operativ yadda??:</span>
                            <span>{product?.characteristics?.operatingMemory}</span>
                          </li>
                          <li>
                            <span>Qura??d??r??lm???? yadda??:</span>
                            <span>{product?.characteristics?.builtMemory}</span>
                          </li>
                          <li>
                            <span>Prosessor tipi:</span>
                            <span>{product?.characteristics?.processorType}</span>
                          </li>
                          <li>
                            <span>N??v??l??rin say??:</span>
                            <span>{product?.characteristics?.numberCores}</span>
                          </li>
                          <li>
                            <span>Prosessor tezliyi:</span>
                            <span>{product?.characteristics?.processorFrequency}</span>
                          </li>
                          <li>
                            <span>??m??liyyat sistemi:</span>
                            <span>{product?.characteristics?.operatingSystem}</span>
                          </li>
                          <li>
                            <span>??sas kamera:</span>
                            <span>{product?.characteristics?.mainCamera}</span>
                          </li>
                          <li>
                            <span>Diafraqma:</span>
                            <span>{product?.characteristics?.diaphragm}</span>
                          </li>
                          <li>
                            <span>Optik zoom:</span>
                            <span>{product?.characteristics?.opticalZoom}</span>
                          </li>
                          <li>
                            <span>Led fl????:</span>
                            <span>{product?.characteristics?.ledFlash}</span>
                          </li>
                          <li>
                            <span>Video ????kili??:</span>
                            <span>{product?.characteristics?.videoShooting}</span>
                          </li>
                          <li>
                            <span>Frontal kamera:</span>
                            <span>{product?.characteristics?.frontCamera}</span>
                          </li>
                          <li>
                            <span>Akkumulyatorun h??cmi:</span>
                            <span>{product?.characteristics?.batteryCapacity}</span>
                          </li>
                          <li>
                            <span>??arj ba??lay??c??s??:</span>
                            <span>{product?.characteristics?.chargingConnector}</span>
                          </li>
                          <li>
                            <span>Wi-Fi:</span>
                            <span>{product?.characteristics?.wifi}</span>
                          </li>
                          <li>
                            <span>Bluetooth:</span>
                            <span>{product?.characteristics?.bluetooth}</span>
                          </li>
                          <li>
                            <span>Naviqasiya sistemi:</span>
                            <span>{product?.characteristics?.navigationSYstem}</span>
                          </li>
                          <li>
                            <span>Sudan v?? tozdan qorunma:</span>
                            <span>{product?.characteristics?.protection}</span>
                          </li>
                          <li>
                            <span>Barmaq izi skaneri:</span>
                            <span>{product?.characteristics?.scanner}</span>
                          </li>
                          <li>
                            <span>Korpus Material??:</span>
                            <span>{product?.characteristics?.bodyMaterial}</span>
                          </li>
                          <li>
                            <span>??l????l??r: H??nd??rl??y?? / Eni / D??rinliyi:</span>
                            <span>{product?.characteristics?.size}</span>
                          </li>
                          <li>
                            <span>????ki:</span>
                            <span>{product?.characteristics?.weight}</span>
                          </li>
                          <li>
                            <span>R??ng:</span>
                            <span>{product?.characteristics?.color}</span>
                          </li>
                          <li>
                            <span>Z??man??t:</span>
                            <span>{product?.characteristics?.garranty}</span>
                          </li>
                        </>


                      )}
                    </ul>
                  </div>}
                </div>
              </div>
            </div>
            <div className="two-right">
              <div className="card">
                <div className="card-product">
                  <figure className="image-comp">
                    <Image
                      src={product?.image}
                      alt={product?.title}
                      width={258}
                      height={232}
                    />
                  </figure>

                  {product?.hasDiscount && (
                    <div className="product-discount">
                      <div className="discount-price">
                        <span className="icon">{product?.discountAmount}</span>
                        <span className="sale">Na??d al????a END??R??M</span>
                      </div>
                    </div>
                  )}

                  <p className="product-title">{product?.title}</p>
                  <div className="product-buy">
                    <div className="product-price">
                      <span className="price"> Qiym??t</span>
                      <div className="cur">
                        {product?.price}
                      </div>
                    </div>
                    <div className="icons" >
                      <button onClick={() => handleClickOnHeart(product)}><span className="icon-bi" style={{ color: heartColor }}><BiHeart /></span></button>
                    </div>
                  </div>
                  <div className="product-value">
                    <div className="product-childe">
                      <Link href="/">Hiss??-hiss?? ??d??</Link>
                      <div className="month">12 ay, ayda <span className="credit">{product?.characteristics?.credit}</span></div>
                    </div>
                    <div className="product-credit">
                      <Link href="/">Bir klik?? al</Link>
                      <span className="order">S??r??tli sifari??</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Viewed />
        </div>
      </div >
    </>
  );
};

export default SingleProductPage;
