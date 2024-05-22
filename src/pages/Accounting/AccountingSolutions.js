import React from 'react';
import AccBg from '../../images/pexels-googledeepmind-17484899.jpg';
import "./Accounting.css";
import bookkeeping from '../../images/bookkeping.avif';
import cfo from '../../images/cfo.jpg';
import fpa from '../../images/FP&A.png';
import consulting from '../../images/consulting.jpg';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';


const AccountingSolutions = () => {

  const backgroundStyle = {
    backgroundImage: `url(${AccBg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '80vh',
    backgroundPosition: 'center',
    width: '100%',
  };

  return (
    <>

      <section className='hero1' style={backgroundStyle}>
        <div className='container'>
          <div className='box-container'>
          <h2>Accounting solutions: where the precision of blue<br></br> meets the optimism of yellow</h2>         
          </div>
            <div className="card-container">
            <h2 className='title' style={{color:'black'}}>Our Expertly Managed Accounting Services</h2> 

                
              <div className="card">
                <div className="card-body">                  
                  <h5 className="card-title">Bookkeeping</h5>
                  <div class="overlay"></div>
                  <p className="card-text">Outsource your bookkeeping to ealytics and experience hassle-free financial management with our expert, technology-driven solutions designed to save you time and enhance accuracy.</p>
                  <button className="button"  onClick={() => window.location.href='#'}><Link to="/bookkeeping"><span>Learn More</span></Link></button>

                </div>

              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">FP&A</h5>
                  <div class="overlay"></div>
                  <p className="card-text">Enhance your financial planning and analysis with straightforward, expert insights combined with advanced software to drive strategic growth and improve decision-making..</p>
                  <button className="button"  onClick={() => window.location.href='#'}><Link to="/fpa"><span>Learn More</span></Link></button>
                </div>

              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">CFO</h5>
                  <div class="overlay"></div>
                  <p className="card-text">Outsource your bookkeeping to ealytics and experience hassle-free financial management with our expert, technology-driven solutions designed to save you time and enhance accuracy.</p>
                  <button className="button"  onClick={() => window.location.href='#'}><Link to="/CFO"><span>Learn More</span></Link></button>
                </div>

              </div>
              
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Finance <br></br>Consulting</h5>
                  <div class="overlay"></div>
                  <p className="card-text">Outsource your bookkeeping to ealytics and experience hassle-free financial management with our expert, technology-driven solutions designed to save you time and enhance accuracy.</p>
                  <button className="button"  onClick={() => window.location.href='#'}><Link to="/financial"><span>Learn More</span></Link></button>
                </div>

              </div>

            </div>
        
        </div>
        
      </section>
    

<section className='intoAccounting'>
  <div className='titleWrapper'>
    <h1 className='accountingtitle'>The Power of Modern Accounting Solutions</h1>
  </div>
  <div className='accDescription'>
    <p>In today's dynamic business landscape, efficient financial management is essential for success. Accounting solutions offer businesses powerful tools to streamline their financial processes, improve accuracy, and gain valuable insights into their financial health. From basic bookkeeping to comprehensive financial reporting, these solutions provide businesses with the capability to manage transactions, track expenses, generate invoices, process payroll, and more. With cloud-based platforms enabling anytime, anywhere access, accounting solutions empower businesses of all sizes to make informed decisions, optimize operations, and drive growth. Whether you're a small startup or a large enterprise, finding the right accounting solution tailored to your needs can significantly enhance your financial management capabilities and propel your business forward.</p>
  </div>
</section>

  <div className="cards-container">
    <div className="cards">
      <h1 className="names">Basic</h1>
      <h1 className=" month-price">$249<span>/month</span></h1>
      <div className="card-description">
        <span className="monthly-plan">
          <p className="card-points">Sales & Marketing Platform.</p>
          <p className="card-points">Snapshot & Campaigns</p>
          <p className="card-points">Marketplace</p>
          <p className="card-points">Business Center & Store</p>
          <p className="card-points">Tech support (limited)</p>
          <p className="card-points">Partner Success Manager</p>
          <p className="card-points">Custom domains</p>
          <p className="card-points">Concierge</p>
          <p className="card-points">Brand Analytics</p>
          <p className="card-points">Managed Digital Ads</p>
          <p className="card-points">Access to in-market seminars</p>
          <p className="card-points">APIs & SSO</p>
          <p className="card-points">Digital Agency</p>
          <p className="card-points">100% white-label</p>
        </span>   
      </div>
      <Link to="/contact">
      <button className="buybtn" type="button">Contact for More</button>
    </Link>
      
    </div>
  
  {/* Second Card */}

  <div className="cards">
      {/* <p className="text-blk">Penatibus massa diam.</p> */}
      <h1 className="names">Basic</h1>
      <h1 className=" month-price">$249<span>/month</span></h1>
      <div className="card-description">
        <span className="monthly-plan">
          <p className="card-points">Sales & Marketing Platform.</p>
          <p className="card-points">Snapshot & Campaigns</p>
          <p className="card-points">Marketplace</p>
          <p className="card-points">Business Center & Store</p>
          <p className="card-points">Tech support (limited)</p>
          <p className="card-points">Partner Success Manager</p>
          <p className="card-points">Custom domains</p>
          <p className="card-points">Concierge</p>
          <p className="card-points">Brand Analytics</p>
          <p className="card-points">Managed Digital Ads</p>
          <p className="card-points">Access to in-market seminars</p>
          <p className="card-points">APIs & SSO</p>
          <p className="card-points">Digital Agency</p>
          <p className="card-points">100% white-label</p>
        </span>   
      </div>
      
      <Link to="/contact">
      <button className="buybtn" type="button">Contact for More</button>
    </Link>
      
    </div>
  {/* Third Card */}

  <div className="cards">
      {/* <p className="text-blk">Penatibus massa diam.</p> */}
      <h1 className="names">Basic</h1>
      <h1 className=" month-price">$249<span>/month</span></h1>
      <div className="card-description">
        <span className="monthly-plan">
          <p className="card-points">Sales & Marketing Platform.</p>
          <p className="card-points">Snapshot & Campaigns</p>
          <p className="card-points">Marketplace</p>
          <p className="card-points">Business Center & Store</p>
          <p className="card-points">Tech support (limited)</p>
          <p className="card-points">Partner Success Manager</p>
          <p className="card-points">Custom domains</p>
          <p className="card-points">Concierge</p>
          <p className="card-points">Brand Analytics</p>
          <p className="card-points">Managed Digital Ads</p>
          <p className="card-points">Access to in-market seminars</p>
          <p className="card-points">APIs & SSO</p>
          <p className="card-points">Digital Agency</p>
          <p className="card-points">100% white-label</p>
        </span>   
      </div>
      
      <Link to="/contact">
      <button className="buybtn" type="button">Contact for More</button>
    </Link>
      
    </div>
  </div>




<Footer/>
    </>
  )
}

export default AccountingSolutions;
