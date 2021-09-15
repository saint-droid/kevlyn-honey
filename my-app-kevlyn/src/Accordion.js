import React, {useState, useEffect, useRef} from 'react'
import './Accordion.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
const Accordion = () => {
    const [toggle, setToggle]=useState(false)
    const[heightEL, setHeightEl]= useState();
    const refHeight = useRef()
        useEffect(() =>{
            setHeightEl(`${refHeight.current.scrollHeight}px`)
        }, [])
        const toggleState = () =>{
            setToggle(!toggle)
           
        }
    const menuOpen = <ChevronRightIcon/> 
     const menuClose = <ExpandMoreIcon/>
     const data = [
        {
            id:"1",
            question:"when an unknown printer took a galley of type ? ",
            testimonial:' when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        

    ]
    return (
        <>
        {data.map(user =>(
        <div className="accordion"  key={user.id} >
        
      
            <button 
            
            onClick={toggleState}
            className="accordion-visible">
             <span>
                 {user.question}
             {/*do you offer door to door Derivery?*/}
             </span>
             {toggle ? menuClose : menuOpen}
             </button>
             
        
           
             <div className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
             style={{height: toggle ? `${heightEL}` : "0px"}}
             ref={refHeight}
             >
             <p arial-hidden={toggle ? "true" : "false"}>
            {user.testimonial}
             </p>
             </div>
             
        
             
        </div>
        ))}
        </>
    )
}

export default Accordion
