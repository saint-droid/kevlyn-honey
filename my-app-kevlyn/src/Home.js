import React, {useEffect} from 'react'
//import Header from './Header'
import Aos from "aos";
import "aos/dist/aos.css";
import './Home.css'
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import ProductDisplay from './ProductDisplay'
//import Carousel from 'react-elastic-carousel';
//import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import hero from "./assets/depositphotos_87778210-stock-photo-peanut-butter-and-peanuts.jpg"
import HomeServices from './HomeServices'
import Accordion from './Accordion'
import ReactPlayer from 'react-player'
import EmojiNatureIcon from '@material-ui/icons/EmojiNature';
//import ProductImages from './ProductImages'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import banner2 from "./assets/roberta-sorge-kp9UVn-PUac-unsplash.jpg"
import banner3 from "./assets/heather-gill-dktNU9tEOSI-unsplash.jpg"
import honey from './assets/gettyimages-183354852-1558479028.jpg'
import { Link } from 'react-router-dom';
import StarIcon from '@material-ui/icons/Star';
import HighQualityIcon from '@material-ui/icons/HighQuality';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CarouselCard from './CarouselCard';
import Carousel from './CarouselItem'
import CarouselItem from './CarouselItem'
import SwiperItem from './Swiper'
import AccordionItem from './components/Accordion'
import Tabs from './Tabs'
//import sheaButter from './assets/what-does-shea-butter-do-for-your-skin.jpg'
//import Peanut from './assets/Homemade-Peanut-Butter-Square.png'
//import ProductDisplay from './ProductDisplay';
//import bee from "./assets/allec-gomes-u7Bf1pKCRHo-unsplash.jpg"
const Home = () => {
  useEffect(() => {
    Aos.init({  });
 }, [])
 
    return (
        <>
        <ScopedCssBaseline>
<div className="home">
    
 <div className="homeOption1">
    <div className="homeOptioncont">
       <h1>Honey,</h1>
       <h1>Peanut Butter,</h1>
       <h1>Shea Butter.</h1>
       <p>we sell at affordable prices and quality products. It has survived not only five centuries</p>
       <button><Link to="/product" className="header-links">Products about</Link></button>
    </div>
    <img src={hero} alt=""/>
    </div>
    <div className="homeOption2">

    
    </div>




           {/*<div className="homeOption1">
               <h1>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born</h1>
                <h4>But I must explain to you how all this mistaken idea of denouncing pleasure .</h4>
              <button>
                    <span>About</span>
                    <span><NavigateNextIcon/></span>
                </button>
                
               
            </div>
            <div className="homeOption2">
            <img src={banner1} alt=""/>
            <img src={banner2} alt=""/>
            <img src={banner3} alt=""/>
                

            </div>
          */}   
    </div>


     
    <div   className="whatWeOffer">
 <h5>Know about us ?</h5>
 <div className="whatWeOfferCont">
 <div   data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="900"> 
 < HighQualityIcon/>
  <p> Quality products</p>
 
  <h5>our product are rated by our client as good aproducts</h5> </div>
 <div data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="800">
 <StarIcon/> 
 <p> Affordable prices</p>
 <h5>our product are rated for fair prices. They are easily affordable and easy to access  </h5>
 </div>
 <div  data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="700">
  <EmojiNatureIcon/> 
   <p>Natural products</p>
   <h5>our product naturally manufactured and prepared carefully due to the covid pandemic </h5>
   </div>
  <div  data-aos="fade-right" data-aos-offset="400" data-aos-easing="ease-in-sine" data-aos-duration="600">
   < CheckCircleIcon/> 
   <p>Good for health </p>
   <h5>our product are exceptional for boosting your health and increasing your appetite </h5>
   </div>
 </div>
 

 
  </div>
  
   <div className="productsDisplayimg">
 
      <div className="productsDisplayimgcont" data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="900" data-aos-delay="500">
       <img src={banner2} alt=""/>
       <div  className="productsDisplayimg1" >
       <h4>Honey</h4>
       
        <button className="productsDisplaybutton"><Link className="productsDisplaybuttonLink"  to="/product">learn more</Link></button>
       
      
       </div>
        
      </div>
       <div className="productsDisplayimgcont" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="800" data-aos-delay="400">
       <img src={banner2} alt=""/>
       <div  className="productsDisplayimg1" >
       <h4>Peanut butter</h4>
       <button className="productsDisplaybutton"><Link className="productsDisplaybuttonLink" to="/product">learn more</Link></button>
       </div>
        
      </div>
       <div className="productsDisplayimgcont" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="900" data-aos-delay="300">
       <img src={banner3} alt=""/>
       <div  className="productsDisplayimg1">
       <h4>Shea butter</h4>
       <button className="productsDisplaybutton"><Link  className="productsDisplaybuttonLink"  to="/product">learn more</Link></button>
       </div>
        
      </div>
      </div>
      {/** 
    <div  className="react-video1">
     
    <ReactPlayer
     width="1200px" 
     height="480px"
     controls
     url="https://youtu.be/jfEHXXKOrKI"/> 
     <div className="our-gallery-option">
      <img src={banner2} alt=""/>
      <img src={banner2} alt=""/>
      </div>
           <div  className="our-gallery-option1">
      <img src={banner2} alt=""/>
      </div> 
       <div  className="our-gallery-option">
      <img src={banner2} alt=""/>
      <img src={banner2} alt=""/>
      </div>
    </div>
    */}
    <div className="ourgallery__main">
    <h1>Our Gallery</h1>
      <div className="our-gallery" data-aos="fade-right" data-aos-offset="500" data-aos-easing="ease-in-sine" data-aos-duration="500">
      <img src={honey} alt=""/>
      <img src={banner2} alt=""/>
      <img src={banner2} alt=""/>
      <img src={banner3} alt=""/>
     </div>
     <div className="our-gallery"  data-aos="fade-left" data-aos-offset="400" data-aos-easing="ease-in-sine" data-aos-duration="600">
      <img src={banner2} alt=""/>
      <img src={banner3} alt=""/>
      <img src={honey} alt=""/>
      <img src={banner2} alt=""/>
     </div>
    </div>
   
<div className="carousel-home"  data-aos="fade-right" data-aos-offset="500" data-aos-easing="ease-in-sine" data-aos-duration="600">
  <CarouselItem/>
</div>
<div  className="react-video1"  data-aos="fade-right" data-aos-offset="500" data-aos-easing="ease-in-sine" data-aos-duration="700">
     
     <ReactPlayer
      width="1200px" 
      height="720px"
      controls
      url="https://youtu.be/jfEHXXKOrKI"/> 
      </div>
      <div className="home__tabs"  data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="600">
      <h1 className="productsDisplaytabs">Benefits of our products  to your health ?</h1>
  <Tabs/>
</div>
                 <div className="product-display"  data-aos="fade-right" data-aos-offset="500" data-aos-easing="ease-in-sine" data-aos-duration="800">
                  <div  className="product-display-option">
                  <LocationOnIcon color="secondary"/>
                  <h4>quick derivery</h4>
                  <p>Enjoy quick derivery countrywide</p>
                  </div>
                   <div  className="product-display-option">
                   <QuestionAnswerIcon color="primary"/>
                  <h4>24 hour customer care</h4>
                  <p>Enjoy quick derivery countrywide</p>
                  </div>
                   <div  className="product-display-option">
                   <FavoriteIcon color="secondary"/>
                  <h4>Healthy and energetic</h4>
                  <p>Enjoy quick derivery countrywide</p>
                  </div>
       </div>
  
  <div>
     
 {/*
  <div className="productsDisplayimg">
 
      <div className="productsDisplayimgcont">
       <img src={banner2} alt=""/>
       <div  className="productsDisplayimg1">
       <h4>Honey</h4>
       
        <button className="productsDisplaybutton"><Link className="productsDisplaybuttonLink"  to="/product">learn more</Link></button>
       
      
       </div>
        
      </div>
       <div className="productsDisplayimgcont">
       <img src={banner2} alt=""/>
       <div  className="productsDisplayimg1">
       <h4>Peanut butter</h4>
       <button className="productsDisplaybutton"><Link className="productsDisplaybuttonLink" to="/product">learn more</Link></button>
       </div>
        
      </div>
       <div className="productsDisplayimgcont">
       <img src={banner3} alt=""/>
       <div  className="productsDisplayimg1">
       <h4>Shea butter</h4>
       <button className="productsDisplaybutton"><Link  className="productsDisplaybuttonLink"  to="/product">learn more</Link></button>
       </div>
        
      </div>
      </div>
      </div>

  <div className="productDisplay">
      
       </div>
       <div className="productDisplay">
       { /* <h3>The products</h3>
         <ProductDisplay/>
          <div>
      <HomeServices/>
    </div>
     <div className="swiper-home">
           <SwiperItem/>
         </div>
         */}
        <div className="home__profile" data-aos="fade-right" data-aos-offset="400" data-aos-easing="ease-in-sine" data-aos-duration="400">
          <CarouselCard/>
        </div>

         <div className="connected"  data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="400">
            <h3>Stay connected with us</h3>
            <h5>Subscribe to our news letter</h5>
            <form action="https://formsubmit.co/lessin915@gmail.com" method="POST" className="connected-form">
            <input type="hidden" name="_next" value="http://localhost:3000/"/>
           
     <input type="email" name="email" required placeholder="Your email" />
     <button type="submit">Subscribe</button>
</form>
         </div>
       </div>
       <div className="subscribe"  data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400">
       <h2 className="productsDisplayhh3"> Our products FAQs</h2>
       <AccordionItem/>
        
      </div>
      </ScopedCssBaseline> 
     </>
    )
}

export default Home
