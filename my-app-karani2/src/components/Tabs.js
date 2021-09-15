import React, {useState} from 'react'
import image1 from '../assets/juventus black.jpeg'
import image9 from '../assets/Man city Away.jpeg'
import image10 from '../assets/Manchester Beige - Copy.jpg'
import image2 from '../assets/football caps/20190528_133311.jpg'
import image4 from '../assets/football caps/20190528_133352.jpg'
import image5 from '../assets/football caps/20190529_125846.jpg'
import image6 from '../assets/football caps/20190528_133311.jpg'
import image3 from '../assets/cars hoodies/Maroon.jpg'
import image7 from '../assets/cars hoodies/Mercedes F1.jpg'
import image8 from '../assets/cars hoodies/toyota black.jpg'
import './Tabs.css'
const Tabs = () => {
  const[toggleState, setToggleState]= useState(1);

  const toggleTab = (index) =>{
    setToggleState(index);
  }


  return (
    <div className="tabs__container">
      <div className="bloc-tabs">
      <div
       className={ toggleState === 1 ? "tabs active-tabs" : "tabs" }
      onClick={() => toggleTab (1)}
      >
        <h1>Hoodies</h1></div>
      <div
        className={ toggleState === 2 ? "tabs active-tabs" : "tabs" }
       onClick={() => toggleTab (2)}
       ><h1>Caps</h1></div>
      <div
        className={ toggleState === 3 ? "tabs active-tabs" : "tabs" }
       onClick={() => toggleTab (3)}
       ><h1>Jerseys</h1></div>

      </div>

      <div className="content-tabs">
        <div
         className={ toggleState === 1 ? "content active-content" : "content" }
         //className="content active-content"
        >
          <div>
          <img src={image1} alt=""/>
          </div>
          <div className="content__img">
          <img src={image9} alt=""/>
          </div>
          <div className="content__img">
          <img src={image10} alt=""/>
          </div>
          
          
          
        </div>
        <div
          className={ toggleState === 2 ? "content active-content" : "content" }
         >
          <div>
          <img src={image2} alt=""/>
          </div>
          <div className="content__img">
          <img src={image4} alt=""/>
          </div>
          <div className="content__img">
          <img src={image5} alt=""/>
          </div>
          
        </div>
        <div
          className={ toggleState === 3 ? "content active-content" : "content" }
         >
          <div>
          <img src={image3} alt=""/>
          </div>
          <div className="content__img">
          <img src={image7} alt=""/>
          </div>
          <div className="content__img">
          <img src={image8} alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tabs
