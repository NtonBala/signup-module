// Core
import React from 'react';

// Components
import { Catcher, Spinner, WizardSignupForm } from '../components';

const SignupPage = () => {
    const onSubmit = (values) => {
        const {
            confirmPassword:   deletedKey, // eslint-disable-line no-unused-vars
            how_hear_about_us: howHearAboutUs,
            ...otherValues
        } = values;

        const data = {
            ...otherValues,
            'how_hear_about_us': howHearAboutUs ? howHearAboutUs.value : null,
        };

        console.log('-> user data:', JSON.stringify(data, null, 2));
    };

    return (
        <Catcher>
            <Spinner />

            <div className = 'page centered-content'>
                <WizardSignupForm onSubmit = { onSubmit } />
            </div>
        </Catcher>
    );
};

export default SignupPage;
