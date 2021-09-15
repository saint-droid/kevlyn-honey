import React from 'react'
import './Footer.css'
import { SocialIcon } from 'react-social-icons';
//import Accordion from './Accordion'
//import AccordionTest from './Accordion-test';
//import AccordionTest from './AccordionTest';
import { Link} from 'react-router-dom';
//import ContactUs from './ContactUs';
function Footer() {
    return (
        <div className='footer'>
            
            <div className='footer-header'>
            
            <div  className='footer-header-option'>
            <p>Explore</p>
            <hr/>
            <h5  ><Link  to="/" className='footer-header-optionh'>Shop now</Link></h5>
            <h5 ><Link to="/orders" className='footer-header-optionh'>Your Orders</Link></h5>
            <h5 ><Link  to="/login" className='footer-header-optionh'>Getting Started</Link></h5>
            <h5 > <Link  to="/" className='footer-header-optionh'>help</Link></h5>
            </div>
            <div  className='footer-header-option'>
            <p>Explore </p>
            <hr/>
            <h5  ><Link  to="/" className='footer-header-optionh'>Shop now</Link></h5>
            <h5 ><Link to="/orders" className='footer-header-optionh'>Your Orders</Link></h5>
            <h5 ><Link  to="/login" className='footer-header-optionh'>Getting Started</Link></h5>
            <h5 > <Link  to="/" className='footer-header-optionh'>help</Link></h5>
            </div>
            <div  className='footer-header-option'>
            <p>Explore</p>
            <hr/>
            <h5  ><Link  to="/" className='footer-header-optionh'>Shop now</Link></h5>
            <h5 ><Link to="/orders" className='footer-header-optionh'>Your Orders</Link></h5>
            <h5 ><Link  to="/login" className='footer-header-optionh'>Getting Started</Link></h5>
            <h5 > <Link  to="/" className='footer-header-optionh'>help</Link></h5>
            </div>
            
            </div>

            <div className='footer-social'>
            <p><SocialIcon url="https://twitter.com/" /></p>
            <p><SocialIcon url="https://instagram.com/" /></p>
            <p><SocialIcon url="https://facebook.com/jaketrent" /></p>
            <p><SocialIcon url="https://youtube.com/jaketrent" /></p>
            </div>
           <p className='footer-header-optionh'> &copy; copyright 2020 - 2030 | All Rights Reserved</p> 
           <h5><Link  to="/" className='footer-header-optionh'>www.Jerseyworld.com</Link> </h5>
        </div>
    )
}

export default Footer
