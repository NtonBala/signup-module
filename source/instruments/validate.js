/* eslint camelcase: 0 */

// Instruments
import { isBirthDateEmpty, isBirthDateValid, isAdult } from './helpers';

// WizardSignup

export const validateWizardSignup = (values) => {
    const birthDate = values.date_of_birth;

    const errors = {};

    // FirstStep validation
    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i).test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Password is required';
    } else if (!(/^.{6,}$/).test(values.password)) {
        errors.password = 'Should be min 6 characters long';
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = 'Confirmation is required';
    } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = 'Passwords should match';
    }

    // SecondStep validation
    if (isBirthDateEmpty(birthDate)) {
        errors.date_of_birth = 'Date of birth is required';
    } else if (!isBirthDateValid(birthDate)) {
        errors.date_of_birth = 'Date of birth should be valid';
    } else if (!isAdult(birthDate)) {
        errors.date_of_birth = 'User should be 18 years old';
    }

    if (!values.gender) {
        errors.gender = 'One option must be selected';
    }

    return errors;
};
