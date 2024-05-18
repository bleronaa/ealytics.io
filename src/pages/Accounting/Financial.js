import React, {useState,useEffect} from 'react';
import Footer from '../../components/Footer';
import financial from '../../images/finanial.jpg'
import implement from '../../images/financialimplementation.jpeg';
import managed from '../../images/managedfinancial.webp'
import box1 from '../../images/cfobox1.png';
import box2 from '../../images/financialbox2.png';
import box3 from '../../images/financialbox3.jpg';
import box4 from '../../images/cfobox3.webp';

const Financial = () => {
    const faqs = [
        {
            question: "What are financial consulting services, and how can they benefit my business?",
            answer: "Financial consulting services involve strategic financial analysis, planning, an" +
                    "d optimization that align your financial strategy with corporate goals. Our servi" +
                    "ces include budgeting, forecasting, cashflow optimization, and performance analy" +
                    "sis to ensure sustainable growth."
        }, {
            question: "How do financial consulting  services improve financial performance?",
            answer: "By developing strategic financial plans, optimizing cash flow management, and pr" +
                    "oviding in-depth performance analysis, financial consulting services help busine" +
                    "sses improve financial performance and achieve long-term growth."
        }, {
            question: "Can financial consulting services be customized to our specific needs?",
            answer: "Yes, our financial consulting services are fully customizable to meet your uniqu" +
                    "e business requirements. We offer tailored solutions that deliver maximum value " +
                    "and align with your financial goals."
        }, {
            question: "How quickly can we implement financial consulting services in our organization",
            answer: "Implementation depends on the complexity of your requirements. However, our stru" +
                    "ctured approach ensures a smooth transition and rapid value delivery"
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
                    <h1 className='bookkeepingh1'>Financial Consulting</h1>
                    <h5 className='saph5'>STRATEGIC FINANCIAL CONSULTING: ANALYZE, OPTIMIZE, ACHIEVE</h5>
                </div>
                <div className="flex-item1">
                    <img src={financial} className='imganaplan' />
                </div>
            </div>

            <div className='advantages'>
                <h2 className='h2advantages'>
                    At <span>Ealytics</span>, our strategic financial consulting services are designed
                    to help your business analyze
                    <br></br>
                    its financial health, optimize processes, and achieve sustainable growth
                </h2>
                <div className='advantagesBoxes'>
                    <div className='advantagesBox'>
                        <img src={box1} width={120} height={100}/>
                        <h4>Strategic Financial Planning</h4>
                        <p>Develop comprehensive financial plans that align with your corporate
                            strategy,ensuring long-term profitability and growth.</p>
                    </div>
                    <div className='advantagesBox'>
                        <img src={box2} width={120} height={100}/>
                        <h4>Budgeting &Forecasting</h4>
                        <p>Create dynamic budgets and forecasts that adapt to changing market conditions
                            and business priorities.</p>
                    </div>
                    <div className='advantagesBox'>
                        <img src={box3} width={120} height={100}/>
                        <h4>Cash Flow Optimization</h4>
                        <p>Improve liquidity and financial agility by optimizing your cash flow
                            management processes</p>
                    </div>
                    <div className='advantagesBox'>
                        <img src={box4} width={120} height={100}/>  
                        <h4> Analysis & Benchmarking</h4>
                        <p>Gain actionable insights through in-depth performance analysis and
                            benchmarking against industry standards.</p>
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
                        <h5>Need help aligning your financial strategy with business goals? Our expert
                            team will refine your strategy, processes, and reporting to ensure consistent
                            performance and insightful analytics.</h5>
                        <h4>We Provide</h4>
                        <h5>
                            <span>Financial Health Assessment:</span>: Conduct a thorough analysis of your
                            financial statements to identify strengths, weaknesses, and opportunities for
                            improvement.</h5>
                        <h5>
                            <span>
                                Strategic Roadmap Development</span>: Design a strategic financial roadmap that
                            aligns with your business objectives and drives sustainable growth.</h5>
                        <h5>
                            <span>
                                Cost Management & Reduction</span>:Identify cost-saving opportunities and
                            implement best practices to optimize your cost structur</h5>
                        <h5>
                            <span>Mergers & Acquisitions (M&A) Support</span>:Guide your M&A strategy with
                            thorough due diligence, valuation analysis,and seamless post-merger integration
                            support.</h5>
                    </div>
                </div>
            </div>
            <div className='service'>
                <h2 className='h2implementation'>
                    Managed Services</h2>
                <div className='solutions'>
                    <div className="solution">
                        <h5>Overwhelmed with financial strategy development or compliance? Our managed
                            services ensure your financial processes remain streamlined, compliant, and
                            insightful</h5>
                        <h4>
                            Our Services Include:</h4>
                        <h5>
                            <span>Interim & Fractional CFO</span>:Access experienced CFO leadership on an
                            interim or fractional basis to guid your financial strategy</h5>
                        <h5>
                            <span>Financial Process Reengineering</span>: Develop a robust tax strategy that
                            minimizes liabilities while ensuring compliance with federal, state, and local
                            regulations.</h5>
                        <h5>
                            <span>Tax Strategy & Compliance</span>:Accurate preparation and filing of
                            federal, state, and local taxes to maximize deductions and minimize liabilities</h5>
                        <h5>
                            <span>Financial Reporting & Analysis</span>: Tailored financial reports and
                            insightful analysis to inform strategic decision-making.</h5>

                    </div>
                    <div className="solution">
                        <img  src={managed} width={690} height={450} style={{marginTop:40}}/>
                    </div>
                </div>
            </div>

            <div className="Platforms">
                <h2 className='platformFeatures'>Platform Features</h2>
                <p className='platformP'>These cornerstones underscore our comprehensive
                    approach to financial consulting, emphasizing strategy alignment, efficiency,
                    and growth acceleration</p>

                <div className="feature-group">

                    <div className='platform'>
                        <h4>Strategic Financial Planning
                        </h4>
                        <p>Develop and implement strategic financial plans that align with your
                            corporate goals.</p>
                    </div>
                    <div className='platform'>
                        <h4>Budgeting & Forecasting Optimization</h4>
                        <p>Create dynamic budgets and forecasts that adapt to changing market conditions
                            and business priorities</p>
                    </div>
                </div>
                <div className="featureGroup">
                    <div className='platform'>
                        <h4>Risk Management Framework</h4>
                        <p>Identify and mitigate financial risks with a comprehensive risk management
                            framework</p>
                    </div>
                    <div className='platform'>
                        <h4>M&A Strategy & Support</h4>
                        <p>Enhance your M&A strategy with thorough due diligence, valuation analysis,
                            and seamless post-merger integration</p>
                    </div>
                    <div className='platform'>
                        <h4>Cost Management & Reduction</h4>
                        <p>Implement best practices to optimize your cost structure and improve
                            profitability</p>
                    </div>
                </div>
            </div>

            <div className='engageInfo'>
                <h4>Engage with ealytics for Unmatched Financial Consulting Expertise</h4>
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

export default Financial
