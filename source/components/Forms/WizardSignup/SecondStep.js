// Core
import React from 'react';
import { func } from 'prop-types';
import { reduxForm } from 'redux-form';
import cx from 'classnames';

// Elements
import { BirthDate, Gender, HearSelector, Nav } from '../elements';

// Instruments
import Styles from './styles.m.css';

let SecondStep = ({ handleSubmit, stepBackward }) => {
    const _getBodyStyles = () => {
        return cx(Styles.body, Styles.second);
    };

    const bodyStyles = _getBodyStyles();

    return (
        <form
            className = { Styles.general }
            onSubmit = { handleSubmit }>
            <div className = { bodyStyles } >
                <BirthDate />

                <Gender />

                <HearSelector />
            </div>

            <Nav
                step = { 2 }
                stepBackward = { stepBackward }
            />
        </form>
    );
};

SecondStep.propTypes = {
    handleSubmit: func.isRequired,
    stepBackward: func.isRequired,
};

SecondStep = reduxForm({
    form:                     'wizardSignup',
    destroyOnUnmount:         false,
    forceUnregisterOnUnmount: true,
    validate:                 () => {},
})(SecondStep);

export default SecondStep;
