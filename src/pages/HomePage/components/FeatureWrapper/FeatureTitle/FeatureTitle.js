import React from 'react';
import '../styles/FeatureStyles.css';

function FeatureTitle({ children, ...restProps }) {
    return <h1 {...restProps}>{children}</h1>
}

export default FeatureTitle;