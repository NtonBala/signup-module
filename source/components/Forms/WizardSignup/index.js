// Core
import React, { useState } from 'react';
import { func, shape } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { change } from 'redux-form';
import { Transition } from 'react-transition-group';
import { gsap } from 'gsap/all';

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

    const timeout = {
        enter: 600,
        exit:  1000,
    };

    const _stepForward = () => {
        setStep(step + 1);
    };

    const _stepBackward = () => {
        setStep(step - 1);
    };

    const _animateStepEnter = (el) => {
        gsap.fromTo(el, 1, { opacity: 0, zIndex: -1 }, { opacity: 1, zIndex: 1 });
    };

    const _animateStepExit = (el) => {
        gsap.fromTo(el, 1, { opacity: 1, zIndex: 1 }, { opacity: 0, zIndex: -1 });
    };

    return (
        <div className = { Styles.form } >
            <div className = { Styles.heading }>
                <Transition
                    in = { step !== 3 }
                    timeout = { timeout }
                    onExit = { _animateStepExit }>
                    <h3>Signup</h3>
                </Transition>

                <Transition
                    in = { step === 3 }
                    timeout = { timeout }
                    onEntered = { _animateStepEnter }>
                    <h3>Thank you!</h3>
                </Transition>
            </div>

            <ProgressBar step = { step } />

            <div className = { Styles.wrapper }>
                <Transition
                    in = { step === 1 }
                    timeout = { timeout }
                    onEntered = { _animateStepEnter }
                    onExit = { _animateStepExit }>
                    <FirstStep onSubmit = { _stepForward } />
                </Transition>

                <Transition
                    in = { step === 2 }
                    timeout = { timeout }
                    onEntered = { _animateStepEnter }
                    onExit = { _animateStepExit }>
                    <SecondStep
                        actions = { { ...actions } }
                        stepBackward = { _stepBackward }
                        onSubmit = { _stepForward }
                    />
                </Transition>

                <Transition
                    in = { step === 3 }
                    timeout = { timeout }
                    onEntered = { _animateStepEnter }
                    onExit = { _animateStepExit }>
                    <ThirdStep onSubmit = { onSubmit } />
                </Transition>
            </div>

            <Transition
                in = { step !== 3 }
                timeout = { timeout }
                onExit = { _animateStepExit }>
                <div className = { Styles.line } />
            </Transition>
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
