import React from 'react'
import { SocialIcon } from 'react-social-icons'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
             <div className='footer-social'>
            <SocialIcon className="footer-social-icon" url="https://twitter.com/Kevlyn_Honey" />
            <SocialIcon className="footer-social-icon" url="https://instagram.com/kevlyn_honey/" />
           <SocialIcon  className="footer-social-icon" url="https://facebook.com/KevlynHoneyLTD" />
            <SocialIcon className="footer-social-icon" url="https://youtube.com/channel/UCCNi8nk-re7FkLV1R3eRYZg" />
            <SocialIcon className="footer-social-icon" url="https://wa.me/c/254742122806" />
            </div>
            
           <p className='footer-header-optionh'> &copy; copyright 2020 - 2030 | All Rights Reserved</p> 
           <h5>www.KevlynHoneyLTD.com </h5>
        </div>
    )
}

export default Footer
