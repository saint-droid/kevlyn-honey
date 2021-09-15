import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
//import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
function Checkout() {
    const[{basket, user}, dispatch] = useStateValue();
    if(!basket?.length ){
  
        return(
            <div className="NoBasket">
               
               <h2  className="checkout__titleEmpty">
                     Your shopping basket is empty!</h2>
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
                     Your shopping basket</h2>
                     
                        
                     {basket.map(item=>(
                 <CheckoutProduct
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

export default Checkout
