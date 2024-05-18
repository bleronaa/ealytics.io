import React, {useState,useEffect} from 'react';
import Footer from '../../components/Footer';
import CFO from '../../images/CFO.webp'
import implement from '../../images/cfoimplement.jpg';
import managed from '../../images/managedcfo.jpg'
import box1 from '../../images/cfo1.jpg';
import box2 from '../../images/cfo2.jpg';
import box3 from '../../images/cfobox3.webp';
import box4 from '../../images/cfobox4.jpg'

const Cfoservices = () => {

    const faqs = [
        {
            question: "What are CFO services, and how can they benefit my business?",
            answer: "CFO services encompass a range of strategic financial solutions that help busine" +
                    "sses align financial strategy with corporate goals. Our services include financi" +
                    "al planning, performance analysis, risk management, and compliance, enabling sus" +
                    "tainable growth and profitability."
        }, {
            question: "How do CFO Services improve financial performance?",
            answer: "By aligning your financial strategy with corporate objectives, optimizing cash f" +
                    "low management, and providing real-time insights, CFO services help businesses i" +
                    "mprove financial performance and achieve long-term growth"
        }, {
            question: "Can CFO Services be customized to our specific needs?",
            answer: "Yes, our CFO Services are fully customizable to meet your unique business requir" +
                    "ements. We offer tailored financial solutions that deliver maximum value."
        }, {
            question: "How quickly can we implement CFO Services in our organization",
            answer: "Implementation depends on the complexity of your requirements. However, our stru" +
                    "ctured approach ensures a smooth transition and rapid value delivery."
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
                <h1 className='bookkeepingh1'>CFO Services</h1>

                    <h5 className='saph5'>STRATEGICCFOSERVICES: ALIGN, ANALYZE, ACHIEVE</h5>
                </div>
                <div className="flex-item1">
                    <img src={CFO}  className='imganaplan' alt='cfoimg' />
                </div>
            </div>

            <div className='advantages'>
                <h2 className='h2advantages'>
                    At <span>Ealytics</span>, we offer a comprehensive suite of CFO services designed to align your
                    <br></br>financial strategy with business objectives, provide insightful
                    analysis, and help you achieve<br></br>
                    sustainable growth
                </h2>
                <div className='advantagesBoxes'>
                    <div className='advantagesBox'>
                        <img src={box1} width={100} height={80}/>
                        <h4>Strategic Financial Planning</h4>
                        <p>Develop and implement strategic financial plans that align with your
                            corporate goals, ensuring long-term profitability and growth</p>
                    </div>
                    <div className='advantagesBox'>
                        <img src={box2} width={100} height={80}/>
                        <h4>Cash Flow Management</h4>
                        <p>Optimize your cash flow processes to improve liquidity, minimize risk, and
                            ensure your business is financially agile
                        </p>
                    </div>
                    <div className='advantagesBox'>
                        <img src={box3} width={100} height={80}/>
                        <h4>Performance Analysis & Benchmarking</h4>
                        <p>Gain actionable insights through comprehensive performance analysis and
                            benchmarking agains industry standards</p>
                    </div>
                    <div className='advantagesBox'>
                        <img src={box4} width={100} height={80}/>  
                        <h4>Risk Management</h4>
                        <p>Identify and mitigate financial risks with a robust risk management framework
                            that secures your business against market volatility</p>
                    </div>

                </div>
            </div>
            <div className="implementation">
                <h2 className='h2implementation'>
                    Implementation Solutions</h2>
                <div className='solutions'>
                    <div className="solution">
                        <img src={implement} width={600} style={{marginTop:70}}/>
                    </div>
                    <div className="solution">
                        <h5>Overwhelmed with financial planning and analysis? Our expert team will
                            refine your strategy, processes, and reporting to ensure consistent performance
                            and insight ful analytics.</h5>
                        <h4>We Provide</h4>
                        <h5>
                            <span>Financial Strategy Development</span>: Formulate strategic financial plans
                            that align with your corporate vision and drive profitability.</h5>
                        <h5>
                            <span>Budgeting & Forecasting Optimization</span>:Streamline your budgeting and
                            forecasting processes to improve accuracy, efficiency, and cross-department
                            collaboration.</h5>
                        <h5>
                            <span>KPI DEvelopment & Reporting</span>:Identify the right KPIs for your
                            business and deliver tailored reports that provide clarity and drive
                            decision-making</h5>
                        <h5>
                            <span>Mergers & Acquisitions (M&A) Support</span>:Guide your M&A strategy with
                            thorough due diligence, valuation analysis, and post-merger integration support.</h5>
                    </div>
                </div>
            </div>
            <div className='service'>
                <h2 className='h2implementation'>
                    Managed Services</h2>
                <div className='solutions'>
                    <div className="solution">
                        <h5>Struggling with financial reporting or compliance? Our managed services
                            ensure your financial processes remain streamlined, accurate, and insightful.</h5>
                        <h4>
                            Our Services Include:</h4>
                        <h5>
                            <span>Interim & Fractional CFO</span>: Access experienced CFO leadership on an
                            interim or fractional basis to guide your financial strategy</h5>
                        <h5>
                            <span>Accounting & Bookkeeping</span>Maintain accurate, compliant financial
                            records with our comprehensive accounting and bookkeeping services</h5>
                        <h5>
                            <span>Financial Reporting & Compliance</span>:Deliver accurate, compliant
                            financial reports to stake holders, ensuring transparency and trust.</h5>
                        <h5>
                            <span>Treasury Management</span>: Optimized your cash management, investments,
                            and risk exposure for greater financial agility.</h5>

                    </div>
                    <div className="solution">
                        <img className='solutionimg' src={managed} width={690} height={450}/>
                    </div>
                </div>
            </div>

            <div className="Platforms">
                <h2 className='platformFeatures'>Platform Features</h2>
                <p className='platformP'>These cornerstones underscore our comprehensive
                    approach to CFO services, emphasizing strategic alignment, financial agility,
                    and growth acceleration</p>

                <div className="feature-group">

                    <div className='platform'>
                        <h4>Strategic Financial Planning</h4>
                        <p>Align ypur strategy wit corporate goals throguh comprehensive strategic
                            planning and scenario modeling
                        </p>
                    </div>
                    <div className='platform'>
                        <h4>Real-Time Insights & Reporting</h4>
                        <p>Gain immediate access to accurate, real-time financial insights that drive
                            strategic decision-making</p>
                    </div>
                </div>
                <div className="featureGroup">
                    <div className='platform'>
                        <h4>Risk Management Framework</h4>
                        <p>Develop a robust risk management framework to identify, analyze, and mitigate
                            financial risks</p>
                    </div>
                    <div className='platform'>
                        <h4>Integrated Business Planning</h4>
                        <p>Foster cross-department collaboration with integrated planning tools that
                            synchronize data and eliminate silos</p>
                    </div>
                    <div className='platform'>
                        <h4>M&A Strategy & Support
                        </h4>
                        <p>Enhance your M&A with thorough due diligence, valuation analysis, and
                            seamless post-merger integration</p>
                    </div>
                </div>
            </div>

            <div className='engageInfo'>
                <h4>Engage with ealytics for Unmatched CFO Expertise</h4>
                <p>Leverage our deep financial knowledge to transform your business processes.
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
            {/* <h2>Ready to transform your financial planning and analysis? Contact us today!</h2> */}
            <Footer/>
        </div>
    )
}

export default Cfoservices
