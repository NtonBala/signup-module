// Core
import React from 'react';
import { Field } from 'redux-form';
import Select from 'react-select';

// Elements
import { DropdownIndicator, ClearIndicator } from '../../elements';

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

const HearSelector = () => {
    return (
        <div className = { Styles.hearSelector }>
            <Field
                component = { ({ input, meta: { touched, error, valid }}) => {
                    const _onBlur = () => {
                        setTimeout(() => {
                            input.onBlur(input.value);
                        }, 1);
                    };

                    const _onChange = (value) => {
                        input.onChange(value);
                    };

                    return (
                        <>
                            { valid && <label>where did you hear about us?</label> }

                            { touched && error && <span>{error}</span> }

                            <div>
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
                        </>
                    );
                } }
                name = 'how_hear_about_us'
            />
        </div>
    );
};

export default HearSelector;
