


 import React from 'react'
import './FrontendPayment.css'
import { useStateValue } from '../StateProvider';
import {getBasketTotal } from '../Reducer';
import { PayPalButton } from "react-paypal-button-v2";
const FrontendPayment = () => {
  const[{basket}, dispatch] = useStateValue();
  return (
    <div className="paypal">
      <PayPalButton
      options={{
        clientId: "AXePZ1HcsficvYXNV8CcEwJBrwvD8WlWSlhGxG3-KkASCMIDWUZ8t9Vhd_56OKJRzFXSZrZPiNP9N4HM",
        currency:"USD"
      }}
        amount={getBasketTotal(basket)}
        onSuccess={(details, data) => {
          alert("Transaction completed by " + details.payer.name.given_name);

         console.log({details, data})
        }}
      />
    </div>
  )
}

export default FrontendPayment

