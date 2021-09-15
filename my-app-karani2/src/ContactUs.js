import React from 'react'
import { Link } from 'react-router-dom'
import './ContactUs.css'
//import banner101 from './assets/banner101.jpg'
function ContactUs() {
    return (
       
       <div className="contact">
          <h4>You can get intouch with us</h4>


          <h5>*We ensure that we reply to your request between 12 - 24  hours for working days</h5>


    <form action="https://formsubmit.co/lessin915@gmail.com" method="POST" className="contactForm">
    <input type="hidden" name="_subject" value="Jersey World"/>
    https://my-portfolio-16a57.web.app/thankyou
    <input type="hidden" name="_next" value="https://karanie-commerce.web.app/"/>
    <label>Name:</label>
   <input type="text" name="name" required placeholder="Enter your Name" autoComplete="off"/>
   <label>Email:</label>
     <input type="email" name="email" required placeholder="Enter your Email" autoComplete="off"/>
    
   
     <button type="submit">Send</button>
     </form>
     

       
        </div>
          
    )
}

export default ContactUs
