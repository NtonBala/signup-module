// Core
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

// Instruments
import { book } from './book';

// Pages
import { Home } from '../pages';

export default class Public extends Component {
    render () {
        return (
            <Container>
                <Switch>

                    <Route exact component = { Home } path = { book.home } />

                    <Redirect to = { book.home } />

                </Switch>
            </Container>
        );
    }
}
