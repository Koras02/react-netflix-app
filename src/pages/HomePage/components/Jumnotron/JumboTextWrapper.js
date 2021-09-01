import React from 'react';
import "./JumbotronStyle.css";

function JumboTextWrapper({ children, ...restProps}) {
    return (
        <div className="jumbo-textwrapper" {...restProps}>
            {children}
        </div>
    );
}

export default JumboTextWrapper;