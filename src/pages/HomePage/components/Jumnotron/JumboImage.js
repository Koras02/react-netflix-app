import React from "react";
import './JumbotronStyle.css';

function JumboImage({ ...restProps }) {
    return <img className="jumbo-image" alt="" {...restProps} />;
}

export default JumboImage;