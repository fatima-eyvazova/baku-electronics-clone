import { useState } from 'react';
import { BsBuilding } from 'react-icons/bs';
import chevronDown from '../public/icons/chevronDown.svg'
import Image from 'next/image';
import News from "../components/news/News"
import aboutimg from "../public/images/aboutimg.jpeg"

function AboutCompanyPage() {
    const boolList = new Array(2).fill(false);
    const [showDropDown, setShowDropdown] = useState(boolList);
    const toggleDropdown = (index) => {
        setShowDropdown(prev => ([...prev, prev[index] = !prev[index]]));
    }
    return (

        <div className='about-company'>
            <div className='about-company-top'>
                <div className='company-top-inner'>
                    <div className='about-company-title'>Şirkət haqqında</div>
                </div>
                <div className='company-top-icon'>
                    <BsBuilding />
                </div>
            </div>
            <div className='about-company-bottom'>
                <div className='static-text'>
                    <div className='static-text-block'>
                        <div className='static-text-aside'>
                            <span className='static-text-title'>Baku Electronics</span>
                        </div>
                        <div className='static-text-container'>
                            <p class="static-text-title">Qurulduğumuz ilk gündən etimadınız üçün çalışdıq və artıq ölkəmizin elektronika sahəsində ən böyük mağazalar şəbəkəsindən biriyik. <br></br>
                                <br></br>1994-cü ildə Türkiyədə yerləşən “NAB Holdinq”-in bir parçası olaraq Azərbaycanda fəaliyyətə başladıq. “NAB Holdinq” başda pərakəndə satış olmaqla yanaşı,
                                avtomobil və maliyyə sahələrində də fəaliyyət göstərir. Hazırda Respublika üzrə 30 mağazada 60-dan çox rəsmi distribütoru olduğumuz brendlərin satışını həyata keçiririk. <br></br>
                                <br></br>
                                <br></br>Müasir dünyanı, yenilikləri həyatınıza qatmaq üçün çıxdığımız bu yolda satışın sadəcə məhsul satmaqla məhdudlaşmadığını öyrəndik. Telefonlar, smarfonlar,
                                qadjetlər, noutbuklar, kompüterlər, televizorlar, ev kinoteatrları, kiçik və böyük məişət texnikası, iqlim texnikası, oyun konsolları, velosiped və siqveylər, eləcə də
                                tekstil, qab-qacaq, mebel, ev dekorları kimi 15.000-dən çox məhsul çeşidi ilə həyatınızın bir parçası olduq. İşinizi asanlaşdırıb, yenilikləri əlçatan etdiyimiz üçün qürurluyuq!
                            </p>
                            <div className='handorgelAbout'>
                                <div className="mission-history">
                                    <div className="mission-history-child">
                                        <div onClick={() => toggleDropdown(0)} className="child-one">Missiyamız
                                            <span className="down">
                                                <Image src={chevronDown}
                                                    width={18}
                                                    height={18}
                                                    alt="icon"
                                                    className={showDropDown[0] ? 'image-icon' : "image-icon-down"}
                                                />
                                            </span>
                                        </div>
                                        {showDropDown[0] && <div className={`title-image`}>
                                            <div className="mission-title">
                                                <p className='title'>Hər zaman məmnun müştəri, işini sevən əməkdaş, qazanan cəmiyyət, böyük və xoşbəxt bir elektronika ailəsi olmaq!</p>
                                                <figure className='img-block'>
                                                    <Image src={aboutimg}
                                                        width={605}
                                                        height={291}
                                                        alt="image"
                                                    />
                                                </figure>
                                            </div>

                                        </div>}
                                    </div>
                                </div>
                                <div className="mission-history">
                                    <div className="mission-history-child">
                                        <div onClick={() => toggleDropdown(1)} className="child-one">Azadlıq filialı
                                            <span className="down">
                                                <Image src={chevronDown}
                                                    width={18}
                                                    height={18}
                                                    alt="icon"
                                                    className={showDropDown[1] ? 'image-icon' : "image-icon-down"}
                                                />
                                            </span>
                                        </div>
                                        {showDropDown[1] && <div className={`title-image`}>
                                            <div className="history-block">
                                                <div className='item'>
                                                    <div class="year-section">
                                                        <span class="year">1994</span>
                                                        <span class="year-note">başlanqıc</span>
                                                    </div>
                                                    <div class="value">
                                                        <p>Bakı şəhərində 200 kv.m sahədə 500-dən çox məhsulun satışının təşkil edildiyi ilk həyacanımız, ilk mağazamız fəaliyyətə başladı.</p>
                                                    </div>
                                                </div>
                                                <div class="item">
                                                    <div class="year-section">
                                                        <span class="year">1995</span>
                                                        <span class="year-note">Samsung Electronics</span>
                                                    </div>
                                                    <div class="value">
                                                        <p>İlk mağazanın fəaliyyətə başlamasından 1 il sonra uğurlarımızın sayı artmağa başladı. 1-ci ilimizdə “Samsung Electronics”-in Azərbaycanda rəsmi distribütoru olduq. </p>
                                                    </div>
                                                </div>
                                                <div class="item">
                                                    <div class="year-section">
                                                        <span class="year">2000</span>
                                                        <span class="year-note">Siemens</span>
                                                    </div>
                                                    <div class="value">
                                                        <p>Distribütor sıralarımıza “Siemens” kimi daha bir qlobal şirkət qoşuldu. </p>
                                                    </div>
                                                </div>
                                                <div class="item">
                                                    <div class="year-section">
                                                        <span class="year">2009</span>
                                                        <span class="year-note">Yeni brendlər</span>
                                                    </div>
                                                    <div class="value">
                                                        <p>“Pyrex”,“Siemens Gigaset”, “Hama”,“Valera”, “Microplane”, “Moneta”, “Whirpool”, “Magic”, “Termikel”, “Ema”, “Thomas”, ”Agfa”, ”Sonorous”, ”Ultimate”,”Beem” markalarını da distribütor sıralarımıza daxil etdik.</p>
                                                    </div>
                                                </div>
                                                <div class="item">
                                                    <div class="year-section">
                                                        <span class="year">2019</span>
                                                        <span class="year-note">Yeni mağaza</span>
                                                    </div>
                                                    <div class="value">
                                                        <p>Olduğunuz hər yeri əhatə etməli idik. Etdik! Paytaxtdan 370 km uzaqda Şəki şəhərində yeni mağazamız ilə sizin xidmətinizə gəldik. </p>
                                                    </div>
                                                </div>
                                                <div class="item">
                                                    <div class="year-section">
                                                        <span class="year">2022</span>
                                                        <span class="year-note">Yeni mağaza</span>
                                                    </div>
                                                    <div class="value">
                                                        <p>Sizə hər nöqtədə, daha da yaxın ola bilmək üçün Nizami rayonu və Sumqayıt şəhərində yeni mağazalarımızı sizin xidmətinizə verdik!</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>}
                                    </div>
                                </div>
                            </div>
                            <div className='news-section'>
                                <News />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default AboutCompanyPage;