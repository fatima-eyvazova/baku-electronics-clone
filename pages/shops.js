import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"
import { HiOutlineMapPin } from "react-icons/hi2"
import Link from "next/link";
import { useState } from "react";
import { createPopper } from '@popperjs/core';
import chevronDown from '../public/icons/chevronDown.svg'
import Image from "next/image";

const ShopsPage = () => {
  const boolList = new Array(9).fill(false);
  const [showDropDown, setShowDropdown] = useState(boolList);
  const toggleDropdown = (index) => {
    setShowDropdown(prev => ([...prev, prev[index] = !prev[index]]));
  }

  return (
    <main>
      <div className="contact-page-top">
        <section className="statik-header">
          <div className="static-header-content">
            <div className="static-header-title">Mağazalar</div>
            <div className="static-header-contact">
              <div className="contact-phone">
                <p class="contact-title">Zəng mərkəzi</p>
                <Link href="/tel">143</Link>
              </div>
              <div className="contact-email">
                <p class="contact-title">Korporativ E-poçt</p>
                <a href="/mail" class="mail-link">info@bakuelectronics.az</a>
              </div>
              <div className="contact-social">
                <p class="contact-title">Sosial şəbəkələrdə bizi izləyin</p>
                <ul className="social-items">
                  <li className="social-item-insta"><AiOutlineInstagram /></li>
                  <li className="social-item-fb"><Link href="/facebook"><FaFacebookF /></Link></li>
                  <li className="social-item-youtube"><Link href="/youtube"><AiFillYoutube /></Link></li>
                </ul>
              </div>
            </div>

          </div>
          <div className="static-header-icon">
            <span className="icon-map">
              <HiOutlineMapPin />
            </span>
          </div>
        </section>
      </div>
      <section className="contact-page-bottom">
        <div className="container-address">
          <div className="shops-addresses">
            <span className="shops-a">
              Mağazalar
            </span>
          </div>
          <div className="address-contact">
            <div className="addresses">
              <div className="addresses-child">
                <div onClick={() => toggleDropdown(0)} className="child">28 May filialı
                  <span className="down">
                    <Image src={chevronDown}
                      width={18}
                      height={18}
                      alt="icon"
                      className={showDropDown[0] ? 'image-icon' : "image-icon-down"}
                    />
                  </span>
                </div>
                {showDropDown[0] && <div className={`about-address`}>
                  <div className="address-about">
                    <div className="addresses-shop">
                      <span className="address-title">Ünvan</span>
                      <span className="addres-map">Bakı ş., Nəsimi rayonu,
                        Füzuli küç. 73</span>
                    </div>
                    <div className="addresses-shop">
                      <span className="address-title">Telefon</span>
                      <span className="addres-map">143</span>
                    </div>
                    <div className="addresses-shop">
                      <span className="address-title">İş saatı</span>
                      <span className="addres-map">Hər gün 10:00-dan 21:00-dək</span>
                    </div>
                  </div>

                </div>}
              </div>
            </div>
            <div className="addresses">
              <div className="addresses-child">
                <div onClick={() => toggleDropdown(1)} className="child">Azadlıq filialı
                  <span className="down">
                    <Image src={chevronDown}
                      width={18}
                      height={18}
                      alt="icon"
                      className={showDropDown[1] ? 'image-icon' : "image-icon-down"}
                    />
                  </span>
                </div>
                {showDropDown[1] && <div className={`about-address`}>
                  <div className="address-about">
                    <div className="addresses-shop">
                      <span className="address-title">Ünvan</span>
                      <span className="addres-map">Bakı ş., Binəqədi rayonu,
                        Ə. Naxçıvani küç. 3066</span>
                    </div>
                    <div className="addresses-shop">
                      <span className="address-title">Telefon</span>
                      <span className="addres-map">143</span>
                    </div>
                    <div className="addresses-shop">
                      <span className="address-title">İş saatı</span>
                      <span className="addres-map">Hər gün 10:00-dan 21:00-dək</span>
                    </div>
                  </div>

                </div>}
              </div>
            </div>
            <div className="addresses">
              <div className="addresses-child">
                <div onClick={() => toggleDropdown(2)} className="child">Bakıxanov filialı
                  <span className="down">
                    <Image src={chevronDown}
                      width={18}
                      height={18}
                      alt="icon"
                      className={showDropDown[2] ? 'image-icon' : "image-icon-down"}
                    />
                  </span>
                </div>
                {showDropDown[2] && <div className={`about-address`}>
                  <div className="address-about">
                    <div className="addresses-shop">
                      <span className="address-title">Ünvan</span>
                      <span className="addres-map">Bakı ş., Sabunçu rayonu,
                        Bakıxanov qəsəbəsi,
                        Fətəliyev küç. 178 C.</span>
                    </div>
                    <div className="addresses-shop">
                      <span className="address-title">Telefon</span>
                      <span className="addres-map">143</span>
                    </div>
                    <div className="addresses-shop">
                      <span className="address-title">İş saatı</span>
                      <span className="addres-map">Hər gün 10:00-dan 21:00-dək</span>
                    </div>
                  </div>

                </div>}
              </div>
            </div>
            <div className="addresses">
              <div className="addresses-child">
                <div onClick={() => toggleDropdown(3)} className="child">İnşaatçılar filialı
                  <span className="down">
                    <Image src={chevronDown}
                      width={18}
                      height={18}
                      alt="icon"
                      className={showDropDown[3] ? 'image-icon' : "image-icon-down"}
                    />
                  </span>
                </div>
                {showDropDown[3] && <div className={`about-address`}>
                  <div className="address-about">
                    <div className="addresses-shop">
                      <span className="address-title">Ünvan</span>
                      <span className="addres-map">Bakı ş., Yasamal rayonu,
                        Şərifzadə küç. 3152-ci məh.</span>
                    </div>
                    <div className="addresses-shop">
                      <span className="address-title">Telefon</span>
                      <span className="addres-map">143</span>
                    </div>
                    <div className="addresses-shop">
                      <span className="address-title">İş saatı</span>
                      <span className="addres-map">Hər gün 10:00-dan 21:00-dək</span>
                    </div>
                  </div>

                </div>}
              </div>
            </div>
            <div className="addresses">
              <div className="addresses-child">
                <div onClick={() => toggleDropdown(4)} className="child">Neftçilər filialı
                  <span className="down">
                    <Image src={chevronDown}
                      width={18}
                      height={18}
                      alt="icon"
                      className={showDropDown[4] ? 'image-icon' : "image-icon-down"}
                    />
                  </span>
                </div>
                {showDropDown[4] && <div className={`about-address`}>
                  <div className="address-about">
                    <div className="addresses-shop">
                      <span className="address-title">Ünvan</span>
                      <span className="addres-map">Bakı şəhəri, Nizami rayonu, Q.Qarayev 74 Q (metro Neftçilər)</span>
                    </div>
                    <div className="addresses-shop">
                      <span className="address-title">Telefon</span>
                      <span className="addres-map">143</span>
                    </div>
                    <div className="addresses-shop">
                      <span className="address-title">İş saatı</span>
                      <span className="addres-map">Hər gün 10:00-dan 21:00-dək</span>
                    </div>
                  </div>

                </div>}
              </div>
            </div>
            <div className="addresses">
              <div className="addresses-child">
                <div onClick={() => toggleDropdown(5)} className="child">Nərimanov filialı
                  <span className="down">
                    <Image src={chevronDown}
                      width={18}
                      height={18}
                      alt="icon"
                      className={showDropDown[5] ? 'image-icon' : "image-icon-down"}
                    />
                  </span>
                </div>
                {showDropDown[5] && <div className={`about-address`}>
                  <div className="address-about">
                    <div className="addresses-shop">
                      <span className="address-title">Ünvan</span>
                      <span className="addres-map">Bakı ş., Təbriz küç. 98,
                        (metro N. Nərimanov)</span>
                    </div>
                    <div className="addresses-shop">
                      <span className="address-title">Telefon</span>
                      <span className="addres-map">143</span>
                    </div>
                    <div className="addresses-shop">
                      <span className="address-title">İş saatı</span>
                      <span className="addres-map">Hər gün 10:00-dan 21:00-dək</span>
                    </div>
                  </div>

                </div>}
              </div>
            </div>
            <div className="addresses">
              <div className="addresses-child">
                <div onClick={() => toggleDropdown(6)} className="child">Qara Qarayev filialı
                  <span className="down">
                    <Image src={chevronDown}
                      width={18}
                      height={18}
                      alt="icon"
                      className={showDropDown[6] ? 'image-icon' : "image-icon-down"}
                    />
                  </span>
                </div>
                {showDropDown[6] && <div className={`about-address`}>
                  <div className="address-about">
                    <div className="addresses-shop">
                      <span className="address-title">Ünvan</span>
                      <span className="addres-map">Bakı ş., Nizami rayonu,
                        Məhsəti və Mehdi Abbasov küç. kəsişməsi, 2526-2532-ci məh.</span>
                    </div>
                    <div className="addresses-shop">
                      <span className="address-title">Telefon</span>
                      <span className="addres-map">143</span>
                    </div>
                    <div className="addresses-shop">
                      <span className="address-title">İş saatı</span>
                      <span className="addres-map">Hər gün 10:00-dan 21:00-dək</span>
                    </div>
                  </div>

                </div>}
              </div>
            </div>
            <div className="addresses">
              <div className="addresses-child">
                <div onClick={() => toggleDropdown(7)} className="child">Ukrayna dairəsi
                  <span className="down">
                    <Image src={chevronDown}
                      width={18}
                      height={18}
                      alt="icon"
                      className={showDropDown[7] ? 'image-icon' : "image-icon-down"}
                    />
                  </span>
                </div>
                {showDropDown[7] && <div className={`about-address`}>
                  <div className="address-about">
                    <div className="addresses-shop">
                      <span className="address-title">Ünvan</span>
                      <span className="addres-map">Məhəmməd Hadı küç. 58</span>
                    </div>
                    <div className="addresses-shop">
                      <span className="address-title">Telefon</span>
                      <span className="addres-map">143</span>
                    </div>
                    <div className="addresses-shop">
                      <span className="address-title">İş saatı</span>
                      <span className="addres-map">Hər gün 10:00-dan 21:00-dək</span>
                    </div>
                  </div>

                </div>}
              </div>
            </div>
            <div className="addresses">
              <div className="addresses-child">
                <div onClick={() => toggleDropdown(8)} className="child">Əhməd Rəcəbli filialı
                  <span className="down">
                    <Image src={chevronDown}
                      width={18}
                      height={18}
                      alt="icon"
                      className={showDropDown[8] ? 'image-icon' : "image-icon-down"}
                    />
                  </span>
                </div>
                {showDropDown[8] && <div className={`about-address`}>
                  <div className="address-about">
                    <div className="addresses-shop">
                      <span className="address-title">Ünvan</span>
                      <span className="addres-map">Baki Şəhəri, Nərimanov rayonu, Əhməd Rəcəbli 1, bina 50C</span>
                    </div>
                    <div className="addresses-shop">
                      <span className="address-title">Telefon</span>
                      <span className="addres-map">143</span>
                    </div>
                    <div className="addresses-shop">
                      <span className="address-title">İş saatı</span>
                      <span className="addres-map">Hər gün 10:00-dan 21:00-dək</span>
                    </div>
                  </div>

                </div>}
              </div>
            </div>
          </div>

        </div>


      </section>



    </main>
  )
};

export default ShopsPage;
