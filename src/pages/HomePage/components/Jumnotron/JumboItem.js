import React from "react";
import './JumbotronStyle.css';

function JumboItem({ children, ...restProps }) {
    return (
        <div className="jumbo-item" {...restProps}>
            {children}
        </div>
    )
}

export default JumboItem;