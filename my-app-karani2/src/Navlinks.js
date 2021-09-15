import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from './Firebase';
import './Header.css'
import {motion } from 'framer-motion'
import { useStateValue } from './StateProvider';
function Navlinks(props) {
    const[{basket, user}, dispatch] = useStateValue();
    const handleAuthentication =() =>{
        if(user){
            auth.signOut();
        }
    }
    const animateFrom = {opacity: 0, y: -40}
    const animateTo = {opacity: 1, y: 0}
    return (
       <>
     <div className="navlinks">
     <motion.div  initial={animateFrom}
           animate={animateTo}
           transition={{delay:0.05}} 
           className="header__option" onClick = {() => props.isMobile && props.closeMobileMenu()} >
         
               <span  className="header__optionLineOne">
                    Hello, {!user ? 'Guest': user.email}
               </span>
               </motion.div>
        <motion.div  initial={animateFrom}
           animate={animateTo} transition={{delay:0.10}}  className="header__option" onClick = {() => props.isMobile && props.closeMobileMenu()}>
       
         <Link to="/orders" className='footer-header-optionh'>
         <span  className="header__optionLinetwo">
              Orders
         </span>
         </Link>
         </motion.div>
         <motion.div  initial={animateFrom}
           animate={animateTo} transition={{delay:0.20}}  className="header__option" onClick = {() => props.isMobile && props.closeMobileMenu()}>
         
         <Link to="/waitlist" className='footer-header-optionh'>
         <span  className="header__optionLinetwo">
              Waitlist
         </span>
         </Link>
         </motion.div>
         <motion.div  initial={animateFrom}
           animate={animateTo} transition={{delay:0.30}}  className="header__option" onClick = {() => props.isMobile && props.closeMobileMenu()}>
        
         <Link to="/contactUs" className='footer-header-optionh'>
         <span  className="header__optionLinetwo">
         Contact
         </span>
         </Link>
         </motion.div>
         <motion.div  initial={animateFrom}
           animate={animateTo} transition={{delay:0.40}} className="header__option" onClick = {() => props.isMobile && props.closeMobileMenu()}>
         
         <Link to="/" className='footer-header-optionh'>
         <span  className="header__optionLinetwo">
         FAQ
         </span>
         </Link>
         </motion.div>
          
         <motion.div initial={animateFrom}
           animate={animateTo}  transition={{delay:0.50}} className="header__option"  onClick = {() => props.isMobile && props.closeMobileMenu()} >
         <Link to="/login" className='footer-header-optionh'>
           <span  className="header__optionLinetwo signIn" onClick={handleAuthentication}>
           {user ? 'Sign Out': 'Sign In'}
           </span>
          
           </Link>
        </motion.div>
         </div>
        </>
   
    )
}

export default Navlinks
