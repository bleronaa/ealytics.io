import React, {useState, useEffect} from 'react';
import Footer from '../../components/Footer';
import bookkeeping from '../../images/bookkeepingimg.webp';
import './bookkeeping.css';
import implement from '../../images/pexels-olly-927022.jpg';
import managed from '../../images/managesbookkeeping.avif';
import box1 from '../../images/ap-logo.webp'
import box2 from '../../images/ap2-logo.avif';
import box3 from '../../images/ap3-logo.webp';
import box4 from '../../images/ap4-logo.webp';
import box5 from '../../images/ap5-logo.webp';

const Bookkeeping = () => {

    const faqs = [
        {
            question: "What are bookkeeping services, and how can they benefit my business?",
            answer: "Bookkeeping services involve accurate record-keeping of daily financial transact" +
                    "ions, ensuring your books are always audit-ready and compliant. Our services inc" +
                    "lude expense management, accounts payable/receivable, and payroll processing, pr" +
                    "oviding accurate financial insights and strategic value."
        }, {
            question: "How do bookkeeping services improve financial performance?",
            answer: "By maintaining accurate records, tracking expenses, and optimizing cash flow man" +
                    "agement, bookkeeping services help businesses gain clear financial insights, mak" +
                    "e informed decisions, and ensure seamless compliance"
        }, {
            question: "Can bookkeeping services be customized to our specific needs?",
            answer: "Yes, our bookkeeping services are fully customizable to meet your unique busines" +
                    "s requirements. We offer tailored solutions that deliver maximum value and align" +
                    " with your financial goals."
        }, {
            question: "How quickly can we implement bookkeeping services in our organization",
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
                    <h1 className='bookkeepingh1'>Accounting/Bookkeeping</h1>
                    <h5 className='saph5'>EXPERT ACCOUNTING & BOOKKEEPING: ACCURATE, EFFICIENT, COMPLIANT</h5>
                </div>
                <div className="flex-item1">
                    <img className='imganaplan' src={bookkeeping}/>
                </div>
            </div>

            <div className='advantages'>
                <h2 className='h2advantages'>
                    At
                    <span>Ealytics</span>, we specialize in comprehensive accounting and bookkeeping
                    <br></br>services that ensure accurate financial records, efficient processes,
                    and seamless compliance
                </h2>
                <div className='advantagesBoxes'>
                    <div className='advantagesBox'>
                        <img src={box1} width={120} height={100}/>
                        <h4>Accurate Record-Keeping</h4>
                        <p>Maintain precise financial records, from daily transactions to quarterly
                            reconciliations, ensuring your books are always audit-ready</p>
                    </div>
                    <div className='advantagesBox'>
                        <img src={box2} width={120} height={100}/>
                        <h4>Expense Management</h4>
                        <p>Track and categorize your expenses effectively to control costs and
                            streamline reimbursements</p>
                    </div>
                    <div className='advantagesBox'>
                        <img src={box3} width={120} height={100}/>
                        <h4>Accounts Payable & Receivable Management</h4>
                        <p>Optimize your cash flow by ensuring timely invoicing, collections, and payments</p>
                    </div>
                    <div className='advantagesBox'>
                        <img src={box4} width={120} height={100}/>
                        <h4>Bank Reconciliations</h4>
                        <p>Regularly reconcile your bank accounts to identify discrepancies and maintain
                            accurate financial records</p>
                    </div>
                    <div className='advantagesBox'>
                        <img src={box5} width={120} height={100}/>
                        <h4>General Ledger Maintenance</h4>
                        <p>Keep your general ledger up-to-date and accurate, providing a solid
                            foundation for financial reporting.</p>
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
                        <h5>Struggling with maintaining accurate books? Our expert team will refine your
                            bookkeeping processes and deliver precise, actionable insights.</h5>
                        <h4>We Provide</h4>
                        <h5>
                            <span>Chart of Accounts Setup & Optimization</span>: Design a chart of accounts
                            tailored to your business, ensuring efficient financial reporting and
                            compliance.</h5>
                        <h5>
                            <span>Accounts Payable & Receivable Management</span>: Streamline your invoicing
                            and collections process, improving cash flow and minimizing late payments.</h5>
                        <h5>
                            <span>Payroll Processing</span>:Ensure accurate and timely payroll processing,
                            including tax withholdings and benefit deductions</h5>
                        <h5>
                            <span>Expense Tracking & Reconciliation</span>:Automate expense tracking and
                            regular reconciliations to maintain accurate and compliant financial records</h5>
                    </div>
                </div>
            </div>
            <div className='service'>
                <h2 className='h2implementation'>
                    Managed Services</h2>
                <div className='solutions'>
                    <div className="solution">
                        <h5>Overwhelmed with your bookkeeping tasks? Our managed services ensure your
                            books remain accurate, compliant, and insightful</h5>
                        <h4>
                            Our Services Include:</h4>
                        <h5>
                            <span>Full-Cycle Bookkeeping</span>: End-to-end bookkeeping services, from
                            transaction recording to financial statement preparation</h5>
                        <h5>
                            <span>Payroll Management</span>Comprehensive payroll processing and compliance,
                            including employee benefits administration.</h5>
                        <h5>
                            <span>Tax Preparation & Filing</span>:Accurate preparation and filing of
                            federal, state, and local taxes to maximize deductions and minimize liabilities</h5>
                        <h5>
                            <span>Financial Reporting & Analysis</span>: Tailored financial reports and
                            insightful analysis to inform strategic decision-making.</h5>

                    </div>
                    <div className="solution">
                        <img className='solutionimg' src={managed} width={690} height={450} />
                    </div>
                </div>
            </div>

            <div className="Platforms">
                <h2 className='platformFeatures'>Platform Features</h2>
                <p className='platformP'>These cornerstones underscore our comprehensive
                    approach to bookkeeping services, emphasizing accuracy, compliance, and
                    strategic alignment</p>

                <div className="feature-group">

                    <div className='platform'>
                        <h4>Accurate Financial Records</h4>
                        <p>Maintain precise financial records that are always ready for audits and
                            compliance reviews</p>
                    </div>
                    <div className='platform'>
                        <h4>Custom Reporting & Analysis</h4>
                        <p>Tailored financial reports that deliver impactful insights to stakeholders</p>
                    </div>
                </div>
                <div className="featureGroup">
                    <div className='platform'>
                        <h4>Tax Compliance</h4>
                        <p>Ensure compliance with federal, state, and local tax regulations while
                            maximizing deductions</p>
                    </div>
                    <div className='platform'>
                        <h4>Scalability & Flexibility</h4>
                        <p>Scale your bookkeeping processes as your business grows, without compromising
                            accuracy or compliance</p>
                    </div>
                    <div className='platform'>
                        <h4>Real-Time Access</h4>
                        <p>Gain immediate access to up-to-date financial data through intuitive
                            dashboards and reports</p>
                    </div>
                </div>
            </div>

            <div className='engageInfo'>
                <h4>Engage with ealytics for Unmatched Accounting & Bookkeeping Expertise</h4>
                <p>Leverage our deep bookkeeping knowledge to transform your financial
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

export default Bookkeeping
