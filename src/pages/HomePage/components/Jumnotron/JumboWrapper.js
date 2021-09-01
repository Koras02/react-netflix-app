import React from "react";
import './JumbotronStyle.css'

function JumboWrapper({ children, ...restProps }) {
    return (
        <section className="jumbo-wrapper" {...restProps}>
            {children}
        </section>
    );
}

export default JumboWrapper;