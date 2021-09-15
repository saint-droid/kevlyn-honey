import React from 'react'
//import CarouselCard from './CarouselCard'
//import Carousel from 'react-elastic-carousel';
import avatar from './assets/banners/118474263_2818321388405072_2040584023068330435_n.jpg'
import './Carousel.css'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import { SocialIcon } from 'react-social-icons'
const CarouselItem = () => {
    
    return (
    <div className="what-people">
    <h3 className="productsDisplayh">Meet the Founder </h3>
    
    <div className="inner1">
    <div className="inner-option1">
      <img className="inner-optionImg" src={avatar} alt=""/>
      <h3>Oyongo K Odinga</h3>
      <h5>CEO, Founder</h5>
      <p>"when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."</p>
      <div className="inner-option-phone">
        <p>< PhoneEnabledIcon color="secondary"/> 0742 122806</p>
        <p>< MailOutlineIcon color="secondary"/> KevlynHoney@gmail.com</p>
      </div>
      <div className="inner-option-social">
      <SocialIcon className="footer-social-icon" url="https://twitter.com/Kevlyn_Honey" />
            <SocialIcon className="footer-social-icon" url="https://instagram.com/kevlyn_honey/" />
           <SocialIcon  className="footer-social-icon" url="https://facebook.com/KevlynHoneyLTD" />
      </div>
    </div>
    
    
    </div>
    </div>
    )
}

export default CarouselItem
