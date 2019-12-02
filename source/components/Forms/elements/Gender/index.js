// Core
import React from 'react';
import { Field, formValueSelector } from 'redux-form';
import { string } from 'prop-types';
import { connect } from 'react-redux';

// Instruments
import Styles from './styles.m.css';

const Gender = ({ value }) => {
    return (
        <div className = { Styles.gender }>
            <Field
                component = { ({ meta: { touched, error, valid }}) => {
                    return (
                        <>
                            { (!touched || valid) && <label htmlFor = { name }>gender</label>}

                            { touched && error && <strong>{ error }</strong> }
                        </>
                    );
                } }
                name = 'gender'
            />

            <div>
                <label className = { value === 'male' ? Styles.selected : '' } >
                    <Field
                        component = 'input'
                        name = 'gender'
                        type = 'radio'
                        value = 'male'
                    />
                    <span>MALE</span>
                </label>

                <label className = { value === 'female' ? Styles.selected : '' } >
                    <Field
                        component = 'input'
                        name = 'gender'
                        type = 'radio'
                        value = 'female'
                    />
                    <span>FEMALE</span>
                </label>

                <label className = { value === 'unspecified' ? Styles.selected : '' } >
                    <Field
                        component = 'input'
                        name = 'gender'
                        type = 'radio'
                        value = 'unspecified'
                    />
                    <span>UNSPECIFIED</span>
                </label>
            </div>
        </div>
    );
};

Gender.propTypes = {
    value: string.isRequired,
};

const valueSelector = formValueSelector('wizardSignup');

const mapState = (state) => {
    return {
        value: valueSelector(state, 'gender') || '',
    };
};

export default connect(
    mapState
)(Gender);
