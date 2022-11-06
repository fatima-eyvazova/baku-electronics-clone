import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"
import { HiOutlineMapPin } from "react-icons/hi2"
import Link from "next/link";
import { useState } from "react";
import { createPopper } from '@popperjs/core';
import chevronDown from '../public/icons/chevronDown.svg'
import Image from "next/image";

const ShopsPage = () => {
  const [showDropDown, setShowDropdown] = useState(false)
  const toggleDropdown = () => {
    setShowDropdown(prev => !prev)
  }

  return (
    <main>
      <div className="contact-page">
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
        <section className="contact-page">
          <div className="addresses">
            <div onClick={toggleDropdown}>salam Mamed
              <Image src={chevronDown}
                alt="icon"
                className={showDropDown ? 'image-icon' : "image-icon-down"}

              />
            </div>
            {showDropDown && <div className={`about-address`}>sagol Mamed</div>}
          </div>
        </section>
      </div>


    </main>
  )
};

export default ShopsPage;
