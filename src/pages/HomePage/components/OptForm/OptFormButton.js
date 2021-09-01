import React from 'react';
import './OptFormStyles.css';
import {FaArrowRight} from "react-icons/fa"

function OptFormButton({ children, ...restProps }) {
   return (
       <div>
           <a className="optform-button" href="/login" {...restProps}>
               {children}
               <FaArrowRight 
                 className="optform-button-image"
                 alt="Try Now"
                />
           </a>
       </div>
   )
}

export default OptFormButton;