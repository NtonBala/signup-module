// Core
import React from 'react';
import { string } from 'prop-types';
import { Field } from 'redux-form';

// Instruments
import Styles from './styles.m.css';

const TextField = ({ name, type = 'text', label }) => {
    return (
        <div className = { Styles.field }>
            {label &&
                <label
                    htmlFor = { name }>
                    { label }
                </label>
            }

            <Field
                component = 'input'
                name = { name }
                type = { type }
            />
        </div>
    );
};

TextField.propTypes = {
    name:  string.isRequired,
    label: string,
    type:  string,
};

export default TextField;
