// Core
import React from 'react';
import { func } from 'prop-types';
import { Field, reduxForm } from 'redux-form';

// Components
import { TextField } from '../elements';

let FirstStep = ({ handleSubmit }) => {
    return (
        <form onSubmit = { handleSubmit }>
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

            <div>
                <button type = 'submit'>Next &#8594;</button>
            </div>
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
    validate:                 () => {},
})(FirstStep);

export default FirstStep;
