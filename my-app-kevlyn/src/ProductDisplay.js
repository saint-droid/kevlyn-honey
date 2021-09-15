//import Link from 'react-router-dom'
import React from 'react'
import { Link } from 'react-router-dom'
import product4 from './assets/Product4.jpg'
import product1 from './assets/art-rachen-Asj5DFw8UAw-unsplash.jpg'
import product2 from './assets/Homemade-Peanut-Butter-HRSquare-Culinary-Hill10a.jpg'
import product3 from './assets/Shea-butter.jpg'
import './ProductDisplay.css'
//import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
const ProductDisplay = () => {
    return (
        <div className="productDisplay">
            <div className="homeOptionImage">
                
                <img src={product1} alt="" />
               
                
               
                {/*<div className="homeOptionImagecont">
                    <h4>Honey</h4>
                    <button>View more</button>
                 </div>
                 */}
                 <div  className="homeOptioncont1">
                     <h1>Honey</h1>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    <div className="homeOptioncont1Img">
                    <div className="homeOptioncont1Img-option">
                     <img className="homeOptioncont1Img1" src={product2} alt=""/>
                     <div className="homeOptioncont1Img-option1">
                      <img className="homeOptioncont1Img1" src={product3} alt=""/>
                     </div>
                     </div>
                      <div className="homeOptioncont1Img-option">
                     <img className="homeOptioncont1Img1" src={product3} alt=""/>
                     <div className="homeOptioncont1Img-option1">
                      <img className="homeOptioncont1Img1" src={product2} alt=""/>
                     </div>
                     </div>
                      <div className="homeOptioncont1Img-option">
                     <img className="homeOptioncont1Img1" src={product2} alt=""/>
                     <div className="homeOptioncont1Img-option1">
                      <img className="homeOptioncont1Img1" src={product4} alt=""/>
                     </div>
                     </div>
                      
                    </div>
                 </div>
               
            </div>
            <div className="homeOptionImage">
                
               
                {/*<div className="homeOptionImagecont">
                    <h4>Honey</h4>
                    <button>View more</button>
                 </div>
                 */}
                 <div  className="homeOptioncont1">
                     <h1>Peanut Butter</h1>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                     <div className="homeOptioncont1Img">

                     <div className="homeOptioncont1Img-option">
                     <img className="homeOptioncont1Img1" src={product2} alt=""/>
                     <div className="homeOptioncont1Img-option1">
                      <img className="homeOptioncont1Img1" src={product3} alt=""/>
                     </div>
                     </div>
                      <div className="homeOptioncont1Img-option">
                     <img className="homeOptioncont1Img1" src={product3} alt=""/>
                     <div className="homeOptioncont1Img-option1">
                      <img className="homeOptioncont1Img1" src={product2} alt=""/>
                     </div>
                     </div>
                      <div className="homeOptioncont1Img-option">
                     <img className="homeOptioncont1Img1" src={product2} alt=""/>
                     <div className="homeOptioncont1Img-option1">
                      <img className="homeOptioncont1Img1" src={product4} alt=""/>
                     </div>
                     </div>
                      
                     </div>
                     
                       
                      
                       
                   
                 </div>
                 <img  src={product2} alt=""/>
            </div>
           
            <div className="homeOptionImage">
                 <img src={product3} alt="" />
               
                {/*<div className="homeOptionImagecont">
                    <h4>Honey</h4>
                    <button>View more</button>
                 </div>
                 */}
                 <div  className="homeOptioncont1">
                     <h1>Shea Butter</h1>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                     <h4><small>Ksh</small><strong>1000</strong> </h4>
                     <div className="homeOptioncont1Img">
                     <div className="homeOptioncont1Img-option">
                     <img className="homeOptioncont1Img1" src={product2} alt=""/>
                     <div className="homeOptioncont1Img-option1">
                      <img className="homeOptioncont1Img1" src={product3} alt=""/>
                     </div>
                     </div>
                      <div className="homeOptioncont1Img-option">
                     <img className="homeOptioncont1Img1" src={product3} alt=""/>
                     <div className="homeOptioncont1Img-option1">
                      <img className="homeOptioncont1Img1" src={product2} alt=""/>
                     </div>
                     </div>
                      <div className="homeOptioncont1Img-option">
                     <img className="homeOptioncont1Img1" src={product2} alt=""/>
                     <div className="homeOptioncont1Img-option1">
                      <img className="homeOptioncont1Img1" src={product4} alt=""/>
                     </div>
                     </div>
                      
                    </div>
                 </div>
               
            </div>
           
        </div>
    )
}

export default ProductDisplay
