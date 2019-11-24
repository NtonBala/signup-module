// Core
import React from 'react';
import { func } from 'prop-types';
import { Field, reduxForm } from 'redux-form';

// Elements
import { BirthDate, Gender, HearSelector, Nav } from '../elements';

// Instruments
import Styles from './styles.m.css';

let SecondStep = ({ handleSubmit, stepBackward }) => {
    return (
        <form
            className = { Styles.general }
            onSubmit = { handleSubmit }>
            <div className = { Styles.body } >
                <Field
                    component = { BirthDate }
                    label = 'date of birth'
                    name = 'date_of_birth'
                    type = 'text'
                />

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
