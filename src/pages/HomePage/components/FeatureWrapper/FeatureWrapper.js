import React from 'react'
import './styles/FeatureStyles.css';

function FeatureWrapper({ children, ...restProps }) {
    return <div {...restProps}>{children}</div>
}

export default FeatureWrapper;