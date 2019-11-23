// Core
import React from 'react';
import { number } from 'prop-types';
import cx from 'classnames';

// Instruments
import Styles from './styles.m.css';

const ProgressBar = ({ step }) => {
    console.log('-> step:', step);
    const _getBarStyles = () => {
        return cx(Styles.bar, {
            [Styles.secondStep]: step === 2,
            [Styles.thirdStep]:  step === 3,
        });
    };

    const barStyles = _getBarStyles();

    return (
        <div className = { Styles.progress }>
            <span className = { barStyles } />
        </div>
    );
};

ProgressBar.propTypes = {
    step: number.isRequired,
};

export default ProgressBar;
