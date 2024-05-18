import React,{useState} from 'react'
import { MdOutlineHorizontalRule } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./contact.css"


const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });
      if (response.ok) {
        console.log('Form data submitted successfully!');
      } else {
        console.error('Failed to submit form data:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  }

  return (
  
             <div id="contactSection" className='row'>
               <div className='col-md-6'>
              <div className='contact'>
                {/* <h4 className='icon'><MdOutlineHorizontalRule style={{color:"#01959a",fontSize:"50px"}}/> CONTACT US</h4> */}
                <h1 className='getInTouch'>Let's Get in <br></br>Touch</h1>
                <div className='all'>
                <div className='icons'>
                <MdEmail className='socials'/><h3 className='description'>Email Address</h3>
                </div>
                  <p className='info'>info@ealytics.io</p>
                  <div className='icons'>
                  <FaPhoneAlt className='socials'/><h3 className='description'>Call Us</h3>
                  </div>
                  <p className='info' >+1(763)222-6307</p>
                  <div className='icons'>
                  <FaMapMarkerAlt className='socials' /><h3 className='description'>Address</h3>
                  </div>
                  <p className='info'>326 E 74th St, Suite #2 New York, NY 10021</p>
                </div>
               
                </div>
                </div>  
                <div className='col-md-6'>
                    <div className='contact'>
                        <div className='fillForm'>
                         <h2 className='form'>SEND US A MESSAGE</h2>

                         <div className="form-container">
                      <form onSubmit={handleSubmit}>
                        <div>
                          <label htmlFor="name">Name:</label>
                          <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email">Email:</label>
                          <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                      <div>
                        <label htmlFor="message">Message:</label>
                        <textarea
                          id="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                        ></textarea>
                      </div>
                      <button type="submit">Submit</button>
                    </form>
                  </div>
                        </div>
                    </div>

                </div>
            
           
            </div>
  )
}

export default Contact
