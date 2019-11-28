// Core
import React from 'react';
import { func } from 'prop-types';
import { reduxForm } from 'redux-form';

// Instruments
import Styles from './styles.m.css';
import successCircle from 'theme/assets/success-circle';
import rightArrow from 'theme/assets/right-arrow';

let ThirdStep = ({ handleSubmit }) => {
    return (
        <form
            className = { Styles.final }
            onSubmit = { handleSubmit }>
            <div>
                <img src = { successCircle } />
                <button type = 'submit'>
                    Go to Dashboard
                    <img
                        alt = 'right arrow'
                        src = { rightArrow }
                    />
                </button>
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
