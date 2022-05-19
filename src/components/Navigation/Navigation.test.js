import React from 'react';
import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Navigation/configuration';
import Navigation from './Navigation';

describe('test missions component', () => {
    it('Render missions row', () => {
        const app = renderer
        .create(
            <Provider store={store}>
                <Router>
                    <Navigation />
                </Router>
            </Provider>
        ).toJSON();
        expect(app).toMatchSnapshot()
    })
})