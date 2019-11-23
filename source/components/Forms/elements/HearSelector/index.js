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
            <label>where did you hear about us?</label>

            <Field
                component = { ({ input, meta: { touched, error }}) => {
                    return (
                        <div>
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

                            { touched && error && <span>{error}</span> }
                        </div>
                    );
                } }
                name = 'how_hear_about_us'
            />
        </div>
    );
};

export default HearSelector;
