
import React, {useState} from 'react'
import './Header.css'
//import logo from './assets/logo.png'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './Firebase';
import Navlinks from './Navlinks';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
function Header() {
     const[{basket, user}, dispatch] = useStateValue();
     const [open, setOpen] = useState(false)


     const closeMobileMenu = () => setOpen(false)
     const menuIcon = <MenuIcon className="menuIcon" onClick={() => setOpen(!open)}/> 
     const closeIcon = <CloseIcon className="menuIcon" onClick={() => setOpen(!open)}/>
    const handleAuthentication =() =>{
        if(user){
            auth.signOut();
        }
    }
    return (
        
         <>
     <div className="header-mobile">
          <div className="header-mobileOption">
          <div className="header-mobileOption1">
          {open ? closeIcon : menuIcon}
          </div>
               <div className="header-mobileOption1">
               <Link to="/"  className="header__link"> <h1> Jersey World</h1></Link> 
               </div>
          
          <div className="header-mobileOption2">
         
          <Link to="/checkout" className='footer-header-optionh'>
         <div className="header__optionBasket">
              <ShoppingBasketIcon/>
              <span className="header__optionLinetwo header__basketCount">
              {basket?.length}
              </span>
         </div>
         </Link>
         
          </div>
          
          </div>
          
     
    <div className="header__nav">
        
    {open && <Navlinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}
    </div>
      
  </div>
        <div className="header">
           <Link to="/"  className="header__link"> <h1> Jersey world</h1></Link> 
            
           <div className="header__nav">
          
           <div className="header__option" onClick={handleAuthentication} >
           
               <span  className="header__optionLineOne">
                    Hello, {!user ? 'Guest': user.email}
               </span>
               
               <Link to="/login" className='footer-header-optionh'>
               <span  className="header__optionLinetwo signIn">
               {user ? 'Sign Out': 'Sign In'}
               </span>
              
               </Link>
            </div>
            <div className="header__option">
            <span  className="header__optionLineOne">
                    your
               </span>
               <Link to="/orders" className='footer-header-optionh'>
               <span  className="header__optionLinetwo">
                    Orders
               </span>
               </Link>
               </div>
               <div className="header__option">
            <span  className="header__optionLineOne">
                    your
               </span>
               <Link to="/waitlist" className='footer-header-optionh'>
               <span  className="header__optionLinetwo">
                    Waitlist
               </span>
               </Link>
               </div>
               <div className="header__option">
               <span  className="header__optionLineOne">
                    About
               </span>
               <Link to="/contactUs" className='footer-header-optionh'>
               <span  className="header__optionLinetwo">
               Contact
               </span>
               </Link>
               </div>
              
               <Link to="/checkout" className='footer-header-optionh'>
               <div className="header__optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header__optionLinetwo header__basketCount">
                    {basket?.length}
                    </span>
               </div>
               </Link>
           </div>
        </div>
        </>
    )
}

export default Header
