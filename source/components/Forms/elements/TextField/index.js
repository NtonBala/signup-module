// Core
import React from 'react';
import { object, string } from 'prop-types';

// Instruments
import Styles from './styles.m.css';

const TextField = ({ input, meta: { valid, error, touched }, label }) => {
    return (
        <div className = { Styles.field }>
            {label && valid &&
                <label
                    htmlFor = { name }>
                    { label }
                </label>
            }

            {touched && error &&
                <span>{ error }</span>
            }

            <input { ...input } />
        </div>
    );
};

TextField.propTypes = {
    input: object.isRequired,
    meta:  object.isRequired,
    label: string,
};

export default TextField;
