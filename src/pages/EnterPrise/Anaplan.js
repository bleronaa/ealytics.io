import React, {useState,useEffect, useRef }from 'react';
import anaplan from '../../images/2024-03-Anaplan-1024x226.png';
import premium from '../../images/Anaplan-Recognized.jpg';
import startup from '../../images/anaplan2.jpg';
import support from '../../images/anaplan3.webp';
import connected from '../../images/connected.png';
import implementation from '../../images/Implementation-scaled.jpg';
import managedServices from '../../images/IFS_Accounting_Solutions.jpg'
import Footer from '../../components/Footer'
import './anaplan.css';

const Anaplan = () => {
    
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
    <img src={anaplan} />
    <h5 className='saph5'>EMPOWER YOUR BUSINESS WITH ANAPLAN:STREAMLINE, SIMPLIFY, SUCCEED</h5>
  </div>
  <div className="flex-item1">
    <img src={premium} className='imganaplan' />
  </div>
</div>

    <div className='advantages'>
      <h2 className='h2advantages'>
        At <span>Ealytics</span>, we bring a wealth of Anaplan expertise directly  to<br></br> your business's doorstep 
      </h2>
      <div className='advantagesBoxes'>
        <div className='advantagesBox'>
          <img src={connected} width={120} height={100}/>
          <h4>Connected Planning</h4>
          <p>Facilitate integrated business planning across various functions, enhancing collaboration and decision-making.</p>
        </div>
        <div className='advantagesBox'>
            <img src={startup} width={120} height={100}/>
            <h4>Scalability</h4>
          <p>Enabling organizations to efficiently adapt and expand their planning processes as they grow, without compromising performance.</p>
          </div>
          <div className='advantagesBox'>
            <img src={support} width={120} height={100}/>
            <h4>Real-Time Insights</h4>
            <p>Empowering businesses to make informed decisions by providing immediate access to updated data & analytics across the organization.</p>
          </div>
      </div>
    </div>


   <div className="implementation">
      <h2 className='h2implementation'> 
        Implementation Solutions
      </h2>
      <div className='solutions'>
        <div ref={imageRef} className={`image-container ${animateImage ? 'animate' : ''}`}>
          <img src={implementation} alt="Implementation" width={600} style={{ marginTop: 70 }} />
        </div>
        <div className="solution">
          <h5>Overwhelmed with maintaining current models? Our managed services ensure they stay updated, allowing you to focus on growing your business.</h5>
          <h4>We Provide</h4>
          <ul>
            <li><span>Bug Resolution</span>: Prompt fixes to keep your models running smoothly.</li>
            <li><span>Model Enhancements</span>: Continuous improvements to enhance model functionality.</li>
            <li><span>Backlog Management</span>: Efficient prioritization to address your most critical needs.</li>
            <li><span>Access Control</span>: Management of user permissions and temporal settings for optimal security and functionality.</li>
            <li><span>Updates & Maintenance</span>: Regular updates to lists, hierarchies, and time scales to reflect your evolving business structure.</li>
          </ul>
        </div>
      </div>
    </div>
      <div className='service'>
      <h2 className='h2implementation'> 
      Managed Services</h2>
      <div className='solutions'>
      <div className="solution">
        <h5>Struggling with Excel limitations? Our expert team delivers tailored Anaplan solutions to enhance your business planning.</h5>
        <h4> Our Services Include:</h4>
        <h5><span>Process Analysis</span>: Identifying opportunities for Anaplan integration and efficiency gains.</h5>
        <h5><span>Custom Model Design</span>: Developing scalable Anaplan models to fit your unique business needs.</h5>
        <h5><span>Efficient Implementation</span>: Quick, iterative deployment focused on continuous enhancement.</h5>
        <h5><span>User Testing</span>:  Ensuring the solution meets your requirements with comprehensive user testing.</h5>
        <h5><span>Training for Success</span>: Equipping your team with the knowledge to maximize Anaplan’s capabilities post-launch.</h5>

      </div>
      <div className={`image-container ${animateImage ? 'animate' : ''}`}>

        <img src={managedServices}   width={650} height={450}/>
      </div>
      </div>   
    </div>


    <div className="Platforms">
      <h2 className='platformFeatures'>Platform Features</h2>
      <p className='platformP'>These cornerstones underscore Anaplan's comprehensive approach to business planning, emphasizing process integration, data management, model sophistication, and strategic deployment.</p>
    
    <div className="feature-group">
      
      <div className='platform'>
          <h4>SCENARIO PLANNING</h4>
          <p>Scenario planning empowers businesses to anticipate and strategize for multiple future scenarios, enabling informed decision-making. This feature helps companies adapt to changes proactively, ensuring resilience and strategic agility.</p>
      </div>
      <div className='platform'>
          <h4>USER EXPERIENCE</h4>
          <p>Intuitive interface simplifies complex planning and analysis, making strategic decision-making accessible to all users. This enhances collaboration and drives informed decisions across the organization.</p>
      </div>
    </div>
    <div className="featureGroup">
      <div className='platform'>
          <h4>DATA INTEGRATION</h4>
          <p>Anaplan unifies disparate data sources into a single, accurate view, eliminating silos and fostering a data-driven culture. This ensures that all stakeholders have access to consistent information, across multiple other data sources, eliminating potential organizational blindspots.</p>
      </div>
      <div className='platform'>
          <h4>SECURITY</h4>
          <p>Anaplan prioritizes data security with robust protocols, ensuring that sensitive business information is protected in a compliant environment. This commitment allows businesses to trust the platform with their critical data, focusing on innovation and performance without security concerns.</p>
      </div>
  </div>
  </div>
      <div className='engageInfo'>
        <h4>Engage with ealytics for Unparalleled Expertise</h4>
        <p>Leverage our deep Anaplan knowledge to revolutionize your business processes. When you partner<br></br>
            with us, you gain access to a wealth of experience and a commitment to excellence that sets your<br></br>
            business apart.</p>
      </div>
  <Footer/>
</div>

    
  )
}

export default Anaplan
