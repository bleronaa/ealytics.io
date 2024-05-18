import React, { useEffect } from 'react';
import backgroundImg from '../../images/pexels-scottwebb-532568.jpg';
import Artrin from '../../images/artrin.png';
import Robert from '../../images/robert.png';
import Footer from '../../components/Footer'
import Slider from 'react-slick';
import './About.css';
import { FaPhoneFlip } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBullseye, FaEye, FaHandsHelping } from "react-icons/fa";


const About = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '60vh',
    backgroundPosition: 'center',
    width: '100%',
  };
  useEffect(() => {
    const handleScroll = () => {
      const rightContent = document.querySelectorAll('.right-content');
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
  // const founders = [
  //   {
  //     name: "Artrin Bajrami",
  //     title: "Founder and CEO",
  //     image: Artrin,
  //     phone: "+1(631)306-4731",
  //     email: "art@ealytics.io",
  //     linkedin: "@artrinbajrami",
  //     description: "Artrin, founder and CEO of ealytics, is a dynamic leader skilled in driving business growth and operational efficiency...",
  //     education: "MBA degree from the University of Minnesota – Carlson School Bachelor of Science degree in Economics & Statistics from Rochester Institute of Technology",
  //     experience: "Five years of experience as a Finance Manager at Medica Two years of experience as an Anaplan consultant",
  //     started: "January, 2022"
  //   },
  //   {
  //     name: "Robert McElroy",
  //     title: "CO-FOUNDER AND COO",
  //     image: Robert,
  //     phone: "+1(763)222-6307",
  //     email: "robert@ealytics.io",
  //     linkedin: "@robert-mcelroy",
  //     description: "Robert is a passionate and detail-oriented leader with a background in accounting, finance, and consulting...",
  //     education: "MBA degree from the University of Minnesota – Carlson School Bachelor of Business Administration degrees in Accounting and Finance from the University of Wisconsin–Madisony",
  //     experience: "Three years of experience as a CPA at EY and Charles Schwab Three years of experience as a Strategic Planning Manager at CWT",
  //     started: "April, 2023"
  //   },
  //   {
  //     name: "Emily Katsuma",
  //     title: "TBD AT THIS POINT",
  //     image: Artrin,
  //     phone: "+1(631)306-4731",
  //     email: "art@ealytics.io",
  //     linkedin: "@artrinbajrami",
  //     description: "Artrin, founder and CEO of ealytics, is a dynamic leader skilled in driving business growth and operational efficiency...",
  //     education: "MBA degree from the University of Minnesota – Carlson School Bachelor of Science degree in Economics & Statistics from Rochester Institute of Technology",
  //     experience: "Five years of experience as a Finance Manager at Medica Two years of experience as an Anaplan consultant",
  //     started: "January, 2022"
  //   }
  // ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
   <div className='wrapper' style={backgroundStyle}>
      </div>   
      <section className='into-Enterprise'>
        <div className='mission'>
          <div className="iconWrapper">
            <FaBullseye className="About-icon" />
          </div>
          <div className="textWrapper">
            <h2>Mission</h2>
            <p>Our mission is to empower individuals and businesses through innovative solutions that drive growth and prosperity.</p>
          </div>
        </div>
        <div className='vision'>
          <div className="iconWrapper">
            <FaEye className="About-icon" />
          </div>
          <div className="textWrapper">
            <h2>Vision</h2>
            <p>Our vision is to be the leading provider of cutting-edge technologies and services that transform industries and enrich lives.</p>
          </div>
        </div>
        <div className='values'>
          <div className="iconWrapper">
            <FaHandsHelping className="About-icon" />
          </div>
          <div className="textWrapper">
            <h2>Values</h2>
            <p>At our core, we value integrity, collaboration, and excellence in everything we do, striving to make a positive impact on the world.</p>
          </div>
        </div>
        </section>
            <section className='data'>
            <div className="container">
        
            
        <div className="about-container">
          <div className="row">
            <div className="col-md-6">
              <div className="left-content">
                <img src={Artrin} alt="Founder 1" />
                <h2 style={{color:'black'}}>CONNECT</h2>
                <div className="connect">
                  <FaPhoneFlip/>
                  <p>+1(631)306-4731</p>
                </div>
                <div className="connect">
                  <MdOutlineEmail/>
                <a href="mailto:art@ealytics.io" target="_blank"  > <p>art@ealytics.io</p></a>
                </div>
                <div className="connect">
                  <FaLinkedinIn/>
                  <p>
                    <a href="https://www.linkedin.com/in/artrinbajrami/" target='_blank'>@artrinbajrami</a>
                    </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-content">
                <h3>Artrin Bajrami</h3>
                <p>Founder and CEO</p>
                <p>Artrin, founder and CEO of ealytics, is a dynamic leader skilled in driving business growth and operational efficiency. With a background as a Senior Business Consultant at Anaplan, he excels in strategic planning, process optimization, and change management. His company, ealytics, offers comprehensive BPO services in accounting, bookkeeping, contact center solutions, and web/software development, catering to both SMEs and large enterprises. Art’s educational credentials include an MBA from the University of Minnesota – Carlson School of Management and a Bachelor’s degree from the Rochester Institute of Technology, underpinning his expertise in business and technology.</p>
                
              </div>      
                <div className="experience">
                  <div className="row">
                    <div className='col-md-6 edu'>
                        <h6>Education</h6>
                    </div>
                    <div className='col-md-6 edu'>
                        <p>MBA degree from the University of Minnesota – Carlson School Bachelor of Science degree in Economics & Statistics from Rochester Institute of Technology</p>
                    </div>
                    <div className='col-md-6 exp'>
                        <h6>Experience</h6>
                    </div>
                    <div className='col-md-6 exp '>
                        <p> Five years of experience as a Finance Manager at Medica <br></br>Two years of experience as an Anaplan consultant</p>
                    </div>
                
                    <div className='col-md-6 started'>
                        <h6>Started</h6>
                    </div>
                    <div className='col-md-6 started'>
                        <p>January, 2022</p>
                    </div>
                  </div>
                </div>
            </div>
            {/* Robert */}
          </div>
          <div className="row">
          <div className="col-md-6">
              <div className="right-content person">
                <h3>Robert McElroy</h3>
                <p>CO-FOUNDER AND COO</p>
                <p>Robert is a passionate and detail-oriented leader with a background in accounting, finance, and consulting. Building upon his career as a CPA in Assurance at EY and a Senior Specialist in SOX Compliance with Charles Schwab, Robert developed a keen sense for delivering high-quality deliverables and built strong relationships with his clients. In his most recent role as a Manager of Strategic Planning at CWT, Robert built a skillset in project management, company-level reporting, and big-picture thinking. Connect with Robert to explore how his expertise and ealytics’s comprehensive suite of services can accelerate your business growth.</p>
                
              </div>      
                <div className="experience">
                  <div className="row">
                    <div className='col-md-6 edu'>
                        <h6>Education</h6>
                    </div>
                    <div className='col-md-6 edu'>
                        <p>MBA degree from the University of Minnesota – Carlson School Bachelor of Business Administration degrees in Accounting and Finance from the University of Wisconsin–Madisony</p>
                    </div>
                  
                    <div className='col-md-6 exp'>
                        <h6>Experience</h6>
                    </div>
                    <div className='col-md-6 exp'>
                        <p>Three years of experience as a CPA at EY and Charles Schwab <br></br>Three years of experience as a Strategic Planning Manager at CWT</p>
                    </div>
                 
                    <div className='col-md-6 started'>
                        <h6>Joined</h6>
                    </div>
                    <div className='col-md-6 started'>
                        <p>April, 2023</p>
                    </div>
                  </div>
                </div>
            </div>
            <div className="col-md-6">
              <div className="left-content">
                <img src={Robert} alt="Founder 1" />
                <h2 style={{color:'black'}}>CONNECT</h2>
                <div className="connect">
                  <FaPhoneFlip/>
                  <p>+1(763)222-6307</p>
                </div>
                <div className="connect">
                  <MdOutlineEmail/>
              <a href='mailto:robert@ealytics.io' target='_blank'><p>robert@ealytics.io</p></a>
                </div>
                <div className="connect">
                  <FaLinkedinIn/>
                  <p>
                    <a href="https://www.linkedin.com/in/robert-mcelroy/" target='_blank'>@robert-mcelroy</a>
                    </p>
                </div>
              </div>
            </div>
            
            
          </div>

          {/* Emily part */}
          {/* <div className="row">
            <div className="col-md-6">
              <div className="left-content">
                <img src={Artrin} alt="Founder 1" />
                <h2 style={{color:'black'}}>CONNECT</h2>
                <div className="connect">
                  <FaPhoneFlip/>
                  <p>+1(651)756-9318</p>
                </div>
                <div className="connect">
                  <MdOutlineEmail/>
                  <p>art@ealytics.io</p>
                </div>
                <div className="connect">
                  <FaLinkedinIn/>
                  <p>@artrinbajrami</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-content">
                <h3>Emily Katsuma</h3>
                <p>TBD AT THIS POINT</p>
                <p>Artrin, founder and CEO of ealytics, is a dynamic leader skilled in driving business growth and operational efficiency. With a background as a Senior Business Consultant at Anaplan, he excels in strategic planning, process optimization, and change management. His company, ealytics, offers comprehensive BPO services in accounting, bookkeeping, contact center solutions, and web/software development, catering to both SMEs and large enterprises. Art’s educational credentials include an MBA from the University of Minnesota – Carlson School of Management and a Bachelor’s degree from the Rochester Institute of Technology, underpinning his expertise in business and technology.</p>
                
              </div>      
                <div className="experience">
                  <div className="row">
                    <div className='col-md-6 edu'>
                        <h6>Education</h6>
                    </div>
                    <div className='col-md-6 edu'>
                        <p>MBA degree from the University of Minnesota – Carlson School Bachelor of Science degree in Economics & Statistics from Rochester Institute of Technology</p>
                    </div>
                    <div className='col-md-6 exp'>
                        <h6>Experience</h6>
                    </div>
                    <div className='col-md-6 exp'>
                        <p> Five years of experience as a Finance Manager at Medica <br></br>Two years of experience as an Anaplan consultant</p>
                    </div>
                 
                    <div className='col-md-6 started'>
                        <h6>Started</h6>
                    </div>
                    <div className='col-md-6 started'>
                        <p>January, 2022</p>
                    </div>
                  </div>
                </div>
            </div>
            
          </div> */}
        </div>
        </div>

      </section>
      <Footer/>
    </>
    
  );
}

export default About;


