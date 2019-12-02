// Core
import React from 'react';
import { func } from 'prop-types';
import { Field, reduxForm } from 'redux-form';

// Elements
import { TextField, Nav } from '../elements';

// Instruments
import Styles from './styles.m.css';
import { validateWizardSignup } from '../../../instruments/validate';
import { mockedData } from '../../../instruments/mockedData';

let FirstStep = ({ handleSubmit }) => {
    return (
        <form
            className = { Styles.general }
            onSubmit = { handleSubmit }>
            <div className = { Styles.body } >
                <Field
                    component = { TextField }
                    label = 'email'
                    name = 'email'
                    type = 'email'
                />

                <Field
                    component = { TextField }
                    label = 'password'
                    name = 'password'
                    type = 'password'
                />

                <Field
                    component = { TextField }
                    label = 'confirm password'
                    name = 'confirmPassword'
                    type = 'password'
                />
            </div>

            <Nav step = { 1 } />
        </form>
    );
};

FirstStep.propTypes = {
    handleSubmit: func.isRequired,
};

FirstStep = reduxForm({
    form:                     'wizardSignup',
    destroyOnUnmount:         false,
    forceUnregisterOnUnmount: true,
    validate:                 validateWizardSignup,
    initialValues:            mockedData,
})(FirstStep);

export default FirstStep;
