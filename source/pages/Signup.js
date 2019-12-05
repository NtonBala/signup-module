// Core
import React from 'react';

// Components
import { Catcher, Spinner, WizardSignupForm } from '../components';

// Instruments
import { formatUserInfo } from '../instruments/helpers';

const SignupPage = () => {
    const onSubmit = (values) => {
        const data = formatUserInfo(values);

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
