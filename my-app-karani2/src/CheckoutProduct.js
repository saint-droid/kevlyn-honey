import React from 'react'
import './CheckoutProduct.css'
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import { useStateValue } from './StateProvider';
function CheckoutProduct({id, image, title, price, hideButton}) {
    const[{basket}, dispatch] = useStateValue();

    const removeFromBasket = () =>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        })
    }
  
    return (
        <div className='CheckoutProduct'>
           <img  className='CheckoutProduct__image' src={image} alt=""/>
           <div className='CheckoutProduct__info'>
            <p className='CheckoutProduct__title'>
                {title}
            </p>
            
            {/*<button className='CheckoutProduct-button' onClick={handlePrint} >Printing</button>*/}
            <p className='CheckoutProduct__price'>
                <small>Kshs</small>
               <strong>{price}</strong> 
            </p>
            {!hideButton && (
            <RemoveShoppingCartIcon color="secondary" className='CheckoutProduct__button' onClick={removeFromBasket} label='remove'/>
            )}
           </div>
        </div>
    )
}
export default CheckoutProduct