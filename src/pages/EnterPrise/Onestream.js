import React, {useState,useEffect, useRef } from 'react';
import Footer from '../../components/Footer';
import box1 from '../../images/onestreambox1.png';
import box2 from '../../images/onestreambox2.png';
import box3 from '../../images/onestreambox3.jpeg';
import box4 from '../../images/onestreambox4.png';
import onestream from '../../images/onestream.jpg';
import implementation from '../../images/OnestreamHeader.webp';
import managedServices from '../../images/insight-onestream.webp';
import './onestream.css'

const Onestream = () => {
    const [animateImage, setAnimateImage] = useState(false);
    const imageRef = useRef(null);
  
    useEffect(() => {
      const handleScroll = () => {
        const imageTop = imageRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (imageTop < windowHeight * 0.75) {
          setAnimateImage(true);
          window.removeEventListener('scroll', handleScroll);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const faqs = [
        {
            question: "What is OneStream, and how can they benefit my business?",
            answer: "OneStream is a unified, intelligent finance platform that consolidates financial" +
                    " data, reporting and planning processes into a single solution. Implementing One" +
                    "Stream helps businesses streamline financial close, budgeting, forecasting and r" +
                    "eporting processes for improved accuracy and strategic insights."
        }, {
            question: "How does OneStream support financial consolidation and close?",
            answer: "OneStream automates data integration, validation and consolidation workflows, en" +
                    "suring a smooth and accurate financial close process.."
        }, {
            question: "Can OneStream integrate  with our existing financial systems and data sources?",
            answer: "Yes, OneStream has robust data integration capabilities, allowing seamless conne" +
                    "ctions with various systems and data sources. This ensures a unified and accurat" +
                    "e view of financial information across the enterprise."
        }, {
            question: "What is required to implement OneStream in our organization?",
            answer: "Implementing OneStream involves aligning your financial processes with the platf" +
                    "orm, ensuring data quality, and training users. Ealytics provides expert support" +
                    " throughout this journey, ensuring a smooth transition and continuous value deli" +
                    "very."
        }
    ];

    const [activeIndex,
        setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index
            ? null
            : index);
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
                    <h1 className='bookkeepingh1'>OneStream</h1>
                    <h5 className='saph5'>HARNESS THE POWER OF ONESTREAM: CONSOLIDATE, OPTIMIZE, EVOLVE</h5>
                </div>
                <div className="flex-item1">
                    <img src={onestream} className='imganaplan'/>
                </div>
            </div>

            <div className='advantages'>
                <h2 className='h2advantages'>
                    At
                    <span>ealytics</span>, we specialize in delivering comprehensive OneStream solutions that
                    <br></br>
                    consolidate financial processes, optimize performance, and drive strategic
                    evolution
                </h2>
                <div className='advantagesBoxes'>
                    <div className='advantagesBox'>
                        <img src={box1} width={140} height={110}/>
                        <h4>Unified Financial Platform</h4>
                        <p>Consolidate your financial data, reporting, and planning processes in a
                            single, unified platform for consistent, accurate insights.</p>
                    </div>
                    <div className='advantagesBox'>
                        <img src={box2} width={120} height={100}/>
                        <h4>Financial Consolidation & Close</h4>
                        <p>Streamline your financial consolidation and close processes with built-in
                            workflows, validation, and automated data integration.</p>
                    </div>
                    <div className='advantagesBox'>
                        <img src={box3} width={120} height={100}/>
                        <h4>Budgeting, Forecasting & Planning</h4>
                        <p>Createdynamicbudgets and forecasts that align with your strategic goals and
                            adapt to changing business priorities.</p>
                    </div>
                    <div className='advantagesBox'>
                        <img src={box4} width={140} height={100}/>
                        <h4>Scenario Modeling & Analytics</h4>
                        <p>Tes tmultiple financial scenarios to anticipate market changes and drive
                            proactive decision-making.</p>
                    </div>

                </div>
            </div>
            <div className="implementation">
                <h2 className='h2implementation'>
                    Implementation Solutions</h2>
                <div className='solutions'>
                <div ref={imageRef} className={`image-container ${animateImage ? 'animate' : ''}`}>
                <img src={implementation} width={600}  style={{marginTop:70}}/>
                    </div>
                   
                    <div className="solution">
                        <h5>Need help implementing OneStream or optimizing your current models? Our
                            expert team will refine your strategy, processes, and integration to deliver
                            accurate, actionable insights.</h5>
                        <h4>We Provide</h4>
                        <h5>
                            <span>System Design & Configuration:</span>: Design and configure your OneStream
                            system to align with your unique financial requirements</h5>
                        <h5>
                            <span>
                                Data integration & Migration</span>: Securely migrate your legacy data to
                            OneStream and integrate it with other enterprise applications for unified
                            insights</h5>
                        <h5>
                            <span>Model Development & Optimization</span>:Develop scalable OneStream models
                            tailored to your business needs and continuously optimize them for improved
                            performance.</h5>
                        <h5>
                            <span>Change Management & Training</span>:Facilitate smooth user adoption with
                            comprehensive training and structured change management.</h5>
                    </div>
                </div>
            </div>
            <div className='service'>
                <h2 className='h2implementation'>
                    Managed Services</h2>
                <div className='solutions'>
                    <div className="solution">
                        <h5>Overwhelmed with managing your current OneStream models? Our managed
                            services ensure your OneStream solutions remain streamlined, compliant, and
                            insightful</h5>
                        <h4>
                            Our Services Include:</h4>
                        <h5>
                            <span>Model Maintenance & Enhancement</span>:Regularly update and enhance your
                            OneStream models to keep them aligned with your evolving business needs</h5>
                        <h5>
                            <span>Financial Close Support</span>: Ensure a smooth financial close process
                            with proactive supprot for data validation, consolidation and reporting.</h5>
                        <h5>
                            <span>Custom Reporting Solutions</span>:Develop dynaimoc reports tailored to
                            your KPIs, delivering impactful visualizations and clear insights to
                            stakeholders.</h5>
                        <h5>
                            <span>Data Secuirty & Compliance</span>: Protect your financial data with robust
                            security protocols and ensure compliance with federal, state and local
                            regualtions.</h5>

                    </div>
                    <div className="solution">
                        <img className='solutionimg' src={managedServices} width={650} height={450}/>
                    </div>
                </div>
            </div>

            <div className="Platforms">
                <h2 className='platformFeatures'>Platform Features</h2>
                <p className='platformP'>These cornerstones underscore our comprehensive
                    approach to OneStream solutions, emphasizing consolidation, accuracy and
                    strategic alignment</p>

                <div className="feature-group">

                    <div className='platform'>
                        <h4>Unified Financial Platform
                        </h4>
                        <p>Consolidate your financial processes and data in a single plaform for
                            consistent, accurate insights.</p>
                    </div>
                    <div className='platform'>
                        <h4>
                            Financial Consolidation & Close</h4>
                        <p>StreamLine your consolidation and close processes with automated data
                            integration and validation.</p>
                    </div>
                </div>
                <div className="featureGroup">
                    <div className='platform'>
                        <h4>Budgeting & Forecating Optimization</h4>
                        <p>Create dynaimic budgets and forecasts that align with your strategis goals
                            and adapt to changing market conditions.</p>
                    </div>
                    <div className='platform'>
                        <h4>Scenario Modeling & Analytics</h4>
                        <p>Test multiple financial scenarios to anticipate market changes and drive
                            proactive decision-making.</p>
                    </div>
                    <div className='platform'>
                        <h4>Custom Reporting & Dashboards</h4>
                        <p>Develop tailored reports and dashboards that deliver impactfulinsights and
                            support strategic decision-making.</p>
                    </div>
                </div>
            </div>

            <div className='engageInfo'>
                <h4>Engage with ealytics for Unmatched OneStream Expertise</h4>
                <p>Leverage our deep OneStream knowledge to transform your financial processes.
                    Partnering with us means accessing a wealth of experience and commitment to
                    excellence that sets your business apart.</p>
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
                                <span>{activeIndex === index
                                        ? '-'
                                        : '+'}</span>
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

export default Onestream
