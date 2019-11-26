// Core
import React from 'react';
import { shape, func } from 'prop-types';
import { Field, change } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Instruments
import Styles from './styles.m.css';

const BirthDate = ({ actions }) => {
    return (
        <Field
            component = { ({ input, meta: { valid, error, touched }}) => {
                const label = 'date of birth';

                const values = input.value ? input.value : ['', '', ''];

                const inputsJSX = values.map((value, i) => {
                    const maxLength = i === 0 ? '4' : '2';
                    const placeholder = i === 0 ? 'YYYY' : i === 1
                        ? 'MM' : 'DD';

                    const _handleChange = (event) => {
                        const newValue = event.target.value;

                        const newValues = values.map((current, l) => {
                            return l === i ? newValue : current;
                        });

                        actions.changeBirthDate('wizardSignup', 'date_of_birth', newValues);
                    };

                    return (
                        <input
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
                        { valid &&
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
            } }
            name = 'date_of_birth'
        />
    );
};

BirthDate.propTypes = {
    actions: shape({
        changeBirthDate: func.isRequired,
    }).isRequired,
};

const mapDispatch = (dispatch) => {
    return {
        actions: bindActionCreators({ changeBirthDate: change }, dispatch),
    };
};

export default connect(
    null,
    mapDispatch
)(BirthDate);
