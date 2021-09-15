import React from 'react';
import Collapsible from 'react-collapsible';
import './Accordion.css'
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const AccordionTest = () => {
  return (
      <>
      <div className="collapsible">
    <Collapsible trigger="How to pay using paypal">
      <p>
        This is the collapsible content. It can be any element or React
        component you like.
      </p>
      <p>
        It can even be another Collapsible component. Check out the next
        section!
      </p>
    </Collapsible>
    </div>
    <Collapsible trigger="How to pay using paypal" >
    
      <p>
        This is the collapsible content. It can be any element or React
        component you like.
      </p>
      <p>
        It can even be another Collapsible component. Check out the next
        section!
      </p>
    </Collapsible>
    </>
  );
};

export default AccordionTest;