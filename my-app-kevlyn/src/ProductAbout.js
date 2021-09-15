import React from 'react'
//import ReactPlayer from 'react-player'
import './ProductAbout.css'
import image1 from './assets/104495922_295453901856247_7600544467374800668_n.jpg'
import image2 from './assets/229458697_648189949915972_3960563692608177259_n.jpg'
import image3 from './assets/124080444_3471557646214466_5599218981750513851_n.jpg'
import ReactPlayer from 'react-player'
import ProductDisplay from './ProductDisplay'

const ProductAbout = () => {
    return (
        <div className="ProductAbout">
          
         {/*
          <img src={image1} alt=""/> 
            <div className="Productimg1">
         <img src={image1} alt=""/> 
            </div>
         
         <div className="Productimg">
         <img src={image2} alt=""/> 
         <img src={image3} alt=""/> 
         <img src={image3} alt=""/> 
         </div>
   
    <ReactPlayer
          url="https://www.facebook.com/KevlynHoneyLTD/videos/329482348676486/?t=30"
          width="360px"
          height="240px"
          /> 
         <div className="ProductAboutCont">
        
         {/*<img src={image2} alt=""/>
          
              
               
                 <div  className="ProductAboutCont1">
                     <h1>Honey</h1>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    
                 </div>
                
            
            </div>
            */}
            <ProductDisplay/>
             
     
           
          </div>
       
    )
}

export default ProductAbout
