// Core
import React from 'react';
import { components } from 'react-select';

// Instruments
import Styles from './styles.m.css';
import dropdownArrow from 'theme/assets/dropdown-arrow';

const DropdownIndicator = (props) => {
    return (
        <components.DropdownIndicator { ...props } >
            <div className = { Styles.dropdown }>
                <img
                    alt = 'open select arrow'
                    src = { dropdownArrow }
                />
            </div>
        </components.DropdownIndicator>
    );
};

export default DropdownIndicator;
