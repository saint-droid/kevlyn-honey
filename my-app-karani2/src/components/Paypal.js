
import React, {useState}from 'react'
import ReactDOM from "react-dom"
import { useStateValue } from '../StateProvider';
import './Paypal.css'
import CurrencyFormat from 'react-currency-format'
import {getBasketTotal } from '../Reducer';
//import { Link, useHistory } from "react-router-dom";
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
const Paypal = () => {
    const [{ basket, user }] = useStateValue();
    //const [price, setPrice] = useState(0)
    //const history = useHistory();
    
    const createOrder = (data, actions, basket) =>{
        return actions.order.create({
          purchase_units: [
            {
              amount:{
               value: "100",
              },
            },
          ],
        });
      };
    const onApprove = (data, actions) =>{
        console.log(data);
       
        return actions.order.capture();
       
      }
      
    return (
        <div>
            <div className="paypal_checkout">
             
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
                <div  className="paypal_option">
           <PayPalButton
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
      /> 
      </div>
      </div>
        </div>
    )
}

export default Paypal
