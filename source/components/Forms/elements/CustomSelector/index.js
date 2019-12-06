// Core
import React from 'react';
import { object, array, string } from 'prop-types';
import Select from 'react-select';

// Elements
import { DropdownIndicator, ClearIndicator } from '../../elements';

// Instruments
import Styles from './styles.m.css';

const selectStyles = {
    control: (styles) => {
        return {
            ...styles,
            borderRadius: 3,
            borderColor:  '#C4C4C4',
            boxShadow:    'none',
            '&:hover':    {
                borderColor: '#C4C4C4',
            },
        };
    },

    singleValue: (styles) => {
        return {
            ...styles,
            color:  '#5C5B65',
            height: 16,
        };
    },

    menu: (styles) => {
        return {
            ...styles,
            borderRadius: 3,
        };
    },

    option: (styles, { isDisabled, isSelected, isFocused }) => {
        return {
            ...styles,
            backgroundColor: isDisabled
                ? null
                : isSelected
                    ? '#1770CF'
                    : isFocused
                        ? '#A3CBF5'
                        : null,
            color: isSelected ? '#FFFFFF' : '#5C5B65',
        };
    },
};

const CustomSelector = ({ input, meta: { touched, error, valid }, options, label }) => {
    const _onBlur = () => {
        input.onBlur();
    };

    const _onChange = (value) => {
        input.onChange(value);
    };

    return (
        <div className = { Styles.customSelector }>

            { valid && <label>{ label }</label> }

            { touched && error && <span>{error}</span> }

            <Select
                { ...input }
                isClearable
                components = { {
                    IndicatorSeparator: () => null,
                    Placeholder:        () => null,
                    DropdownIndicator,
                    ClearIndicator,
                } }
                options = { options }
                styles = { selectStyles }
                onBlur = { _onBlur }
                onChange = { _onChange }
            />

        </div>
    );
};

CustomSelector.propTypes = {
    input:   object.isRequired,
    meta:    object.isRequired,
    label:   string,
    options: array,
};

export default CustomSelector;
