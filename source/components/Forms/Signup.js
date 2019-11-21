// Core
import React from 'react';
import { func } from 'prop-types';
import { Field, reduxForm } from 'redux-form';

let SignupForm = ({ handleSubmit }) => {
    return (
        <div>
            <h3>Signup</h3>

            <form onSubmit = { handleSubmit }>
                <div>
                    <label htmlFor = 'email'>email</label>
                    <Field
                        component = 'input'
                        name = 'email'
                        type = 'email'
                    />
                </div>

                <div>
                    <label htmlFor = 'password'>password</label>
                    <Field
                        component = 'input'
                        name = 'password'
                        type = 'password'
                    />
                </div>

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
