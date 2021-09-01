import React from 'react';
import "../../HomePage/styles/HeaderStyles.css";

import Img from '../images/misc/logo.svg'
import {Image} from "./LogoStyle";
 
function Logo({ children, ...restProps }) {
    
    return (
        <div>
             <a href="/Netflix-Api-frameWork" {...restProps}>
                {children}
            <Image src={Img}/>
            </a>
      
        </div>
    )
}

export default Logo;