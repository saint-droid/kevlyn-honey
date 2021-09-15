
import React, {useState, useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import './Home.css'
import CssBaseline from '@material-ui/core/CssBaseline';
import logo from './assets/andre-hunter-RPKdvPcYAUo-unsplash.jpg'
import image1 from './assets/kenya cricket.jpg'
import image2 from './assets/Man U maroon.jpg'
import image3 from './assets/Manchester Black.jpg'
import image4 from './assets/arsenal black - Copy.jpg'
import image5 from './assets/cars hoodies/BMW.jpg'
import image6 from './assets/cars hoodies/honda black.jpg'
import image7 from './assets/cars hoodies/white ladncruiser.jpg'
import image8 from './assets/cars hoodies/toyota fj.jpg'
import image9 from './assets/football caps/arsenal black.jpg'
import Product from './Product'
//import banner1 from './assets/banners/real madrid banner (1).jpg'
//import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
//import { Link } from 'react-router-dom'
//import SwiperItem from './Swiper'
import HeroSlider from './components/HeroSlider'
import AccordionItem from './components/Accordion'
import Subscribe from './components/Subscribe'
//import TabsItems from './components/Tabs'
import Tabs from './components/Tabs'
//import {Alert} from 'reactstrap'
//import PaypalOrders from './PaypalOrders';
//import banner7 from './assets/banners/Manchester United.jpg'
//import AccordionItem from './components/Accordion'
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//import BeatLoader from "react-spinners/ClipLoader";
//import { css } from "@emotion/react";
function Home() {
   
   
    
    return (
      
        <div className="home">
           
             <div className="home__container">
                
               
               <div>  
               <HeroSlider/>
               
          
             
             <div className="home__rowTittleUp1">
                
                 <h1 >Product Categories</h1>
                 
                 
                
             </div>
             <div >
             <Tabs/>
             </div>
            
             </div>
             <h1  className="home__rowTittleTop1 forYou">All products</h1>
            <div className="toolbar"></div>


       <div className="home__row">
                 {<Product id="1" title='kenya cricket' price={1400}image={image1}  />}
                 {<Product  id="2"  title='Man U maroon' price={2000}image={image2} />}
                 {<Product  id="3"  title='Manchester Black' price={1100}image={image3} />}
                
                
                
                
             </div>
             <h4 className="home__rowTittle">Hoodies</h4>
             <div className="home__row">
                 
             {<Product id="14" title='Arsenal black' price={1400}image={image4}/>}
            {<Product  id="4"  title='Car hoodies BMW' price={2000}image={image5}/>}
            {<Product  id="5"  title='Car hoodies  Honda black' price={1100}image={image6}/>}
             </div>
             <div className="home__row">
             {<Product id="6" title='Car hoodies White Landcruiser' price={1400}image={image7}/>}
             {<Product  id="4"  title='Car hoodies  Toyota fj' price={2000}image={image8}/>}
            {<Product  id="5"  title='Football Cap Arsenal black' price={1100}image={image9}/>}
             
                
             </div>
             <div   className="home__row">
                 {<Product id="7" title='Kenya cricket' price={1400}image={image1}/>}
                 {<Product  id="8"  title='Man U maroon' price={2000}image={image2}/>}
                 {<Product  id="9"  title='Manchester Black' price={1100}image={image3}/>}
                
             </div>
             
            
             <h4 className="home__rowTittle" > Caps</h4>
             <div className="home__row" >
                 
             {<Product id="10" title='Manchester Black' price={1400}image={image9}/>}
                 {<Product  id="11"  title='Arsenal black' price={2000}image={image4}/>}
                 {<Product  id="12"  title='Car Hoodies BMW' price={1100}image={image5}/>}
             </div>
             <div  className="home__row">
             {<Product id="13" title='Car hoodies Honda black' price={1400}image={image6}/>}
             {<Product  id="4"  title='Cars Hoodies/white ladncruiser' price={2000}image={image7}/>}
                 {<Product  id="5"  title='Man-U Maroon' price={1100}image={image8}/>}
             
                
    </div>
             </div>
            <div  className="accordion-home">
                <h2>Our products FAQS.</h2>
                <AccordionItem/>
            </div>
            <div     className="subscribe-home">
                <h2>subscribe to our NewsLetters.</h2>
                <h4>You will receive updates for new products and discounts.</h4>
                <Subscribe/>
            </div>
        </div>
    )
        
}

export default Home
