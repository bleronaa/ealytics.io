import React,{useState, useEffect} from 'react'
import Sap from '../../images/2024-03-SAP_2011_logo.svg-2048x1013.png';
import sap from '../../images/sap.jpg';
import './sap.css';
import Footer from '../../components/Footer';
import implementation from '../../images/ERPSAP-Implementation-Cost.webp';
import managed from '../../images/SAP-Solutions.jpg';
import box1 from '../../images/sapbox1.webp';
import box2 from '../../images/sapbox2.jpg';
import box3 from '../../images/sapbox3.jpg';
import box4 from '../../images/sapbox4.png';


const SAP = () => {


    const faqs = [
      {
        question: "What is SAP, and how does it benefit my business? ",
        answer: "SAP is a global leader in enterprise software solutions, offering a comprehensive suite of applications that stream line and optimize business processes. Implementing SAP provides real-time insights, process integration, and predictive analytics to drive strategic growth"
      },
      {
        question: "How does SAP support integrated business planning?",
        answer: "SAP enables integrated business planning by connecting data across various modules such as finance, supply chain, and HR. This unified approach ensures all departments work with consistent, accurate information, fostering collaboration and informed decision-making."
      },
      {
        question: "Can SAP integrate with our existing  systems and data sources?",
        answer: "Yes, SAP boasts robust data integration capabilities, allowing seamless connections with various systems and data sources. This ensures a unified and accurate view of information across the enterprise"
      },
      {
        question: "What is required to implement SAP in our organization?",
        answer: "Implementing SAP involves aligning your business processes with the platform, ensuring data quality, and training users. Ealytics provides expert support throughout this journey, ensuring a smooth transition and continuous value delivery."
      }
    ];
  
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleToggle = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  

    useEffect(() => {
      const handleScroll = () => {
        const rightContent = document.querySelectorAll('.advantagesBoxes');
        rightContent.forEach(content => {
          const contentTop = content.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          if (contentTop < windowHeight * 0.8) {
            content.classList.add('show');
          } else {
            content.classList.remove('show');
          }
        });
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    useEffect(() => {
      const handleScroll = () => {
        const rightContent = document.querySelectorAll('.platform');
        rightContent.forEach(content => {
          const contentTop = content.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          if (contentTop < windowHeight * 0.8) {
            content.classList.add('show');
          } else {
            content.classList.remove('show');
          }
        });
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <div>
      <div className="flex-container">
  <div className="flex-item">
    {/* <img src={Sap} width={650} /> */}
    <h5 className='saph5'>UNLOCK THE FULL POTENTIAL OF SAP:INTEGRATE, INNOVATE, INSPIRE</h5>
  </div>
  <div className="flex-item1">
    <img src={sap} className='imganaplan' />
  </div>
</div>
<div className='advantages'>
      <h2 className='h2advantages'>
        At <span>Ealytics</span>, we bring unparalleled SAP expertise to empower your business with seamless integration, innovative solutions, and strategic foresight.
      </h2>
      <div className='advantagesBoxes'>
        <div className='advantagesBox'>
          <img src={box1} width={120} height={100}/>
          <h4>Business Process Optimization</h4>
          <p>Streamline and optimize your business processes to ensure efficient and effective SAP implementation across all departments</p>
        </div>
        <div className='advantagesBox'>
            <img src={box2}  width={120} height={100}/>
            <h4>Custom SAP Solutions</h4>
          <p>Tailored SAP modules and custom developments to meet your specific business requirements, ensuring maximum value</p>
          </div>
          <div className='advantagesBox'>
            <img src={box3}  width={120} height={100}/>
            <h4>Seamless System Integration</h4>
            <p>Connect your SAP systems with other enterprise applications and data sources for a unified and accurate view of your organization</p>
          </div>
          <div className='advantagesBox'>
            <img src={box4}  width={120} height={100}/>
            <h4> Analytics & Insights</h4>
            <p>Gain actionable insights through SAP Analytics Cloud, SAP BW, and S/4HANA,driving data-driven decision-making and strategic growth.</p>
          </div>
      </div>
    </div>
    <div className="implementation">
      <h2 className='h2implementation'> 
      Implementation Solutions</h2>
      <div className='solutions'>
      <div className="solution">
        <img src={implementation} width={600}/>
      </div>
      <div className="solution">
        <h5>Overwhelmed with managing your SAP systems? Our expert team will refine your strategy, modules, and data integration to ensure consistent performance and insightful analytics</h5>
        <h4>We Provide</h4>
        <h5><span>System Configuration & Optimization</span>: Configure your SAP systems to match your business requirements, ensuring seamless performance and data consistency.</h5>
        <h5><span>Custom Module Development</span>:Tailor your SAP modules to enhance efficiency and align with your business strategy.</h5>
        <h5><span>Data Migration & Integration</span>: Securely migrate your legacy data to SAP systems and integrate it with existing applications for unified insights</h5>
        <h5><span>Change Management</span>: Facilitate a smooth transition and user adoption through comprehensive training and structured change management</h5>
      </div>
      </div>
      </div>
      <div className='service'>
      <h2 className='h2implementation'> 
      Managed Services</h2>
      <div className='solutions'>
      <div className="solution">
        <h5>Struggling with SAP system limitations or inconsistent reporting? Our managed services ensure your SAP systems remain streamlined, accurate, and insightful.</h5>
        <h4> Our Services Include:</h4>
        <h5><span>System Monitoring & Maintenance</span>: Proactively monitor your SAP systems to idenify and resolve potential issues before they impact you operations .</h5>
        <h5><span>Patch & Upgrade Management</span>: Ensure your SAP systems are always op-to-date with the latest patches and upgrades for optimal performance and security</h5>
        <h5><span>Data Security & Compliance</span>: Protect your sensitive business data with robust security protocols and ensure compliance with industry standards</h5>
        <h5><span>Reporting & Analytics Support</span>:  Develop and refine your SAP reports to deliver accurate, impactful and insigihts to stakeholders</h5>

      </div>
      <div className="solution">
        <img src={managed} width={650} height={400}/>
      </div>
      </div>   
    </div>

    <div className="Platforms">
      <h2 className='platformFeatures'>Platform Features</h2>
      <p className='platformP'>These cornerstones under score SAP's comprehensive approach to enterprise resource planning, emphasizing integration, flexibility, and strategic deployment</p>
    
    <div className="feature-group">
      
      <div className='platform'>
          <h4>SAPS/4HANA</h4>
          <p>Harness the power of SAP's next-generation ERP suite for intelligent business operations, predictive analytics, andreal-time insights</p>
      </div>
      <div className='platform'>
          <h4>SAP Analytics Cloud</h4>
          <p>Empower your decision-makers with advanced analytics, visualizations, and predictive insights in a single platform.</p>
      </div>
    </div>
    <div className="featureGroup">
      <div className='platform'>
          <h4>SAP Business Technology Platform</h4>
          <p>Integrate, extend, and innovate your SAP applications with this comprehensive platform, driving business agility and digital transformation.</p>
      </div>
      <div className='platform'>
          <h4>SAP Success Factors</h4>
          <p>Streamline your human capital management with an intelligent solution that supports recruitment, performance, learning, and more</p>
      </div>
      <div className='platform'>
          <h4>SAPCustomerExperience(CX)</h4>
          <p>Deliver exceptional customer experiences by unifying marketing, commerce, sales, and service operations</p>
      </div>
  </div>
  </div>
      <div className='engageInfo'>
        <h4>Engage with ealytics for Unmatched SAP Expertise</h4>
        <p>Leverage our deep SAP knowledge to revolutionize your business processes. Partnering with us means accessing<br></br> a wealth of experience and a commitment to excellence that sets your business apart.</p>
      </div>

      <div className="faq-section">
        <div className="faq-text">
          <h1>Do You Have Questions? Check Our FAQs Section or Reach Out</h1>
        </div>
        <div className='faqPart'>

        {faqs.map((faq, index) => (
          <div className="faq-question" key={index}>
            <div className="faq-header" onClick={() => handleToggle(index)}>
              <h3>{faq.question}</h3>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default SAP
