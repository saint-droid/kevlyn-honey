import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import './Accordion.css'
const AccordionItem = () => {
    return (
        <div className="accordion-menu">
        <Accordion defaultActiveKey="0" flush>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Do you offer door - door deriveries ?</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Where are you located ?</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. 
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
</div>
    )
}

export default AccordionItem
