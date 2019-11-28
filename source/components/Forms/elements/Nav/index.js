// Core
import React from 'react';
import { number, func } from 'prop-types';
import cx from 'classnames';

// Instruments
import Styles from './styles.m.css';
import rightArrow from 'theme/assets/right-arrow';

const Nav = ({ step, stepBackward }) => {
    const _getNavStyles = () => {
        return cx(Styles.nav, {
            [Styles.reverse]: step === 1,
        });
    };

    const navStyles = _getNavStyles();

    return (
        <div className = { navStyles } >
            { step === 2 &&
                <button
                    className = { Styles.back }
                    type = 'button'
                    onClick = { stepBackward }>
                    Back
                </button>
            }

            <button
                className = { Styles.next }
                type = 'submit'>
                Next
                <img
                    alt = 'right arrow'
                    src = { rightArrow }
                />
            </button>
        </div>
    );
};

Nav.propTypes = {
    step:         number.isRequired,
    stepBackward: func,
};

export default Nav;
