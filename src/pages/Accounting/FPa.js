import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import fpa from '../../images/fpa.jpg';
import predictive from '../../images/fpaa1.jpg';
import integrated from '../../images/fpa2.png';
import scenario from '../../images/fpa3.jpg';
import scalability from '../../images/fpa4.jpg';
import fpaservices from '../../images/FPaServices.jpeg';
import solutions from '../../images/fpadetector.jpg';
import Footer from '../../components/Footer';
import './fpa.css';


const FPa = () => {


  const faqs = [
    {
      question: "What is FP&A, and how does it differ from traditional financial planning?",
      answer: "FP&A is a strategic financial process that focuses on integrating budgeting, forecasting, and analysis to drive better decision-making. Unlike traditional financial planning, FP&A provides real-time insights, predictive analytics, and scenario modeling, enabling proactive strategy development."
    },
    {
      question: "How does FP&A support data-driven decision-making?",
      answer: "FP&A provides centralized access to real-time financial data, predictive models, and scenario planning tools. This empowers businesses to make informed decisions based on the most current and accurate insights."
    },
    {
      question: "Can FP&A integrate with existing financial systems and data sources?",
      answer: "Yes, FP&A solutions boast robust data integration capabilities, allowing seamless connections with various systems and data sources. This ensures a unified and accurate view of financial information across the enterprise."
    },
    {
      question: "What is required to implement FP&A in our organization?",
      answer: "Implementing FP&A involves aligning your business processes with the platform, ensuring data quality, and training users. Ealytics provides expert support throughout this journey, ensuring a smooth transition and continuous value delivery."
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
    <div id="fpa">
       <div className="flex-container">
  <div className="flex-item">
    <h1 className='bookkeepingh1'>FP&A</h1>
    <h5 className='saph5'>POWER YOUR DECISION-MAKING WITH FP&A: PREDICT, PLAN, PERFORM.</h5>
    
  </div>
  <div className="flex-item1">
    <img src={fpa} className='imganaplan' />
  </div>
</div>

<div className='advantages'>
      <h2 className='h2advantages'>
        At <span>Ealytics</span>, we specialize in enhancing your FP&A capabilities<br></br> by delivering tailored solutions
          that empower your business with real-time insights,<br></br> streamlined planning, and strategic
          foresight. 
      </h2>
      <div className='advantagesBoxes'>
        <div className='advantagesBox'>
          <img src={predictive} width={100} height={80}/>
          <h4>Predictive Analytics</h4>
          <p>Harness advanced predictive analytics to anticipate future market trends, enabling
              proactive business strategies that secure growth and mitigate risks</p>
        </div>
        <div className='advantagesBox'>
            <img src={integrated} width={100} height={80}/>
            <h4>Integrated Financial Planning</h4>
          <p>Align your financial goals with corporate strategy by seamlessly connecting budgets,
              forecasts, and actuals across all departments for comprehensive financial visibility</p>
          </div>
          <div className='advantagesBox'>
            <img src={scenario} width={100} height={80}/>
            <h4>Scenario Modeling</h4>
            <p>Test multiple financial scenarios to understand potential outcomes and build flexible
                strategies that can adapt to changing market conditions</p>
          </div>
          <div className='advantagesBox'>
            <img src={scalability} width={100} height={80}/>  
            <h4>Scalability & Flexibility</h4>
            <p>Adapt and scale your FP&A processes as your organization grows, without
                compromising performance or data accuracy</p>
          </div>
      </div>
    </div>
    <div className="implementation">
      <h2 className='h2implementation'> 
      Implementation Solutions</h2>
      <div className='solutions'>
      <div className="solution">
        <img src={solutions} width={600} style={{marginTop:70}}/>
      </div>
      <div className="solution">
        <h5>Overwhelmed with managing your current FP&A processes? Our expert team will refine your
          strategy, models, and data integration to ensure consistent performance and actionable insights</h5>
        <h4>We Provide</h4>
        <h5><span>Model Optimization</span>: Fine-tune your financial models to enhance efficiency and deliver accurate, real-time insights.</h5>
        <h5><span>Forecast Accuracy Improvement</span>: Implement best practices and tools to enhance forecasting accuracy and reliability.</h5>
        <h5><span>Process Standardization</span>:Streamline your budgeting and forecasting processes to eliminate redundancy and improve collaboration across teams</h5>
        <h5><span>Custom Reporting Solutions</span>: Develop dynamic reports tailored to your KPIs, delivering impactful visualizations and clear insights to stakeholders.</h5>
      </div>
      </div>
      </div>
          <div className='service'>
          <h2 className='h2implementation'> 
          Managed Services</h2>
          <div className='solutions'>
          <div className="solution">
            <h5>Struggling with Excel limitations or inconsistent financial reporting? Our managed services ensure your FP&A processes remain streamlined, accurate, and insightful</h5>
            <h4> Our Services Include:</h4>
            <h5><span>Gap Analysis & Roadmap Design</span>: Identify process inefficiencies and chart a comprehensive roadmap to transform your FP&A capabilities.</h5>
            <h5><span>Custom Model Development</span>:Design scalable financial models tailored to your unique business requirements.</h5>
            <h5><span>Training & Enablement</span>:Equip your finance team with the knowledge to maximize the value of your FP&A solutions through comprehensive training.</h5>
            <h5><span>Change Management</span>: Ensure smooth transitions and user adoption with our structured change management approach.</h5>
          

          </div>
          <div className="solution">
            <img className='solutionimg' src={fpaservices} width={690} height={450}/>
          </div>
          </div>   
        </div>

        <div className="Platforms">
      <h2 className='platformFeatures'>Platform Features</h2>
      <p className='platformP'>These cornerstones underscore our comprehensive approach to FP&A, emphasizing predictive accuracy, process integration, and strategic deployment.</p>
    
    <div className="feature-group">
      
      <div className='platform'>
          <h4>Predictive Forecasting</h4>
          <p>Use machine learning to forecast revenue, expenses, and cash flow accurately,
              enhancing financial resilience and strategic planning</p>
      </div>
      <div className='platform'>
          <h4>Collaborative Planning:</h4>
          <p>Foster cross-department collaboration with centralized planning tools that synchronize
              data and eliminate silos</p>
      </div>
    </div>
    <div className="featureGroup">
      <div className='platform'>
          <h4>Data Integration & Management</h4>
          <p>Unify disparate data sources to deliver accurate, consistent insights, driving a
              data-driven decision-making culture.</p>
      </div>
      <div className='platform'>
          <h4>User-Friendly Interface</h4>
          <p>Intuitive dashboards and reports simplify complex analysis, making strategic
              decision-making accessible to all users.</p>
      </div>
      <div className='platform'>
          <h4>Security & Compliance</h4>
          <p>Prioritize data security and compliance with robust protocols that protect sensitive
              business information.</p>
      </div>
      </div>
      </div>

       <div className='engageInfo'>
        <h4>Engage with ealytics for Unparalleled Expertise</h4>
        <p>Leverage our deep financial knowledge to transform your business processes. Partnering with
            us means accessing a wealth of experience and commitment to excellence that sets your
            business apart.</p>
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

export default FPa
