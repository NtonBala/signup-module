// Core
import React from 'react';
import { object, string } from 'prop-types';

// Instruments
import Styles from './styles.m.css';

const BirthDate = ({ input, meta: { valid, error, touched }, label }) => {
    return (
        <div className = { Styles.birthDate }>
            {label && valid &&
                <label
                    htmlFor = { name }>
                    { label }
                </label>
            }

            {touched && error && <span>{ error }</span> }

            <input
                { ...input }
                placeholder = 'DD MM YYYY'
            />
        </div>
    );
};

BirthDate.propTypes = {
    input: object.isRequired,
    meta:  object.isRequired,
    label: string,
};

export default BirthDate;
