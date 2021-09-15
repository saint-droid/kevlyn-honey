import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import './Header.css'
import {motion } from 'framer-motion'
export default function MobileLinks() {
    const animateFrom = {opacity: 0, y: -40}
    const animateTo = {opacity: 1, y: 0}
    return (
        <div className="mobileLinks">
             <motion.h5
             initial={animateFrom}
             animate={animateTo}
             transition={{delay:0.05}}
             >Home</motion.h5>
            <motion.h5
             initial={animateFrom}
             animate={animateTo}
             transition={{delay:0.20}}
            >Product about</motion.h5>
            <motion.h5
             initial={animateFrom}
             animate={animateTo}
             transition={{delay:0.40}}
            >Contacts</motion.h5>
            {/**
            <motion.div 
             initial={animateFrom}
             animate={animateTo}
             transition={{delay:0.60}}
            className="socialMedia">
            <p><InstagramIcon url="https://twitter.com/" /></p>
            <p><TwitterIcon url="https://instagram.com/" /></p>
            <p><FacebookIcon url="https://facebook.com/jaketrent" /></p>
            </motion.div>
             */}
        </div>
    )
}
