// Core
import React from 'react';
import { object, string } from 'prop-types';

// Instruments
import Styles from './styles.m.css';

const TextField = ({ input, meta: { valid, error, touched }, label, type = 'text' }) => {
    return (
        <div className = { Styles.field }>
            { (!touched || valid) &&
                <label htmlFor = { name }>{ label }</label>
            }

            { touched && error &&
                <strong>{ error }</strong>
            }

            <input
                { ...input }
                type = { type }
            />
        </div>
    );
};

TextField.propTypes = {
    input: object.isRequired,
    label: string.isRequired,
    meta:  object.isRequired,
    type:  string,
};

export default TextField;
