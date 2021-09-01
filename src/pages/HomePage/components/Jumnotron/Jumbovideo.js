import React from "react";
 
function JumboVideo ({children, ...restProps}) {
    return (
        <div className="jumbo-videoPlayer" {...restProps}>
            {children}
        </div>
    );
}

export default JumboVideo;