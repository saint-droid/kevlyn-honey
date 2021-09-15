import React, {useState} from 'react'

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
        <h1>Honey</h1></div>
      <div
        className={ toggleState === 2 ? "tabs active-tabs" : "tabs" }
       onClick={() => toggleTab (2)}
       ><h1>Peanut Butter</h1></div>
      <div
        className={ toggleState === 3 ? "tabs active-tabs" : "tabs" }
       onClick={() => toggleTab (3)}
       ><h1>Shea butter</h1></div>

      </div>

      <div className="content-tabs">
        <div
         className={ toggleState === 1 ? "content active-content" : "content" }
         //className="content active-content"
        >
          <div>
          <ul>
            <li>Healing wounds and burns</li>
            <li>Preventing acid reflux</li>
            <li>Fighting infections</li>
            <li>Relieving cold and cough symptoms</li>
          </ul>
          </div>
          
          
          
        </div>
        <div
          className={ toggleState === 2 ? "content active-content" : "content" }
         >
          <div>
          <ul>
            <li>Weight loss</li>
            <li>Boosting heart health</li>
            <li>Bodybuilding</li>
            <li>Managing blood sugar levels</li>
          </ul>
          </div>
          
        </div>
        <div
          className={ toggleState === 3 ? "content active-content" : "content" }
         >
          <div>
          <ul>
            <li>Healing wounds and burns</li>
            <li>Preventing acid reflux</li>
            <li>Fighting infections</li>
            <li>Relieving cold and cough symptoms</li>
          </ul>
          </div>
        </div>
      </div>
      <div className="tabs__containerReference" > <p>reference from <a href="https://www.medicalnewstoday.com/articles/264667#benefits" alt="health">Medical news today</a></p></div>
     
    </div>
  )
}

export default Tabs
