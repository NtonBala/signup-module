// Core
import React from 'react';
import { Field } from 'redux-form';

// Instruments
import Styles from './styles.m.css';

const sources = [
    'Internet',
    'Facebook',
    'Another customer',
    'Other'
];

const HearSelector = () => {
    return (
        <div className = { Styles.hearSelector }>
            <Field
                component = { ({ input, meta: { touched, error, valid }}) => {
                    return (
                        <>
                            { valid && <label>where did you hear about us?</label> }

                            { touched && error && <span>{error}</span> }

                            <select { ...input }>
                                <option value = '' />
                                { sources.map((value) => (
                                    <option
                                        key = { value }
                                        value = { value }>
                                        { value }
                                    </option>
                                )) }
                            </select>
                        </>
                    );
                } }
                name = 'how_hear_about_us'
            />
        </div>
    );
};

export default HearSelector;
