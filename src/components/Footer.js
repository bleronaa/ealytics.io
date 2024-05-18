import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import {FaLinkedin} from 'react-icons/fa';
import { MdOutlineMail } from "react-icons/md";
import "./Footer.css";

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };
    return (
<footer className='footer'>
    <div className="text-center">
        <Row className="justify-content-center">
            <div className="column">
                <div className="content">
                    <h4>Navigation</h4>
                    <div className="paragraphs">
                        <Link to="/" onClick={() => window.location.href='#'}><p>Home</p></Link>
                        <Link to="/about" onClick={() => window.location.href='#'}><p>About</p></Link>
                        <Link to="/accounting" onClick={() => window.location.href='#'}><p>Accounting Solutions</p></Link>
                        <Link to="/enterprise " onClick={() => window.location.href='#'}><p>Enterprise Solutions</p></Link>
                        <Link to="/blog" onClick={() => window.location.href='#'}><p>Blog</p></Link>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="content">
                    <h4>Contact US</h4>
                    <div className="contact">
                        <p>326 E 74th St, Suite 2</p>
                        <p>New York, NY, 10021</p>
                        <p>+1 (763) 222-6307</p>
                        <p>info@ealytics.io</p>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="content">
                    <h4>Get Connected</h4>
                    <div className='connected'>
                        <a href="mailto:info@ealytics.io" target="_blank" ><MdOutlineMail/></a>
                        <a href="https://www.linkedin.com/company/ealytics/" target="_blank"><FaLinkedin/></a>
                    </div>
                </div>
            </div>
        </Row>
    </div>
</footer>

    );
}

export default Footer;
