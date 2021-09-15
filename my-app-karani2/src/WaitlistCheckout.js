import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'
import WaitlistCheckoutProduct from './WaitlistCheckoutProduct';
import { Link } from 'react-router-dom';
//import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
function WaitlistCheckout() {
    const[{favourite, user}, dispatch] = useStateValue();
    return (
        <div className='checkout'>
             <div className="checkout__left">
                 <Link to="/">
                 <button className="checkout__button"> Go shopping</button>
                 </Link>
                 <h6 className="checkout__h">Hello {!user? 'Guest': user.email}</h6>
                 <h2  className="checkout__title">
                     Your shopping basket</h2>
                     
                        
                     {favourite.map(item=>(
                 <WaitlistCheckoutProduct
                 id={item.id}
                 title={item.title}
                 image={item.image}
                 price={item.price}
                 />
             ))}
             </div>
                     <div className="checkout__right">
                <Subtotal/>
               
            </div>
        </div>
    )
}

export default WaitlistCheckout
