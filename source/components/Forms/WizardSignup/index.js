// Core
import React, { useState } from 'react';
import { func } from 'prop-types';

// Steps
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';

// Components
import { ProgressBar } from '../elements';

const WizardSignup = ({ onSubmit }) => {
    const [step, setStep] = useState(1);

    const stepForward = () => {
        setStep(step + 1);
    };

    const stepBackward = () => {
        setStep(step - 1);
    };

    const titleJSX = step !== 3 ? <h3>Signup</h3> : <h3>Thank you!</h3>;

    return (
        <div>
            { titleJSX }

            <ProgressBar step = { step } />

            { step === 1 && <FirstStep onSubmit = { stepForward } /> }

            { step === 2 &&
                <SecondStep
                    stepBackward = { stepBackward }
                    onSubmit = { stepForward }
                />
            }

            { step === 3 && <ThirdStep onSubmit = { onSubmit } /> }
        </div>
    );
};

WizardSignup.propTypes = {
    onSubmit: func.isRequired,
};

export default WizardSignup;
