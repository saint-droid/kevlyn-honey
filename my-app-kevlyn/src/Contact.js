import React from 'react'
import './Contact.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import hero from "./assets/depositphotos_87778210-stock-photo-peanut-butter-and-peanuts.jpg"
import image1 from './assets/229458697_648189949915972_3960563692608177259_n.jpg'
function Contact() {
    return (
        <>
        <div className="contact">
           <form action="https://formsubmit.co/lessin915@gmail.com" className="contactForm" method="POST">
               <h3>Get intouch with us</h3>
               <hr/>
               <input type="hidden" name="_next" value="http://localhost:3000/."/>
               <input type="hidden" name="_subject" value="Kevlyn Honey LTD "/>
               <input type="hidden" name="_captcha" value="false"/>
               <label>Your name:</label>
                 <input type="text" name="name" required placeholder="Your name" autoComplete="off"/>
                 <label>Your Email:</label>
                <input type="email" name="email" required placeholder="Email Address" autoComplete="off"/>
                <label>Your Message:</label>
                <textarea name="Message" placeholder="Enter your message....."/>
                
                <button type="submit">Send</button>
            </form>
            
            <img src={hero} alt=""/>
        </div>
        <hr/>
        <div className="contact-option">
        <div  className="contact-option-cont">
        <LocationOnIcon color="primary"/>
        <p> Nairobi KE, Moi Avenue</p>
        <p>Bihi Towers, Rm 3</p>
        </div>
         <div className="contact-option-cont">
        <PhoneIcon color="primary"/>
        <p> 0100234554</p>
        <p>+254767543546</p>
        </div>
         <div className="contact-option-cont">
        <MailOutlineIcon color="primary"/>
        <p>kevlynhoney@gmail.com</p>
      
        </div>
        </div>
        </>
    )
}

export default Contact

