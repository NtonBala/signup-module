// Core
import React from 'react';
import { func } from 'prop-types';
import { reduxForm } from 'redux-form';

// Components
import success from 'theme/assets/success';

let ThirdStep = ({ handleSubmit }) => {
    return (
        <form onSubmit = { handleSubmit }>
            <img src = { success } />
            <div>
                <button type = 'submit'>Go to Dashboard &#8594;</button>
            </div>
        </form>
    );
};

ThirdStep.propTypes = {
    handleSubmit: func.isRequired,
};

ThirdStep = reduxForm({
    form:                     'wizardSignup',
    destroyOnUnmount:         false,
    forceUnregisterOnUnmount: true,
    validate:                 () => {},
})(ThirdStep);

export default ThirdStep;
