import React from 'react'
import './Product.css'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useStateValue } from './StateProvider';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
//import { CircularProgress, Container, Paper } from '@material-ui/core';
function Product({id, title, image, price}) {
    const[{basket}, dispatch] =  useStateValue();

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
    const addToWaitlist = () =>{
        dispatch({
            type: 'ADD_TO_WAITLIST',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                
    
            },
        });
    };

   
    return (
        <div className="product">
             <div  className="product__info">
                <p  className="product__infoP">{title}</p>
                <p  className="product__price">
                    <small>kshs</small>
                    <strong>{price}</strong>
                </p>
            </div>
            <img className="product__image" src={image} alt=""/>
            
           < button onClick={addToBasket} color="primary"><AddShoppingCartIcon color="primary"/></button>
          {/*<div className="favourite">
           < button onClick={addToWaitlist} color="primary" >
                <FavoriteBorderIcon color="secondary"/>
                
            </button>
            <span>Add to waitlist</span>
            </div>
    */}
           
        </div>
    )
}


export default Product
