import React, { useContext } from "react";
import AccordionContext from "./AcoordionContext";
import './AccordionStyle.css';


function AccordionBody({ children, ...restProps }) {
    const [AccordionShow] = useContext(AccordionContext);
  
    return AccordionShow ? (
      <div className="accordion-body" {...restProps}>
        {children}
      </div>
    ) : null;
  }
  export default AccordionBody;
  