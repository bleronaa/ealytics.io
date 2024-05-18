import React,{useState,useEffect} from 'react';
import bg from '../../images/pexels-nate-274598-1036657.jpg';
import 'aos/dist/aos.css';
import { TiTick } from "react-icons/ti";
import zogo from '../../images/zoho.png'
import xero from '../../images/xero.png';
import sage from '../../images/sage.png';
import bill from '../../images/bill.png';
import quickbooks from '../../images/quickbooks.png';
import { InlineWidget, useCalendlyEventListener } from 'react-calendly';
import "./Home.css";
import { useLocation } from 'react-router-dom';
import Contact from '../Contact/Contact';
import Footer from '../../components/Footer';

const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    backgroundPosition: 'center',
    width: '100%',
  };
  useCalendlyEventListener({
    onEventScheduled: (e) => console.log(e.data.payload)
  });
  const location = useLocation();
  const showCalendly = location.state && location.state.showCalendly;

  useEffect(() => {
    if (showCalendly) {
      // Trigger Calendly to open
      // Adjust URL based on your Calendly settings
      window.location.href = 'https://calendly.com/bleronatmava12';
    }
  }, [showCalendly]);

  // Add Calendly event listener
  useCalendlyEventListener({
    onEventScheduled: (e) => console.log(e.data.payload)
  });

  return (
    <>
      <section className='hero' style={backgroundStyle}>
        <div className='container'>
          <div className='box1'>
          <h1>
        Welcome to <span className="ealytics-text">Ealytics</span>
    </h1>
            <h3>Empowering your business, one solution at a time</h3>
          </div>
        </div>
      </section>
      
      <h3 className='featureHeader'>Empowering Your Financial Future with Ealytics</h3>
      <div className='row'>
            <div className='col-md-6'>
              <div className='small-divs'>
                {/* Small divs with animations */}
                <div className='animation fade-in' style={{ animationDelay: '0.5s' }}> <TiTick style={{color:'green'}} />Accounting Outsourcing</div>
              <div className='animation fade-in' style={{ animationDelay: '1s' }}><TiTick style={{color:'green'}} />Strategic Consulting</div>
              <div className='animation fade-in' style={{ animationDelay: '1.5s' }}><TiTick style={{color:'green'}}/>Data Management</div>
              <div className='animation fade-in' style={{ animationDelay: '2s' }}><TiTick style={{color:'green'}}/>Market Research</div>
              <div className='animation fade-in' style={{ animationDelay: '2.5s' }}><TiTick style={{color:'green'}}/>Tailored Web & Software Services</div>
              </div>
            </div>
            
            <div className='col-md-6'>
              <div className='text'>
                <p>Ealytics bridges the gap between<br></br> traditional accounting practices<br></br> 
                and the digital future, offering<br></br> tailored services that drive growth,<br></br> 
                enhance efficiency, and ensure <br></br>compliance. With a foundation of<br></br>
                 expertise and innovation, we specialize<br></br> in transforming financial processes
                  and<br></br> implementing cutting-edge technologies.</p>
              </div>
            </div>
          </div>


          {/* Our Services sections */}



          <div className="service component__space" id="Services">
    <div className="heading">
        <h1 className="heading">Our Services</h1>
        <p className="heading p__color">
            At Ealytics, we offer a comprehensive range of services tailored to meet your financial needs
        </p>
        <p className="heading p__color">
            and empower your business to thrive in today's dynamic landscape.
        </p>
    </div>

    <div className="serviceSection">
        <div className="row">

            <div className="col-md-4">
                <div className="service__box pointer">
                    <div className="service__meta">
                        <h1 className="service__text">Accounting/Bookkeeping</h1>
                        <p className="p service__text p__color">
                        Recording and organizing financial transactions to track a company's financial health.
                        </p>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="service__box pointer">
                    <div className="service__meta">
                        <h1 className="service__text">FP&A</h1>
                        <p className="p service__text p__color">
                        Analyzing past financial performance and using insights to forecast future financial outcomes.
                        </p>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="service__box pointer">
                    <div className="service__meta">
                        <h1 className="service__text">CFO Services</h1>
                        <p className="p service__text p__color">
                        Providing strategic financial guidance and leadership typically offered by a Chief Financial Officer (CFO) on a consulting basis.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="service__box pointer">
                    <div className="service__meta">
                        <h1 className="service__text">Financial Consulting</h1>
                        <p className="p service__text p__color">
                        Offering expert advice and solutions to improve financial management and decision-making.
                        </p>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="service__box pointer">
                    <div className="service__meta">
                        <h1 className="service__text">Anaplan Solution</h1>
                        <p className="p service__text p__color">
                        Utilizing Anaplan's platform for integrated business planning, enabling organizations to streamline processes and enhance decision-making.
                        </p>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="service__box pointer">
                    <div className="service__meta">
                        <h1 className="service__text">OneStream Solution</h1>
                        <p className="p service__text p__color">
                        Leveraging OneStream's unified platform for corporate performance management, simplifying financial consolidation, planning, reporting, and analysis.
                        </p>
                    </div>
                </div>
            </div>
                    
                </div>
            </div>
        </div>

        {/* Testimonials */}
        <div className="service component__space" >
        <div className="heading">
        <h1 className="heading">Testimonial grid</h1>
        <p className="heading p__color">
        Discover what our clients have to say about their experience with Ealytics.
        </p>
        <p className="heading p__color">
        Read through our testimonials below to see how our services have made a difference in their businesses.
        </p>
        </div>
        <div className="serviceSection">
        <div className="row">

            <div className="col-md-4">
                <div className="testimonial__box pointer">
                    <div className="testimonial__meta">
                        <p className="testimonial__text">"Your team’s professionalism and expertise have significantly enhanced
                         our business operations.Ealytics has adeptly managed our accounting and bookkeeping needs, consistently
                        delivering timely and accurate results. The offshore team in Kosovo has proven to be highly reliable, 
                        responsive, and skilled, ensuring seamless support for our workload.The excellent communication and 
                        coordination with Ealytics have fostered a highly collaborative working environment."
                        </p>
                        <h4 className="p testimonial__text p__color">
                            Rizah B
                        </h4>
                        <p className="p testimonial__text p__color">Paradisio Sarl </p>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="testimonial_middle_box pointer">
                    <div className="testimonial__meta">
                    <p className="testimonial__text" >"I am writing on behalf of Flock Freight, to express our profound appreciation
                     for the exceptional service provided during our recent Anaplan Financial Transformation project. Your commitment
                    to excellence was evident in every phase of the engagement, and we are immensely satisfied With the outcome.
                    The technical proficiency, collaborative approach, and commitment to excellence that we’ve experienced in working 
                    with Ealytics have made a lasting impact on our organization. We look forward to future projects in which we might
                    once again grow while partnering with Ealytics."</p>
                    <h4 className="p testimonial__text p__color">
                        Peter M.
                     </h4>
                    <p className="p testimonial__text p__color">Flock Freight 
</p>
                    </div>
                </div>
            </div>

        
            <div className="col-md-4 lastTestimonial">
                <div className="testimonial__box pointer">
                    <div className="testimonial__meta">
                    <p className="testimonial__text">"Ealytics has delivered outstanding services, including financial modeling, strategic
                     planning, pitch deck development, and deep industry analysis. The offshore team in Kosovo has been reliable, responsive,
                    and proficient, ensuring seamless delivery of high-quality services. Your tailored approach and meticulous attention to
                    our needs have significantly enhanced our financial oversight and strategic decision-making. We highly value our
                    partnership with Ealytics and look forward to continued collaboration."</p>
                        <h4 className="p testimonial__text p__color" style={{marginTop:'10px'}}>
                             Amir P
                        </h4>
                        <p className="p testimonial__text p__color">TIN Ventures GmbH</p>
                    </div>
            </div>
            </div>
            </div>
            </div>
      </div>

            {/* Softwares we work with */}
            <div class="carousel-content">
             <h1 className="heading">Software we work with</h1>
             <div class="logos">
            <div class="logos-slide">
                <img  src={xero} alt="First slide"/>
                <img  src={zogo} alt="Second slide"/>           
                <img src={sage} alt="Third slide"/>            
                <img  src={bill} alt="Fourth slide"/>        
                <img  src={quickbooks} alt="Fourth slide"/>               

            </div>
            <div class="logos-slide">
                <img  src={xero} alt="First slide"/>
                <img  src={zogo} alt="Second slide"/>           
                <img src={sage} alt="Third slide"/>            
                <img  src={bill} alt="Fourth slide"/>  
                <img  src={quickbooks} alt="Fourth slide"/>               
            </div>
            
            </div>
        </div>   
        
            {/* Calendly  */}
             <div className='row'>
               <div className='col-md-6'>
               <div className='small-divs'>
                        <div className='selectSchedule'>
                            <h3 className='Schedule'>Schedule a Free Consulation</h3>
                            <p>Ready to take the next step? Schedule a free consultation with us today!<br></br> 
                            We understand that your time is valuable, so we've made it easy for you to book an appointment online.<br></br> Just click on the date that's convenient for you and you can also choose a convenient time for<br></br> a consultation on how we can support your goals.".</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    
                    <div className='small-divs'>
              <div className="inline-widget">
              <InlineWidget url="https://calendly.com/art-ealytics/30min?month=2024-05" />
                  </div>
                </div>

                </div>
            
           
            </div>
             {/* Contact Us button */}
      
            <Contact/>
            <Footer/>
            
    </>
    
  );
};

export default Home;
