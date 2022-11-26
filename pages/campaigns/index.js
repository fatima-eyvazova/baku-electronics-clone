import Link from "next/link";
import CustomHead from "../../components/customHead/customHead";

const CampaignsPage = () => {
  return (
    <>
      <CustomHead title='Baku Electronics Campaigns' />
      <section className="campaigns-section">
        <div className="top-cards">
          <div className="campaigns-top">
            <h2>Kampaniyalar</h2>
            <div className="categories">
              <span className="over-categories">Kateqoriyalar üzrə</span>
              <ul className="lists-spans">
                <li>
                  <span className="child-one">Endirim</span>
                  <span className="child-two">(2)</span>
                </li>
                <li>
                  <span className="child-one">Hədiyyə</span>
                  <span className="child-two">(1)</span>
                </li>
                <li>
                  <span className="child-one">Nisyə alış</span>
                  <span className="child-two">(1)</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="campaigns-cards" >
            <div className="container-cm">
              <Link href="/">
                <a className='news-card-campaigns'>
                  <span></span>
                </a>
              </Link>
              <div className="blog-item-label">Endirim</div>
              <div className='campaigns-about'>
                <span className='campaigns'>1 Oktyabr - 30 Noyabr</span>
                <p className='about-one'>4gün: 23saat : 37deq</p>
              </div>

            </div >
            <div className="container-cm">
              <Link href="/">
                <a className='news-card-campaign'>
                  <span></span>
                </a>
              </Link>
              <div className="blog-item-label">Endirim</div>
              <div className='campaigns-about'>
                <span className='campaigns'>19 Sentyabr - 28 Fevral</span>
                <p className='about-one'>94gün : 23saat : 37deq</p>
              </div>

            </div >
            <div className="container-cm">
              <Link href="/">
                <a className='news-card-campaign-three'>
                  <span></span>
                </a>
              </Link>
              <div className="blog-item-label">Nisyə alış</div>
              <div className='campaigns-about'>
                <span className='campaigns'>1 Noyabr - 31 Dekabr</span>
                <p className='about-one'>43gün : 10saat : 20deq</p>
              </div>

            </div >
            <div className="container-cm">
              <Link href="/">
                <a className='news-card-campaign-four'>
                  <span></span>
                </a>
              </Link>
              <div className="blog-item-label">Hədiyyə</div>
              <div className='campaigns-about'>
                <span className='campaigns'>19 Sentyabr - 28 Fevral</span>
                <p className='about-one'>52gün : 14saat : 18deq</p>
              </div>

            </div >
          </div>
        </div>

      </section>


    </>
  );
};

export default CampaignsPage;
