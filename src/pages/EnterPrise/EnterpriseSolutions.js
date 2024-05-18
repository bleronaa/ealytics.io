import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Enterprise.css"
import background from '../../images/pexels-misael-garcia-832776-1707823.jpg'
import anaplan from '../../images/2024-03-Anaplan-1024x226.png';
import onestream from '../../images/2024-03-OneStream_Colored-1024x191.png'
import oracle from '../../images/2024-03-NetSuite-300x106.png';
import sap from '../../images/2024-03-SAP_2011_logo.svg-1024x506.png'
import erp from '../../images/6708548.webp'
import { GoArrowDownRight } from "react-icons/go";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../components/Footer'  





const EnterpriseSolutions = () => {

  const [showMore, setShowMore] = useState(false);
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '80vh',
    backgroundPosition: 'center',
    width: '100%',
  };
  return (
    <>  
    
 <section className='wrapper' style={backgroundStyle}>
  <div className='container'>
    <div className="card-block">
      <h2 className='HeaderTitle' style={{color:'black'}}>Our Specialized Offerings</h2>
      
      <div className="item-row">
        <div className="item">
          <div className="item-body">
            <img src={anaplan} alt="anaplan" width={"200px"} style={{ paddingTop: "30px" }}/>
            <p className="item-text">Outsource your bookkeeping to ealytics and experience hassle-free financial management with our expert, technology-driven solutions designed to save you time and enhance accuracy.</p>
            <Link to={'/anaplan'}>
            <button className="learn" onClick={() => window.location.href='#'}><span>Learn More</span> <GoArrowDownRight  className="arrow-icon" /></button>
            </Link>
          </div>
        </div>

        <div className="item">
          <div className="item-body">
            <img src={onestream} alt="onestream"  width={"200px"} style={{ paddingTop:"35px" }}/>
            <p className="item-text">Outsource your bookkeeping to ealytics and experience hassle-free financial management with our expert, technology-driven solutions designed to save you time and enhance accuracy.</p>
           <Link to='/onestream'>
            <button className="learn" onClick={() => window.location.href='#'}>
              <span>Learn More</span> 
              <GoArrowDownRight className="arrow-icon" />
              </button>
              </Link>
          </div>
        </div>

        <div className="item">
          <div className="item-body">
            <img src={oracle} alt="oracle"  width={"200px"} />
            <p className="item-text">Outsource your bookkeeping to ealytics and experience hassle-free financial management with our expert, technology-driven solutions designed to save you time and enhance accuracy.</p>
            <Link to='/oracleNetSuite'>
            <button className="learn" onClick={() => window.location.href='#'}><span>Learn More</span> <GoArrowDownRight className="arrow-icon" /></button>
            </Link>
          </div>
        </div>

        <div className="item">
          <div className="item-body">
            <img src={sap} alt="sap" className='sapimg' width={"145px"}/>
            <p className="item-text">Outsource your bookkeeping to ealytics and experience hassle-free financial management with our expert, technology-driven solutions designed to save you time and enhance accuracy.</p>
           <Link to='/sap'>
            <button className="learn" onClick={() => window.location.href='#'}><span>Learn More</span> <GoArrowDownRight className="arrow-icon" /></button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>

  </section>

      
    <section className='intoEnterprise'>
      <div className='titleWrapper'>
        <h1 className='enterprisetitle'>The Power of Enterprise Solutions</h1>
      </div>
      <div className='accDescription'>
        <p>In today's competitive business environment, enterprise solutions play a crucial role in driving organizational efficiency and productivity. These comprehensive software platforms offer a wide range of functionalities tailored to meet the complex needs of large-scale enterprises. From enterprise resource planning (ERP) to customer relationship management (CRM) and supply chain management (SCM), these solutions integrate various business processes, streamline workflows, and enhance collaboration across departments. With advanced analytics and reporting capabilities, enterprise solutions provide actionable insights that enable informed decision-making at every level of the organization. Moreover, with scalable and customizable features, these solutions can adapt to the evolving needs of growing enterprises, ensuring long-term sustainability and success. Whether it's optimizing resource allocation, improving customer engagement, or enhancing operational efficiency, enterprise solutions empower organizations to stay ahead of the curve and drive innovation in today's digital age.</p>
      </div>
    </section>

    <div className="custom-container">
      <div className="custom-row">
        <div className="custom-column">
          <img src={erp} alt="Image" width={"450px"} />
        </div>
        <div className="custom-column">
          <h2>ERP-Enterprise Resource Planning</h2>
          <p>
            Enterprise Resource Planning (ERP) systems automate core business functions like finance, HR, supply chain, and customer relationship management. They provide real-time visibility and data-driven decision-making, increasing efficiency and reducing costs. With tailored modules, ERP solutions offer scalability and flexibility for modern enterprises.
          </p>
          {showMore && <p>
            Additionally, ERP systems often include modules for inventory management, procurement, project management, and analytics. These modules enable businesses to optimize their operations further, manage resources effectively, and adapt to changing market conditions. By integrating various aspects of business operations into a unified platform, ERP systems empower organizations to streamline processes, improve collaboration, and drive innovation.
            </p>}
            <button className="learn" onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </div>
    <Footer  />
        </>
        
      )
    }

export default EnterpriseSolutions
