import React,{useState} from 'react'
import './Header.css'
import logo from './assets/logo2.jpg'
//import InstagramIcon from '@material-ui/icons/Instagram';
//import TwitterIcon from '@material-ui/icons/Twitter';
//import FacebookIcon from '@material-ui/icons/Facebook';
//import { SocialIcon } from 'react-social-icons';
import MobileLinks from './MobileLinks';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
const Header = () => {
    const [open, setOpen]= useState(false)
    //const closeMobileMenu = () => setOpen(false)
    const menuIcon = <MenuIcon className="menuIcon" onClick={() => setOpen(!open)}/> 
    const closeIcon = <CloseIcon className="menuIcon" onClick={() => setOpen(!open)}/>
    return (
        <>
        <div className="header">
        <Link to="/">
             <div className="headerOption">
               
                 <img src={logo} alt=""/>
               
           
            </div>
            </Link>
            <div className="headerOption1">
           <Link to="/" className="header-links"><span>Home</span></Link> 
           <Link to="/product" className="header-links"><span>Product about</span></Link> 
           <Link to="/contact" className="header-links">  <span>Contacts</span></Link> 
            
            </div>
</div>
<>
<div className="headerMobileOption">
   
    <img src={logo} alt=""/>
    
    
     {open ? closeIcon : menuIcon}
   
    </div>
    <div>
     {open && <MobileLinks/>}
    </div>
            
            </>
        </>
    )
}

export default Header
