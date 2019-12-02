// Core
import React from 'react';
import { func, object } from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import cx from 'classnames';

// Elements
import { BirthDate, Gender, HearSelector, Nav } from '../elements';

// Instruments
import Styles from './styles.m.css';
import { validateWizardSignup } from '../../../instruments/validate';
import { normalizeBirthDate } from '../../../instruments/normalize';

let SecondStep = ({ actions, handleSubmit, stepBackward }) => {
    const _getBodyStyles = () => {
        return cx(Styles.body, Styles.second);
    };

    const bodyStyles = _getBodyStyles();

    return (
        <form
            className = { Styles.general }
            onSubmit = { handleSubmit }>
            <div className = { bodyStyles } >
                <Field
                    component = { BirthDate }
                    name = 'date_of_birth'
                    props = { {
                        onChange:  actions.changeBirthDate,
                        normalize: normalizeBirthDate,
                    } }
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
    actions:      object.isRequired,
    handleSubmit: func.isRequired,
    stepBackward: func.isRequired,
};

SecondStep = reduxForm({
    form:                     'wizardSignup',
    destroyOnUnmount:         false,
    forceUnregisterOnUnmount: true,
    validate:                 validateWizardSignup,
})(SecondStep);

export default SecondStep;
