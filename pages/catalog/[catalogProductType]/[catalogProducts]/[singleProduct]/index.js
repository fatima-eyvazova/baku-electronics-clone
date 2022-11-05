import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import dataJson from "../../../../../data/data.json";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { BiHeart } from "react-icons/bi"
import { AiOutlineStar, AiOutlinePieChart } from "react-icons/ai"
import { CgTimer } from "react-icons/cg"
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { useDispatch, useSelector } from "react-redux";
import { addToBasketAction, addToFavoritesAction, addToViewedAction, removeFromFavoritesAction } from "../../../../../store/actions/actions";
import Viewed from "../../../../../components/viewed/Viewed";

const SingleProductPage = () => {
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
    const findedItem = basketProducts?.find((item) => item.product.id === product?.id && item.product.title === product?.title);

    if (!findedItem) {
      dispatch(
        addToBasketAction([...basketProducts, { product: product, count: 1 }])
      );
    } else {
      const filteredProducts = basketProducts?.filter((item) => item.product.id !== product?.id &&
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
      <div>
        <div className="container">
          <div className="catagorys">
            <span className="catagory">Bütün kateqoriyalar</span>
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
                      <span className="sale">Nağd alışa ENDİRİM</span>
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
                    <span className="commet">0 rəy</span>
                    <span className="code">Məhsul kodu:{product?.code}</span>
                  </div>
                </div>

                <div className="discount-two">
                  <span className="price-item">Qiymət</span>
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
                      <span>Bir klikә al</span>
                      <span>Sürətli sifariş</span>
                    </div>
                  </button>
                  <button className="order">
                    <span className="icon"><AiOutlinePieChart /></span>

                    <div className="add">
                      <span>Hissə-hissə ödə</span>
                      <span>12 ay, ayda {product?.characteristics?.credit}</span>
                    </div>
                  </button>
                </div>
              </div>
              <div className="options">
                <div className="options-childe">
                  <p>Ödəniş</p>
                  <ul>
                    <li>Nağd</li>
                    <li>Visa/Mastercard</li>
                    <li>Taksit kartlar</li>
                    <li>Nisyə alış</li>
                  </ul>
                </div>
                <div className="options-childe">
                  <p>Çatdırılma</p>
                  <ul>
                    <li>Mağazadan götür</li>
                    <li>Kuryerlə çatdırılma</li>
                    <li>Sürətli çatdırılma</li>
                  </ul>
                </div>
                <div className="options-childe">
                  <p>Zəmanət və servis</p>
                  <ul>
                    <li>Rəsmi zamanət.</li>
                    <li>14 gün ərzində məhsulun</li>
                    <li>dəyişdirilməsi və ya qaytarılması.</li>
                    <li>Rəsmi servis xidməti.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/* section two */}
          <section className="two">
            <div className="two-left">
              <div className="links">
                <span><Link href="/">Xüsusiyyətlər</Link></span>
                <span><Link href="/">Oxşar məhsullar</Link></span>
                <span><Link href="/">Rəylər (0)</Link></span>

                <span className="question">
                  Sual - cavab
                  ({product?.characteristics?.number})
                </span>
              </div>
              <h1>{product?.title}</h1>
              <span className="features">Xüsusiyyətlər</span>
              <ul className="lists">
                <li>
                  <span>Brend: </span>
                  <span>{product?.characteristics?.brand}</span>
                </li>
                {product?.subCategory === 'smartphones' && (
                  <>
                    <li>
                      <span>Məhsul tipi: </span>
                      <span>{product?.characteristics?.smarthponesType}</span>
                    </li>
                    <li>
                      <span>Şəbəkə:</span>
                      <span>{product?.characteristics?.network}</span>
                    </li>
                    <li>
                      <span>SIM-kart sayı:</span>
                      <span>{product?.characteristics?.simcardN}</span>
                    </li>
                    <li>
                      <span>SIM-kart ölçüsü:</span>
                      <span>{product?.characteristics?.simSize}</span>
                    </li>
                    <li>
                      <span> Ekran icazəsi: </span>
                      <span>{product?.characteristics?.screenWarning}</span>
                    </li>

                    <li>
                      <span>Ekran ölçüsü: </span>
                      <span>{product?.characteristics?.screenSize}</span>
                    </li>
                    <li>
                      <span>Matris tipi:</span>
                      <span>{product?.characteristics?.matrixType}</span>
                    </li>
                    <li>
                      <span>Operativ yaddaş:</span>
                      <span>{product?.characteristics?.memory}</span>
                    </li>
                    <li>
                      <span>Quraşdırılmış yaddaş:</span>
                      <span>{product?.characteristics?.memoryB}</span>
                    </li>
                    <li>
                      <span>Yaddaş kartı dəstəyi:</span>
                      <span>{product?.characteristics?.cardSupport}</span>
                    </li>
                    <li>
                      <span>Prosessor tipi:</span>
                      <span>{product?.characteristics?.processorType}</span>
                    </li>
                    <li>
                      <span>Nüvələrin sayı:</span>
                      <span>{product?.characteristics?.numberCores}</span>
                    </li>
                    <li>
                      <span>Prosessor tezliyi:</span>
                      <span>{product?.characteristics?.processorFrequency}</span>
                    </li>
                    <li>
                      <span>Əməliyyat sistemi:</span>
                      <span>{product?.characteristics?.operatingSystem}</span>
                    </li>
                    <li>
                      <span>Əsas kamera:</span>
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
                      <span>Led fləş:</span>
                      <span>{product?.characteristics?.ledFlash}</span>
                    </li>
                    <li>
                      <span>Video çəkiliş:</span>
                      <span>{product?.characteristics?.videoShooting}</span>
                    </li>
                    <li>
                      <span>Frontal kamera:</span>
                      <span>{product?.characteristics?.frontCamera}</span>
                    </li>
                    <li>
                      <span>Akkumulyatorun həcmi:</span>
                      <span>{product?.characteristics?.batteryCapacity}</span>
                    </li>
                    <li>
                      <span>Şarj bağlayıcısı:</span>
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
                      <span>Sudan və tozdan qorunma:</span>
                      <span>{product?.characteristics?.protection}</span>
                    </li>
                    <li>
                      <span>Barmaq izi skaneri:</span>
                      <span>{product?.characteristics?.scanner}</span>
                    </li>
                    <li>
                      <span>Korpus Materialı:</span>
                      <span>{product?.characteristics?.material}</span>
                    </li>
                    <li>
                      <span>Ölçülər: Hündürlüyü / Eni / Dərinliyi:</span>
                      <span>{product?.characteristics?.dimensions}</span>
                    </li>
                    <li>
                      <span>Çəki:</span>
                      <span>{product?.characteristics?.weight}</span>
                    </li>
                    <li>
                      <span>Rəng:</span>
                      <span>{product?.characteristics?.color}</span>
                    </li>
                    <li>
                      <span>Qablaşdırmaya daxildir:</span>
                      <span>{product?.characteristics?.includes}</span>
                    </li>
                    <li>
                      <span>Zәmanәt:</span>
                      <span>{product?.characteristics?.garranty}</span>
                    </li>
                  </>
                )}

                {product?.subCategory === 'watches' && (
                  <>
                    <li>
                      <span>Ekranın ölçüsü: </span>
                      <span>{product?.characteristics?.screenSize}</span>
                    </li>
                    <li>
                      <span>Ekran icazəsi:</span>
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
                      <span>Əməliyyat sistemi:</span>
                      <span>{product?.characteristics?.operatingSystem}</span>
                    </li>
                    <li>
                      <span>Akkumulyatorun həcmi:</span>
                      <span>{product?.characteristics?.batteryCapacity}</span>
                    </li>
                    <li>
                      <span> Simsiz şarj imkanı: </span>
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
                      <span>Sudan və tozdan qorunma:</span>
                      <span>{product?.characteristics?.protection}</span>
                    </li>
                    <li>
                      <span>Dəyişilən bilərzik:</span>
                      <span>{product?.characteristics?.interchangeableBracelet}</span>
                    </li>
                    <li>
                      <span>Bildirişlər:</span>
                      <span>{product?.characteristics?.notices}</span>
                    </li>
                    <li>
                      <span>Bilərzik materialı:</span>
                      <span>{product?.characteristics?.braceletMaterial}</span>
                    </li>
                    <li>
                      <span>Korpus Materialı:</span>
                      <span>{product?.characteristics?.caseMaterial}</span>
                    </li>
                    <li>
                      <span>Ölçülər: Hündürlüyü / Eni / Dərinliyi:</span>
                      <span>{product?.characteristics?.dimensions}</span>
                    </li>
                    <li>
                      <span>Çəki:</span>
                      <span>{product?.characteristics?.weight}</span>
                    </li>
                    <li>
                      <span>Korpusun rəngi:</span>
                      <span>{product?.characteristics?.bodyColor}</span>
                    </li>
                    <li>
                      <span>Bilərziyin rəngi:</span>
                      <span>{product?.characteristics?.braceletColor}</span>
                    </li>
                    <li>
                      <span>Qablaşdırmaya daxildir:</span>
                      <span>{product?.characteristics?.packagingIncludes}</span>
                    </li>
                    <li>
                      <span>Zәmanәt:</span>
                      <span>{product?.characteristics?.garranty}</span>
                    </li>
                  </>
                )}

                {product?.subCategory === 'notebooks' && (
                  <>

                    <li>
                      <span>Əməliyyat sistemi:</span>
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
                      <span>Nüvələrin sayı:</span>
                      <span>{product?.characteristics?.coreAmount}</span>
                    </li>
                    <li>
                      <span>Prosessor tezliyi:</span>
                      <span>{product?.characteristics?.processorFrequency}</span>
                    </li>
                    <li>
                      <span>Operativ yaddaş:</span>
                      <span>{product?.characteristics?.RAM}</span>
                    </li>
                    <li>
                      <span>Quraşdırılmış yaddaş:</span>
                      <span>{product?.characteristics?.memoryType}</span>
                    </li>
                    <li>
                      <span>Ekranın ölçüsü:</span>
                      <span>{product?.characteristics?.screenSize}</span>
                    </li>
                    <li>
                      <span>Ekran icazəsi:</span>
                      <span>{product?.characteristics?.displayPermission}</span>
                    </li>
                    <li>
                      <span>Sensor ekran:</span>
                      <span>{product?.characteristics?.touchScreen}</span>
                    </li>
                    <li>
                      <span>Ekran örtüyünün növü:</span>
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
                      <span>3,5 mm audio çıxış:</span>
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
                      <span>Quraşdırılmış mikrofon:</span>
                      <span>{product?.characteristics?.michropone}</span>
                    </li>
                    <li>
                      <span>Dinamiklərın sayı:</span>
                      <span>{product?.characteristics?.numberSpeakers}</span>
                    </li>
                    <li>
                      <span>Ölçülər: Hündürlüyü / Eni / Dərinliyi:</span>
                      <span>{product?.characteristics?.dimensions}</span>
                    </li>
                    <li>
                      <span>Çəki:</span>
                      <span>{product?.characteristics?.weight}</span>
                    </li>
                    <li>
                      <span>Rəng:</span>
                      <span>{product?.characteristics?.color}</span>
                    </li>
                    <li>
                      <span>Qablaşdırmaya daxildir:</span>
                      <span>{product?.characteristics?.packagingIncludes}</span>
                    </li>
                    <li>
                      <span>Zәmanәt:</span>
                      <span>{product?.characteristics?.warranty}</span>
                    </li>
                  </>
                )}

                {product?.subCategory === 'refrigerators' && (
                  <>
                    <li>
                      <span>Soyuducu növü: </span>
                      <span>{product?.characteristics?.refrigeratorType}</span>
                    </li>

                    <li>
                      <span>Enerji sərfiyyatı sinfi:</span>
                      <span>{product?.characteristics?.energyConsumption}</span>
                    </li>

                    <li>
                      <span>Kompressor tipi:</span>
                      <span>{product?.characteristics?.compressorType}</span>
                    </li>
                    <li>
                      <span>Kompressor sayı:</span>
                      <span>{product?.characteristics?.numberCompressors}</span>
                    </li>
                    <li>
                      <span>Soyuducu kameranın yararlı həcmi: </span>
                      <span>{product?.characteristics?.refrigerantVolume}</span>
                    </li>
                    <li>
                      <span>Dondurucu kameranın yararlı həcmi: </span>
                      <span>{product?.characteristics?.freezerVolume}</span>
                    </li>
                    <li>
                      <span>Toplam həcm:</span>
                      <span>{product?.characteristics?.maxSpace}</span>
                    </li>
                    <li>
                      <span>Soyuducu kameranın donunun açılması:</span>
                      <span>{product?.characteristics?.refrigeratorCompartment}</span>
                    </li>
                    <li>
                      <span>Dondurucu kameranın bölmələrin sayı:</span>
                      <span>{product?.characteristics?.compartmentsFreezer}</span>
                    </li>
                    <li>
                      <span>Qapı rəfi:</span>
                      <span>{product?.characteristics?.doorShelf}</span>
                    </li>
                    <li>
                      <span>Daxili işlıqlandırma dondurucu kamera:</span>
                      <span>{product?.characteristics?.lightingFreezer}</span>
                    </li>
                    <li>
                      <span>Daxili işıqlandırma soyuducu kamera:</span>
                      <span>{product?.characteristics?.lightingCooling}</span>
                    </li>
                    <li>
                      <span>Dondurucu kameranın donun açılması:</span>
                      <span>{product?.characteristics?.defrostingFreezer}</span>
                    </li>
                    <li>
                      <span>Soyuducu kameranın bölmələrinin sayı:</span>
                      <span>{product?.characteristics?.refrigeratingChamber}</span>
                    </li>
                    <li>
                      <span>Dondurucu kameranın yerləşdirilməsi:</span>
                      <span>{product?.characteristics?.placementFreeze}</span>
                    </li>
                    <li>
                      <span>Dəyişəbilən qapı yönü:</span>
                      <span>{product?.characteristics?.reversibleDoor}</span>
                    </li>
                    <li>
                      <span>Qapı açıq olarkən siqnal vermə:</span>
                      <span>{product?.characteristics?.signal}</span>
                    </li>
                    <li>
                      <span>Buz hazırlayan:</span>
                      <span>{product?.characteristics?.iceMaker}</span>
                    </li>
                    <li>
                      <span>Ölçülər: Hündürlüyü / Eni / Dərinliyi:</span>
                      <span>{product?.characteristics?.dimensions}</span>
                    </li>
                    <li>
                      <span>Çəki:</span>
                      <span>{product?.characteristics?.weight}</span>
                    </li>
                    <li>
                      <span>Rəng:</span>
                      <span>{product?.characteristics?.color}</span>
                    </li>

                    <li>
                      <span>İstehsalçı ölkə:</span>
                      <span>{product?.characteristics?.producingCountry}</span>
                    </li>
                    <li>
                      <span>Zәmanәt:</span>
                      <span>{product?.characteristics?.garranty}</span>
                    </li>

                  </>
                )}

                {product?.subCategory === 'tv' && (
                  <>
                    <li>
                      <span>Televizor növü: </span>
                      <span>{product?.characteristics?.tvType}</span>
                    </li>

                    <li>
                      <span>Smart TV:</span>
                      <span>{product?.characteristics?.smartTv}</span>
                    </li>

                    <li>
                      <span>Əməliyyat sistemi:</span>
                      <span>{product?.characteristics?.operatingSystem}</span>
                    </li>
                    <li>
                      <span>Ekranın ölçüsü:</span>
                      <span>{product?.characteristics?.screenSize}</span>
                    </li>
                    <li>
                      <span>Texnologiya </span>
                      <span>{product?.characteristics?.technology}</span>
                    </li>
                    <li>
                      <span>İşıqlandırma növü: </span>
                      <span>{product?.characteristics?.lightingType}</span>
                    </li>
                    <li>
                      <span>Ekran formatı:</span>
                      <span>{product?.characteristics?.screenFormat}</span>
                    </li>
                    <li>
                      <span>Ekran icazəsi:</span>
                      <span>{product?.characteristics?.displayPermission}</span>
                    </li>
                    <li>
                      <span>Dinamiklərın sayı:</span>
                      <span>{product?.characteristics?.numberSpeakers}</span>
                    </li>
                    <li>
                      <span>Səs gücü:</span>
                      <span>{product?.characteristics?.volume}</span>
                    </li>
                    <li>
                      <span>Kompozit giriş:</span>
                      <span>{product?.characteristics?.compositEntry}</span>
                    </li>
                    <li>
                      <span>3,5 mm audio çıxış:</span>
                      <span>{product?.characteristics?.audiOutput}</span>
                    </li>
                    <li>
                      <span>HDMI:</span>
                      <span>{product?.characteristics?.hdmi}</span>
                    </li>
                    <li>
                      <span>Optik çıxış:</span>
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
                      <span>VESA standartı:</span>
                      <span>{product?.characteristics?.vesa}</span>
                    </li>
                    <li>
                      <span>Rəng:</span>
                      <span>{product?.characteristics?.color}</span>
                    </li>
                    <li>
                      <span>Qablaşdırmaya daxildir:</span>
                      <span>{product?.characteristics?.packagingIncludes}</span>
                    </li>
                    <li>
                      <span>Zәmanәt:</span>
                      <span>{product?.characteristics?.garranty}</span>
                    </li>

                  </>
                )}

                {product?.subCategory === 'washingMachine' && (
                  <>
                    <li>
                      <span>Məhsul tipi: </span>
                      <span>{product?.characteristics?.productType}</span>
                    </li>

                    <li>
                      <span>Paltaryuyan növü:</span>
                      <span>{product?.characteristics?.washingType}</span>
                    </li>

                    <li>
                      <span>Yükləmə tipi:</span>
                      <span>{product?.characteristics?.downloadType}</span>
                    </li>
                    <li>
                      <span>Maksimal yükləmə:</span>
                      <span>{product?.characteristics?.maximumDownload}</span>
                    </li>
                    <li>
                      <span>Mühərrik tipi:</span>
                      <span>{product?.characteristics?.engineType}</span>
                    </li>
                    <li>
                      <span>Enerji sərfiyyatı sinfi: </span>
                      <span>{product?.characteristics?.energyConsumption}</span>
                    </li>
                    <li>
                      <span>Su sərfiyyatı:</span>
                      <span>{product?.characteristics?.waterConsumption}</span>
                    </li>
                    <li>
                      <span>Yuyulma sinfi:</span>
                      <span>{product?.characteristics?.washingClass}</span>
                    </li>
                    <li>
                      <span>Sıxılma sinfi:</span>
                      <span>{product?.characteristics?.compressionClass}</span>
                    </li>
                    <li>
                      <span>Fırlanma sürəti, dövr/dəq:</span>
                      <span>{product?.characteristics?.rotationSpeed}</span>
                    </li>
                    <li>
                      <span>Yuma zamanı səs səviyyəsi:</span>
                      <span>{product?.characteristics?.duringWashing}</span>
                    </li>
                    <li>
                      <span>Sıxılma zamanı səs səviyyəsi:</span>
                      <span>{product?.characteristics?.duringCompression}</span>
                    </li>
                    <li>
                      <span>Proqramların sayı:</span>
                      <span>{product?.characteristics?.numberPrograms}</span>
                    </li>
                    <li>
                      <span>VarioPerfect:</span>
                      <span>{product?.characteristics?.varioPerfect}</span>
                    </li>
                    <li>
                      <span>Disbalansın kontrol edilməsi:</span>
                      <span>{product?.characteristics?.controllingImbalance}</span>
                    </li>
                    <li>
                      <span>Sızmadan müdafiə:</span>
                      <span>{product?.characteristics?.leakProtection}</span>
                    </li>
                    <li>
                      <span>Uşaq kilidi:</span>
                      <span>{product?.characteristics?.childLock}</span>
                    </li>
                    <li>
                      <span>Çəki:</span>
                      <span>{product?.characteristics?.weight}</span>
                    </li>
                    <li>
                      <span>Rəng:</span>
                      <span>{product?.characteristics?.color}</span>
                    </li>
                    <li>
                      <span>Ölçülər: Hündürlüyü / Eni / Dərinliyi:</span>
                      <span>{product?.characteristics?.dimensions}</span>
                    </li>

                    <li>
                      <span>Qablaşdırmaya daxildir:</span>
                      <span>{product?.characteristics?.packagingIncludes}</span>
                    </li>
                    <li>
                      <span>İstehsalçı ölkə:</span>
                      <span>{product?.characteristics?.producingCountry}</span>
                    </li>
                    <li>
                      <span>Zәmanәt:</span>
                      <span>{product?.characteristics?.garranty}</span>
                    </li>

                  </>
                )}

                {product?.subCategory === 'tablets' && (
                  <>
                    <li>
                      <span>Məhsul tipi:</span>
                      <span>{product?.characteristics?.productType}</span>
                    </li>
                    <li>
                      <span>Şəbəkə:</span>
                      <span>{product?.characteristics?.network}</span>
                    </li>
                    <li>
                      <span>SIM-kart sayı:</span>
                      <span>{product?.characteristics?.simNumber}</span>
                    </li>
                    <li>
                      <span>SIM-kart ölçüsü:</span>
                      <span>{product?.characteristics?.simSize}</span>
                    </li>
                    <li>
                      <span>Ekranın ölçüsü:</span>
                      <span>{product?.characteristics?.screenSize}</span>
                    </li>
                    <li>
                      <span>Ekran icazəsi:</span>
                      <span>{product?.characteristics?.displayPermission}</span>
                    </li>
                    <li>
                      <span>Matris tipi:</span>
                      <span>{product?.characteristics?.matrixType}</span>
                    </li>
                    <li>
                      <span>Operativ yaddaş:</span>
                      <span>{product?.characteristics?.operatingMemory}</span>
                    </li>
                    <li>
                      <span>Quraşdırılmış yaddaş:</span>
                      <span>{product?.characteristics?.builtMemory}</span>
                    </li>
                    <li>
                      <span>Prosessor tipi:</span>
                      <span>{product?.characteristics?.processorType}</span>
                    </li>
                    <li>
                      <span>Nüvələrin sayı:</span>
                      <span>{product?.characteristics?.numberCores}</span>
                    </li>
                    <li>
                      <span>Prosessor tezliyi:</span>
                      <span>{product?.characteristics?.processorFrequency}</span>
                    </li>
                    <li>
                      <span>Əməliyyat sistemi:</span>
                      <span>{product?.characteristics?.operatingSystem}</span>
                    </li>
                    <li>
                      <span>Əsas kamera:</span>
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
                      <span>Led fləş:</span>
                      <span>{product?.characteristics?.ledFlash}</span>
                    </li>
                    <li>
                      <span>Video çəkiliş:</span>
                      <span>{product?.characteristics?.videoShooting}</span>
                    </li>
                    <li>
                      <span>Frontal kamera:</span>
                      <span>{product?.characteristics?.frontCamera}</span>
                    </li>
                    <li>
                      <span>Akkumulyatorun həcmi:</span>
                      <span>{product?.characteristics?.batteryCapacity}</span>
                    </li>
                    <li>
                      <span>Şarj bağlayıcısı:</span>
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
                      <span>Sudan və tozdan qorunma:</span>
                      <span>{product?.characteristics?.protection}</span>
                    </li>
                    <li>
                      <span>Barmaq izi skaneri:</span>
                      <span>{product?.characteristics?.scanner}</span>
                    </li>
                    <li>
                      <span>Korpus Materialı:</span>
                      <span>{product?.characteristics?.bodyMaterial}</span>
                    </li>
                    <li>
                      <span>Ölçülər: Hündürlüyü / Eni / Dərinliyi:</span>
                      <span>{product?.characteristics?.size}</span>
                    </li>
                    <li>
                      <span>Çəki:</span>
                      <span>{product?.characteristics?.weight}</span>
                    </li>
                    <li>
                      <span>Rəng:</span>
                      <span>{product?.characteristics?.color}</span>
                    </li>
                    <li>
                      <span>Zәmanәt:</span>
                      <span>{product?.characteristics?.garranty}</span>
                    </li>
                  </>


                )}
              </ul>
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
                        <span className="sale">Nağd alışa ENDİRİM</span>
                      </div>
                    </div>
                  )}

                  <p className="product-title">{product?.title}</p>
                  <div className="product-buy">
                    <div className="product-price">
                      <span className="price"> Qiymət</span>
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
                      <Link href="/">Hissə-hissə ödə</Link>
                      <div className="month">12 ay, ayda <span className="credit">{product?.characteristics?.credit}</span></div>
                    </div>
                    <div className="product-credit">
                      <Link href="/">Bir klikә al</Link>
                      <span className="order">Sürətli sifariş</span>
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
