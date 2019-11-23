// Core
import React from 'react';
import { number } from 'prop-types';

// Instruments
import Styles from './styles.m.css';

const ProgressBar = ({ step }) => {
    return (
        <div className = { Styles.progress }>
            <span />
        </div>
    );
};

ProgressBar.propTypes = {
    step: number.isRequired,
};

export default ProgressBar;
