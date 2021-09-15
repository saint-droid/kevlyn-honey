import React from 'react'
import './HeroSlider.css'
import Carousel from 'react-bootstrap/Carousel'
import banner1 from '../assets/banners/Man city banner.jpg'
import banner2 from '../assets/banners/Manchester United (1).jpg'
import banner3 from '../assets/banners/Manchester United 1.jpg'
import banner4 from '../assets/banners/real madrid banner (1).jpg'
import banner5 from '../assets/banners/real madrid banner.jpg'
import banner6 from '../assets/banners/Hoodies 1.jpg'
import banner7 from '../assets/banners/Manchester United.jpg'
const HeroSlider = () => {
    return (
        <div className="container-slider">
           <Carousel variant="dark" controls={false} fade={true} pause={false}>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item interval={1500}>
    <img
      className="d-block w-100"
      src={banner2}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={banner3}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item interval={2500}>
    <img
      className="d-block w-100"
      src={banner4}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={banner5}
      alt="First slide"
    />
    
  </Carousel.Item>

  <Carousel.Item interval={3500}>
    <img
      className="d-block w-100"
      src={banner7}
      alt="Third slide"
    />
    
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default HeroSlider
