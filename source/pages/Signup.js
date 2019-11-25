// Core
import React from 'react';

// Components
import { Catcher, Spinner, WizardSignupForm } from '../components';

const SignupPage = () => {
    const onSubmit = (values) => {
        console.log('-> user data:', JSON.stringify(values));
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
