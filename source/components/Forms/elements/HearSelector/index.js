// Core
import React from 'react';
import { Field } from 'redux-form';
import Select from 'react-select';

// Instruments
import Styles from './styles.m.css';

const options = [
    {
        value: 'internet',
        label: 'Internet',
    },
    {
        value: 'facebook',
        label: 'Facebook',
    },
    {
        value: 'colleagues',
        label: 'Colleagues',
    },
    {
        value: 'other',
        label: 'Other',
    }
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

                            <Select
                                { ...input }
                                options = { options }
                            />
                        </>
                    );
                } }
                name = 'how_hear_about_us'
            />
        </div>
    );
};

export default HearSelector;
