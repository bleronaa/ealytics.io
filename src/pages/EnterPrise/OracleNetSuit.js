import React, {useState,useEffect} from 'react';
import Footer from '../../components/Footer';
import box1 from '../../images/oraclebox1.jpg';
import box2 from '../../images/oraclebox2.jpg';
import box3 from '../../images/oraclebox3.png';
import box4 from '../../images/oraclebox4.jpg';
import oraclenetsuite from '../../images/oraclenetsuite.webp';
import implentation from '../../images/netsuite-erp-implementation.webp';
import managed from '../../images/oraclemanaged.jpg';

const OracleNetSuit = () => {

    const faqs = [
        {
            question: "What is Oracle NetSuite, and how does it benefit my business?",
            answer: "Oracle NetSuite is a cloud-based business management platform that unifies finan" +
                    "cials, CRM, e-commerce, and inventory management in to a single solution. Implem" +
                    "enting NetSuite helps businesses streamline their processes, improve customer en" +
                    "gagement and gain real-time insights"
        }, {
            question: "How does NetSuite support financial management and reporting?",
            answer: "NetSuite automates financial workflows, from accounting to compliance, and provi" +
                    "des real-time financial reporting, enabling informed decision-making"
        }, {
            question: "Can NetSuite integrate with our existing financial systems and data sources?",
            answer: "Yes, NetSuite has robust data integration capabilities, allowing seamless connec" +
                    "tions with various systems and data sources. This ensures a unified and accurate" +
                    " view of information a cross the enterprise."
        }, {
            question: "What is required to implement NetSuite in our organization?",
            answer: "Implementing NetSuite involves aligning your business processes with the platfor" +
                    "m,ensuring data quality and training users. Ealytics provides expert support thr" +
                    "oughout this journey, ensuring a smooth transition and continuous value delivery" +
                    "."
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
                    {/* <h1 className='fpah1'>Oracle NetSuite</h1> */}
                    <h5 className='saph5'>ACCELERATE YOUR GROWTH WITH NETSUITE: INTEGRATE, INNOVATE, EXCEL
                    </h5>
                </div>
                <div className="flex-item1">
                    <img src={oraclenetsuite} className='imganaplan' />
                </div>
            </div>

            <div className='advantages'>
                <h2 className='h2advantages'>
                    At <span>
                        Ealytics</span>,,we specialize in delivering comprehensive OracleNet Suite
                    solutions that integrate your business processes, foster innovation and
                    accelerate growth
                </h2>
                <div className='advantagesBoxes'>
                    <div className='advantagesBox'>
                        <img src={box1} width={120} height={100}/>
                        <h4>Unified Business Management Platform</h4>
                        <p>Consolidate your financials, CRM, e-commerce and inventory management in a
                            single, unified platform for consistent and accurate insights.</p>
                    </div>
                    <div className='advantagesBox'>
                        <img src={box2} width={120} height={100}/>
                        <h4>
                            Financial Management & Reporting</h4>
                        <p>Streamline your frinancial processes, from accounting to compliance, with
                            automated workflows and real-time financial reporting.</p>
                    </div>
                    <div className='advantagesBox'>
                        <img src={box3} width={120} height={100}/>
                        <h4>Customer Relationship Management (CRM)</h4>
                        <p>Enhance customer engagement and sales performance with a 360-degree view of a
                            customer interactions and history.</p>
                    </div>
                    <div className='advantagesBox'>
                        <img src={box4} width={120} height={100}/>  
                        <h4>Inventory & Order Management</h4>
                        <p>Optimize your supply chain with automated order management,real-time
                            inventory visibility and demand forecasting.</p>
                    </div>

                </div>
            </div>
            <div className="implementation">
                <h2 className='h2implementation'>
                    Implementation Solutions</h2>
                <div className='solutions'>
                    <div className="solution">
                        <img src={implentation} width={600} style={{marginTop:70}}/>
                    </div>
                    <div className="solution">
                        <h5>Need help implementing Oracle NetSuite or optimizing your current setup? Our
                            expert team will refine your strategy, processes and integration to deliver
                            accurate, actionable insights.</h5>
                        <h4>We Provide</h4>
                        <h5>
                            <span>System design & Configuration</span>: Design and configure your NetSuite
                            system to align with your unique business requirements</h5>
                        <h5>
                            <span>Data Integration & Migration</span>: Securely migrate your legacy data to
                            NetSuite and integrate it with other enterprise applications for unified
                            insights.</h5>
                        <h5>
                            <span>Custom Module Development:</span>:Develop scalable NetSuite modules
                            tailored to your business needs, continuously optimizing them for improved
                            performance.</h5>
                        <h5>
                            <span>Change Management & Training:</span>:Facilitate smooth user adoption with
                            comprehensive training and structured change management.</h5>
                    </div>
                </div>
            </div>
            <div className='service'>
                <h2 className='h2implementation'>
                    Managed Services</h2>
                <div className='solutions'>
                    <div className="solution">
                        <h5>Overwhelmed with managing your current NetSuite setup? Our managed services
                            ensure your NetSuite solutions remain streamlined, accurate and insight.</h5>
                        <h4>
                            Our Services Include:</h4>
                        <h5>
                            <span>System Monitoring & Optimization</span>:Proactively monitor your NetSuite
                            system and continuously optimize it to align with youre volving business needs.</h5>
                        <h5>
                            <span>Financial Reporting & Compliance</span>Deliver accurate, compliant
                            financial reports to stakeholders,ensuring transparency and trust</h5>
                        <h5>
                            <span>Custom Reportin Solutions</span>:Develop dynamic reports tailored to your
                            KPIs, delivering impactful visualizations and clear insights to stakeholders</h5>
                        <h5>
                            <span>User Support & Training</span>: Provide ongoing user support and training
                            to maximize the value of your NetSuite solutions.</h5>

                    </div>
                    <div className="solution">
                        <img className='solutionimg' src={managed} width={690} height={450}/>
                    </div>
                </div>
            </div>

            <div className="Platforms">
                <h2 className='platformFeatures'>Platform Features</h2>
                <p className='platformP'>These cornerstones underscore our comprehensive
                    approach to Oracle NetSuite solutions, emphasizing consolidation, integration and strategic alignment</p>

                <div className="feature-group">

                    <div className='platform'>
                        <h4>Unified Business Management Platform</h4>
                        <p>Consolidate your financials, CRM, e-commerce and inventory management in a single platform for consistent and accurate insights.</p>
                    </div>
                    <div className='platform'>
                        <h4>Financial Management & Reporting</h4>
                        <p>Streamlinr your financial processes with automated workflows and real-time financial reporting.</p>
                    </div>
                </div>
                <div className="featureGroup">
                    <div className='platform'>
                        <h4>Customer Relationship Management (CRM)</h4>
                        <p>Enhance customer engagement with a comprehensive view of customer interactions and history.</p>
                    </div>
                    <div className='platform'>
                        <h4>Inventory & Order Management</h4>
                        <p>Optimize your supply chain with real-time inventory visibility and automated order management</p>
                    </div>
                    <div className='platform'>
                        <h4>Scalability & Flexibility </h4>
                        <p>Scale your NetSuite processes as your business grows, without compromising accuracy or compliance.</p>
                    </div>
                </div>
            </div>

            <div className='engageInfo'>
                <h4>Engage with Ealytics for Unmatched Oracle NetSuite Expertise</h4>
                <p>Leverage our deep NetSuite knowledge to transform your business
                    processes. Partnering with us means accessing a wealth of experience and
                    commitment to excellence that sets your business apart.</p>
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
            {/* <h2>Ready to transform your financial planning and analysis? Contact us today!</h2> */}
            <Footer/>
        </div>
    )
}

export default OracleNetSuit
