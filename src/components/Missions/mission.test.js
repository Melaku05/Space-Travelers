import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../Navigation/configuration';
import Missions from './Missions';

describe('test missions component', () => {
    it('Render missions row', () => {
        const app = renderer
        .create(
            <Provider store={store}>
                <Missions />
            </Provider>
        ).toJSON();
        expect(app).toMatchSnapshot()
    })
})