// Core
import React from 'react';
import { func } from 'prop-types';
import { Field, reduxForm } from 'redux-form';

// Components
import { BirthDate, Gender, HearSelector } from '../elements';

let SecondStep = ({ handleSubmit, stepBackward }) => {
    return (
        <form onSubmit = { handleSubmit }>
            <Field
                component = { BirthDate }
                label = 'date of birth'
                name = 'date_of_birth'
                type = 'text'
            />

            <Gender />

            <HearSelector />

            <div>
                <button onClick = { stepBackward }>Back</button>
                <button type = 'submit'>Next &#8594;</button>
            </div>
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
