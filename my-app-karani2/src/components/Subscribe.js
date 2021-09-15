import React from 'react'
import './Subscribe.css'
const Subscribe = () => {
    return (
        <div>
            <form action="https://formsubmit.co/lessin915@gmail.com" method="POST" className="subscribe-form">
            
            <input type="hidden" name="_next" value="https://karanie-commerce.web.app/"></input>
            <input type="hidden" name="_subject" value="Email Subscribtion"/>
            
            <input type="hidden" name="_captcha" value="false"/>
            
                 <input type="email" name="email" required placeholder="Enter your email"/>
                <button type="submit">Subscribe</button>
            </form>
        </div>
    )
}

export default Subscribe
