// Core
import React from 'react';
import { func, object } from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import cx from 'classnames';

// Elements
import { BirthDate, Gender, CustomSelector, Nav } from '../elements';

// Instruments
import Styles from './styles.m.css';
import { validateWizardSignup } from '../../../instruments/validate';
import { normalizeBirthDate } from '../../../instruments/normalize';

const hearOptions = [
    {
        value: 'internet',
        label: 'Internet',
    },
    {
        value: 'facebook',
        label: 'Facebook',
    },
    {
        value: 'colleagues',
        label: 'Colleagues',
    },
    {
        value: 'other',
        label: 'Other',
    }
];

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

                <Field
                    component = { CustomSelector }
                    label = 'where did you hear about us?'
                    name = 'how_hear_about_us'
                    options = { hearOptions }
                />
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
