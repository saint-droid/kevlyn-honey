import React from 'react'
import './CheckoutProduct.css'
//import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import { useStateValue } from './StateProvider';
//import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

function WaitlistCheckoutProduct({id, image, title, price, hideButton}) {
    const[{favourite}, dispatch] = useStateValue();

    const removeFromBasket = () =>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        })
    }
    const addToBasket = () =>{
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                
    
            },
        });
    };
    return (
        <div className='CheckoutProduct'>
           <img  className='CheckoutProduct__image' src={image} alt=""/>
           <div className='CheckoutProduct__info'>
            <p className='CheckoutProduct__title'>
                {title}
            </p>
            <p className='CheckoutProduct__price'>
                <small>Kshs</small>
               <strong>{price}</strong> 
            </p>
            <div> </div>
            
             < button onClick={addToBasket} color="primary"  className='CheckoutProduct__buyNow' >Buy now</button>
           </div>
        </div>
    )
}
export default WaitlistCheckoutProduct