import React from "react";
import './OptFormStyles.css';

function OptFormEmail({ ...restProps }) {
    return <input className="optform-email" {...restProps} />;
} 

export default OptFormEmail;