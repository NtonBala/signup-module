// Core
import React from 'react';

// Components
import { Catcher, Spinner, SignupForm } from '../components';

const SignupPage = () => {
    const onSubmit = (values) => {
        console.log('-> user data:', values);
    };

    return (
        <Catcher>
            <Spinner />
            <SignupForm onSubmit = { onSubmit } />
        </Catcher>
    );
};

export default SignupPage;
