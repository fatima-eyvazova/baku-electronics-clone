import Image from "next/image";
import visa from '../../public/images/visa.svg';
import mastercard from '../../public/images/mastercard.svg';
import Link from "next/link";
// icons
import { BsYoutube } from 'react-icons/bs'
import { IoLogoInstagram } from 'react-icons/io'
import { FaFacebookF } from 'react-icons/fa'
import { BiPhoneCall } from 'react-icons/bi'

const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <div className='container'>
          <div className='box'>
            <div className='footer-left'>
              <div className='footer-one'>
                <div className='top'>
                  <h3>Məlumat</h3>
                  <ul>
                    <li>
                      <Link href='/companies'>Kampaniyalar</Link>
                    </li>
                    <li>
                      <Link href='/customer'>Müştəri kartı</Link>
                    </li>
                    <li>
                      <Link href='/brands'>Brendlər</Link>
                    </li>
                    <li>
                      <Link href='/blog'>Bloq</Link>
                    </li>
                  </ul>
                </div>
                <div className='bottom'>
                  <h3>Ödəniş:</h3>
                  <ul >
                    <li className='visa'>
                      <Image src={visa} alt="visa" />
                    </li>
                    <li className='mastercard'>
                      <Image src={mastercard} alt="mastercard" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className='footer-one'>
                <div className='top'>
                  <h3>Şirkət</h3>
                  <ul>
                    <li>
                      <Link href='/companies'>Şirkət haqqında</Link>
                    </li>
                    <li>
                      <Link href='/shops'>Mağazalar</Link>
                    </li>
                    <li>
                      <Link href='/brands'>Vakansiyalar</Link>
                    </li>
                    <li>
                      <Link href='/blog'>Korporativ satışlar</Link>
                    </li>
                  </ul>
                </div>
                <div className='bottom'>
                  <h3>Bizə qoşulun:</h3>
                  <ul className='contact'>
                    <li className='fb'>
                      <Link href='/facebook.com'>
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li className='insta'>
                      <Link href='/instagram.com'>
                        <IoLogoInstagram />
                      </Link>
                    </li>
                    <li className='youtube'>
                      <Link href='/youtube.com'>
                        <BsYoutube />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='footer-one'>
                <div className='top'>
                  <h3>Alıcılara</h3>
                  <ul>
                    <li>
                      <Link href='/payment'>Çatdırılma və ödəniş</Link>
                    </li>
                    <li>
                      <Link href='/guarantee'>Zәmanәt</Link>
                    </li>
                    <li>
                      <Link href='/service'>Servis mərkəzləri</Link>
                    </li>
                    <li>
                      <Link href='/debt'>Nisyə alış</Link>
                    </li>
                  </ul>
                </div>
                <div className='bottom'>
                  <ul className='copy'>
                    <li className='paragraph'>
                      <p>© 2018 - 2022 bakuelectronics.az</p>
                    </li>
                    <li>
                      <Link href='/confidentiality'>
                        <p>Məxfilik siyasəti</p>
                      </Link>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
            <div className='footer-right'>
              <div className='footer-childe'>
                <div className='footer-top'>
                  <div className='footer-support'>
                    <h2>Məlumat mərkəzi</h2>
                    <p>9:00 - 20:00 (hər gün)</p>

                  </div>
                  <div className='footer-callback'>
                    <div className='call'>


                      <BiPhoneCall />
                      <Link href="/call">143</Link>



                    </div>

                    <p>info@bakuelectronics.az</p>
                  </div>
                </div>
                <div className='devoloping-info'>
                  <span>Saytın hazırlanması</span>
                  <p>Турум-бурум</p>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
