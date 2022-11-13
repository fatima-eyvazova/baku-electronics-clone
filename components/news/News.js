import { AiOutlineStar, AiOutlineShoppingCart } from "react-icons/ai";
import Image from 'next/image';
import Link from 'next/link';
import New from "../../public/images/new1.jpeg"

const News = () => {
    return (
        <section className="new">
            <div className="new-top">
                <h2>Yeni xəbərlər</h2>
            </div>
            <div className="new-bottom">
                <div className="container-news">
                    <Link href="/">
                        <a className='news-card-link'>
                            <Image src='/images/red-img.jpeg' alt='image' width={500} height={300} />
                        </a>
                    </Link>
                    <div className='news-about'>
                        <span className='news'>Xəbərlər</span>
                        <h3 className='about'>Qırmızını seç, daha çox endirim qazan!</h3>
                    </div>
                </div >
                <div className="container-news">
                    <Link href="/">
                        <a className='news-card-links'>
                            <Image src='/images/yyyy.jpeg' alt='image' width={500} height={300} />
                        </a>
                    </Link>
                    <div className='news-about'>
                        <span className='news'>Xəbərlər</span>
                        <h3 className='about'>Baku Electronics 30-cu mağazasını açdı!</h3>
                    </div>

                </div >

            </div >
        </section>

    )
}

export default News;