import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from "./Firebase";
import Login from './Login';
import Order from './Order';
import './Orders.css'
import { useStateValue } from './StateProvider';
//import  HashLoader from "react-spinners/ClipLoader";
function Orders() {
    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
      if(user) {
          db
          .collection('users')
          .doc(user?.uid)
          .collection('orders')
          .orderBy('created', 'desc')
          .onSnapshot(snapshot => (
              setOrders(snapshot.docs.map(doc => ({
                  id: doc.id,
                  data: doc.data()
              })))
          ))
      } else {
          setOrders([])
      }
  
    }, [user])

    if(!user ){
  
        return(
            <div className="NoOrders">
                <h1> You do not have any order</h1>
                <p> To see your orders you must <strong><Link className="order-link" to="/login">login</Link></strong> or <strong><Link className="order-link" to="/create">create an account</Link></strong></p>
            <button className="orders__shopButton"><Link className="order-link1" to="/">Go shopping</Link> </button>
            </div>
        )
    }else{
      
return (
<>
   
    
        <div className="orders">
          <h1> your orders</h1> 
          <div className="orders__order">
          {orders?.map(order => (
                    <Order order={order} />
                ))}
         
        </div>
        </div>
</>
    )
          }
}

export default Orders
