// Core
import React from 'react';
import { components } from 'react-select';

// Instruments
import Styles from './styles.m.css';

const ClearIndicator = (props) => {
    return (
        <components.ClearIndicator { ...props } >
            <div className = { Styles.clear }>X</div>
        </components.ClearIndicator>
    );
};

export default ClearIndicator;
