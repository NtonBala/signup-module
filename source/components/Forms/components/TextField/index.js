// Core
import React from 'react';
import { object, string } from 'prop-types';

// Instruments
import Styles from './styles.m.css';

const TextField = ({ input, meta, label }) => {
    return (
        <div className = { Styles.field }>
            {label && meta.valid &&
                <label
                    htmlFor = { name }>
                    { label }
                </label>
            }

            {meta.touched && meta.error &&
                <span>{ meta.error }</span>
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
