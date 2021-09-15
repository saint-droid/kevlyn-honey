
import React, {useEffect, useState} from 'react'
import './App.css';
import Header from './Header';
import  Home from './Home';
//import Checkout from './Checkout'
import WaitlistCheckout from './WaitlistCheckout';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Checkout from './Checkout';
import Login from './Login'
import CreateAccount from './CreateAccount'
import { auth } from './Firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import Footer from './Footer';
import Orders from './Orders';
import { About } from './About';
import ContactUs from './ContactUs';
import Waitlist from './Waitlist';
import Paypal from './components/Paypal';
import Tabs from './components/Tabs'
//import ContactUs from './ContactUs';
//import  HashLoader from "react-spinners/ClipLoader";
import Spinner from 'react-bootstrap/Spinner'
//import AccordionItem from './components/Accordion';
//import FrontendPayment from './components/FrontendPayment';
//import PaypalPayment from './components/FrontendPayment';
//import PaypalOrders from './PaypalOrders';
const promise = loadStripe("pk_test_51JD5IgEiLoIxMyKLcD2VvVzJWegqt61wbTMTNEddmPIkuv7cWZ965Jk707vahAdXHJcmah9XxpMRKrA3ULYfeVOr00WdZw9jjF");

function App() {
    const[{basket}, dispatch] = useStateValue();
    const  [loading, setLoading]= useState(false);
    useEffect(() => {
      
        setLoading(true)
        setTimeout(()=>{
          setLoading(false)
        },1000)
      }, [])
    
    useEffect(() => {
      auth.onAuthStateChanged(authUser =>{
          console.log('the user is >>>>', authUser);
          if(authUser){
            dispatch({
                type:'SET_USER',
                user:authUser
            })
          }else{
            dispatch({
                type:'SET_USER',
                user:null
            })
        }
      })
    }, [])

    
  return (
    <div className="App_loader">
    {loading ? 
  
  <Spinner loading={loading} animation="grow" variant="warning" />
  :
  
    
      <Router>
        
    <div className="App">
    

<Switch>

<Route path="/orders">
<Header />
{<Orders/>}
</Route>

<Route path="/create">
<CreateAccount/>
</Route>

<Route path="/login">
<Login/>
  </Route>
<Route path="/checkout">
{<Header/>}  
<Checkout/>
</Route>
<Route path="/paypal">

<Paypal/>
</Route>
<Route path="/waitlist">
{<Header/>}  
<Waitlist/>
</Route>

<Route path="/contactUs">
{<Header/>} 

<ContactUs/>
{/*<About/>*/} 
<footer>

 <Footer/>
</footer>
</Route>
<Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route> 
<Route path="/">
  <Header/>
<Home/>

</Route>

</Switch>




    </div>
    </Router>
}
</div>
  );
}



export default App;

