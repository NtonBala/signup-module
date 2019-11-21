// Core
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Instruments
import { book } from './book';

// Pages
import { Signup } from '../pages';

export default class Public extends Component {
    render () {
        return (
            <Switch>

                <Route component = { Signup } path = { book.signup } />

                <Redirect to = { book.signup } />

            </Switch>
        );
    }
}
