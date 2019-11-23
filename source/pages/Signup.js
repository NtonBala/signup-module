// Core
import React from 'react';

// Components
import { Catcher, Spinner, WizardSignupForm } from '../components';

const SignupPage = () => {
    const onSubmit = (values) => {
        console.log('-> user data:', values);
    };

    return (
        <Catcher>
            <Spinner />

            <WizardSignupForm onSubmit = { onSubmit } />
        </Catcher>
    );
};

export default SignupPage;
