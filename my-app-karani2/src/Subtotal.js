import React,{useState} from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider';
import './Subtotal.css'
import ReactDOM from "react-dom"
//import { useStateValue } from '../StateProvider';
import './components/Paypal.css'
//import CurrencyFormat from 'react-currency-format'
import {getBasketTotal } from './Reducer';
import { useHistory } from 'react-router-dom';
//import FrontendPayment from './FrontendPayment';
//import StripeCheckout from 'react-stripe-checkout';
//import FrontendPayment from './components/FrontendPayment';
function Subtotal() {
    const history = useHistory();
    const[{basket}, dispatch] = useStateValue();

    const getCartTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);
    //console.log(getCartTotal(basket))
    const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

   const total = getCartTotal(basket)
   
    const createOrder = (data, actions, basket) =>{
        return actions.order.create({
          purchase_units: [
            {
              amount:{
               value: total,
              },
            },
          ],
        });
      };
    const onApprove = (data, actions) =>{
         console.log( data.orderID);
       window.location.replace( "karanie-commerce.web.app")
       //window.alert('Thank you for your purchase!');
       dispatch({
        type: 'EMPTY_BASKET'
    })
        return actions.order.capture();
      
      }
    //console.log(getBasketTotal(basket));
    return (
        <div className='subtotal'>
             
            <CurrencyFormat
            renderText={(value) =>(
                <>
                <p>
                <strong>Subtotal </strong> ( {basket?.length} items) <br/>

                    <strong>{value}</strong>
                   
                </p>
               
                </>
            )}
            decimalScale={2}
            value={getBasketTotal (basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"Kshs"}
            />
            
            <button className="checkout-btn" onClick={e =>history.push('/payment')} >Proceed to checkout</button>
           
            <div className="paypal_checkout">
             
            
                 <div  className="paypal_option">
            <PayPalButton
         createOrder={(data, actions) => createOrder(data, actions)}
         onApprove={(data, actions) => onApprove(data, actions)}
       /> 
       </div>
       </div>
             <div className="stripe__checkout">
           {/**  <StripeCheckout
            
        token={onToken}
        name="caps and hoodies"
        currency="KES"
        amount={getBasketTotal (basket)}
        
        stripeKey="pk_test_51JD5IgEiLoIxMyKLcD2VvVzJWegqt61wbTMTNEddmPIkuv7cWZ965Jk707vahAdXHJcmah9XxpMRKrA3ULYfeVOr00WdZw9jjF"
      /> 
      */}
      
    
      </div>
      
        </div>
    )
}

export default Subtotal
