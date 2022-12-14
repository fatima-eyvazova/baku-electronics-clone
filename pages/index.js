import Image from "next/image";
import Link from 'next/link';
import slider1 from "../public/images/slider1.jpeg"
import slider2 from "../public/images/slider2.jpeg"
import slider3 from "../public/images/slider3.jpeg"
import slider4 from "../public/images/slider4.jpeg"
import slider5 from "../public/images/slider5.jpeg"
import slider6 from "../public/images/slider6.jpeg"
import slider7 from "../public/images/slider7.jpeg"
import slider8 from "../public/images/slider8.jpeg"
import slider9 from "../public/images/slider9.jpeg"
import slider10 from "../public/images/slider10.jpeg"
import slider11 from "../public/images/slider11.jpeg"
import slider12 from "../public/images/slider12.jpeg"
import slider13 from "../public/images/slider13.jpeg"
// icons
import { MdOutlineArrowForwardIos } from "react-icons/md";
import ProductCard from "../components/productCard/ProductCard";
import dataJson from "../data/data.json";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Viewed from "../components/viewed/Viewed";
import News from "../components/news/News";
import CustomHead from "../components/customHead/customHead";
import ItemsCarousel from "react-items-carousel";

export default function Home() {
  const [data, setData] = useState();
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  useEffect(() => {
    setData(dataJson);
  }, []);

  return (
    <>
      <div className="container">
        <CustomHead title='Baku Electronics Home' />
        {/* section aside-swiper */}
        <section className="aside-swiper" >
          <aside>
            <div className="aside">
              <ul className="content-childe">
                <li className="child">
                  <Link href="/catalog/telefonlar-qadcetler">
                    Telefonlar, planşetlər və qadcetlər
                  </Link>
                  <span className="span">
                    <MdOutlineArrowForwardIos />
                  </span>
                  <ul className="dropdawn">
                    <li>
                      <Link href="/catalog/telefonlar-qadcetler/smartphones">Smartfonlar, mobil telefonlar</Link>
                    </li>
                    <li>
                      <Link href="/catalog/telefonlar-qadcetler/tablets">Planşetlər</Link>
                    </li>
                    <li>
                      <Link href="/catalog/telefonlar-qadcetler/watches">Smart saatlar və fitnes qolbaqları</Link>
                    </li>

                    <li>
                      <Link href="/catalog/telefonlar-qadcetler/headphones">Qulaqlıqlar</Link>
                    </li>
                    <li>
                      <Link href="/catalog/telefonlar-qadcetler/phones">Ev və ofis telefonları</Link>
                    </li>
                    <li>
                      <Link href="/catalog/telefonlar-qadcetler/hours">Qol saatları</Link>
                    </li>
                    <li>
                      <Link href="/catalog/telefonlar-qadcetler/accumulators">Xarici akkumulyatorlar, Power Bank</Link>
                    </li>
                    <li>
                      <Link href="/catalog/telefonlar-qadcetler/accessories">Aksesuarlar</Link>
                      <span>
                        <MdOutlineArrowForwardIos />
                      </span>
                      <ul className="dropdawn-child">
                        <li >
                          <Link href="/catalog/telefonlar-qadcetler/accessories/usb">USB və AUX kabellər</Link></li>
                        <li><Link href="/catalog/telefonlar-qadcetler/accessories/ceys">Telefon üçün keyslər</Link></li>
                        <li><Link href="/catalog/telefonlar-qadcetler/accessories/kart">Yaddaş kartları</Link></li>
                        <li><Link href="/catalog/telefonlar-qadcetler/accessories/protectors">Ekran qoruyucuları və plyonkalar</Link></li>
                        <li><Link href="/catalog/telefonlar-qadcetler/accessories/adapters">Adapterlər</Link></li>
                        <li><Link href="/catalog/telefonlar-qadcetler/accessories/selfieSticks">Selfi çubuqları və ştativlər</Link></li>
                        <li><Link href="/catalog/telefonlar-qadcetler/accessories/triggers">Smartfon üçün qeympadlar, triqqerlər</Link></li>
                        <li><Link href="/catalog/telefonlar-qadcetler/accessories/various">Müxtəlif</Link></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="child">
                  <Link href="/catalog/tv-audio-video">Televizorlar, audio-video və foto</Link>
                  <span>
                    <MdOutlineArrowForwardIos />
                  </span>
                  <ul className="dropdawn">
                    <li>
                      <Link href="/catalog/tv-audio-video/tv">Televizorlar</Link>
                    </li>
                    <li>
                      <Link href="/catalog/tv-audio-video/cinema">Ev kinoteatrları və saundbarlar</Link>
                    </li>
                    <li>
                      <Link href="catalog/tv-audio-video/music-centers">Musiqi mərkəzləri</Link>
                    </li>

                    <li>
                      <Link href="/catalog/tv-audio-video/speakers">
                        Portativ dinamiklər və akustik sistemlər
                      </Link>
                    </li>
                    <li>
                      <Link href="/catalog/tv-audio-video/tv-boxes">TV bokslar</Link>
                    </li>
                    <li>
                      <Link href="/catalog/tv-audio-video/projectors">Proyektorlar</Link>
                    </li>
                    <li>
                      <Link href="/catalog/tv-audio-video/action-cameras">Ekşn kameralar</Link>
                    </li>
                    <li>
                      <Link href="/catalog/tv-audio-video/cameras">Fotoaparatlar</Link>
                    </li>
                    <li>
                      <Link href="/catalog/tv-audio-video/accessories">Aksesuarlar</Link>
                      <span>
                        <MdOutlineArrowForwardIos />
                      </span>
                      <ul className="dropdawn-child">
                        <li><Link href="/catalog/tv-audio-video/accessories/wallHangers">Kronşteyn və divar asılqanları</Link></li>
                        <li><Link href="/catalog/tv-audio-video/accessories/tvStands">TV tumbalar</Link></li>
                        <li><Link href="/catalog/tv-audio-video/accessories/hdmi">HDMI / Audio / Video kabelləri</Link></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="child">
                  <Link href="/catalog/noutbuklar-kompyuterler/">Notbuklar və kompüter texnikası</Link>
                  <span>
                    <MdOutlineArrowForwardIos />
                  </span>
                  <ul className="dropdawn">
                    <li>
                      <Link href="/catalog/noutbuklar-kompyuterler/notebooks">Notbuklar</Link>
                    </li>
                    <li>
                      <Link href="/catalog/noutbuklar-kompyuterler/predator-thronos-computers">Predator Thronos kompüterləri</Link>
                    </li>
                    <li>
                      <Link href="/catalog/noutbuklar-kompyuterler/desktop-computers">Masaüstü kompüterlər</Link>
                    </li>

                    <li>
                      <Link href="/catalog/noutbuklar-kompyuterler/monoblocks">Monobloklar</Link>
                    </li>
                    <li>
                      <Link href="/catalog/noutbuklar-kompyuterler/monitors">Monitorlar</Link>
                    </li>
                    <li>
                      <Link href="/catalog/noutbuklar-kompyuterler/printers-and-cartridges">Printerlər və kartriclər</Link>
                      <span>
                        <MdOutlineArrowForwardIos />
                      </span>
                      <ul className="dropdawn-child">
                        <li><Link href="/catalog/noutbuklar-kompyuterler/printers-and-cartridges/printers">Printerlər</Link></li>
                        <li><Link href="/catalog/noutbuklar-kompyuterler/printers-and-cartridges/cartridges">Kartriclər</Link></li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/catalog/noutbuklar-kompyuterler/mouses">Klaviatura və kompüter siçanları</Link>
                    </li>
                    <li>
                      <Link href="/catalog/noutbuklar-kompyuterler/network">Şəbəkə avadanlığı</Link>
                    </li>
                    <li>
                      <Link href="/catalog/noutbuklar-kompyuterler/hdd-and-ssd">Xarici toplayıcı disklər HDD və SSD</Link>
                    </li>
                    <li>
                      <Link href="/catalog/noutbuklar-kompyuterler/accessories">Aksesuarlar</Link>
                      <span>
                        <MdOutlineArrowForwardIos />
                      </span>
                      <ul className="dropdawn-child">
                        <li><Link href="/catalog/noutbuklar-kompyuterler/accessories/flashCollector">Fleş toplayıcı</Link></li>
                        <li><Link href="/catalog/noutbuklar-kompyuterler/accessories/webCamera">Veb kameralar</Link></li>
                        <li><Link href="/catalog/noutbuklar-kompyuterler/accessories/ipCamer">IP kameralar</Link></li>
                        <li><Link href="/catalog/noutbuklar-kompyuterler/accessories/microphones">Mikrofonlar</Link></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="child">
                  <Link href="/catalog/iqlim-texnikasi/">Kondisionerlər və digər iqlim texnikası</Link>
                  <span>
                    <MdOutlineArrowForwardIos />
                  </span>
                  <ul className="dropdawn">
                    <li>
                      <Link href="/catalog/iqlim-texnikasi/kombi/">Kombi</Link>
                    </li>
                    <li>
                      <Link href="/catalog/iqlim-texnikasi/kondisionerlər/">Kondisionerlər</Link>
                    </li>
                    <li>
                      <Link href="/catalog/iqlim-texnikasi/su-qizdiricilari/">Su qızdırıcıları, qazanlar, kolonkalar</Link>
                    </li>

                    <li>
                      <Link href="/catalog/iqlim-texnikasi/qizdirici-radiatorlar/">Kombi radiatorları</Link>
                    </li>
                    <li>
                      <Link href="/catalog/iqlim-texnikasi/konvektorlar/">Konvektorlar</Link>
                    </li>
                    <li>
                      <Link href="/catalog/iqlim-texnikasi/mikroiqlim/">Mikroiqlim</Link>
                    </li>
                    <li>
                      <Link href="/catalog/iqlim-texnikasi/ventilyatorlar/">Ventilyatorlar</Link>
                    </li>
                    <li>
                      <Link href="/catalog/iqlim-texnikasi/accessories/">Aksesuarlar</Link>
                    </li>
                    <li>
                      <Link href="/catalog/iqlim-texnikasi/merkezlesdirilmis-isitme-soyutma-havalandirma/">
                        Mərkəzləşdirilmiş isitmə, soyutma və havalandırma
                        sistemləri
                      </Link>
                      <span>
                        <MdOutlineArrowForwardIos />
                      </span>
                      <ul className="dropdawn-child">
                        <li><Link href="/catalog/iqlim-texnikasi/merkezlesdirilmis-isitme-soyutma-havalandirma/cac">CAC (Ticari) tipli sistemlər</Link></li>
                        <li><Link href="/catalog/iqlim-texnikasi/merkezlesdirilmis-isitme-soyutma-havalandirma/vrf">VRF sistemlər</Link></li>
                        <li><Link href="/catalog/iqlim-texnikasi/merkezlesdirilmis-isitme-soyutma-havalandirma/ahu">AHU və Fanlar</Link></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="child">
                  <Link href="/catalog/boyuk-meiset-texnikasi/">Böyük məişət texnikası</Link>
                  <span>
                    <MdOutlineArrowForwardIos />
                  </span>
                  <ul className="dropdawn">
                    <li>
                      <Link href="/catalog/boyuk-meiset-texnikasi/refrigerators">Soyuducular</Link>
                    </li>
                    <li>
                      <Link href="/catalog/boyuk-meiset-texnikasi/dondurucu-kameralar">Dondurucu kameralar</Link>
                    </li>
                    <li>
                      <Link href="/catalog/boyuk-meiset-texnikasi/washingMachine">Paltaryuyan maşınlar</Link>
                    </li>

                    <li>
                      <Link href="/catalog/boyuk-meiset-texnikasi/drying-machines">Quruducu maşınlar</Link>
                    </li>
                    <li>
                      <Link href="/catalog/boyuk-meiset-texnikasi/dishwashers">Qabyuyan maşınlar</Link>
                    </li>
                    <li>
                      <Link href="/catalog/boyuk-meiset-texnikasi/aspirators">Aspiratorlar</Link>
                    </li>
                    <li>
                      <Link href="/catalog/boyuk-meiset-texnikasi/cooking-panels">Bişirmə panelləri</Link>
                    </li>
                    <li>
                      <Link href="/catalog/boyuk-meiset-texnikasi/built-in-ovens">Quraşdırılan sobalar</Link>
                    </li>
                    <li>
                      <Link href="/catalog/boyuk-meiset-texnikasi/kitchen-tiles">Mətbəx plitələri</Link>
                    </li>
                  </ul>
                </li>
                <li className="child">
                  <Link href="/catalog/kicik-meiset-texnikasi/">Kiçik məişət texnikası</Link>
                  <span>
                    <MdOutlineArrowForwardIos />
                  </span>
                  <ul className="dropdawn">
                    <li>
                      <Link href="/catalog/kicik-meiset-texnikasi/metbex-komekcileri/">Mətbəx köməkçiləri</Link>
                      <span>
                        <MdOutlineArrowForwardIos />
                      </span>
                      <ul className="dropdawn-child">
                        <li><Link href="/catalog/kicik-meiset-texnikasi/metbex-komekcileri/blenders">Blenderlər</Link></li>
                        <li><Link href="/catalog/kicik-meiset-texnikasi/metbex-komekcileri/kitchenScales">Mətbəx tərəziləri</Link></li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/catalog/kicik-meiset-texnikasi/yemek-hazirlanmasi/">Yemək hazırlanması</Link>
                    </li>
                    <li>
                      <Link href="/catalog/kicik-meiset-texnikasi/qehve-sire-ickiler">Qəhvə, şirə, içkilər</Link>
                    </li>

                    <li>
                      <Link href="/catalog/kicik-meiset-texnikasi/eve-geyime-qulluq/">Evə və geyimə qulluq</Link>
                    </li>
                    <li>
                      <Link href="/catalog/kicik-meiset-texnikasi/accessories">Aksesuarlar</Link>
                    </li>
                  </ul>
                </li>
                <li className="child">
                  <Link href="/catalog/gozellik-saglamliq/">Gözəllik və sağlamlıq</Link>
                  <span>
                    <MdOutlineArrowForwardIos />
                  </span>
                  <ul className="dropdawn">
                    <li>
                      <Link href="/catalog/gozellik-saglamliq/fen-daraqli-fenler">Fenlər</Link>
                    </li>
                    <li>
                      <Link href="/catalog/gozellik-saglamliq/sac-duzlendirici">Saç üçün düzləşdiricilər</Link>
                    </li>
                    <li>
                      <Link href="/catalog/gozellik-saglamliq/elektromasa/">Elektromaşa</Link>
                    </li>

                    <li>
                      <Link href="/catalog/gozellik-saglamliq/multistayler">Multistayler</Link>
                    </li>
                    <li>
                      <Link href="/catalog/gozellik-saglamliq/elektrik-ezqirxan">Elektrik üzqırxan</Link>
                    </li>
                    <li>
                      <Link href="/catalog/gozellik-saglamliq/sac-qirxan">Saç qırxan</Link>
                    </li>
                    <li>
                      <Link href="/catalog/gozellik-saglamliq/trimmerlər">Trimmerlər</Link>
                    </li>
                    <li>
                      <Link href="/catalog/gozellik-saglamliq/epilyatorlar">Epilyatorlar</Link>
                    </li>
                    <li>
                      <Link href="/catalog/gozellik-saglamliq/doseme-terezi">Döşəmə tərəziləri</Link>
                    </li>
                    <li>
                      <Link href="/catalog/gozellik-saglamliq/dis-fircasi">Elektrik diş fırçaları, irriqatorlar</Link>
                    </li>
                  </ul>
                </li>
                <li className="child">
                  <Link href="/catalog/oyun-konsollari-oyunlar/">Oyun konsolları və aksessuarlar</Link>
                  <span>
                    <MdOutlineArrowForwardIos />
                  </span>
                  <ul className="dropdawn">
                    <li>
                      <Link href="/catalog/oyun-konsollari-oyunlar/oyun-konsollari/">Oyun konsolları</Link>
                    </li>
                    <li>
                      <Link href="/catalog/oyun-konsollari-oyunlar/oyunlar">Video oyunlar</Link>
                    </li>
                    <li>
                      <Link href="/catalog/oyun-konsollari-oyunlar/aksesuarlar">Oyun konsolları üçün aksessuarlar</Link>
                    </li>

                    <li>
                      <Link href="/catalog/oyun-konsollari-oyunlar/oyun-kreslosu">Oyun kresloları</Link>
                    </li>
                  </ul>
                </li>
                <li className="child">
                  <Link href="/catalog/mebel/">Mebel, tekstil və dekor</Link>
                  <span>
                    <MdOutlineArrowForwardIos />
                  </span>
                  <ul className="dropdawn">
                    <li>
                      <Link href="/catalog/mebel/qonaq-otagi-ucun-mebel">Qonaq otağı</Link>

                    </li>

                    <li>
                      <Link href="/catalog/mebel/yataq-otagi-mebel">Yataq otağı</Link>

                    </li>
                    <li>
                      <Link href="/catalog/mebel/yumsaq-mebel">Yumşaq mebel</Link>

                    </li>

                    <li>
                      <Link href="/catalog/mebel/genc-otagi/">Gənc otağı</Link>

                    </li>
                    <li>
                      <Link href="/catalog/mebel/tv-stendler">TV stendlər</Link>

                    </li>
                    <li>
                      <Link href="/catalog/mebel/jurnal-masalari">Jurnal masaları</Link>
                    </li>
                    <li>
                      <Link href="/catalog/mebel/dosekler">Döşəklər</Link>
                    </li>
                    <li>
                      <Link href="/catalog/mebel/ev-tekstili">Ev tekstili</Link>
                      <span>
                        <MdOutlineArrowForwardIos />
                      </span>
                      <ul className="dropdawn-child">
                        <li><Link href="/catalog/mebel/ev-tekstili/beddingSets">Yataq dəstləri</Link></li>
                        <li><Link href="/catalog/mebel/ev-tekstili/bedCovers">Yataq örtükləri</Link></li>
                        <li><Link href="/catalog/mebel/ev-tekstili/pillows">Yastıqlar</Link></li>
                        <li><Link href="/catalog/mebel/ev-tekstili/blankets">Yorğanlar</Link></li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/catalog/mebel/dekor">Dekor və interyer</Link>
                    </li>
                  </ul>
                </li>
                <li className="child">
                  <Link href="/catalog/qab-qacaq">Qab-qacaq, tava-qazan</Link>
                  <span>
                    <MdOutlineArrowForwardIos />
                  </span>
                  <ul className="dropdawn">
                    <li>
                      <Link href="/catalog/qab-qacaq/qab-qacaq/">Qab-qacaq</Link>

                    </li>
                    <li>
                      <Link href="/catalog/qab-qacaq/tava-qazan">Tava-Qazan</Link>
                    </li>
                  </ul>
                </li>
                <li className="child">
                  <Link href="/catalog/ev-bag/">Ev və bağ</Link>
                  <span>
                    <MdOutlineArrowForwardIos />
                  </span>
                  <ul className="dropdawn">
                    <li>
                      <Link href="/catalog/ev-bag/manqallar-aksessuarlar">Manqallar və aksessuarlar</Link>
                    </li>
                    <li>
                      <Link href="/catalog/ev-bag/isiqlandirilma">İşıqlandırılma</Link>
                    </li>
                    <li>
                      <Link href="/catalog/ev-bag/agilli-ev">Ağıllı ev</Link>
                    </li>

                    <li>
                      <Link href="/catalog/ev-bag/seyf">Seyflər</Link>
                    </li>
                    <li>
                      <Link href="/catalog/ev-bag/insaat-mehsullari">İnşaat məhsulları</Link>

                    </li>
                  </ul>
                </li>
                <li className="child">
                  <Link href="/catalog/velosipedler-qirobordlar/">İdman və fəal istirahət</Link>
                  <span>
                    <MdOutlineArrowForwardIos />
                  </span>
                  <ul className="dropdawn">
                    <li>
                      <Link href="/catalog/velosipedler-qirobordlar/motosiklet">Motosiklet</Link>
                    </li>
                    <li>
                      <Link href="/catalog/velosipedler-qirobordlar/benzin-skuter">Benzinli skuter</Link>
                    </li>
                    <li>
                      <Link href="/catalog/velosipedler-qirobordlar/elektroskuter/">Elektroskuter</Link>
                    </li>

                    <li>
                      <Link href="/catalog/velosipedler-qirobordlar/velosipedler/">Velosipedlər</Link>
                    </li>
                    <li>
                      <Link href="/catalog/velosipedler-qirobordlar/samokatlar/">Samokatlar</Link>
                    </li>
                    <li>
                      <Link href="/catalog/velosipedler-qirobordlar/elektrosamokat/">Elektrosamokatlar</Link>
                    </li>
                    <li>
                      <Link href="/catalog/velosipedler-qirobordlar/skeytbordlar/">Skeytbordlar</Link>
                    </li>

                    <li>
                      <Link href="/catalog/velosipedler-qirobordlar/qirobordlar/">Qiroskuterlər və siqveylər</Link>
                    </li>
                    <li>
                      <Link href="/catalog/velosipedler-qirobordlar/skuter-motosiklet-aksesuarlari/">Skuter və motosiklet aksesuarları</Link>
                    </li>
                    <li>
                      <Link href="/catalog/velosipedler-qirobordlar/velosiped-aksesuarlari/">Velosiped aksesuarları</Link>
                    </li>
                    <li>
                      <Link href="/catalog/velosipedler-qirobordlar/turizm-və-kempinq/">Turizm və kempinq</Link>

                    </li>
                  </ul>
                </li>
                <li className="child">
                  <Link href="/catalog/usaq-alemi/">Uşaq aləmi</Link>
                  <span>
                    <MdOutlineArrowForwardIos />
                  </span>
                  <ul className="dropdawn">
                    <li>
                      <Link href="/catalog/usaq-alemi/lego-konstruktorlar/">LEGO konstruktorlar</Link>
                    </li>
                    <li>
                      <Link href="/usaq-alemi/oyuncaqlar/">Oyuncaqlar</Link>
                    </li>
                  </ul>
                </li>
                <li className="child">
                  <Link href="/catalog/musiqi-aletleri-ve-avadanliqlari/">Musiqi alətləri və avadanlıqları</Link>
                  <span>
                    <MdOutlineArrowForwardIos />
                  </span>
                  <ul className="dropdawn">
                    <li>
                      <Link href="/catalog/musiqi-aletleri-ve-avadanliqlari/gitaralar/">Gitaralar</Link>
                    </li>
                    <li>
                      <Link href="/catalog/musiqi-aletleri-ve-avadanliqlari/yayla-calinan-alətlər/">Yayla çalınan alətlər</Link>
                    </li>
                    <li>
                      <Link href="/catalog/musiqi-aletleri-ve-avadanliqlari/musiqi-aletleri/">Musiqi alətləri</Link>

                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </aside>

          <div className="swiper">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image
                  src={slider1}
                  alt="slide"
                  width={1093}
                  height={527}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={slider2}
                  alt="slide"
                  width={1093}
                  height={557}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={slider3}
                  alt="slide"
                  width={1093}
                  height={557}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={slider4}
                  alt="slide"
                  width={1093}
                  height={557}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={slider5}
                  alt="slide"
                  width={1093}
                  height={557}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={slider6}
                  alt="slide"
                  width={1093}
                  height={557}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={slider7}
                  alt="slide"
                  width={1093}
                  height={557}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={slider8}
                  alt="slide"
                  width={1093}
                  height={557}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={slider9}
                  alt="slide"
                  width={1093}
                  height={557}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={slider10}
                  alt="slide"
                  width={1093}
                  height={557}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={slider11}
                  alt="slide"
                  width={1093}
                  height={557}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={slider12}
                  alt="slide"
                  width={1093}
                  height={557}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={slider13}
                  alt="slide"
                  width={1093}
                  height={557}
                />
              </SwiperSlide>
            </Swiper>
          </div>
          {/* section Smartphones */}
        </section>
        <Viewed />
        <section className="smartphones">
          <div className="container-sm">
            <div className="title">
              <h2>Smartfonlar</h2>
            </div>
            <div className="list-holders">
              <ul>
                {data?.products?.["telefonlar-qadcetler"]?.smartphones?.items?.slice(0, 4).map((product) => (
                  <ProductCard key={product?.id} item={product} />
                ))}
              </ul>

              <ul className="ul-lists-items">
                {data?.products?.["telefonlar-qadcetler"]?.smartphones?.items?.slice(0, 2).map((product) => (
                  <ProductCard key={product?.id} item={product} />
                ))}
              </ul>
              <ul className="ul-lists-telephones">
                <div className="telephones-child" style={{ padding: `0 ${chevronWidth}px` }}>
                  <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={3}
                    gutter={20}
                    leftChevron={<button>{"<"}</button>}
                    rightChevron={<button>{">"}</button>}
                    outsideChevron
                    chevronWidth={chevronWidth}
                  >
                    {data?.products?.["telefonlar-qadcetler"]?.smartphones?.items?.slice(0, 4).map((product) => (
                      <ProductCard key={product?.id} item={product} />
                    ))}
                  </ItemsCarousel>
                </div>

              </ul>
            </div>
          </div>
        </section>

        {/* section Watches */}
        <section className="watches">
          <div className="container-sm">
            <div className="title">
              <h2>Smart saatlar və fitnes qolbaqları</h2>
            </div>
            <div className="list-holders">
              <ul>
                {data?.products?.["telefonlar-qadcetler"]?.watches?.items?.slice(0, 4).map((product) => (
                  <ProductCard key={product?.id} item={product} />
                ))}
              </ul>

              <ul className="ul-lists-items">
                {data?.products?.["telefonlar-qadcetler"]?.watches?.items?.slice(0, 2).map((product) => (
                  <ProductCard key={product?.id} item={product} />
                ))}
              </ul>
              <ul className="ul-lists-telephones">
                <div className="telephones-child" style={{ padding: `0 ${chevronWidth}px` }}>
                  <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={3}
                    gutter={20}
                    leftChevron={<button>{"<"}</button>}
                    rightChevron={<button>{">"}</button>}
                    outsideChevron
                    chevronWidth={chevronWidth}
                  >
                    {data?.products?.["telefonlar-qadcetler"]?.watches?.items?.slice(0, 4).map((product) => (
                      <ProductCard key={product?.id} item={product} />
                    ))}
                  </ItemsCarousel>
                </div>

              </ul>
            </div>
          </div>
        </section>

        {/* section Notebook */}
        <section className="notebook">
          <div className="container-sm">
            <div className="title">
              <h2>Noutbuklar</h2>
            </div>
            <div className="list-holders">
              <ul>
                {data?.products?.["noutbuklar-kompyuterler"]?.notebooks?.items?.slice(0, 4).map((product) => (
                  <ProductCard key={product?.id} item={product} />
                ))}
              </ul>

              <ul className="ul-lists-items">
                {data?.products?.["noutbuklar-kompyuterler"]?.notebooks?.items?.slice(0, 2).map((product) => (
                  <ProductCard key={product?.id} item={product} />
                ))}
              </ul>
              <ul className="ul-lists-telephones">
                <div className="telephones-child" style={{ padding: `0 ${chevronWidth}px` }}>
                  <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={3}
                    gutter={20}
                    leftChevron={<button>{"<"}</button>}
                    rightChevron={<button>{">"}</button>}
                    outsideChevron
                    chevronWidth={chevronWidth}
                  >
                    {data?.products?.["noutbuklar-kompyuterler"]?.notebooks?.items?.slice(0, 4).map((product) => (
                      <ProductCard key={product?.id} item={product} />
                    ))}
                  </ItemsCarousel>
                </div>

              </ul>
            </div>
          </div>
        </section>
        {/* section Refrigerators */}
        <section className="refrigerators">
          <div className="container-sm">
            <div className="title">
              <h2>Soyuducular</h2>
            </div>
            <div className="list-holders">
              <ul>
                {data?.products?.["boyuk-meiset-texnikasi"]?.refrigerators?.items?.slice(0, 4).map((product) => (
                  <ProductCard key={product?.id} item={product} />
                ))}
              </ul>

              <ul className="ul-lists-items">
                {data?.products?.["boyuk-meiset-texnikasi"]?.refrigerators?.items?.slice(0, 2).map((product) => (
                  <ProductCard key={product?.id} item={product} />
                ))}
              </ul>
              <ul className="ul-lists-telephones">
                <div className="telephones-child" style={{ padding: `0 ${chevronWidth}px` }}>
                  <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={3}
                    gutter={20}
                    leftChevron={<button>{"<"}</button>}
                    rightChevron={<button>{">"}</button>}
                    outsideChevron
                    chevronWidth={chevronWidth}
                  >
                    {data?.products?.["boyuk-meiset-texnikasi"]?.refrigerators?.items?.slice(0, 4).map((product) => (
                      <ProductCard key={product?.id} item={product} />
                    ))}
                  </ItemsCarousel>
                </div>

              </ul>
            </div>
          </div>
        </section>
        {/* section tv */}
        <section className="tv">
          <div className="container-sm">
            <div className="title">
              <h2>Televizorlar</h2>
            </div>
            <div className="list-holders">
              <ul>
                {data?.products?.["tv-audio-video"]?.tv?.items?.slice(0, 4).map((product) => (
                  <ProductCard key={product?.id} item={product} />
                ))}
              </ul>
              <ul className="ul-lists-items">
                {data?.products?.["tv-audio-video"]?.tv?.items?.slice(0, 2).map((product) => (
                  <ProductCard key={product?.id} item={product} />
                ))}
              </ul>
              <ul className="ul-lists-telephones">
                <div className="telephones-child" style={{ padding: `0 ${chevronWidth}px` }}>
                  <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={3}
                    gutter={20}
                    leftChevron={<button>{"<"}</button>}
                    rightChevron={<button>{">"}</button>}
                    outsideChevron
                    chevronWidth={chevronWidth}
                  >
                    {data?.products?.["tv-audio-video"]?.tv?.items?.slice(0, 4).map((product) => (
                      <ProductCard key={product?.id} item={product} />
                    ))}
                  </ItemsCarousel>
                </div>

              </ul>
            </div>
          </div>
        </section>
        {/* section Washing machines */}
        <section className="washing-machines">
          <div className="container-sm">
            <div className="title">
              <h2>Paltaryuyan maşınlar</h2>
            </div>
            <div className="list-holders">
              <ul>
                {data?.products?.["boyuk-meiset-texnikasi"]?.washingMachine?.items?.slice(0, 4).map((product) => (
                  <ProductCard key={product?.id} item={product} />
                ))}
              </ul>
              <ul className="ul-lists-items">
                {data?.products?.["boyuk-meiset-texnikasi"]?.washingMachine?.items?.slice(0, 2).map((product) => (
                  <ProductCard key={product?.id} item={product} />
                ))}
              </ul>
              <ul className="ul-lists-telephones">
                <div className="telephones-child" style={{ padding: `0 ${chevronWidth}px` }}>
                  <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={3}
                    gutter={20}
                    leftChevron={<button>{"<"}</button>}
                    rightChevron={<button>{">"}</button>}
                    outsideChevron
                    chevronWidth={chevronWidth}
                  >
                    {data?.products?.["boyuk-meiset-texnikasi"]?.washingMachine?.items?.slice(0, 4).map((product) => (
                      <ProductCard key={product?.id} item={product} />
                    ))}
                  </ItemsCarousel>
                </div>

              </ul>

            </div>
          </div>
        </section>
        <News />
      </div >
    </>
  );
}

