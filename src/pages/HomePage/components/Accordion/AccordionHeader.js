import React, {useContext} from "react";
import AccordionContext from "./AcoordionContext";
import "./AccordionStyle.css";
// import {AiOutlineClose, AiOutlinePlusCircle}from "react-icons/ai";
 

function AccordionHeader({ children, ...restProps }) {
    const [AccordionShow, setAccordionShow] = useContext(AccordionContext);
  
    function handleClick() {
      setAccordionShow(!AccordionShow);
    }
  
    return (
      <div className="accordion-header" onClick={handleClick} {...restProps}>
        {children}
        {/* {AccordionShow ? (
        //   <AiOutlineClose
        //     className="accordion-image"
 
        //     alt="Close"
        //   />
        // ) : (
        //   <AiOutlinePlusCircle
        //     className="accordion-image"
        //     src="../images/icons/add.png"
        //     alt="Open"
        //   />
        <>
        </>
        )} */}
      </div>
    );
  }
  
  export default AccordionHeader;
  