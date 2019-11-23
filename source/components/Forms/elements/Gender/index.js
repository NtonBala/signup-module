// Core
import React from 'react';
import { Field } from 'redux-form';

// Instruments
import Styles from './styles.m.css';

const Gender = () => {
    return (
        <div className = { Styles.gender }>
            <Field
                component = { ({ meta: { touched, error }}) => {
                    return touched && error ? <span>{ error }</span> : <label>gender</label>;
                } }
                name = 'gender'
            />

            <div>
                <label>
                    <Field
                        component = 'input'
                        name = 'gender'
                        type = 'radio'
                        value = 'male'
                    />
                    MALE
                </label>

                <label>
                    <Field
                        component = 'input'
                        name = 'gender'
                        type = 'radio'
                        value = 'female'
                    />
                    FEMALE
                </label>

                <label>
                    <Field
                        component = 'input'
                        name = 'gender'
                        type = 'radio'
                        value = 'unspecified'
                    />
                    UNSPECIFIED
                </label>
            </div>
        </div>
    );
};

export default Gender;
