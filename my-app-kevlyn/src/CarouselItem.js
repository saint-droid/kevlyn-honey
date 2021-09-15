import React from 'react'
//import CarouselCard from './CarouselCard'
//import Carousel from 'react-elastic-carousel';
import avatar from './assets/avatar.png'
import './Carousel.css'
const CarouselItem = () => {
    
    return (
    <div className="what-people">
    <h3 className="productsDisplayh"> What peope say about us</h3>
    <h4 className="productsDisplayh5"> Testimonials</h4>
    <div className="inner">
    <div className="inner-option">
      <img src={avatar} alt=""/>
      <h3>James Nthigah</h3>
      <p>"when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."</p>
    </div>
    <div className="inner-option">
      <img src={avatar} alt=""/>
      <h3>James Nthigah</h3>
      <p>"when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."</p>
    </div>
    <div className="inner-option">
      <img src={avatar} alt=""/>
      <h3>James Nthigah</h3>
      <p>"when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."</p>
    </div>
   
    </div>
    </div>
    )
}

export default CarouselItem
