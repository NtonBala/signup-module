// Core
import React from 'react';
import { func } from 'prop-types';
import { Field, reduxForm } from 'redux-form';

// Component
import { TextField } from './components';

let SignupForm = ({ handleSubmit }) => {
    return (
        <div>
            <h3>Signup</h3>

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
                    <button type = 'submit'>Submit</button>
                </div>
            </form>
        </div>
    );
};

SignupForm.propTypes = {
    handleSubmit: func.isRequired,
};

SignupForm = reduxForm({
    form: 'signup',
})(SignupForm);

export default SignupForm;
