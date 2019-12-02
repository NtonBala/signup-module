// Core
import React from 'react';
import { func, object } from 'prop-types';

// Instruments
import Styles from './styles.m.css';

const BirthDate = ({ input, meta, onChange, normalize }) => {
    const { valid, error, touched } = meta;
    const label = 'date of birth';
    const values = input.value ? input.value : ['', '', ''];

    const _handleChange = (event) => {
        const newValue = event.target.value;
        const elIndex = Number(event.target.dataset.index);

        const newValues = values.map((current, i) => {
            return i === elIndex ? newValue : current;
        });

        const normalizedValues = normalize(newValues);

        onChange('wizardSignup', 'date_of_birth', normalizedValues);
    };

    const inputsJSX = values.map((value, i) => {
        const maxLength = i === 0 ? '4' : '2';
        const placeholder = i === 0 ? 'YYYY' : i === 1
            ? 'MM' : 'DD';

        return (
            <input
                data-index = { i }
                key = { i }
                maxLength = { maxLength }
                placeholder = { placeholder }
                type = 'text'
                value = { value }
                onChange = { _handleChange }
            />
        );
    });

    return (
        <div className = { Styles.birthDate }>
            { (!touched || valid) &&
                <label
                    htmlFor = { name }>
                    { label }
                </label>
            }

            { touched && error && <strong>{ error }</strong> }

            <div className = { Styles.wrapper } >
                { inputsJSX.reverse() }
            </div>

            <input
                { ...input }
                className = { Styles.reduxInput }
                tabIndex = '-1'
                type = 'text'
            />
        </div>
    );
};

BirthDate.propTypes = {
    input:     object.isRequired,
    meta:      object.isRequired,
    normalize: func.isRequired,
    onChange:  func.isRequired,
};

export default BirthDate;
