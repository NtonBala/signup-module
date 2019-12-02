// Core
import React, { useState } from 'react';
import { func, shape } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { change } from 'redux-form';

// Steps
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';

// Elements
import { ProgressBar } from '../elements';

// Instruments
import Styles from './styles.m.css';

const WizardSignup = ({ actions, onSubmit }) => {
    const [step, setStep] = useState(1);

    const stepForward = () => {
        setStep(step + 1);
    };

    const stepBackward = () => {
        setStep(step - 1);
    };

    const titleJSX = step !== 3 ? <h3>Signup</h3> : <h3>Thank you!</h3>;

    return (
        <div className = { Styles.form } >
            { titleJSX }

            <ProgressBar step = { step } />

            { step === 1 && <FirstStep onSubmit = { stepForward } /> }

            { step === 2 &&
                <SecondStep
                    actions = { { ...actions } }
                    stepBackward = { stepBackward }
                    onSubmit = { stepForward }
                />
            }

            { step === 3 && <ThirdStep onSubmit = { onSubmit } /> }
        </div>
    );
};

WizardSignup.propTypes = {
    actions: shape({
        changeBirthDate: func.isRequired,
    }).isRequired,
    onSubmit: func.isRequired,
};

const mapDispatch = (dispatch) => {
    return {
        actions: bindActionCreators({ changeBirthDate: change }, dispatch),
    };
};

export default connect(
    null,
    mapDispatch
)(WizardSignup);
