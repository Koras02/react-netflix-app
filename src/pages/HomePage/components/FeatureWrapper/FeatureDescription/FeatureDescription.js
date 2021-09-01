import React from 'react';
import '../styles/FeatureStyles.css';


function FeatureDescription({ children, ...restProps }) {
    return (
        <h2 className="warning" {...restProps}>
            {children}
        </h2>
    );
}

export default FeatureDescription;