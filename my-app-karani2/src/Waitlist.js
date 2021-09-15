import React from 'react'
import './Waitlist.css'
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'
import WaitlistCheckoutProduct from './WaitlistCheckoutProduct';
import { Link } from 'react-router-dom';
//import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function Waitlist() {
    const[{favourite, user}, dispatch] = useStateValue();


    if(!favourite?.length ){
  
        return(
            <div className="NoWaitlist">
               
               <h2  className="checkout__titleEmpty">
                     Your have not selected any Favourite item!</h2>
            <button className="orders__shopButton"><Link className="order-link1" to="/">Go shopping</Link> </button>
            </div>
        )
    }else{
    return (
        <>
        <div className='checkout'>
             <div className="checkout__left">
                
                 <h6 className="checkout__h">Hello {!user? 'Guest': user.email}</h6>
                
                
                 <h2  className="checkout__title">
                     Your Waitlist</h2>
                     
                        
                     {favourite.map(item=>(
                 <WaitlistCheckoutProduct
                 id={item.id}
                 title={item.title}
                 image={item.image}
                 price={item.price}
                 />
             ))}
             </div>
                    
        </div>
         <div className="checkout__right">
         <Subtotal/>
        
     </div>
     </>
    )
                     }
}

export default Waitlist
